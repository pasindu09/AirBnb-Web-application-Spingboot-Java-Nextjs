interface RentalDetailProps {
  params: { id: string };
}

export default function RentalDetail({ params }: RentalDetailProps) {
  const { id } = params;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Rental {id}</h1>
      <p className="text-gray-600">This would fetch data for rental {id}.</p>
    </div>
  );
}
