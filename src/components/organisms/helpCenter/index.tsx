import HelpCenterCard from "@/components/atoms/helpCenterCard";
import { HelpCenterWrapper } from "./helpCenter.styles"
import CardsData from "@/mock/footerCard-data.json";
import useWindowDimensions from "@/hooks/useWindowDimensions";

const HelpCenter = ()=>{

    const { width } = useWindowDimensions();
    const breakpoint = 1026;

    return(
        <HelpCenterWrapper data-mobile={width < breakpoint}>
        {CardsData.map(item => (
                <HelpCenterCard 
                    key={item.title}
                    image= {item.image}
                    title= {item.title}
                    subtitle= {item.subtitle}
                    border= {item.border}
                    link= {item.link}
                    width= {item.width}
                    height= {item.height}
                    mobile= {width < breakpoint}
                />
        ))}
        </HelpCenterWrapper>
    )

}

export default HelpCenter;