import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: 'id',
    dataIndex: 'id',
    width: 80,
  },
  {
    title: '标题',
    dataIndex: 'title',
  },
  {
    title: '用户',
    dataIndex: 'name',
  },
  {
    title: '日期',
    dataIndex: 'date',
  },
  {
    title: '状态',
    dataIndex: 'state',
  },
  {
    title: '创建时间',
    dataIndex: 'create_date',
  },
  {
    title: '描述',
    dataIndex: 'description',
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'title',
    label: '标题',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'name',
    label: '用户',
    component: 'Input',
    colProps: { span: 8 },
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'name',
    label: '用户',
    required: true,
    component: 'Input',
  },
  {
    field: 'title',
    label: '标题',
    required: true,
    component: 'Input',
  },
  {
    label: '日期',
    field: 'date',
    component: 'DatePicker',
    componentProps: {
      format: 'YYYY-MM-DD HH:mm:ss',
    },
  },
];
