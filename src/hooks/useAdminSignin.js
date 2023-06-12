import { useAuthContext } from "./useAuthContext";
import { useState } from "react";
export const useAdminSignin = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const { dispatch } = useAuthContext();

    const signin = async (username, password) => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch('https://assignment2-backend-lake.vercel.app/admin/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            })

            const json = await response.json()
            if (response.ok) {
                localStorage.setItem('admin', JSON.stringify(json))
                dispatch({ type: 'LOGIN_ADMIN', payload: json })
            } else {
                setError(json.err)
            }

        } finally {
            setIsLoading(false)
        }
    }

    return { signin, isLoading, error }
}