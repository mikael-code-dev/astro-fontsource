// Navigation links configuration for the site header and footer
export interface NavItem {
  title: string;
  path: string;
}

export const navigationLinks: NavItem[] = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Services", path: "/services" },
  { title: "Articles", path: "/article" },
  { title: "Contact", path: "/contact" },
];