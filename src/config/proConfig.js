/*
 * @Author: Jian
 * @Date: 2021-12-10 23:10:56
 * @LastEditTime: 2021-12-10 23:16:45
 * @LastEditors: Jian
 * @Description: 
 * @FilePath: /react-record/src/config/proConfig.js
 */
import Components from '../pages/Components'
import ExcelDown from '../pages/Excel';
import PDFDown from '../pages/PDFDown';

export const routeList = [
    { name: 'Component组件', url: '/components', route: Components },
    { name: 'Excel表格', url: '/excel', route: ExcelDown },
    { name: 'PDF文件', url: '/pdf', route: PDFDown },
]