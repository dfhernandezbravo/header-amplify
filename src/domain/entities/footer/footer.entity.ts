export type FooterLink = {
  title: string;
  subtitle?: string;
  link: string;
};

export type FooterHelpData = FooterLink & {
  image: string;
  subtitle: string;
};

export type FooterSiteMap = {
  title: string;
  links: FooterLink[];
};

export type FooterSocialLinks = FooterLink & {
  icon: string;
};

export type FooterPaymentsLinks = FooterLink & {
  icon: string;
};

export type FooterData = {
  copyright: string;
  'help-data': FooterHelpData[];
  'site-map': FooterSiteMap[];
  'social-links': FooterSocialLinks[];
  'payments-links': FooterPaymentsLinks[];
  'legal-links': FooterLink[];
};
