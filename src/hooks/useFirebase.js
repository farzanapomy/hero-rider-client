import authInitialize from "../pages/Login/firebase/firebase.init";
import { getAuth, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { useEffect, useState } from "react";
authInitialize()


const useFirebase = () => {
    const [user, setUser] = useState({})
    const [admin, setAdmin] = useState(false)
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const auth = getAuth();



    const registerUser = (email, password, name, navigate) => {
        setIsLoading(true)
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const newUser = { email, displayName: name };
                setUser(newUser);
                saveUser(email, name)

                updateProfile(auth.currentUser, {
                    displayName: name
                })
                    .then(() => {
                    }).catch((error) => {
                        setError(error.massage)
                    })
                navigate('/Riders')
                console.log(result);
            })
            .catch((error) => {
                setError(error.massage)
            })
            .finally(() => setIsLoading(false))
    }

    const logInUser = (email, password,navigate) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                navigate('/Riders')
            })
            .catch((error) => {
                setError(error.massage)
            })
            .finally(() => setIsLoading(false))
    }


    // setAdmin


    useEffect(() => {
        const url = `https://protected-atoll-65365.herokuapp.com/users/${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])






    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {

            })
            .catch(error => {
                setError(error.massage)
            })
            .finally(() => setIsLoading(false))
    };

    // to check user state 


    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);

            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth])


    // save user
    const saveUser = (email, displayName) => {
        const user = { email, displayName };
        fetch('https://protected-atoll-65365.herokuapp.com/users', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }




    return {

        user,
        admin,
        isLoading,
        registerUser,
        logInUser,
        logOut,
        error
    }

};

export default useFirebase;