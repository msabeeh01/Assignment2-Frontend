import { useAuthContext } from "../../hooks/useAuthContext";
const HomePage = () => {
    const { student } = useAuthContext();
    const {admin} = useAuthContext();
    const {dispatch} = useAuthContext();

    if(student){
        return(
            <div className="d-flex vw-100 vh-100 justify-content-center align-items-center">
                <h1>Home Page for {student.stuNum}</h1>
            </div>
        )
    }

    if(admin){
        return(
            <div className="d-flex vw-100 vh-100 justify-content-center align-items-center">
                <h1>Home Page for {admin.username}</h1>
            </div>
        )
    }
}

export default HomePage