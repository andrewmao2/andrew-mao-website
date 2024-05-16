import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
            <i class='bx bxs-graduation about__icon' ></i>
            <h3 className="about__title">Georgia Institute of Technology</h3>
            <span className="about__subtitle">University</span>
        </div>

        <div className="about__box">
            <i class="uil uil-atom about__icon"></i>
            <h3 className="about__title">Computer Science</h3>
            <span className="about__subtitle">Major</span>
        </div>

        <div className="about__box">
            <i class='bx bxs-business about__icon'></i>
            <h3 className="about__title">Leadership & Organizational Change</h3>
            <span className="about__subtitle">Minor</span>
        </div>
    </div>
  )
}

export default Info
