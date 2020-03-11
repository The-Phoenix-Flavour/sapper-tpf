// Site settings
import { faDiscord, faReddit, faPatreon } from "@fortawesome/free-brands-svg-icons";

// ____ Main ____
export const siteTitle = "the phoenix flavour"
export const siteAuthor = "Phoenix"

// Inside Static folder
export const siteLogo = "Favicon.png"


// ____ Social ____

/*
  NOTE: Title menu items will become red if name or url is missing as these are critical,
  items even for items already  using icons should have a name
*/

// If no icon is provided the name will be used
   export const SocialLinks = [

    {
      name: "patreon",
      url: "https://www.patreon.com/thephoenixflavour",
      icon: faPatreon
    },
    {
      name: "reddit",
      icon: faReddit
    },
    {
      name: "discord",
      url: "https://discordapp.com/invite/SV5N6n7/",
      icon: faDiscord
    },

  ]



// ____ Content _____

// This is where the sites content is generated from
export const contentPath = "content"
export const fileType = ".md"