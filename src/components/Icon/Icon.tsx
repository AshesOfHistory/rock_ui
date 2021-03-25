import React from 'react'
import classNames from 'classnames'
import {FontAwesomeIcon, FontAwesomeIconProps} from '@fortawesome/react-fontawesome'

export type ThemeProps = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger'

export interface IconProps extends FontAwesomeIconProps {
  /** 设置 Icon 的图标的主题 */
  theme?: ThemeProps
  /** 设置 Icon 的图标的类型，具体类型请参考 [fontawesome官网](https://fontawesome.dashgame.com/) */
}

const Icon: React.FC<IconProps> = (props) => {
  const {className, theme, ...resetProps} = props
  const classes = classNames('rock-icon', className, {
    [`icon-${theme}`]: theme
  })

  return (
    <FontAwesomeIcon className={classes} {...resetProps}/>
  )
}

export default Icon