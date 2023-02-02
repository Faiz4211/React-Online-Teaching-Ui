import React from 'react';
import "../Courses/Courses.css";

const Courses = () => {
    const img = {
        course: require('../../assets/images/course.png')
    }
    return (
        <>
            <div className="courses">
                <div className="container course-row">
                    <div className="course-left-col">
                        <div className="course-text">
                            <h1>Browse Our Top <br />Courses</h1>
                            <span className="square"></span>
                            <p>Training developer need to integrate technology seamlessly into the curriculum instead of viewing
                                it is an add-on, an after-thought or an-event.</p>
                            <button className="common-btn">View All Courses</button>
                            <div className="line">
                                <span className="line-1"></span> <br />
                                <span className="line-2"></span> <br />
                                <span className="line-3"></span>
                            </div>
                        </div>
                    </div>
                    <div className="course-right-col">
                        <img src={img.course} alt='course' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Courses;