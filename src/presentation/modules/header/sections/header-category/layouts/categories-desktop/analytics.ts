import useAnalytics from '@hooks/useAnalytics';

function useAnalyticsCategoriesDesktop() {
  const { sendEventAnalytics } = useAnalytics();

  function analyticsOnClickCategory(category: string) {
    sendEventAnalytics({
      event: 'interaccion',
      category: 'Interacciones Header',
      action: 'Clic Menu N1',
      tag: category,
    });
  }

  function analyticsShowAll(category: string) {
    sendEventAnalytics({
      event: 'interaccion',
      category: 'Interacciones Header',
      action: 'Click mostrar todo menu',
      tag: category,
    });
  }

  return {
    analyticsOnClickCategory,
    analyticsShowAll,
  };
}

export default useAnalyticsCategoriesDesktop;
