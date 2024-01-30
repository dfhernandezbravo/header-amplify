export type TopBrandsItems = {
  text: string;
  link: string;
  icon: string;
};

export interface TopBrandsStruct {
  name: string;
  image?: string;
  link: string;
  toolTip: boolean;
  items: TopBrandsItems[];
}
