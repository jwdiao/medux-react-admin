import {BaseListItem, BaseListSearch, BaseListSummary, CommonResource, CommonResourceRouteParams} from './common';

import {enumOptions} from 'common/utils';

export enum Gender {
  '男' = 'male',
  '女' = 'female',
  '未知' = 'unknow',
}

export const DGender = enumOptions(Gender);

export enum Status {
  '启用' = 'enable',
  '禁用' = 'disable',
}
export const DStatus = enumOptions(Status);

export interface ListSearch extends BaseListSearch {
  username?: string;
  nickname?: string;
  email?: string;
  roleId?: [{id: string}];
  loginTime?: [number, number];
  status?: Status;
}
export interface ListItem extends BaseListItem {
  username: string;
  nickname: string;
  gender: Gender;
  age: number;
  roleId: string;
  roleName: string;
  status: Status;
  loginTime: number;
  createdTime: number;
  email: string;
}
export interface ListSummary extends BaseListSummary {}

export interface RouteParams extends CommonResourceRouteParams {
  listSearch: ListSearch;
}
export interface Resource extends CommonResource {
  RouteParams: RouteParams;
  ListSearch: ListSearch;
  ListItem: ListItem;
  EditItem: ListItem;
  DetailItem: ListItem;
  ListSummary: ListSummary;
}
