import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
export const columns: BasicColumn[] = [
  {
    title: '名称',
    dataIndex: 'title',
    width: 200,
  },
  {
    title: '描述',
    dataIndex: 'description',
    width: 180,
  },
  {
    title: '分类',
    dataIndex: 'type',
    width: 50,
  },
  {
    title: '创建时间',
    dataIndex: 'create_date',
    width: 180,
  },
  {
    title: '图片地址',
    dataIndex: 'img',
  },
  {
    title: '资源地址',
    dataIndex: 'url',
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'title',
    label: '名称',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'description',
    label: '描述',
    component: 'Input',
    colProps: { span: 8 },
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'title',
    label: '名称',
    required: true,
    component: 'Input',
  },
  {
    field: 'description',
    label: '描述',
    required: true,
    component: 'InputTextArea',
  },
  {
    label: '分类',
    field: 'type',
    component: 'Input',
  },
  {
    label: '图片地址',
    field: 'img',
    component: 'Input',
  },
  {
    label: '资源地址',
    field: 'url',
    component: 'Input',
  },
];
