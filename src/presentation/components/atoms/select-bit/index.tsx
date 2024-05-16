import dynamic from 'next/dynamic';
import { OptionsSelect } from '@ccom-easy-design-system/atoms.select';

const Select = dynamic(
  () =>
    import('@ccom-easy-design-system/atoms.select').then(
      (module) => module.Select,
    ),
  { ssr: false },
);

export type { OptionsSelect };
export default Select;
