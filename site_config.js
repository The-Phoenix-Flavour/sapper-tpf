//import siteImage from "../static"
import { faDiscord, faReddit, faPatreon } from "@fortawesome/free-brands-svg-icons";

export const title = "THE PHOENIX FLAVOUR"


/* Title menu items will become red if name or url is missing as these are critical items
   even items using icons should have a name */
export const SocialLinks = [
  {
    name: "skyrim se",
  },
  {
    name: "discord",
    url: "https://discordapp.com/invite/SV5N6n7/",
    icon: faDiscord
  },
  {
    name: "reddit",
    icon: faReddit
  },
  {
    name: "patreon",
    url: "https://www.patreon.com/thephoenixflavour",
    icon: faPatreon
  },
]

export const navStructure = [
  {
    "label": "Introduction",
    "pathname": "."
  },
  {
    "label": "Modding",
    "pathname": "modding"
  }
]