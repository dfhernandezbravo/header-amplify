import { WindowsEvents } from '@events/index';
import { customDispatchEvent } from '@store/events/dispatchEvents';

interface Props {
  isUserLogged: boolean;
  regionSelected: string;
  communeSelected: string;
}

function sendAnalyticNewAddressForm({
  isUserLogged,
  regionSelected,
  communeSelected,
}: Props) {
  const data = {
    event: 'interaccion',
    category: 'Interacciones componente regionalizador',
    action: 'Click selección ingresa tu ubicación',
    tag: isUserLogged ? 'Usuario Logeado' : 'Usuario Guest',
    region: regionSelected,
    comuna: communeSelected,
  };

  customDispatchEvent({
    name: WindowsEvents.ANALYTICS,
    detail: {
      ...data,
    },
  });
}

export default sendAnalyticNewAddressForm;
