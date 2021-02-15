import axios, { AxiosInstance } from 'axios';
import { rest } from 'msw';

import { SERVER_URL } from '@sn/env';

type RestObject = typeof rest;

type AxiosRequest = Pick<AxiosInstance, 'get' | 'post' | 'put' | 'patch' | 'delete'>;

const api = axios.create({
  baseURL: SERVER_URL,
});

export const createRequest = <RequestType extends keyof AxiosRequest>(
  requestType: RequestType,
): typeof axios[RequestType] => {
  return api[requestType];
};

export const createHandler = <RequestType extends keyof RestObject>(
  requestType: RequestType,
): typeof rest[RequestType] => {
  return (url, callback) => rest[requestType](`${SERVER_URL}${url}`, callback);
};
