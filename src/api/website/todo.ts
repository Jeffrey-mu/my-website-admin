import { defHttp } from '/@/utils/http/axios';

enum Api {
  getTodoList = '/api/todo',
}

/**
 * @description: 获取待办事项推荐
 */

export const getTodoList = () => {
  return defHttp.get({ url: Api.getTodoList });
};
