import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/esm/Button";
import FormLabel from "react-bootstrap/esm/FormLabel";
const EditCourse = () => {
    const [course, setCourse] = useState(null)
    const {courseCode} = useParams()

    const fetchByCode = async () => {
        try{
            const response = await axios.get(`https://assignment2-backend-lake.vercel.app/courses/edit/${courseCode}`);
            setCourse(response.data);
        }catch(err){
            console.log(err)
        }
    }

    const sendUpdate = async () => {
        try{
            const response = await axios.put(`https://assignment2-backend-lake.vercel.app/courses/edit/${courseCode}`, course);
            console.log("this is the sent request", course)
            console.log(response)
        }catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        fetchByCode();
    }, [])


    return (
        <div>
            {course? (
                <div>
                    <h1>Edit Course</h1>

                    <Form>
                        <Form.Group>
                            <FormLabel>Course Name:</FormLabel>
                            <Form.Control type="text" value={course.courseName} onChange={(e) => setCourse({...course, courseName: e.target.value})}/>
                        </Form.Group>

                        <Form.Group>
                            <FormLabel>Course Code:</FormLabel>
                            <Form.Control type="number" value={course.courseCode} onChange={(e) => setCourse({...course, courseCode: e.target.value})}/>
                        </Form.Group>

                        <Form.Group>
                            <FormLabel>Section:</FormLabel>
                            <Form.Control type="number" value={course.section} onChange={(e) => setCourse({...course, section: e.target.value})}/>
                        </Form.Group>

                        <Form.Group>
                            <FormLabel>Semester:</FormLabel>
                            <Form.Control type="number" value={course.semester} onChange={(e) => setCourse({...course, semester: e.target.value})}/>
                        </Form.Group>
                        
                        <Button  onClick={sendUpdate} variant="primary">Submit</Button>

                    </Form>
                </div>
            ): (
                <p>loading...</p>
            )}
        </div>
    )
}

export default EditCourse