import React from 'react'
import {HeaderCencosudCardModal} from './styles'

const HeaderCencosuTooltip = () => {
  return (
    <HeaderCencosudCardModal>
        <ul>
          <li className='wallet'> <a href='https://www.tarjetacencosud.cl/publico/pagos/landing/paga-tu-cuenta?utm_medium=header%20tarjeta&utm_source=easy_cl&utm_campaign=paga%20tu%20cuenta' target='_blank'><span>paga</span>tu tarjeta </a></li>
          <li className='advance-simulation'> <a href='https://www.tarjetacencosud.cl/publico/producto/avance/landing/simulador?utm_medium=header%20tarjeta&utm_source=easy_cl&utm_campaign=simula%20tu%20avance' target='_blank'>Simula un <span>Avance</span></a></li>
          <li className='bag' ><a href='"https://www.tarjetacencosud.cl/publico/producto/super-avance/landing/simulador?utm_medium=header%20tarjeta&utm_source=easy_cl&utm_campaign=simula%20tu%20super%20avance' target='_blank'>Simula un <span>Súper Avance</span></a></li>
          <li className='hand'><a href='https://www.tarjetacencosud.cl/publico/pagos/landing/paga-tu-credito-de-consumo?utm_medium=header%20tarjeta&utm_source=easy_cl&utm_campaign=paga%20tu%20credito%20de%20consumo' target='_blank'>Paga tu<span>crédito de consumo</span></a></li>
          <li className='card'><a href='https://www.mitarjetacencosud.cl/tarjeta-digital?utm_medium=header%20tarjeta&utm_source=easy_cl&utm_campaign=solicita%20tu%20tarjeta' target='_blank'><span>Solicita</span> tu tarjeta</a></li>
        </ul>
    </HeaderCencosudCardModal>
  )
}

export default HeaderCencosuTooltip