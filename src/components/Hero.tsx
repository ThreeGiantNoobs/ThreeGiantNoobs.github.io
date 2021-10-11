import React from "react";

interface IconBoxData {
    link: string,
    title: string,
    description: string
    iconClass: string
}

export interface ButtonData {
    title: string,
    link: string
}

const IconBox: React.FC<IconBoxData> = ({iconClass, title, link, description}) => {
    return (
        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in"
             data-aos-delay="200">
            <div className="icon-box">
                <div className="icon"><i className={iconClass}/></div>
                <h4 className="title"><a href={link}>{title}</a></h4>
                <p className="description">{description}</p>
            </div>
        </div>
    )
}

const Hero: React.FC<{
    titleLine1: string, titleLine2: string, centerButton: ButtonData, boxesData: IconBoxData[]
}> = ({titleLine1, titleLine2, boxesData,centerButton}) => {
    return (
        <section id="hero" className="d-flex align-items-center">
            <div className="container position-relative" data-aos="fade-up" data-aos-delay="100">
                <div className="row justify-content-center">
                    <div className="col-xl-7 col-lg-9 text-center">
                        <h1>{titleLine1}</h1>
                        <h2>{titleLine2}</h2>
                    </div>
                </div>
                <div className="text-center">
                    <a href={centerButton.link} className="btn-get-started scrollto">{centerButton.title}</a>
                </div>
                <div className="row icon-boxes">
                    {boxesData.map((_dt) => {return <IconBox {..._dt}/>})}
                </div>
            </div>
        </section>
    )
}

export default Hero
