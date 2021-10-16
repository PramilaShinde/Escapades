import {useState, useEffect} from "react";

const useForm = (validateInfo,props) => {
    const [values, setValues] = useState ({
        cname : '',
        username : '',
        password : '',
        password1 : '',
        mob_no : '',
        email_id : '',
        age : '',
        gender : '',
        address : '',
        city : '',
        event_fk:'1'
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



//     function question1()
// {
//   var selectedAns;
//   var questions = document.getElementsByName(values.gender);
//   for(var i = 0; i < questions.length; i++) {
//      if(questions[i].checked == true) {
//      selectedAns = questions[i].value;
//      break;
//   }

//   if(selectedAns== 'Male'){
//     alert ("That's the correct answer!");
//   } 
//   else
//   {
//    alert ("Oops! try again!");
//   }
// }
// }

    const handleSubmit = e => { //kept values as it is in input box
        e.preventDefault();
       
        setErrors(validateInfo(values));
        setIsSubmiting(true);
        fetch("http://localhost:8484/customer",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(values)
        }).then(()=>{
            console.log("Register Succesfully...")
        })

    };
    return {handleChange, values, handleSubmit, errors};
    
};

export default useForm