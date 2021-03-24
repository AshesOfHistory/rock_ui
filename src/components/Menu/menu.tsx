import React, { createContext, useState } from 'react';
import classnames from 'classnames';
import { MenuItemProps } from './menuItem';

type SelectCallback = (selectedIndex: string) => void

type MenuMode = 'horizontal' | 'vertical'
export interface MenuProps {
  style?: React.CSSProperties,
  /** 设置 Menu 的方向 @default horizontal @deprecated horizontal \| vertical */
  mode?: MenuMode,
  className?: string,
  /** 设置 Menu 的索引 @default 0 */
  defaultIndex?: string,
  /** 选中回调函数，返回选中的索引 @default (selectedIndex: string) => void */
  onSelect?: SelectCallback,
  /** 设置 默认展开的子菜单，接收字符串数组 */
  defaultOpenSubMenus?: string[]
}

interface IMenuContext {
  index: string,
  onSelect?: SelectCallback,
  mode?: MenuMode,
  defaultOpenSubMenus?: string[]
}

export const MenuContext = createContext<IMenuContext>({ index: '0' })
const Menu: React.FC<MenuProps> = (props) => {
  const { style, mode, className, defaultIndex, children, onSelect, defaultOpenSubMenus } = props
  const [currentActive, setActive] = useState(defaultIndex)
  let classes = classnames('rock-menu', className, {
    'menu-vertical': mode === 'vertical',
    'menu-horizontal': mode !== 'vertical'
  })
  const handleClick = (index: string) => {
    setActive(index)
    if (onSelect) {
      onSelect(index)
    }
  }
  const passedContext: IMenuContext = {
    index: currentActive ? currentActive : '0',
    onSelect: handleClick,
    mode,
    defaultOpenSubMenus
  }

  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<MenuItemProps>
      const { displayName } = childElement.type
      if (displayName === 'MenuItem' || displayName === 'SubMenu') {
        return React.cloneElement(childElement, {
          index: String(index)
        })
      } else {
        console.error('Warning: Menu has a child which is not a MenuItem component')
      }
    })
  }
  return (
    <ul style={style} className={classes} data-testid="test-menu">
      <MenuContext.Provider value={passedContext}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  )
}

Menu.defaultProps = {
  mode: 'horizontal',
  defaultIndex: '0',
  defaultOpenSubMenus: []
}

export default Menu