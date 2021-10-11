import React from 'react';
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Main from "./components/Main";

let navLinks = [
    {"link": "#hero", "heading": "Home", "active": true},
    {"link": "#about", "heading": "About", "active": false},
]

function App() {
    return (
        <>
            <Header title="TGN" navLinks={navLinks}/>
            <Hero titleLine1="The ThreeGiantNoobs" titleLine2="We do some cool stuff" boxesData={
                [
                    {
                        "link": "#",
                        "title": "OSME",
                        "description": "A Chrome extension that proves to be handy tool when your exams are held on the Moodle platform 😉",
                        "iconClass": "ri-service-fill"
                    },
                    {
                        "link": "#",
                        "title": "Waddup Casuals",
                        "description": "A Discord bot which sends articles using RSS. Different from others, One of its kind, pass the topic and it will automatically sends best articles",
                        "iconClass": "ri-discord-fill"
                    },
                ]
            } centerButton={{"title": "Get started", "link": "#hero"}}/>
            <Main />
            {Footer([])}
        </>
    );
}

export default App;
