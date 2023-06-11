export interface MenuItem {
  title: string;
  icon: string;
  path: string;
  children?: MenuItem[];
  isHome?: boolean;
}