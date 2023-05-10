import Image from "next/image";
import Link from "next/link";
import { HelpCard } from "./helpCenterCard.styles";

interface HelpCenterCardProps {
    image: string;
    title: string;
    subtitle: string;
    borderer: boolean;
    link: string;
}

const HelpCenterCard = ({ image, title, subtitle, link, borderer } : HelpCenterCardProps) => {

    return(
        <HelpCard data-border={borderer}>
            <Image 
                src={image}
                height={60}
                width={60}
                alt= "Help Center Image"
            />
            <Link href={link}>
                <p>{title}</p>
                <p>{subtitle}</p>
            </Link>
        </HelpCard>
    )
}

export default HelpCenterCard;