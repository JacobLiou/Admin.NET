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
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { AddConfigInput } from '../models';
import { DeleteConfigInput } from '../models';
import { ModelObject } from '../models';
import { UpdateConfigInput } from '../models';
import { XnRestfulResultOfBoolean } from '../models';
import { XnRestfulResultOfObject } from '../models';
import { XnRestfulResultOfSysConfig } from '../models';
/**
 * ConfigApi - axios parameter creator
 * @export
 */
export const ConfigApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary 获取验证码开关标识
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiConfigCaptchaOpenFlagGet: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/config/captcha-open-flag`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary 更新配置缓存
         * @param {string} code 
         * @param {ModelObject} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiConfigConfigCacheCodePut: async (code: string, body?: ModelObject, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'code' is not null or undefined
            if (code === null || code === undefined) {
                throw new RequiredError('code','Required parameter code was null or undefined when calling apiConfigConfigCacheCodePut.');
            }
            const localVarPath = `/api/config/config-cache/{code}`
                .replace(`{${"code"}}`, encodeURIComponent(String(code)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required

            localVarHeaderParameter['Content-Type'] = 'application/xml';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary 增加系统参数配置
         * @param {AddConfigInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sysConfigAddPost: async (body?: AddConfigInput, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/sysConfig/add`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required

            localVarHeaderParameter['Content-Type'] = 'application/xml';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary 删除系统参数配置
         * @param {DeleteConfigInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sysConfigDeletePost: async (body?: DeleteConfigInput, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/sysConfig/delete`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required

            localVarHeaderParameter['Content-Type'] = 'application/xml';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary 获取系统参数配置
         * @param {number} id 主键Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sysConfigDetailGet: async (id: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling sysConfigDetailGet.');
            }
            const localVarPath = `/sysConfig/detail`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required

            if (id !== undefined) {
                localVarQueryParameter['Id'] = id;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary 更新系统参数配置
         * @param {UpdateConfigInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sysConfigEditPost: async (body?: UpdateConfigInput, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/sysConfig/edit`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required

            localVarHeaderParameter['Content-Type'] = 'application/xml';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary 获取系统参数配置列表
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sysConfigListGet: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/sysConfig/list`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary 分页获取系统参数配置
         * @param {string} [name] 名称
         * @param {string} [code] 编码
         * @param {string} [groupCode] 常量所属分类的编码，来自于“常量的分类”字典
         * @param {string} [searchValue] 搜索值
         * @param {number} [pageNo] 当前页码
         * @param {number} [pageSize] 页码容量
         * @param {string} [searchBeginTime] 搜索开始时间
         * @param {string} [searchEndTime] 搜索结束时间
         * @param {string} [sortField] 排序字段
         * @param {string} [sortOrder] 排序方法,默认升序,否则降序(配合antd前端,约定参数为 Ascend,Dscend)
         * @param {string} [descStr] 降序排序(不要问我为什么是descend不是desc，前端约定参数就是这样)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sysConfigPageGet: async (name?: string, code?: string, groupCode?: string, searchValue?: string, pageNo?: number, pageSize?: number, searchBeginTime?: string, searchEndTime?: string, sortField?: string, sortOrder?: string, descStr?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/sysConfig/page`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required

            if (name !== undefined) {
                localVarQueryParameter['Name'] = name;
            }

            if (code !== undefined) {
                localVarQueryParameter['Code'] = code;
            }

            if (groupCode !== undefined) {
                localVarQueryParameter['GroupCode'] = groupCode;
            }

            if (searchValue !== undefined) {
                localVarQueryParameter['SearchValue'] = searchValue;
            }

            if (pageNo !== undefined) {
                localVarQueryParameter['PageNo'] = pageNo;
            }

            if (pageSize !== undefined) {
                localVarQueryParameter['PageSize'] = pageSize;
            }

            if (searchBeginTime !== undefined) {
                localVarQueryParameter['SearchBeginTime'] = searchBeginTime;
            }

            if (searchEndTime !== undefined) {
                localVarQueryParameter['SearchEndTime'] = searchEndTime;
            }

            if (sortField !== undefined) {
                localVarQueryParameter['SortField'] = sortField;
            }

            if (sortOrder !== undefined) {
                localVarQueryParameter['SortOrder'] = sortOrder;
            }

            if (descStr !== undefined) {
                localVarQueryParameter['DescStr'] = descStr;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ConfigApi - functional programming interface
 * @export
 */
export const ConfigApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary 获取验证码开关标识
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiConfigCaptchaOpenFlagGet(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<XnRestfulResultOfBoolean>> {
            const localVarAxiosArgs = await ConfigApiAxiosParamCreator(configuration).apiConfigCaptchaOpenFlagGet(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 更新配置缓存
         * @param {string} code 
         * @param {ModelObject} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiConfigConfigCacheCodePut(code: string, body?: ModelObject, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await ConfigApiAxiosParamCreator(configuration).apiConfigConfigCacheCodePut(code, body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 增加系统参数配置
         * @param {AddConfigInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sysConfigAddPost(body?: AddConfigInput, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await ConfigApiAxiosParamCreator(configuration).sysConfigAddPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 删除系统参数配置
         * @param {DeleteConfigInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sysConfigDeletePost(body?: DeleteConfigInput, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await ConfigApiAxiosParamCreator(configuration).sysConfigDeletePost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 获取系统参数配置
         * @param {number} id 主键Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sysConfigDetailGet(id: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<XnRestfulResultOfSysConfig>> {
            const localVarAxiosArgs = await ConfigApiAxiosParamCreator(configuration).sysConfigDetailGet(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 更新系统参数配置
         * @param {UpdateConfigInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sysConfigEditPost(body?: UpdateConfigInput, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await ConfigApiAxiosParamCreator(configuration).sysConfigEditPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 获取系统参数配置列表
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sysConfigListGet(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<XnRestfulResultOfObject>> {
            const localVarAxiosArgs = await ConfigApiAxiosParamCreator(configuration).sysConfigListGet(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 分页获取系统参数配置
         * @param {string} [name] 名称
         * @param {string} [code] 编码
         * @param {string} [groupCode] 常量所属分类的编码，来自于“常量的分类”字典
         * @param {string} [searchValue] 搜索值
         * @param {number} [pageNo] 当前页码
         * @param {number} [pageSize] 页码容量
         * @param {string} [searchBeginTime] 搜索开始时间
         * @param {string} [searchEndTime] 搜索结束时间
         * @param {string} [sortField] 排序字段
         * @param {string} [sortOrder] 排序方法,默认升序,否则降序(配合antd前端,约定参数为 Ascend,Dscend)
         * @param {string} [descStr] 降序排序(不要问我为什么是descend不是desc，前端约定参数就是这样)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sysConfigPageGet(name?: string, code?: string, groupCode?: string, searchValue?: string, pageNo?: number, pageSize?: number, searchBeginTime?: string, searchEndTime?: string, sortField?: string, sortOrder?: string, descStr?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<XnRestfulResultOfObject>> {
            const localVarAxiosArgs = await ConfigApiAxiosParamCreator(configuration).sysConfigPageGet(name, code, groupCode, searchValue, pageNo, pageSize, searchBeginTime, searchEndTime, sortField, sortOrder, descStr, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * ConfigApi - factory interface
 * @export
 */
export const ConfigApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary 获取验证码开关标识
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiConfigCaptchaOpenFlagGet(options?: any): AxiosPromise<XnRestfulResultOfBoolean> {
            return ConfigApiFp(configuration).apiConfigCaptchaOpenFlagGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 更新配置缓存
         * @param {string} code 
         * @param {ModelObject} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiConfigConfigCacheCodePut(code: string, body?: ModelObject, options?: any): AxiosPromise<void> {
            return ConfigApiFp(configuration).apiConfigConfigCacheCodePut(code, body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 增加系统参数配置
         * @param {AddConfigInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sysConfigAddPost(body?: AddConfigInput, options?: any): AxiosPromise<void> {
            return ConfigApiFp(configuration).sysConfigAddPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 删除系统参数配置
         * @param {DeleteConfigInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sysConfigDeletePost(body?: DeleteConfigInput, options?: any): AxiosPromise<void> {
            return ConfigApiFp(configuration).sysConfigDeletePost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 获取系统参数配置
         * @param {number} id 主键Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sysConfigDetailGet(id: number, options?: any): AxiosPromise<XnRestfulResultOfSysConfig> {
            return ConfigApiFp(configuration).sysConfigDetailGet(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 更新系统参数配置
         * @param {UpdateConfigInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sysConfigEditPost(body?: UpdateConfigInput, options?: any): AxiosPromise<void> {
            return ConfigApiFp(configuration).sysConfigEditPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 获取系统参数配置列表
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sysConfigListGet(options?: any): AxiosPromise<XnRestfulResultOfObject> {
            return ConfigApiFp(configuration).sysConfigListGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 分页获取系统参数配置
         * @param {string} [name] 名称
         * @param {string} [code] 编码
         * @param {string} [groupCode] 常量所属分类的编码，来自于“常量的分类”字典
         * @param {string} [searchValue] 搜索值
         * @param {number} [pageNo] 当前页码
         * @param {number} [pageSize] 页码容量
         * @param {string} [searchBeginTime] 搜索开始时间
         * @param {string} [searchEndTime] 搜索结束时间
         * @param {string} [sortField] 排序字段
         * @param {string} [sortOrder] 排序方法,默认升序,否则降序(配合antd前端,约定参数为 Ascend,Dscend)
         * @param {string} [descStr] 降序排序(不要问我为什么是descend不是desc，前端约定参数就是这样)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sysConfigPageGet(name?: string, code?: string, groupCode?: string, searchValue?: string, pageNo?: number, pageSize?: number, searchBeginTime?: string, searchEndTime?: string, sortField?: string, sortOrder?: string, descStr?: string, options?: any): AxiosPromise<XnRestfulResultOfObject> {
            return ConfigApiFp(configuration).sysConfigPageGet(name, code, groupCode, searchValue, pageNo, pageSize, searchBeginTime, searchEndTime, sortField, sortOrder, descStr, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ConfigApi - object-oriented interface
 * @export
 * @class ConfigApi
 * @extends {BaseAPI}
 */
export class ConfigApi extends BaseAPI {
    /**
     * 
     * @summary 获取验证码开关标识
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConfigApi
     */
    public apiConfigCaptchaOpenFlagGet(options?: any) {
        return ConfigApiFp(this.configuration).apiConfigCaptchaOpenFlagGet(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 更新配置缓存
     * @param {string} code 
     * @param {ModelObject} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConfigApi
     */
    public apiConfigConfigCacheCodePut(code: string, body?: ModelObject, options?: any) {
        return ConfigApiFp(this.configuration).apiConfigConfigCacheCodePut(code, body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 增加系统参数配置
     * @param {AddConfigInput} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConfigApi
     */
    public sysConfigAddPost(body?: AddConfigInput, options?: any) {
        return ConfigApiFp(this.configuration).sysConfigAddPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 删除系统参数配置
     * @param {DeleteConfigInput} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConfigApi
     */
    public sysConfigDeletePost(body?: DeleteConfigInput, options?: any) {
        return ConfigApiFp(this.configuration).sysConfigDeletePost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 获取系统参数配置
     * @param {number} id 主键Id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConfigApi
     */
    public sysConfigDetailGet(id: number, options?: any) {
        return ConfigApiFp(this.configuration).sysConfigDetailGet(id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 更新系统参数配置
     * @param {UpdateConfigInput} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConfigApi
     */
    public sysConfigEditPost(body?: UpdateConfigInput, options?: any) {
        return ConfigApiFp(this.configuration).sysConfigEditPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 获取系统参数配置列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConfigApi
     */
    public sysConfigListGet(options?: any) {
        return ConfigApiFp(this.configuration).sysConfigListGet(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 分页获取系统参数配置
     * @param {string} [name] 名称
     * @param {string} [code] 编码
     * @param {string} [groupCode] 常量所属分类的编码，来自于“常量的分类”字典
     * @param {string} [searchValue] 搜索值
     * @param {number} [pageNo] 当前页码
     * @param {number} [pageSize] 页码容量
     * @param {string} [searchBeginTime] 搜索开始时间
     * @param {string} [searchEndTime] 搜索结束时间
     * @param {string} [sortField] 排序字段
     * @param {string} [sortOrder] 排序方法,默认升序,否则降序(配合antd前端,约定参数为 Ascend,Dscend)
     * @param {string} [descStr] 降序排序(不要问我为什么是descend不是desc，前端约定参数就是这样)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConfigApi
     */
    public sysConfigPageGet(name?: string, code?: string, groupCode?: string, searchValue?: string, pageNo?: number, pageSize?: number, searchBeginTime?: string, searchEndTime?: string, sortField?: string, sortOrder?: string, descStr?: string, options?: any) {
        return ConfigApiFp(this.configuration).sysConfigPageGet(name, code, groupCode, searchValue, pageNo, pageSize, searchBeginTime, searchEndTime, sortField, sortOrder, descStr, options).then((request) => request(this.axios, this.basePath));
    }
}