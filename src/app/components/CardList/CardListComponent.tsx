import Container from "../shared/container";
import Image from "next/image";

const CardListComponent = ({ name, id }: { name: string; id: number }) => {
  return (
    <Container>
      <div className="flex gap-2 items-center">
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            id + 1
          }.png`}
          alt={name}
          width={125}
          height={125}
        />
        {name}
      </div>
    </Container>
  );
};

export default CardListComponent;
