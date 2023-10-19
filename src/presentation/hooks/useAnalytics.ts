import { customDispatchEvent } from '@store/events/dispatchEvents';
import { WindowsEvents } from '../events';

type EventsAnalytics = 'interaccion';

type CategoriesAnalytics =
  | 'Header'
  | 'Búsqueda'
  | 'Interacciones Header'
  | 'Interacciones componente regionalizador';

export type DataAnalytics = {
  event: EventsAnalytics;
  category: CategoriesAnalytics;
  action: string;
  tag: string;
  region?: string;
  comuna?: string;
};

interface UseAnalytics {
  sendEventAnalytics: (data: DataAnalytics) => void;
}

const useAnalytics = (): UseAnalytics => {
  return {
    sendEventAnalytics(data) {
      customDispatchEvent({
        name: WindowsEvents.ANALYTICS,
        detail: {
          ...data,
        },
      });
    },
  };
};

export default useAnalytics;
