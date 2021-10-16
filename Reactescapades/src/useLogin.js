import { useState } from "react";
import validateInfo from "./validateInfo";

const useLogin= validateInfo =>{
    const [values, setValues] = useState({
        username : '',
        password : ''
    });

    const [errors, setErrors] = useState({});

    const [isSubmiting, setIsSubmiting] = useState(false);

    const handleChange = e =>{
        const {name,value}= e.target;

        setValues({
            ...values,
            [name]:value
        });
    };

    const handleSubmit = e =>{
        e.preventDefault();

        setErrors(validateInfo(values));
        setIsSubmiting(true);
        fetch("http://localhost:8484/customer/login/"+values.username+"/"+values.password,{
            method:"GET",
            headers:{"Content-Type":"application/json"},
        }).then((Response)=>{
            console.log(Response);
            if(Response.status===200){
                console.log("login success");
            }
            else{
                console.log("unsuccess");
            }
           
        })
    }

    return {handleChange, values, handleSubmit, errors};


}
export default useLogin