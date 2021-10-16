import React from "react";
import useBook from './useBook';

const EventBooking = () => {
    const {handleChange, values, handleSubmit, errors} = useBook();

    return(
        <div className='useBook'>
            <form className='form' onSubmit={handleSubmit}>
                <h1>
                    Welcome To Escapades
                </h1>
                <div className='useBook'>
                    <label htmlFor='bookdate' className='useBook' >
                      Bookdate: 
                    </label>
                    <input id='bookdate' type='text' name='bookdate' className='useBook'  value={values.bookdate} onChange={handleChange} />
                    {/* {errors.username && <p>{errors.username}</p>} */}
                </div>

                <div className='useBook'>
                    <label htmlFor=' noofperson' className='useBook'>
                      No of person: 
                    </label>
                    <input id='noofperson' type='number' name='noofperson' className='useBook' value={values.noofperson} onChange={handleChange}/>
                    {/* {errors.password && <p>{errors.password}</p>} */}
                </div>

               

                <button className='submit' type='submit' onClick={handleSubmit}>Book Now</button><br/>
                  <button classname='form-input-btn' type='submit'> <a href='\pay'>Proceed to payment</a></button>
       
                {/* <span className='home'>Go to home page <h6><a href='\Login'>Login here</a></h6></span> */}
            </form>
        </div>
    )
}

export default EventBooking