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
 * 
 * @export
 * @interface UpdateOrgInput
 */
export interface UpdateOrgInput {
    /**
     * 机构Id
     * @type {string}
     * @memberof UpdateOrgInput
     */
    id: any;
    /**
     * 名称
     * @type {string}
     * @memberof UpdateOrgInput
     */
    name: any;
    /**
     * 编码
     * @type {string}
     * @memberof UpdateOrgInput
     */
    code: any;
    /**
     * 父Id
     * @type {string}
     * @memberof UpdateOrgInput
     */
    pid?: any | null;
    /**
     * 父Ids
     * @type {string}
     * @memberof UpdateOrgInput
     */
    pids?: any | null;
    /**
     * 电话
     * @type {string}
     * @memberof UpdateOrgInput
     */
    tel?: any | null;
    /**
     * 排序
     * @type {number}
     * @memberof UpdateOrgInput
     */
    sort?: any;
    /**
     * 备注
     * @type {string}
     * @memberof UpdateOrgInput
     */
    remark?: any | null;
    /**
     * 状态（字典 0正常 1停用 2删除）
     * @type {number}
     * @memberof UpdateOrgInput
     */
    status?: any;
}
