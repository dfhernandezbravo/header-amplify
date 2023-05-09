import { NewsletterContainer, NewsletterForm } from "./newsletterForm.styles"

const Newsletter = ()=>{


    const handleSubmit = (event: any) =>{
        event.preventDefault();
    }

    return(
        <NewsletterContainer>
            <div className="newsletter__Title">
                <p>Suscríbete a nuestras ofertas y novedades</p>
            </div>
            <NewsletterForm>
                <form action="submit" onSubmit={handleSubmit}>
                    <div className="newsletter__Inputs">
                        <input type="text" placeholder="Correo electrónico" />
                        <input type="text" placeholder="RUT" />
                        <button>Enviar</button>
                    </div>
                    <div className="newsletter__CheckboxContainer">
                        <input type="checkbox" name="terminos" id="terminos" />
                        <label htmlFor="terminos">
                            <a href="https://easy.cl/terminos-y-condiciones">Acepto los Términos y Condiciones</a>
                        </label>
                    </div>
                </form>
            </NewsletterForm>
        </NewsletterContainer>
    )
};

export default Newsletter;