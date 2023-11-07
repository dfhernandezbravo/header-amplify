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

  function eventOnClickCategoryN1(category: string) {
    sendEventAnalytics({
      event: 'interaccion',
      category: 'Interacciones Header',
      action: 'Clic Menu N1',
      tag: category,
    });
  }

  function eventOnClickCategoryN2(category: string) {
    sendEventAnalytics({
      event: 'interaccion',
      category: 'Interacciones Header',
      action: 'Clic Menu N2',
      tag: category,
    });
  }

  function eventOnClickCategoryN3(subcategory: string) {
    sendEventAnalytics({
      event: 'interaccion',
      category: 'Interacciones Header',
      action: 'Clic Menu N3',
      tag: subcategory,
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
    eventOnClickCategoryN1,
    eventOnClickCategoryN2,
    eventOnClickCategoryN3,
    eventOnClickShowAll,
  };
}
