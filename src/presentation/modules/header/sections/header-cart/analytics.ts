import useAnalytics, { DataAnalytics } from '@hooks/useAnalytics';

function useAnalyticsHeaderCart() {
  const { sendEventAnalytics } = useAnalytics();

  function sendAnalyticsOnClickCart() {
    const data: DataAnalytics = {
      event: 'interaccion',
      category: 'Interacciones Header',
      action: 'Click',
      tag: 'Mini cart',
    };

    sendEventAnalytics(data);
  }

  return {
    sendAnalyticsOnClickCart,
  };
}

export default useAnalyticsHeaderCart;
