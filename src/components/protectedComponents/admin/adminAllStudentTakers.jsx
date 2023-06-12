import { useParams } from "react-router-dom"
import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"

import Card from "react-bootstrap/Card"

const AdminAllStudentTakers = () => {
    const {courseCode} = useParams()
    const [students, setStudents] = useState([])
    const [course, setCourse] = useState({})

    const findCourse = async () => {
        try {
            const data = await axios.get(`https://assignment2-backend-lake.vercel.app/admin/${courseCode}`)
            setStudents(data.data.students)
            setCourse(data.data.course)
        } catch (err) {
            console.log(err)
        }
    }

    console.log(students)
    console.log('course', course)

    useEffect(() => {
        findCourse()
    }, [])

    return (
        <>
            <div className="d-flex vh-100 vw-100 justify-content-center align-items-center flex-column">
            {course.courseName}
            {students.map((student) => (
                <Card style={{width:'15%', display: 'flex', justifyContent: 'center'}} key={student._id} className="my-3">Student Num: {student.stuNum}</Card>
            ))}
            </div>
        </>
    )
}

export default AdminAllStudentTakers