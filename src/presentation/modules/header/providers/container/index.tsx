interface Props {
  children: React.ReactNode;
}

const ContainerProvider = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default ContainerProvider;
