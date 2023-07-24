import { customDispatchEvent } from '@store/events/dispatchEvents';
import { WindowsEvents } from '../events';

type EventsAnalytics = 'interaccion';

type CategoriesAnalytics =
  | 'Header'
  | 'Búsqueda'
  | 'Interacciones Header'
  | 'Interacciones componente regionalizador';

type ActionsAnalytics =
  | 'Sin resultados'
  | 'Con resultados'
  | 'Click'
  | 'Click Término Sugerido'
  | 'Click Categoria Sugerida'
  | 'Click Marca Sugerida'
  | 'Click Producto Sugerido'
  | 'Click Término Sugerido Reciente'
  | 'Click Término Búsqueda populares'
  | 'Click en el logo'
  | 'Click abrir menu'
  | 'Click mostrar todo menu'
  | 'Click Menu N3'
  | 'Click selección ingresa tu ubicación'
  | 'Click horarios y tiendas'
  | 'Clic Menu N1'
  | 'Clic Menu N2'
  | 'Clic Menu N3';

type DataAnalytics = {
  event: EventsAnalytics;
  category: CategoriesAnalytics;
  action: ActionsAnalytics;
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
