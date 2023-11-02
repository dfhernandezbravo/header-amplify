import useAnalytics from '@hooks/useAnalytics';

function useAnalyticsCategoryDetail() {
  const { sendEventAnalytics } = useAnalytics();

  function analyticsOnClickTitle(category: string) {
    sendEventAnalytics({
      event: 'interaccion',
      category: 'Interacciones Header',
      action: 'Clic Menu N2',
      tag: category,
    });
  }

  function analyticsOnClickSubcategory(subcategory: string) {
    sendEventAnalytics({
      event: 'interaccion',
      category: 'Interacciones Header',
      action: 'Clic Menu N3',
      tag: subcategory,
    });
  }

  return {
    analyticsOnClickTitle,
    analyticsOnClickSubcategory,
  };
}

export default useAnalyticsCategoryDetail;
