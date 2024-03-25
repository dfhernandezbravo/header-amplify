import { AccountLinks } from '@entities/customer/account-links';
import remoteConfigService from '@services/remote-configs';

export const getAccountLinks = async (): Promise<AccountLinks[]> => {
  const GROUP_NAME = 'account';
  const PARAM_NAME = 'sidebar';

  try {
    const { data } = await remoteConfigService<
      AccountLinks[]
    >().getRemoteConfig(GROUP_NAME, PARAM_NAME);
    return data.value;
  } catch (error) {
    return [];
  }
};
