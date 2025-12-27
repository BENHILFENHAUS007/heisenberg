import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  pageName?: string;
}

interface State {
  hasError: boolean;
  error?: Error;
}

/**
 * Error Boundary Component
 * Catches React component errors and prevents page crashes
 * Displays a fallback UI and logs error to console
 * 
 * Usage:
 * <ErrorBoundary pageName="Contact">
 *   <Contact />
 * </ErrorBoundary>
 */
export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error details to console for debugging
    console.error(
      `Error in ${this.props.pageName || 'component'}:`,
      error,
      'Error info:',
      errorInfo
    );
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-black via-[#0d0050] to-black flex items-center justify-center">
          <div className="text-center max-w-md px-6">
            <div className="mb-6">
              <div className="text-6xl mb-4">⚠️</div>
              <h1 className="text-3xl font-bold text-white mb-2">
                Oops! Something went wrong
              </h1>
              <p className="text-gray-400 mb-4">
                We're having trouble loading this page. Don't worry, we're looking into it.
              </p>
            </div>

            {/* Development: Show error details */}
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <div className="mb-6 text-left bg-white/10 p-4 rounded-lg border border-white/20">
                <p className="text-sm font-mono text-red-400 break-words">
                  {this.state.error.message}
                </p>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => window.location.reload()}
                className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition"
              >
                Refresh Page
              </button>
              <button
                onClick={() => window.history.back()}
                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition border border-white/20"
              >
                Go Back
              </button>
            </div>

            <p className="text-gray-500 text-sm mt-6">
              If the problem persists, please try clearing your cache or contacting support.
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
