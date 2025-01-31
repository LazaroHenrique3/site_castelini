type LocationCardProps = {
  name: string;
  address: string;
  city: string;
  uf: string;
  isOpen: boolean;
  isActive: boolean;
  statusColor?: string; // Cor do status (ex.: "text-green-700", "text-red-700")
};

const LocationCard: React.FC<LocationCardProps> = ({
  name,
  uf,
  address,
  city,
  isOpen,
  isActive,
  statusColor = "text-green-700", // Valor padrão para a cor do status
}) => {
  return (
    <div
      className={`flex items-center text-sm space-x-4 p-4 bg-slate-50 rounded-md border transition-all duration-300 transform hover:shadow-lg ${isActive ? "border-primary-red" : "border-slate-300"
        }`}
    >
      <div className="w-full">
        <div className="font-semibold">{`${name} - ${uf}`}</div>
        <span className={`hidden md:inline-block lg:hidden font-semibold ${statusColor}`}>{isOpen ? "Aberto" : "Fechado"}</span>
        <div className="font-semibold">{address}</div>
        <div className="font-light">{city}</div>
      </div>

      <div className="flex md:hidden lg:flex h-6 items-center justify-center">
        <div className="w-[1px] h-[90%] bg-primary-gray"></div>
      </div>

      <div className={`md:hidden lg:block font-semibold whitespace-nowrap ${statusColor}`}>
        {isOpen ? "Aberto" : "Fechado"}
      </div>
    </div>
  );
};
export default LocationCard;
