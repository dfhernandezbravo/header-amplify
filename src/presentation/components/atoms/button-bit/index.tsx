import dynamic from 'next/dynamic';

const Button = dynamic(
  () =>
    import('@ccom-easy-design-system/atoms.button').then(
      (module) => module.Button,
    ),
  { ssr: false, loading: () => <></> },
);

export default Button;
