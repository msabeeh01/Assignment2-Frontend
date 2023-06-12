import React from "react";
import { useState } from "react";


//context and context hooks
import { useAuthContext } from "../hooks/useAuthContext";
import { useAdminSignin } from "../hooks/useAdminSignin";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";

const AdminSignin = () => {
    const { dispatch } = useAuthContext();
    const { signin, isLoading, error } = useAdminSignin();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(username, password);
        await signin(username, password);
        navigate("/");
    }

    return(
        <>
        <Button variant="primary" onClick={() => navigate(-1)}>Back</Button>
        <div className="vw-100 vh-100 d-flex justify-content-center align-items-center ">
            <form className="d-flex flex-column gap-3" onSubmit={handleSubmit} style={{width:"50%"}}>
            <label>Username</label>
                <input value={username} onChange={(e)=>setUsername(e.target.value)} type="text" required/>

                <label>Password</label>
                <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" required/>

                <button type="submit">Admin Sign in</button>
            </form>
        </div>
        </>
    )
} 
export default AdminSignin