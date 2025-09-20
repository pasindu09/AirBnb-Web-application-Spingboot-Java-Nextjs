interface RentalDetailProps {
  params: { rentalId: string, id: string };
}

export default function RentalDetail({ params }: RentalDetailProps) {
  const { rentalId } = params;
   const { id } = params;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Rental {rentalId}</h1>
      <p className="text-gray-600">This would fetch data for rental {rentalId}. and host {id}</p>
    </div>
  );
}
