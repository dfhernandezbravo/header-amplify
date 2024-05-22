import NewAddressForm from '../new-address-form';
import HeaderNewAddress from './components/header-new-address';
import { useState, useContext } from 'react';
import ListAddressForm from './components/list-address-form';
import HeaderLocationContext from '@modules/header/sections/header-location/context/header-location-context';

const ListAddress = () => {
  const { onCloseModal } = useContext(HeaderLocationContext);
  const [step, setStep] = useState<'list-address' | 'new-address'>(
    'list-address',
  );

  return step === 'list-address' ? (
    <ListAddressForm setStep={setStep} />
  ) : (
    <NewAddressForm
      header={
        <HeaderNewAddress
          onCloseModal={() => onCloseModal()}
          setStep={(value) => setStep(value)}
        />
      }
    />
  );
};

export default ListAddress;
