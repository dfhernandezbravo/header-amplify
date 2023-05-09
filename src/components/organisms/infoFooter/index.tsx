import Image from "next/image";
import { InfoFooterContainer, InfoListado, InfoSocial } from "./infoFooter.styles";
import Link from "next/link";

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
    ];

    const IconsMedia = [
        {
            svg: "https://easycl.vtexassets.com/assets/vtex/assets-builder/easycl.store-theme/6.0.68/footer/Logo-06___70cbc4f14de31072868227e126fc8a59.svg",
            title: "Icono Facebook",
            link: "https://es-la.facebook.com/easychile"
        },
        {
            svg: "https://easycl.vtexassets.com/assets/vtex/assets-builder/easycl.store-theme/6.0.68/footer/Logo-07___1967ccef1e82f0057b88df011b9f3611.svg",
            title: "Icono Instagram",
            link: "https://www.instagram.com/easytienda"
        },
        {
            svg: "https://easycl.vtexassets.com/assets/vtex/assets-builder/easycl.store-theme/6.0.68/footer/Logo-08___cc7169b556c48610507eddc8891266eb.svg",
            title: "Icono Twitter",
            link: "https://twitter.com/easytienda"
        },
        {
            svg: "https://easycl.vtexassets.com/assets/vtex/assets-builder/easycl.store-theme/6.0.68/footer/Logo-09___b3947b439439c30bca18235769e70353.svg",
            title: "Icono Youtube",
            link: "https://www.youtube.com/user/easychile"
        }
    ];

    const IconsPayment = [
        {
            svg: "https://easycl.vtexassets.com/assets/vtex/assets-builder/easycl.store-theme/6.0.68/footer/Logo-04___64c6f337fae628fd8d570153b0d90da6.svg",
            title: "Icono Cencosud Scotiabank"
        },
        {
            svg: "https://easycl.vtexassets.com/assets/vtex/assets-builder/easycl.store-theme/6.0.68/footer/Logo-03___35ba0fbaa9b3b09a7c4cd1060c1833b9.svg",
            title: "Icono MasterCard"
        },
        {
            svg: "https://easycl.vtexassets.com/assets/vtex/assets-builder/easycl.store-theme/6.0.68/footer/Logo-01___7be2be91eea77f9694ea89142ceb6d36.svg",
            title: "Icono Visa"
        },
        {
            svg: "https://easycl.vtexassets.com/assets/vtex/assets-builder/easycl.store-theme/6.0.68/footer/Logo-05___e0b22fb60d3c1a8c1f583c01655eaaf3.svg",
            title: "Icono American Express"
        },
        {
            svg: "https://easycl.vtexassets.com/assets/vtex/assets-builder/easycl.store-theme/6.0.68/footer/Logo-02___068200029cfbe613d668e18f000c7786.svg",
            title: "Icono Red Compra"
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
                <div className="line"></div>

                <InfoSocial>
                    <div>
                        <p>Síguenos</p>
                        <ul className="infoSolcial_list">
                            {IconsMedia.map( item => (
                                <li key={item.title}>
                                    <Link href={item.link} >
                                        <Image 
                                            src={item.svg}
                                            alt={item.title}
                                            width={36}
                                            height={36}
                                        />
                                    </Link>
                                </li>
                            )) }
                        </ul>
                    </div>

                    <div>
                        <p>Medios de pago</p>
                        <ul className="infoSolcial_list">
                            {IconsPayment.map(item =>(
                                <li key={item.title}>
                                    <Image 
                                        src={item.svg}
                                        alt={item.title}
                                        width={43}
                                        height={43}
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                </InfoSocial>
            </InfoListado>
        </InfoFooterContainer>
    )
}

export default InfoFooter;