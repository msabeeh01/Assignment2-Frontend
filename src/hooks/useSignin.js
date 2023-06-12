import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useSignin = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const { dispatch } = useAuthContext();

    const signin = async (stuNum, password) => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch('https://assignment2-backend-lake.vercel.app/users/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    stuNum: stuNum,
                    password: password
                })
            })

            const json = await response.json()
            if (response.ok) {
                localStorage.setItem('studentNum', JSON.stringify(json))
                dispatch({ type: 'LOGIN', payload: json })
            } else {
                setError(json.err)
            }
        } finally {
            setIsLoading(false)
        }
    }

    return { signin, isLoading, error }
}