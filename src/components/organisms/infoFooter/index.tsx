import Image from "next/image";
import { InfoFooterContainer, InfoListado, InfoSocial } from "./infoFooter.styles";
import Link from "next/link";
import listData from '@/mock/list-data.json'
import useWindowDimensions from "@/hooks/useWindowDimensions";
import Accordion from "@/components/atoms/accordion";
import Newsletter from "../newsletterForm";

const InfoFooter = () =>{


    const { width } = useWindowDimensions();
    const breakpoint = 1026;

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
            <Newsletter />
            {width !== undefined && width > breakpoint ? (
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
            ): (
                <>
                    {listData.map(item =>(
                        <Accordion title={item.title} links={item.links} key={item.title}/>
                    ))}

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
                </>
            )}

        </InfoFooterContainer>
    )
}

export default InfoFooter;