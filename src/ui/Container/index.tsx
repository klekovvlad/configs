import { FC, HTMLAttributes } from 'react';
import { observer } from 'mobx-react-lite';
import classNames from 'classnames';
import styles from './styles.module.scss';

export const Container: FC<HTMLAttributes<HTMLDivElement>> = observer((props) => {
  const { className, children, ...anyProps } = props;

  return (
    <div className={classNames([className, styles.container])} {...anyProps}>
      {children}
    </div>
  );
});
