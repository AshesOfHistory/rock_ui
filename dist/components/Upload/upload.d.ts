import { FC } from 'react';
export declare type UploadFileStatus = 'ready' | 'uploading' | 'success' | 'error';
export interface UploadFile {
    uid: string;
    size: number;
    name: string;
    /** 文件上传状态 */
    status?: UploadFileStatus;
    /** 文件上传进度百分比 */
    percent?: number;
    raw?: File;
    response?: any;
    error?: any;
}
export interface UploadProps {
    /** 文件上传接收的接口 */
    action: string;
    /** 默认展示的文件列表 */
    defaultFileList?: UploadFile[];
    beforeUpload?: (file: File) => boolean | Promise<File>;
    /** 进度条回调函数 */
    onProgress?: (percentage: number, file: File) => void;
    /** 文件上传成功回调函数 */
    onSuccess?: (data: any, file: File) => void;
    /** 文件上传失败回调函数 */
    onError?: (err: any, file: File) => void;
    /** 文件列表状态改变回调函数 */
    onChange?: (file: File) => void;
    /** 文件移除回调函数 */
    onRemove?: (file: UploadFile) => void;
    /** 设置上传的请求头部 */
    headers?: {
        [key: string]: any;
    };
    /** 发到后台的文件参数名 */
    name?: string;
    /** 上传所需额外参数或返回上传额外参数的方法 @default object\|(file) => object \| Promise&lt;object> */
    data?: {
        [key: string]: any;
    };
    withCredentials?: boolean;
    /** 接受上传的文件类型, 详见 [input accept Attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept) */
    accept?: string;
    /** 是否支持多个文件上传 */
    multiple?: boolean;
    /** 是否支持拖拽上传 */
    drag?: boolean;
}
export declare const Upload: FC<UploadProps>;
export default Upload;
