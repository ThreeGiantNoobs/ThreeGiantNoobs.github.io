import {ButtonData} from './Hero'
import React from "react";

interface SocialLinkData {
    link: string,
    className: string,
    iconClassName: string
}

interface LinksCollection {
    title: string,
    links: ButtonData[]
}

export function SocialLink(data: SocialLinkData) {
    return (
        <a href={data.link} className={data.className}><i className={data.iconClassName}/></a>
    )
}

const FooterSubLink: React.FC<ButtonData> = ({link, title}) => {
    return (
        <li><i className="bx bx-chevron-right"/> <a href={link}>{title}</a></li>
    )
}

const FooterLinksCollection: React.FC<{ title: string, data: ButtonData[] }> = ({title, data}) => {
    return (
        <div className="col-lg-2 col-md-6 footer-links">
            <h4>{title}</h4>
            <ul>
                {data.map((data) => {
                    return <FooterSubLink {...data}/>
                })}
            </ul>
        </div>
    )
}

export interface FooterInterface {
    email: string
    socialLinks: SocialLinkData[],
    linksCollection: LinksCollection[]
}

// todo: complete footer
const Footer: React.FC<FooterInterface> = ({socialLinks, linksCollection, email}) => {
    return (
        <footer id="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-3 col-md-6 footer-contact">
                            <h1><img src={"tgn.png"}></h1>
                            <p>
                                <br/><br/><br/>
                                <strong>Email:</strong> {email}<br/>
                            </p>
                        </div>

                        {linksCollection.map((collection) => {
                            return <FooterLinksCollection title={collection.title} data={collection.links}/>
                        })}


                        {/*<div className="col-lg-4 col-md-6 footer-newsletter">*/}
                        {/*    <h4>Join Our Newsletter</h4>*/}
                        {/*    <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>*/}
                        {/*    <form action="" method="post">*/}
                        {/*        <input type="email" name="email"/><input type="submit" value="Subscribe"/>*/}
                        {/*    </form>*/}
                        {/*</div>*/}

                    </div>
                </div>
            </div>

            <div className="container d-md-flex py-4">

                <div className="me-md-auto text-center text-md-start">
                    <div className="copyright">
                        &copy; Copyright <strong><span>TGN</span></strong>. All Rights Reserved
                    </div>
                    <div className="credits">
                        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                    </div>
                </div>
                <div className="social-links text-center text-md-right pt-3 pt-md-0">
                    {socialLinks.map((data) => SocialLink(data))}
                </div>
            </div>
        </footer>
    )
}

export default Footer
