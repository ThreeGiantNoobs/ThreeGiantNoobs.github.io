import {NavLinkInterface} from "./components/Header";
import {ServiceCardInterface, serviceCardsShape, ServiceInterface} from "./components/mainSections/Services";
import {Icons} from "./components/Icons";
import {TeamInterface, UserProfileInterface} from "./components/mainSections/Team";

export let navLinks: NavLinkInterface[] = [
    {link: "#hero", heading: "Home", active: true},
    {link: "#about", heading: "About", active: false},
    {link: "#services", heading: "Services", active: false},
]

let ServiceCardData: ServiceCardInterface[] = [
    {
        cardShape: serviceCardsShape.shape1,
        title: "Discord Bot",
        description: "Get your own custom bot for your discord server",
        link: "mailto:wbot16700@gmail.com?subject=Hi%2C%20I%20am%20interested%20in%20discord%20bot",
        iconClass: Icons.discord_fill,
        color: "red"
    },
    {
        cardShape: serviceCardsShape.shape3,
        title: "Api",
        description: "Get your Api for automation or your database",
        link: "mailto:wbot16700@gmail.com?subject=Hi%2C%20I%20am%20interested%20in%20Custom%20Api",
        iconClass: Icons.server,
        color: "blue"
    }
]

export let ServicesData: ServiceInterface = {
    serviceCards: ServiceCardData
}

let TeamProfiles: UserProfileInterface[] = [
    {
        imgLink: "/assets/img/team/camt.jpg",
        socialData: [
            {
                link: "https://www.instagram.com/k4anubhav/",
                socialIcon: Icons.instagram
            },
            {
                link: "https://github.com/k4anubhav",
                socialIcon: Icons.github
            },
            {
                link: "mailto:k4anubhav@gmail.com?subject=Hi%2C%20I%20got%20your%20email%20from%20thetgnteam.com",
                socialIcon: Icons.mail
            }
        ],
        name: "K4anubhav",
        position: ""
    }
]

export let TeamData: TeamInterface = {
     userInfo: TeamProfiles
}

