import React from 'react';
export interface SubMenuProps {
    /** 设置 SubMenu 索引，命名规则为'[一级索引]-[二级索引]'，eg: 2-1 */
    index?: string;
    /** 设置 SubMenu 的标题 */
    title: string;
    className?: string;
}
declare const SubMenu: React.FC<SubMenuProps>;
export default SubMenu;
