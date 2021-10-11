import {ButtonData} from './Hero'

interface SocialLinkData {
    link: string,
    className: string,
    iconClassName: string
}

export function SocialLink(data: SocialLinkData) {
    return (
        <a href={data.link} className={data.className}><i className={data.iconClassName}/></a>
    )
}

export function FooterSubLink(data: ButtonData) {
    return (
        <li><i className="bx bx-chevron-right"/> <a href={data.link}>{data.title}</a></li>
    )
}

export function FooterLinksCollection(title: string, data: ButtonData[]) {
    return (
        <div className="col-lg-2 col-md-6 footer-links">
            <h4>{title}</h4>
            <ul>
                {data.map((data) => FooterSubLink(data))}
            </ul>
        </div>
    )
}

// todo: complete footer
export default function Footer(socialLinks: SocialLinkData[]) {
    return (
        <footer id="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-3 col-md-6 footer-contact">
                            <h3>TGN</h3>
                            <p>
                                ThreeGiantNoobs<br/><br/>
                                <strong>Email:</strong> wbot16700@gmail.com<br/>
                            </p>
                        </div>

                        <div className="col-lg-2 col-md-6 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                                <li><i className="bx bx-chevron-right"/> <a href="#">Home</a></li>
                                <li><i className="bx bx-chevron-right"/> <a href="#">About us</a></li>
                                <li><i className="bx bx-chevron-right"/> <a href="#">Services</a></li>
                                <li><i className="bx bx-chevron-right"/> <a href="#">Terms of service</a></li>
                                <li><i className="bx bx-chevron-right"/> <a href="#">Privacy policy</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Our Services</h4>
                            <ul>
                                <li><i className="bx bx-chevron-right"/> <a href="#">Web Design</a></li>
                                <li><i className="bx bx-chevron-right"/> <a href="#">Web Development</a></li>
                                <li><i className="bx bx-chevron-right"/> <a href="#">Product Management</a></li>
                                <li><i className="bx bx-chevron-right"/> <a href="#">Marketing</a></li>
                                <li><i className="bx bx-chevron-right"/> <a href="#">Graphic Design</a></li>
                            </ul>
                        </div>

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