import { defHttp } from '/@/utils/http/axios';

enum Api {
  getToolsList = '/api/tools',
}

/**
 * @description: 获取工具推荐
 */

export const getToolsList = () => {
  return defHttp.get({ url: Api.getToolsList });
};
