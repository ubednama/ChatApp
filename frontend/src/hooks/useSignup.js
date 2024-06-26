import {useState} from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

const useSignup = () => {
    const [loading, setLoading] = useState(false);
    const {setAuthUser} = useAuthContext()

    const signup = async({fullName, username, password, confirmPassword, gender}) =>{
        const success = handleInputErrors({fullName, username, password, confirmPassword, gender})
        if(!success) return;

        try{
            const res = await fetch("/api/auth/signup", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({fullName, username, password, confirmPassword, gender})
            })

            const data = await res.json();
            if(data.error){
                throw new Error(data.error)
            }

            //localStorage
            localStorage.setItem("chat-user",JSON.stringify(data))

            //context
            setAuthUser(data)

            // console.log(data)
        } catch(error) {
            toast.error(error.message)
        } finally {
            setLoading(false);
        }

        
    }
    return {loading, signup};
}

export default useSignup;


function handleInputErrors({fullName, username, password, confirmPassword, gender}){
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if(!fullName || !username || !password || !confirmPassword || !gender) {
        toast.error("Please fill all fields")
        return false
    }

    // we compare this both here and at backend as-well
    if(password !== confirmPassword){
        toast.error('Passwords do not match')
        return false
    }

    if(password.length < 8){
        toast.error('Password must be at least 8 characters')
    }

    if(!passwordRegex.test(password)){
        toast.error("Password must contain at least one lowercase letter, one uppercase letter, one digit, one special character, and be at least 8 characters long.")
        return false
    }

    return true
}