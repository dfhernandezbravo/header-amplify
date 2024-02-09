import dynamic from 'next/dynamic';

const TextField = dynamic(
  () =>
    import('@ccom-easy-design-system/atoms.textfield').then(
      (module) => module.Textfield,
    ),
  { ssr: false, loading: () => <></> },
);

export default TextField;
