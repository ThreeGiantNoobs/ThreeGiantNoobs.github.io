import React from 'react';
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Main from "./components/Main";
import {adminEmail, navLinks, ServicesData, TeamData} from "./Data";


function App() {
    return (
        <>
            <Header title="TGN" navLinks={navLinks}/>
            <Hero titleLine1="We are ThreeGiantNoobs" titleLine2="We do some cool stuff" boxesData={
                [
                    {
                        link: "https://osme.thetgnteam.com",
                        title: "OSME",
                        description: "A Chrome extension that proves to be handy tool when your exams are held on the Moodle platform 😉",
                        iconClass: "ri-service-fill"
                    },
                    {
                        link: "https://waddup.thetgnteam.com",
                        title: "Waddup Casuals",
                        description: "A Discord bot which sends articles using RSS. Different from others, One of its kind, pass the topic and it will automatically sends best articles",
                        iconClass: "ri-discord-fill"
                    },
                    {
                        link: "https://github.com/ThreeGiantNoobs/chegg-scraper",
                        title: "Chegg Scraper",
                        description: "An Open Source Project for scraping the Chegg answers for Personal use.",
                        iconClass: "ri-book-mark-fill"
                    },
                    {
                        link: "#",
                        title: "Benlotus MovieBox",
                        description: "Video Sharing Native Android app.",
                        iconClass: "ri-android-fill"
                    },
                ]
            }/>
            <Main servicesData={ServicesData} userProfileData={TeamData} />
            <Footer socialLinks={[]} linksCollection={[]} email={adminEmail}/>
        </>
    );
}

export default App;
