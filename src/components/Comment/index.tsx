import { ThumbsUp, Trash } from 'phosphor-react';
import { MouseEventHandler, useState } from 'react';
import { Avatar } from '../Avatar';

import styles from './styles.module.css';

type CommentProps = {
  content: string;
  onDeleteComment: (comment: string) => void;
};

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount(state => state + 1);
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/nenoyago.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Yago Neno</strong>
              <time title="11 de Maio as 08:13h" dateTime="2022-05-11 08:13:38">
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário" onClick={handleDeleteComment}>
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp size={20} />
            Aplaudir
            <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
