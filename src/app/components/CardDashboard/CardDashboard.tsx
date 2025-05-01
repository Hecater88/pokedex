const CardDashboard = ({
  name,
  children,
}: {
  name: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="nes-container with-title bg-white">
      <p className="title">{name}</p>
      <div>{children}</div>
    </div>
  );
};

export default CardDashboard;
