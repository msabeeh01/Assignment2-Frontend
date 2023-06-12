import React, { useEffect } from "react";
import { useState } from "react";
import { useAuthContext } from "../../../hooks/useAuthContext";

//css imports
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import axios from "axios";

const AddCourse = () => {
    const {student} = useAuthContext();

    const [course, setCourse] = useState({
        courseCode: "",
        courseName: "",
        section: "",
        semester: ""
    })



    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            course,
            stuNum: student.stuNum
        };
        console.log(data);
        try{
            const response = await axios.post("https://assignment2-backend-lake.vercel.app/courses/add", data);
            console.log(response.data);
        }catch(err){
            console.log(err.response.data);
        }

    }


    return (
        <div>
            <h1>Add Course</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Course Code</Form.Label>
                    <Form.Control type="text" placeholder="Course Code" value={course.courseCode} onChange={(e) => setCourse({...course, courseCode: e.target.value})} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Course Name</Form.Label>
                    <Form.Control type="text" placeholder="Course Name" value={course.courseName} onChange={(e) => setCourse({...course, courseName: e.target.value})} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Section</Form.Label>
                    <Form.Control type="text" placeholder="Section" value={course.section} onChange={(e) => setCourse({...course, section: e.target.value})} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Semester</Form.Label>
                    <Form.Control type="text" placeholder="Semester" value={course.semester} onChange={(e) => setCourse({...course, semester: e.target.value})} />
                </Form.Group>
                
                <Form.Group>
                    <Button type="submit">Add</Button>
                </Form.Group>
            </Form>
        </div>
    )
}

export default AddCourse