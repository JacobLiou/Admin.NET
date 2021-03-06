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
 * @interface UpdateJobInput
 */
export interface UpdateJobInput {
    /**
     * 主键Id
     * @type {number}
     * @memberof UpdateJobInput
     */
    id: any;
    /**
     * 任务名称
     * @type {string}
     * @memberof UpdateJobInput
     */
    jobName: any;
    /**
     * 只执行一次
     * @type {boolean}
     * @memberof UpdateJobInput
     */
    doOnce?: any;
    /**
     * 立即执行（默认等待启动）
     * @type {boolean}
     * @memberof UpdateJobInput
     */
    startNow?: any;
    /**
     * 
     * @type {SpareTimeExecuteTypes}
     * @memberof UpdateJobInput
     */
    executeType?: any;
    /**
     * 执行间隔时间（单位秒）
     * @type {number}
     * @memberof UpdateJobInput
     */
    interval?: any | null;
    /**
     * Cron表达式
     * @type {string}
     * @memberof UpdateJobInput
     */
    cron?: any | null;
    /**
     * 
     * @type {SpareTimeTypes}
     * @memberof UpdateJobInput
     */
    timerType?: any;
    /**
     * 请求url
     * @type {string}
     * @memberof UpdateJobInput
     */
    requestUrl?: any | null;
    /**
     * 请求参数（Post，Put请求用）
     * @type {string}
     * @memberof UpdateJobInput
     */
    requestParameters?: any | null;
    /**
     * Headers(可以包含如：Authorization授权认证)  格式：{\"Authorization\":\"userpassword..\"}
     * @type {string}
     * @memberof UpdateJobInput
     */
    headers?: any | null;
    /**
     * 
     * @type {RequestTypeEnum}
     * @memberof UpdateJobInput
     */
    requestType?: any;
    /**
     * 备注
     * @type {string}
     * @memberof UpdateJobInput
     */
    remark?: any | null;
}
