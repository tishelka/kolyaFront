import style from "./Post.module.css";

type PostProps = {
  title: string;
  text: string;
  imageURL: string;
};

export const Post = ({ title, text, imageURL }: PostProps) => {
  return (
    <div className={style.container}>
      <img src={imageURL} className={style.postCover} />
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  );
};
