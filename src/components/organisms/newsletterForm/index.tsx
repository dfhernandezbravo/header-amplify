import Button from "@/components/atoms/footerButton";
import { NewsletterContainer, NewsletterForm } from "./newsletterForm.styles"
import useWindowDimensions from "@/hooks/useWindowDimensions";

const Newsletter = ()=>{

    const { width } = useWindowDimensions();
    const breakpoint = 1026;

    const handleSubmit = (event: any) =>{
        event.preventDefault();
    }

    return(
        <NewsletterContainer>
            {width !== undefined && width > breakpoint ? (
                <>
                    <div className="newsletter__Title">
                        <p>Suscríbete a nuestras ofertas y novedades</p>
                    </div>
                    <NewsletterForm>
                        <form action="submit" onSubmit={handleSubmit}>
                            <div className="newsletter__Inputs">
                                <input type="text" placeholder="Correo electrónico" />
                                <input type="text" placeholder="RUT" />
                                <Button
                                    onClick={handleSubmit}
                                >Enviar</Button>
                            </div>
                            <div className="newsletter__CheckboxContainer">
                                <input type="checkbox" name="terminos" id="terminos" />
                                <label htmlFor="terminos">
                                    <a href="https://easy.cl/terminos-y-condiciones">Acepto los Términos y Condiciones</a>
                                </label>
                            </div>
                        </form>
                    </NewsletterForm>
                    </>
            ) : (
                <div className="subscribe">
                    <div className="newsletter__Title">
                        <p>Conoce nuestras ofertas y novedades</p>
                    </div>
                    <Button
                        onClick={handleSubmit}
                    >
                        Suscríbete
                    </Button>
                </div>
            )}
        </NewsletterContainer>
    )
};

export default Newsletter;