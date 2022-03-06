import Image from "next/image";

const Card = ({ props }) => {
  return (
    <div>
      <Image
        src={props.cover_image}
        alt="coverImage"
        layout="fill"
        objectFit="contain"
      />
      <div>
        <div>{props.title}</div>
        <div>{props.destription}</div>
      </div>
    </div>
  );
};

export default Card;
