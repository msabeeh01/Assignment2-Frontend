import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

import Signup from "../signup"



const SignLogin = () => {
    const navigate = useNavigate()
    return (
        <div className="d-flex justify-content-center align-items-center flex-column bg-dark gap-3" style={{width: "100%", height: "100vh"}}>
            <button className="w-25" onClick={() => navigate("/signin")}>
                Sign In
            </button>
            
            <button className="w-25" onClick={() => navigate("/signup")}>
                Sign Up
            </button>

            <button className="w-25" onClick={() => navigate("/adminsignin")}>
                Admin Sign In
            </button>
            

        </div>
    )
}

export default SignLogin