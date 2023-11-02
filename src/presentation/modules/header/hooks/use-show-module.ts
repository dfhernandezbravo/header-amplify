export default function useShowModules() {
  const showModule = (canShow: boolean, module: React.ReactNode) =>
    canShow ? module : null;

  return {
    showModule,
  };
}
