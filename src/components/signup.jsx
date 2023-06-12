import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

//hooks import
import { useSignup } from "../hooks/useSignup";
import { useAuthContext } from "../hooks/useAuthContext";

import { Button } from 'react-bootstrap'

const Signup = () => {
    const [stuNum, setStuNum] = useState('');
    const [password, setPassword] = useState('');
    const { signup, error, loading } = useSignup();
    const { dispatch } = useAuthContext();
    const { student } = useAuthContext();

    const navigate= useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        await signup(stuNum, password)
        // dispatch({type: 'LOGIN', payload: stuNum}
    }

    return (
        <>
            <Button variant="primary" onClick={() => navigate(-1)}>Back</Button>
            <div className="d-flex flex-column vw-100 vh-100 justify-content-center align-items-center">

                <div>Please Signup</div>
                <form className="d-flex flex-column gap-3" onSubmit={handleSubmit}>
                    <label>Student Number</label>
                    <input type="number" value={stuNum} onChange={(e) => setStuNum(e.target.value)} />

                    <label>Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                    <button type="submit">Sign up</button>

                </form>
                {error && <div>{error}</div>}
            </div>
        </>
    )

}

export default Signup