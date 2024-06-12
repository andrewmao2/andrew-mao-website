import React, { useState } from 'react';
import "./services.css";


const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
      setToggleState(index);
    }
  return (
    <section className="services section" id="services">
        <h2 className="section__title">Previous Experience</h2>
        <span className="section__subtitle">Some Stuff I've Done!</span>
        <div className="services__container container grid">
                    <div className="services__content">
            <div>
              <i className="uil uil-amazon services__icon"></i>
              <h3 className="services__title">
              Software Development <br /> Engineer Intern
              </h3>
            </div>
 
            <span onClick={() => toggleTab(3)} className="services__button">View More!<i className="uil uil-arrow-right services__button-icon"></i></span>

            <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
              <div className="services__modal-content">
                 <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                 <h3 className="services__modal-title">
                 Software Development <br /> Engineer Intern
                 </h3>
                 <p className="services__modal-description">
                  Summer 2024
                 </p>

                 <u1 className="services__modal-services.grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info"> Created a script to automate the bulk upload of files to a desired S3 bucket with any payload </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info"> Implemented a machine learning algorithm to quality check API output  </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info"> Used an AWS step function to integrate three AWS Lambda calls into a seamless one-click process</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info"> Automated the creation and uploading of metadata files from the API output to a data store </p>
                  </li>
                 </u1>
              </div>
            </div>
          </div>
          <div className="services__content">
            <div>
              <i className="uil uil-laptop services__icon"></i>
              <h3 className="services__title">
                SWE Consultant @ <br /> Slalom Consulting
              </h3>
            </div>
 
            <span className="services__button" onClick={() => toggleTab(1)}>View More!<i className="uil uil-arrow-right services__button-icon"></i></span>

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
 
            <span onClick={() => toggleTab(2)} className="services__button">View More!<i className="uil uil-arrow-right services__button-icon"></i></span>

            <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
              <div className="services__modal-content">
                 <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                 <h3 className="services__modal-title">
                 CS 1331 OOP <br /> Teaching Assistant
                 </h3>
                 <p className="services__modal-description">
                  August 2022 - August 2023
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
