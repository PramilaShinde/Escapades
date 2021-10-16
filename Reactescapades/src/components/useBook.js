import {useState, useEffect} from "react";

const useBook = (props) => {
    const [values, setValues] = useState ({
        bookdate:'',
        noofperson:'',
        customer_fk:'1'
    });

    console.log(values)

    const [errors, setErrors] = useState({});
    const [isSubmiting, setIsSubmiting] = useState(false)

    const handleChange = e => { //it will assign value inserted in perticular box to perticular name of that box
        const {name, value}=e.target;  //setting target
        setValues({
            ...values,  //it will allow us to add more states without throwing error
            [name]:value
        });
        
    }; 

    // const setEventid=(props)=>{
    //     setValues([values.event_fk]=this.props.match.params.id)
    // }

    const handleSubmit = e => { //kept values as it is in input box
        e.preventDefault();
       
        setErrors(values);
        setIsSubmiting(true);
        fetch("http://localhost:8484/eventbook",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(values)
        }).then(()=>{
            console.log("Booking Succesfully...")
        })

    };
    return {handleChange, values, handleSubmit, errors};
    
};

export default useBook