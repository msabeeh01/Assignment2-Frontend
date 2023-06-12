import React, { useEffect } from "react"
import { useState } from "react"
import axios from "axios"
import {Card, Button} from 'react-bootstrap'
import CardHeader from "react-bootstrap/esm/CardHeader"

const AdminAllStudents = () => {
    const [students, setStudents] = useState([])

    const fetchData = async () => {
        try {
            const response = await axios.get('https://assignment2-backend-lake.vercel.app/admin/students')
            setStudents(response.data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="vw-100 vh-100 d-flex flex-column justify-content-center align-items-center">
            <div style={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
                {students.map((student) => {
                    return (
                        <Card className="my-3" key={student._id} style={{ flex: '1 1 15rem' }}>
                            <CardHeader>
                                <Card.Title>Student Number:</Card.Title>
                            </CardHeader>
                            <Card.Body>
                                <Card.Text>{student.stuNum}</Card.Text>
                                <Card.Text>{student.password}</Card.Text>

                            </Card.Body>
                        </Card>
                    )
                })}
            </div>
        </div>
    )
}

export default AdminAllStudents