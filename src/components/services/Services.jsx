import React, { useState } from 'react';
import "./services.css";


const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
      setToggleState(index);
    }
  return (
    <section className="services section" id="services">
        <h2 className="section__title">Accomplishments</h2>
        <span className="section__subtitle">Some Stuff I've Done</span>
        <div className="services__container container grid">
          <div className="services__content">
            <div>
              <i className="uil uil-web-grid services__icon"></i>
              <h3 className="services__title">
                SWE Consultant @ <br /> Slalom Consulting
              </h3>
            </div>
 
            <span className="services__button" onClick={() => toggleTab(1)}>View More <i className="uil uil-arrow-right services__button-icon"></i></span>

            <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
              <div className="services__modal-content">
                 <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                 <h3 className="services__modal-title">
                 SWE Consultant @ <br /> Slalom Consulting
                 </h3>
                 <p className="services__modal-description">
                  Summer 2023
                 </p>

                 <u1 className="services__modal-services.grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info"> 
                    Architected, developed and deployed a full-stack ideation brainstorming tool web application using React
                     </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info"> Gained hands-on consulting experience through pitching this tool to Fortune 100 companies </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info"> Developed website design with Flexbox CSS and conducted functionality testing with React Jest</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info"> Learned how to think from the perspective of the client rather than my own</p>
                  </li>
                 </u1>
              </div>
            </div>
          </div>
          <div className="services__content">
            <div>
              <i className="uil uil-arrow services__icon"></i>
              <h3 className="services__title">
              CS 1331 OOP <br /> Teaching Assistant
              </h3>
            </div>
 
            <span onClick={() => toggleTab(2)} className="services__button">View More<i className="uil uil-arrow-right services__button-icon"></i></span>

            <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
              <div className="services__modal-content">
                 <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                 <h3 className="services__modal-title">
                 CS 1331 OOP <br /> Teaching Assistant
                 </h3>
                 <p className="services__modal-description">
                  filler filler filler abcdefw
                 </p>

                 <u1 className="services__modal-services.grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info"> More filler more filler </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info"> More filler more filler </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info"> More filler more filler </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info"> More filler more filler </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info"> More filler more filler </p>
                  </li>
                 </u1>
              </div>
            </div>
          </div>

          <div className="services__content">
            <div>
              <i className="uil uil-edit services__icon"></i>
              <h3 className="services__title">
              Product <br /> designer
              </h3>
            </div>
 
            <span onClick={() => toggleTab(3)} className="services__button">View More<i className="uil uil-arrow-right services__button-icon"></i></span>

            <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
              <div className="services__modal-content">
                 <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                 <h3 className="services__modal-title">
                 Product <br /> designer v2
                 </h3>
                 <p className="services__modal-description">
                  filler filler filler abcdefw
                 </p>

                 <u1 className="services__modal-services.grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info"> More filler more filler </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info"> More filler more filler </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info"> More filler more filler </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info"> More filler more filler </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info"> More filler more filler </p>
                  </li>
                 </u1>
              </div>
            </div>
          </div>
        </div>
    </section>

  )
}

export default Services
