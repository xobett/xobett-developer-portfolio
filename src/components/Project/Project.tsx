interface Props {
  imgUrl: string;
  imgAlt: string;
  title: string;
  description: string;
  tools: [];
}

export const Project = ({
  imgUrl,
  imgAlt,
  title,
  description,
  tools,
}: Props) => {
  return (
    <li className="project">
      <div className="img-container">
        <img src={imgUrl} alt={imgAlt} />
      </div>
      <div className="description">
        <h2>{title}</h2>
        <p>{description}</p>
        <p>{tools}</p>
      </div>
    </li>
  );
};
