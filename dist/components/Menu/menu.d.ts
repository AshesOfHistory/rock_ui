import React from 'react';
declare type SelectCallback = (selectedIndex: string) => void;
declare type MenuMode = 'horizontal' | 'vertical';
export interface MenuProps {
    style?: React.CSSProperties;
    /** 设置 Menu 的方向 @default horizontal @deprecated horizontal \| vertical */
    mode?: MenuMode;
    className?: string;
    /** 设置 Menu 的索引 @default 0 */
    defaultIndex?: string;
    /** 选中回调函数，返回选中的索引 @default (selectedIndex: string) => void */
    onSelect?: SelectCallback;
    /** 设置 默认展开的子菜单，接收字符串数组 */
    defaultOpenSubMenus?: string[];
}
interface IMenuContext {
    index: string;
    onSelect?: SelectCallback;
    mode?: MenuMode;
    defaultOpenSubMenus?: string[];
}
export declare const MenuContext: React.Context<IMenuContext>;
declare const Menu: React.FC<MenuProps>;
export default Menu;
