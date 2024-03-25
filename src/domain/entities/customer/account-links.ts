export type AccountLinks = {
  id: string;
  label: string;
  isActive: boolean;
  isDefault: boolean;
  redirect: {
    to: string;
    target: string | null;
    url: string;
  };
};
