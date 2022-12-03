import { ImgHTMLAttributes } from 'react';
import styles from './styles.module.css';

type AvatarProps = {
  hasBorder?: boolean;
} & ImgHTMLAttributes<HTMLImageElement>;

export function Avatar({ hasBorder = true, src, ...props }: AvatarProps) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
      {...props}
    />
  );
}
