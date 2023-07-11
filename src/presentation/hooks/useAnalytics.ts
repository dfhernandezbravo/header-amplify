import { customDispatchEvent } from '@store/events/dispatchEvents';

type EventsAnalytics = 'interaccion';

type CategoriesAnalytics = 'Header' | 'Búsqueda';

type ActionsAnalytics =
  | 'Click'
  | 'Con resultados'
  | 'Click Término Sugerido'
  | 'Click Categoria Sugerida'
  | 'Click Marca Sugerida'
  | 'Click Producto Sugerido'
  | 'Click Término Sugerido Reciente'
  | 'Sin resultados';

type DataAnalytics = {
  event: EventsAnalytics;
  category: CategoriesAnalytics;
  action: ActionsAnalytics;
  tag: string;
};

interface UseAnalytics {
  sendEventAnalytics: (data: DataAnalytics) => void;
}

const useAnalytics = (): UseAnalytics => {
  return {
    sendEventAnalytics(data) {
      customDispatchEvent({
        name: 'ANALYTICS',
        detail: {
          ...data,
        },
      });
    },
  };
};

export default useAnalytics;
