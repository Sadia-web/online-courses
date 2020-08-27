import React, { useState } from 'react';
import fakeData from '../../fakeData/all-course';
import './Course.css';
import Cart from '../Cart/Cart';
import Topic from '../Topic/Topic';
import Summary from '../Summary/Summary';
const Course = () => {
    const fifteenCourse = fakeData.slice(0,15);
    const [courses, setCourses] = useState(fifteenCourse);
    const [cart, setCart] = useState([]);

    const addCourseEventHandler = (course) => {
        const newCart = [...cart, course];
        setCart(newCart);
    };




    return (
        <div className="main-container">
            <div className="course-container">
                <h1>Let's start Learning</h1>
                <h3>Available Courses: {courses.length}</h3>

                {
                    courses.map(course => <Topic
                        course={course}
                        key={course.id}
                        addCourseEventHandler={addCourseEventHandler}

                    >{course.name}</Topic>)
                }
            </div> 
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
            <div className="cart-summary">
                {
                    cart.map(singleTopic => <Summary
                        cart={singleTopic}
                        key={singleTopic.id}
                    ></Summary>)
                }
            </div>
    
        </div>
    );
};

export default Course;