import { FC, ReactNode } from 'react';
import { IIconProps } from './types.ts';
import { omit } from 'lodash';
import classNames from 'classnames';
import styles from './styles.module.scss';

export const IconComponent: FC<IIconProps & { component: ReactNode }> = (props) => {
  const { className, component } = props;

  return (
    <span
      {...omit(props, ['component', 'className'])}
      className={classNames([styles.icon, className])}
    >
      {component}
    </span>
  );
};
