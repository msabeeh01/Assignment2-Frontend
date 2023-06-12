import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


//hooks import
import {useAuthContext} from '../hooks/useAuthContext'
import { useSignin }  from '../hooks/useSignin'

import Button from 'react-bootstrap/esm/Button';

const Signin = () => {
    const {dispatch} = useAuthContext()
    const {student} = useAuthContext()
    const {signin, error, loading } = useSignin();

    const [stuNum, setStuNum] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const handleSubmit = async(e) => {
        e.preventDefault()
        console.log(stuNum, password)
        await signin(stuNum, password)
        navigate('/')
    }

    return(
        <>
        <Button variant="primary" onClick={() => navigate(-1)}>Back</Button>
        <div className="d-flex vw-100 vh-100 justify-content-center align-items-center">
            <form className="d-flex flex-column gap-3" onSubmit={handleSubmit}>
                <label>Student Number</label>
                <input value={stuNum} onChange={(e)=>setStuNum(e.target.value)} type="number" required/>

                <label>Password</label>
                <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" required/>

                <button>Sign in</button>
            </form>
        </div>
        </>
    )

}

export default Signin