import { bffWebInstance } from '@data-sources/bbf-web-instance';
import { AxiosResponse } from 'axios';

type RemoteConfigData<T> = {
  value: T;
};

interface RemoteConfigService<T> {
  getRemoteConfig: (
    groupName: string,
    paramName: string,
  ) => Promise<AxiosResponse<RemoteConfigData<T>>>;
}

function remoteConfigService<T>(): RemoteConfigService<T> {
  return {
    getRemoteConfig: (groupName, paramName) =>
      bffWebInstance.get(`/cms/group/${groupName}/${paramName}`),
  };
}

export default remoteConfigService;
