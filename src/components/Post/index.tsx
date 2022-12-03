import { FormEvent, ChangeEvent, useState } from 'react';
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Avatar } from '../Avatar';
import { Comment } from '../Comment';

import styles from './styles.module.css';

interface Author {
  avatarUrl: string;
  name: string;
  role: string;
}

interface Content {
  type: 'paragraph' | 'link';
  content: string;
}

type PostProps = {
  author: Author;
  content: Content[];
  publishedAt: Date;
};

export function Post({ author, content, publishedAt }: PostProps) {
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState<string>('');

  const isNewCommentEmpty = newComment.trim() === '';

  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  );
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('');
    setNewComment(event.target.value);
  }

  function handleCreateNewComment(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!isNewCommentEmpty) {
      setComments(comments => [...comments, newComment]);
      setNewComment('');
      (document.activeElement as HTMLElement).blur();
    }
  }

  function handleNewCommentInvalid(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório');
  }

  function deleteComment(comment: string) {
    setComments(comments => comments.filter(item => item !== comment));
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(line => {
          if (line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === 'link') {
            return (
              <p key={line.content}>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form className={styles.commentForm} onSubmit={handleCreateNewComment}>
        <strong>Deixe seu feedback</strong>
        <textarea
          name="comment"
          placeholder="Deixe um comentário"
          value={newComment}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => (
          <Comment
            key={comment}
            content={comment}
            onDeleteComment={deleteComment}
          />
        ))}
      </div>
    </article>
  );
}
