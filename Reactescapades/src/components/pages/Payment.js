import React from "react";
import usePayment from './usePayment';

const Payment = () => {
    const {handleChange, values, handleSubmit, errors,alert} = usePayment();

    return(
        <div className='usePayment'>
            <form className='form' onSubmit={handleSubmit}>
                <h1>
                    Welcome To Escapades
                </h1>
                <div className='usePayment'>
                    <label htmlFor='name' className='useBook' >
                      Bookdate: 
                    </label>
                    <input id='name' type='text' name='name' className='useBook'  value={values.name} onChange={handleChange} />
                
                </div>

                <div className='usePayment'>
                    <label htmlFor='paydate' className='useBook'>
                      No of person: 
                    </label>
                    <input id='paydate' type='text' name='paydate' className='useBook' value={values.paydate} onChange={handleChange}/>
                 
                </div>

               

                <button className='submit' type='submit' onClick={handleSubmit}>Payment</button><br/>
           
                <span className='home'>Go to home page <h6><a href='\Home'></a></h6></span>
            </form>
        </div>
    )
}

export default Payment