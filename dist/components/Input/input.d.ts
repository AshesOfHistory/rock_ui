import React, { ChangeEvent, InputHTMLAttributes, ReactElement } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
declare type InputSize = 'lg' | 'sm';
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
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
export declare const Input: React.FC<InputProps>;
export default Input;
