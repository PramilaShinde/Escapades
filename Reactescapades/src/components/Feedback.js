import React, { useEffect, useState } from "react";

const Feedback = () =>{
    const [data, setData] = useState({
        name:'',
        comment:'',
        rating:''
    });

    console.log(data);

   // const [data1, setData1] = useState(null);

    const handleChangeValue = e => {
        const {name, value}=e.target;  //setting target
        setData({
            ...data,  //it will allow us to add more states without throwing error
            [name]:value
    })
  
}
    const submitFeedback = e => {
        e.preventDefault();

        fetch("http://localhost:8484/feedback",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(data)
        }).then(()=>{
            console.log("Feedback Submitted")
        })
    };
        return {submitFeedback, handleChangeValue,data};
}

export default Feedback