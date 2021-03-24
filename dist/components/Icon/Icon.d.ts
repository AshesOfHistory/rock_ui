import React from 'react';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
export declare type ThemeProps = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger';
export interface IconProps extends FontAwesomeIconProps {
    /** 设置 Icon 的图标的主题 */
    theme?: ThemeProps;
}
declare const Icon: React.FC<IconProps>;
export default Icon;
