import useAnalytics from '@hooks/useAnalytics';

export default function useCategoriesAnalytics() {
  const { sendEventAnalytics } = useAnalytics();

  function eventOnClickMenuIcon(pathname: string) {
    sendEventAnalytics({
      event: 'interaccion',
      category: 'Interacciones Header',
      action: 'Click abrir menu',
      tag: pathname,
    });
  }

  function eventOnClickCategory(category: string) {
    sendEventAnalytics({
      event: 'interaccion',
      category: 'Interacciones Header',
      action: 'Clic Menu N1',
      tag: category,
    });
  }

  function eventOnClickShowAll(category: string) {
    sendEventAnalytics({
      event: 'interaccion',
      category: 'Interacciones Header',
      action: 'Click mostrar todo menu',
      tag: category,
    });
  }

  return {
    eventOnClickMenuIcon,
    eventOnClickCategory,
    eventOnClickShowAll,
  };
}
