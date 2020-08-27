import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import './Topic.css';

const Topic = (props) => {
    const { name, instructor, price} = props.course;
    return (
        <div className="topic"> 
             <div>
                <h4>{name}</h4>
                <p>Written by: {instructor}</p>
                <h3>${price} <p className="text-secondary"></p></h3>
                <button className="btn btn-success" onClick={() => props.addCourseEventHandler(props.course)}><FontAwesomeIcon icon={faUserPlus} /> Enroll Now</button>
            </div>
        </div>
    );
};

export default Topic;