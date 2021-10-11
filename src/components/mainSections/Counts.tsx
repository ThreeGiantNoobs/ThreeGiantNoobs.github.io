import React from "react";

const Counts: React.FC = () => {
    return (
        <section id="counts" className="counts section-bg">
            <div className="container">

                <div className="row justify-content-end">

                    <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                        <div className="count-box">
                            <span data-purecounter-start="0" data-purecounter-end="65" data-purecounter-duration="2"
    className="purecounter"/>
                            <p>Happy Clients</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                        <div className="count-box">
                            <span data-purecounter-start="0" data-purecounter-end="85" data-purecounter-duration="2"
    className="purecounter"/>
                            <p>Projects</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                        <div className="count-box">
                            <span data-purecounter-start="0" data-purecounter-end="30" data-purecounter-duration="2"
    className="purecounter"/>
                            <p>Years of experience</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                        <div className="count-box">
                            <span data-purecounter-start="0" data-purecounter-end="20" data-purecounter-duration="2"
    className="purecounter"/>
                            <p>Awards</p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Counts