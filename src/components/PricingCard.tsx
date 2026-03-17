interface PricingCardProps {
  title: string;
  price: number;
  description?: string;
}

export default function PricingCard({ title, price, description }: PricingCardProps) {
  return (
    <div className="border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-3xl font-bold mb-4">
        ${price}
        <span className="text-sm text-gray-600 font-normal"> / month</span>
      </p>
      {description && <p className="text-gray-600 text-sm">{description}</p>}
    </div>
  );
}
