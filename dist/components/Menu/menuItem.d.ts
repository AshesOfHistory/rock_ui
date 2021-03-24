import React from 'react';
export interface MenuItemProps {
    index?: string;
    /** 设置 MenuItem 是否禁用 @default false */
    disabled?: boolean;
    className?: string;
    style?: React.CSSProperties;
}
declare const MenuItem: React.FC<MenuItemProps>;
export default MenuItem;
