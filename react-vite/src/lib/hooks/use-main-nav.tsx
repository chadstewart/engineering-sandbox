import { NavItems } from "../types/nav-tem";

const useMainNav = () => {
  const navList: NavItems[] = [
    {
      url: "/",
      text: "Home"
    },
    {
      url: "https://newsletter.techishiring.com/",
      text: "Newsletter",
      externalLink: true,
      externalLinkAlt: "external link for TechIsHiring Newsletter"
    }
  ];

  return navList;
};

export default useMainNav;