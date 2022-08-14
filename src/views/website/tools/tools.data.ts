import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: 'id',
    dataIndex: 'id',
    width: 80,
  },
  {
    title: '站名',
    dataIndex: 'title',
  },
  {
    title: '链接',
    dataIndex: 'url',
  },
  {
    title: '描述',
    dataIndex: 'description',
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'title',
    label: '站名',
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
    label: '站名',
    required: true,
    component: 'Input',
  },
  {
    field: 'url',
    label: '地址',
    required: true,
    component: 'Input',
  },
  {
    label: '描述',
    field: 'description',
    component: 'InputTextArea',
  },
];
