import React from "react";
import {Icons} from "../Icons";

export interface TeamInterface {
    title?: string,
    description?: string,
    userInfo: UserProfileInterface[]
}

export interface SocialLinkInterface {
    socialIcon: Icons,
    link: string
}

export interface UserProfileInterface {
    imgLink: string,
    socialData: SocialLinkInterface[],
    name: string,
    position: string
    delay?: number
}

const SocialLink: React.FC<SocialLinkInterface> = ({link, socialIcon}) => {
    return (
        <a href={link}><i className={socialIcon}/></a>
    )
}

const UserProfileCard: React.FC<UserProfileInterface> = ({imgLink, socialData, delay, name, position}) => {
    return (
        <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={delay}>
            <div className="member">
                <div className="member-img">
                    <img src={imgLink} className="img-fluid" alt=""/>
                    <div className="social">
                        {socialData.map((data) => {
                            return <SocialLink {...data}/>
                        })}
                    </div>
                </div>
                <div className="member-info">
                    <h4>{name}</h4>
                    <span>{position}</span>
                </div>
            </div>
        </div>
    )
}

const Team: React.FC<TeamInterface> =
    ({
         title = "Team",
         description = "We consists of three Noobs 🥲",
         userInfo
     }) => {
        return (
            <section id="team" className="team section-bg">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>{title}</h2>
                        <p>{description}</p>
                    </div>

                    <div className="row">
                        {userInfo.map((data, index) => {
                            return <UserProfileCard imgLink={data.imgLink} socialData={data.socialData}
                                                    delay={(index + 1) * 100} name={data.name} position={data.position}/>
                        })}
                    </div>

                </div>
            </section>
        )
    }

export default Team