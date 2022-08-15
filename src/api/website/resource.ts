import { defHttp } from '/@/utils/http/axios';

enum Api {
  getResourceList = '/api/resource',
  addResource = '/api/resource',
}

/**
 * @description: 获取资源
 */

export const getResourceList = () => {
  return defHttp.get({ url: Api.getResourceList });
};

/**
 * @description: 获取资源
 */

export const addResource = (data) => {
  return defHttp.post({ url: Api.addResource, data });
};
