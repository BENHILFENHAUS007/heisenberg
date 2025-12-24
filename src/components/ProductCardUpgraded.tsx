interface Props {
  name: string;
  description: string;
  image: string;
  category: string;
}

export default function ProductCardUpgraded({
  name,
  description,
  image,
  category,
}: Props) {
  return (
    <div className="glassmorphism rounded-xl overflow-hidden hover:-translate-y-2 transition">
      <div className="h-56 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover hover:scale-110 transition"
        />
      </div>

      <div className="p-5">
        <p className="text-orange-400 text-sm">{category}</p>
        <h3 className="text-xl font-bold text-white mt-1">{name}</h3>
        <p className="text-gray-400 text-sm mt-2">{description}</p>
      </div>
    </div>
  );
}
