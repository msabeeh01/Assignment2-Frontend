import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

//style imports
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

//hooks
import { useAuthContext } from "../../../hooks/useAuthContext";

const GetMyCourses = () => {
    const { student } = useAuthContext();
    const [course, setCourse] = useState([])

    const navigate = useNavigate();

    const getMyCourse = async () => {
        try {
            const response = await axios.get(`https://assignment2-backend-lake.vercel.app/courses/mycourses/${student.stuNum}`);
            console.log(response.data)
            setCourse(response.data);
        } catch (err) {
            console.log(err);
        }
    }

    const deleteCourse = async (courseCode) => {
        try {
            console.log('this is student num',student.stuNum)
            await axios.delete(`https://assignment2-backend-lake.vercel.app/courses/delete/${courseCode}`, {
                data:{
                    stuNum: student.stuNum
                }
            });
            getMyCourse();
        } catch (err) {
            console.log(err.response.data);
        }
    }

    useEffect(() => {
        getMyCourse();
    }, [])


    return (
        <div>
            <h1>Get My Courses</h1>
            {course?.map((course) => {
                return (
                    <Card key={course.courseCode} className="my-3">
                        <Card.Header>
                            <Card.Title>{course.courseName}</Card.Title>
                            <Card.Subtitle>{course.courseCode}</Card.Subtitle>
                        </Card.Header>

                        <Card.Body>
                            <Card.Text>{course.section}</Card.Text>
                            <Card.Text>{course.semester}</Card.Text>
                            <div className="d-flex justify-content-center gap-2">
                                    <Button onClick={() => navigate(`/editCourse/${course.courseCode}`)} variant="primary">
                                        Edit
                                    </Button>

                                    <Button onClick={() => deleteCourse(course.courseCode)}className="btn btn-danger">Delete</Button>
                            </div>
                        </Card.Body>


                    </Card>)
            })}
        </div>
    )
}

export default GetMyCourses