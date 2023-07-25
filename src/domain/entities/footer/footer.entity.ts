type FooterLink = {
  title: string;
  link: string;
}

type FooterHelpData = FooterLink & {
  image: string;
  subtitle: string;
}

type FooterSiteMap = {
  title: string;
  links: FooterLink[]
}

type FooterSocialLinks = FooterLink & {
  icon: string;
}

type FooterPaymentsLinks = FooterLink & {
  icon: string
}

type FooterData = {
  copyright: string;
  "help-data": FooterHelpData[];
  "site-map": FooterSiteMap[];
  "social-links": FooterSocialLinks[];
  "payments-links": FooterPaymentsLinks[];
  "legal-links": FooterLink[]
}