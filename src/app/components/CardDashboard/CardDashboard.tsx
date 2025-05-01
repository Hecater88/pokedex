const CardDashboard = ({
  name,
  value,
}: {
  name: string;
  value: number | string;
}) => {
  return (
    <div className="nes-container with-title">
      <p className="title">{name}</p>
      <p className="text-end">{value}</p>
    </div>
  );
};

export default CardDashboard;
