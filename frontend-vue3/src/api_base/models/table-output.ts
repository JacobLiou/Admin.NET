/* tslint:disable */
/* eslint-disable */
/**
 * Admin.NET通用权限管理平台
 * 前后端分离架构，开箱即用，紧随前沿技术。<br/><a href='https://gitee.com/zuohuaijun/Admin.NET/'>https://gitee.com/zuohuaijun/Admin.NET</a>
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/**
 * 数据库表列表参数
 * @export
 * @interface TableOutput
 */
export interface TableOutput {
    /**
     * 表名（字母形式的）
     * @type {string}
     * @memberof TableOutput
     */
    tableName?: any | null;
    /**
     * 创建时间
     * @type {string}
     * @memberof TableOutput
     */
    createTime?: any | null;
    /**
     * 更新时间
     * @type {string}
     * @memberof TableOutput
     */
    updateTime?: any | null;
    /**
     * 表名称描述（注释）（功能名）
     * @type {string}
     * @memberof TableOutput
     */
    tableComment?: any | null;
}
