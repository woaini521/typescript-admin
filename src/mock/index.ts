import Mock from 'mockjs';
import UserMock from './module/user';
import TableMock from './module/table';
import AppMock from './module/app';
import PermissionMock from './module/permission';

Mock.setup({
  timeout: '500-1000', // 表示响应时间介于 500 和 1000 毫秒之间，默认值是'10-100'。
});

Mock.mock('/login', UserMock.login);
Mock.mock('/table/simple', TableMock.simple);

Mock.mock(RegExp('/app/message' + '.*'), 'get', AppMock.message);
Mock.mock('/app/contentList', AppMock.contentList);

Mock.mock(RegExp('/getRouters' + '.*'), PermissionMock.getRouters);

export default Mock;
