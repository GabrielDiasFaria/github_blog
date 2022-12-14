import { formatDistanceToNow } from "date-fns";
import { enUS } from "date-fns/locale";
import React from "react";
import { IPost } from "..";
import { formatText } from "../../../utils/formatText";
import { Label, PostCardContainer } from "./styles";

interface IPostCard {
  post: IPost;
}

export function PostCard({ post }: IPostCard) {
  const { created_at, body, title, number, labels } = post;
  const formattedDate = formatDistanceToNow(new Date(created_at), {
    locale: enUS,
    addSuffix: true,
  });
  return (
    <PostCardContainer to={`/${number}`}>
      <header>
        <h1>{title}</h1>
        <span>{formattedDate}</span>
        <div className="label">
          {labels.map((label) => {
            return <Label color={`#${label.color}`}>{label.name}</Label>;
          })}
        </div>
      </header>

      <main>
        <p>{formatText(body, 80)}</p>
      </main>
    </PostCardContainer>
  );
}
