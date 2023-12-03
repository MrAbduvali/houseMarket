import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
export const useAuthHook = () => {
    const [logedIn, setLogedIn] = useState(false)
    const [checkingStatus, setCheckingStatus] = useState(true)

    useEffect(() => {
        const auth = getAuth();

        onAuthStateChanged(auth, (user) => {
            if (user) {
                setLogedIn(true)
            }
            setCheckingStatus(false)
        })
    })

    return { logedIn, checkingStatus }
}
