import About from "./mainSections/About";
import React from "react";
import {TeamInterface} from "./mainSections/Team";
import Services, {ServiceInterface} from "./mainSections/Services";

export interface MainInterface {
    servicesData: ServiceInterface,
    userProfileData: TeamInterface
}

const Main: React.FC<MainInterface> = ({servicesData, userProfileData}) => {
    return (
        <main id="main">
            <About/>
            <Services {...servicesData} />
            {/*<Team {...userProfileData} />*/}
        </main>
    )
}

export default Main