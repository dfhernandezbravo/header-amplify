import { WindowsEvents } from '@events/index';
import { DataAnalytics } from '@hooks/useAnalytics';
import { customDispatchEvent } from '@store/events/dispatchEvents';

const NO_RESULTS = 'Sin resultados';
const WITH_RESULTS = 'Con resultados';

const dispatchSearchResultsEvent = (tag: string, length: number) => {
  customDispatchEvent<DataAnalytics>({
    name: WindowsEvents.ANALYTICS,
    detail: {
      event: 'interaccion',
      category: 'Búsqueda',
      action: length ? WITH_RESULTS : NO_RESULTS,
      tag: tag,
    },
  });
};

export default dispatchSearchResultsEvent;
