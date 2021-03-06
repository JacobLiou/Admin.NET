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
 * 菜单表
 * @export
 * @interface SysMenu
 */
export interface SysMenu {
    /**
     * 主键Id
     * @type {number}
     * @memberof SysMenu
     */
    id?: any;
    /**
     * 创建时间
     * @type {Date}
     * @memberof SysMenu
     */
    createdTime?: any | null;
    /**
     * 更新时间
     * @type {Date}
     * @memberof SysMenu
     */
    updatedTime?: any | null;
    /**
     * 创建者Id
     * @type {number}
     * @memberof SysMenu
     */
    createdUserId?: any | null;
    /**
     * 创建者名称
     * @type {string}
     * @memberof SysMenu
     */
    createdUserName?: any | null;
    /**
     * 修改者Id
     * @type {number}
     * @memberof SysMenu
     */
    updatedUserId?: any | null;
    /**
     * 修改者名称
     * @type {string}
     * @memberof SysMenu
     */
    updatedUserName?: any | null;
    /**
     * 父Id
     * @type {number}
     * @memberof SysMenu
     */
    pid?: any;
    /**
     * 父Ids
     * @type {string}
     * @memberof SysMenu
     */
    pids?: any | null;
    /**
     * 名称
     * @type {string}
     * @memberof SysMenu
     */
    name: any;
    /**
     * 编码
     * @type {string}
     * @memberof SysMenu
     */
    code: any;
    /**
     * 
     * @type {MenuType}
     * @memberof SysMenu
     */
    type?: any;
    /**
     * 图标
     * @type {string}
     * @memberof SysMenu
     */
    icon?: any | null;
    /**
     * 路由地址
     * @type {string}
     * @memberof SysMenu
     */
    router?: any | null;
    /**
     * 组件地址
     * @type {string}
     * @memberof SysMenu
     */
    component?: any | null;
    /**
     * 权限标识
     * @type {string}
     * @memberof SysMenu
     */
    permission?: any | null;
    /**
     * 应用分类（应用编码）
     * @type {string}
     * @memberof SysMenu
     */
    application?: any | null;
    /**
     * 
     * @type {MenuOpenType}
     * @memberof SysMenu
     */
    openType?: any;
    /**
     * 是否可见（Y-是，N-否）
     * @type {string}
     * @memberof SysMenu
     */
    visible?: any | null;
    /**
     * 内链地址
     * @type {string}
     * @memberof SysMenu
     */
    link?: any | null;
    /**
     * 重定向地址
     * @type {string}
     * @memberof SysMenu
     */
    redirect?: any | null;
    /**
     * 
     * @type {MenuWeight}
     * @memberof SysMenu
     */
    weight?: any;
    /**
     * 排序
     * @type {number}
     * @memberof SysMenu
     */
    sort?: any;
    /**
     * 备注
     * @type {string}
     * @memberof SysMenu
     */
    remark?: any | null;
    /**
     * 
     * @type {CommonStatus}
     * @memberof SysMenu
     */
    status?: any;
    /**
     * 多对多（角色）
     * @type {Array&lt;SysRole&gt;}
     * @memberof SysMenu
     */
    sysRoles?: any | null;
    /**
     * 多对多中间表（用户角色）
     * @type {Array&lt;SysRoleMenu&gt;}
     * @memberof SysMenu
     */
    sysRoleMenus?: any | null;
}
