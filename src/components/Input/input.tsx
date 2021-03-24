import React, { ChangeEvent, InputHTMLAttributes, ReactElement } from 'react'
import {IconProp} from '@fortawesome/fontawesome-svg-core'
import classNames from 'classnames'
import Icon from '../Icon/Icon'

type InputSize = 'lg' | 'sm'

export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size'> {
  /** 设置 Input 的禁用 @default false */
  disabled?: boolean;
  /** 设置 Input 的尺寸 */
  size?: InputSize;
  /** 设置 Input 的图标 */
  icon?: IconProp;
  /** 设置 Input 的前置字符，支持自定义react组件 */
  prepend?: string | ReactElement;
  /** 设置 Input 的后置字符，支持自定义react组件 */
  append?: string | ReactElement;
  /** 设置 Input 值改变后回调函数 @default () => void */
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Input: React.FC<InputProps> = (props) => {
  const {
    disabled,
    size,
    icon,
    prepend,
    append,
    style,
    ...restProps
  } = props
  const cnames = classNames('rock-input-wrapper', {
    [`input-size-${size}`]: size,
    'is-disabled': disabled,
    'input-group': prepend || append,
    'input-group-append': !!append,
    'input-group-prepend': !!prepend
  })
  const fixControlledValue = (value: any) => {
    if (typeof value === 'undefined' || value === null) {
      return ''
    }
    return value
  }
  if('value' in props) {
    delete restProps.defaultValue
    restProps.value = fixControlledValue(props.value)
  }
  return (
    <div className={cnames} style={style}>
      {prepend && <div className="rock-input-group-prepend">{prepend}</div>}
      {icon && <div className="icon-wrapper"><Icon icon={icon} title={`title-${icon}`}/></div>}
      <input 
        className="rock-input-inner"
        disabled={disabled}
        {...restProps}
      />
      {append && <div className="rock-input-group-append">{append}</div>}
    </div>
  )
}

export default Input