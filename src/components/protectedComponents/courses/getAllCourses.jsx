import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import {Card, Button} from 'react-bootstrap'

const GetAllCourses = () => {
    const [courses, setCourses] = useState([]);

    const navigate = useNavigate();

    const fetchCourses = async () => {
        const response = await axios.get("https://assignment2-backend-lake.vercel.app/courses/all");
        setCourses(response.data);
    }

    useEffect(() => {
        fetchCourses();
    }, []);

    useEffect(() => {
        console.log(courses);
    }, [courses])

    return (
        <>
            {courses?.map((course) => {
                return (
                    <Card key={course.courseCode} className="m-2 d-flex "  style={{ width: '18rem' }}>
                        <Card.Header>
                            <Card.Title>{course.courseCode}</Card.Title>
                        </Card.Header>

                        <Card.Body className="d-flex flex-column">
                            <div className="d-flex gap-2" style={{width: '100%'}}>
                                <Card.Text>Name:</Card.Text>
                                <div className="d-flex justify-content-end" style={{width: '100%'}}>
                                    <Card.Text className="fw-bold justify-content-end">{course.courseName}</Card.Text>
                                </div>
                            </div>

                            <div className="d-flex gap-2">
                                <Card.Text>Section:</Card.Text>
                                <div className="d-flex justify-content-end" style={{width: '100%'}}>
                                    <Card.Text className="fw-bold justify-content-end">{course.section}</Card.Text>
                                </div>
                            </div>

                            <div className="d-flex gap-2">
                                <Card.Text>Semester:</Card.Text>
                                <div className="d-flex justify-content-end" style={{width: '100%'}}>
                                    <Card.Text>{course.semester}</Card.Text>
                                </div>
                            </div>

                            <Button onClick={() => navigate(`/listTakers/${course.courseCode}`)}>View Students</Button>
                        </Card.Body>
                    </Card>

                )
            })}
        </>
    )
}

export default GetAllCourses