import Image from "next/image";
import { InfoFooterContainer, InfoListado, InfoSocial } from "./infoFooter.styles";

const InfoFooter = () =>{

    const listData = [
        {
            title: "Centro de ayuda",
            links: [
                {
                    text: "Problemas con tu pedido",
                    link: "https://ayuda.easy.cl/ayuda/despacho-retiro/problemas-con-despacho"
                },
                {
                    text: "Comprar en Easy",
                    link: "https://ayuda.easy.cl/ayuda/seguimiento-compra/como-comprar"
                },
                {
                    text: "Servicio técnico",
                    link: "https://www.easy.cl/servicio-tecnico"
                },
                {
                    text: "Modos de entrega y cobertura",
                    link: "https://ayuda.easy.cl/ayuda/despacho-retiro/cobertura-y-horarios-despacho"
                },
                {
                    text: "Retiro en tienda",
                    link: "https://ayuda.easy.cl/ayuda/despacho-retiro/informaciones-retiro-en-tienda"
                },
                {
                    text: "Despacho a domicilio",
                    link: "https://ayuda.easy.cl/ayuda/despacho-retiro/costos-y-condiciones-despacho"
                },
                {
                    text: "Cambios y devoluciones",
                    link: "https://ayuda.easy.cl/ayuda/servicios-postventa/cambios-y-devoluciones"
                },
                {
                    text: "Mundo experto",
                    link: "https://mundoexperto.cl/"
                },
                {
                    text: "Servicio al cliente",
                    link: "tel:6006003010"
                }
            ]
        },
        {
            title: "Easy",
            links: [
                {
                    text: "Acerca de Easy",
                    link: "https://ayuda.easy.cl/ayuda/acerca-easy/quienes-somos"
                },
                {
                    text: "Acerca de Cencosud",
                    link: "https://www.cencosud.com/"
                },
                {
                    text: "Nuestras tiendas",
                    link: "https://www.easy.cl/tiendas"
                },
                {
                    text: "Terapia de Hogar",
                    link: "https://www.easy.cl/proposito-institucional/terapia-hogar"
                },
                {
                    text: "Propósito Easy",
                    link: "https://www.easy.cl/proposito-institucional"
                },
                {
                    text: "Cyberday",
                    link: "https://www.easy.cl/cyberday"
                },
                {
                    text: "Cybermonday",
                    link: "https://www.easy.cl/cybermonday"
                },
                {
                    text: "Blackfriday",
                    link: "https://www.easy.cl/blackfriday"
                },
                {
                    text: "Catálogo Mes del experto",
                    link: "https://media.easy.cl/is/image/EasySA/CATALOGO_MES_DEL_EXPERTO_2023.pdf"
                },
                {
                    text: "Catálogo Herramientas",
                    link: "https://media.easy.cl/is/image/EasySA/cuartilla_herramientas_abril.pdf"
                }
            ]
        },
        {
            title: "Cencosud",
            links: [
                {
                    text: "Paris",
                    link: "https://www.paris.cl/"
                },
                {
                    text: "Jumbo",
                    link: "https://www.jumbo.cl/"
                },
                {
                    text: "Santa Isabel",
                    link: "https://www.santaisabel.cl/"
                },
                {
                    text: "Tarjeta Cencosud Scotiabank",
                    link: "https://www.tarjetacencosud.cl/publico/home"
                },
                {
                    text: "Seguro Cencosud",
                    link: "https://www.seguroscencosud.cl/"
                },
                {
                    text: "Puntos Cencosud",
                    link: "https://www.puntoscencosud.cl/puntos/"
                },
                {
                    text: "Giftcard",
                    link: "https://www.giftcard.cl/"
                },
                {
                    text: "Trabaja con nosotros",
                    link: "https://cencosud.trabajando.com/"
                },
                {
                    text: "Venta Empresa",
                    link: "https://www.ventaempresascencosud.cl/"
                },
                {
                    text: "Venta Teléfonica",
                    link: "tel:6006003279"
                }
            ]
        }
    ]

    return (
        <InfoFooterContainer>
            <InfoListado>
                {listData.map( item => (
                    <div key={item.title}>
                        <h3>{item.title}</h3>
                        <nav>
                            <ul>
                                {item.links.map( link =>(
                                    <li key={link.text}>
                                        <a href={link.link}>{link.text}</a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                ))}

                <InfoSocial>
                    <div>
                        <p>Síguenos</p>
                        {/* <Image 
                            src={"image"}
                            alt={"title"}
                            width={36}
                            height={36}
                        /> */}
                    </div>
                    <div>Medios de pago</div>
                </InfoSocial>
            </InfoListado>
        </InfoFooterContainer>
    )
}

export default InfoFooter;