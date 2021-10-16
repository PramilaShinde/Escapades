import React from 'react';
import './Footer.css';
//import { Button } from './Button';
import { Link } from 'react-router-dom';
import Enquiry from './Enquiry'
import Navbar from './Navbar';
import "./About.css"

function AboutUs() {

  const {submitEnquiry, handleChangeValue,data} = Enquiry();
    
     return (
      <div>
        <div className="about-info">
            <Navbar/>
            <h1>Escapades Journey</h1>
            <article className="article">	It is a platform for travel enthusiasts.
                Bring out your passion and love for travel. 
                Connect with travel lovers, share your experiences and inspire others. </article>
            <center>
            <table>
                
                <tr>
                    <td> <h1 className="foundedBy">Founded By</h1></td>
                 </tr>
                 <tr>
                    <td className="fstrow"><h2>Uday Salokhe</h2>
                     <h3 className="fstrow">7972193118</h3>
                    <h3 className="fstrow">uday@gmail.com</h3></td>

                    <td><h2>Siddhant Dabade</h2>
                     <h3>9834084565</h3>
                    <h3>sid@gmail.com</h3></td>

                    <td><h2>Rohan Pawar</h2>
                     <h3>9096571828</h3>
                    <h3>rohan@gmail.com</h3></td>
                </tr>
                <tr>
                <td><h2>Pramila Shinde</h2>
                     <h3>7972193118</h3>
                    <h3>pramila@gmail.com</h3></td>

                    <td><h2>Priyanka Patil</h2>
                     <h3>9834084565</h3>
                    <h3>priya@gmail.com</h3></td>

                    <td><h2>Vedashree Chile</h2>
                     <h3>9096571828</h3>
                    <h3>ved@gmail.com</h3></td>
                </tr>
               
            </table>
            </center>
          </div>
      <section className='submit'>
        <div className='submit'>
          <form onSubmit={submitEnquiry}>
          <label for='fullname'  className='lfullname'>Fullname :</label>
            <br/>
            <input
              className='fullname'
              name='fullname'
              type='text'
              placeholder='Type your name here'
              value={data.fullname} 
              onChange={handleChangeValue}
            />
            <br/>
            <label for='phone' className='lphone'>Phone :</label>
            <br/>
            <input
              className='phone'
              name='phone'
              type='number'
              placeholder='Enter mobile number'
              value={data.phone}
              onChange={handleChangeValue}
            />
            <br/>
            <label for='emailid'  className='lemailid'>Email_id :</label>
            <br/>
            <input
              className='emailid'
              name='emailid'
              type='text'
              placeholder='Type emailid here'
              value={data.emailid} 
              onChange={handleChangeValue}
            />
            <br/>
            <label for='message'  className='lmessage'>Message :</label>
            <br/>
            <textarea
              rows='7' 
              cols='50'
              className='message'
              name='message'
              form='usrform'
              placeholder='Type your query'
              value={data.comment} 
              onChange={handleChangeValue}
            ></textarea>
            <br/>
            {/* <br/> */}
            <button className='fed-btn' buttonStyle='btn--outline'  >Submit </button>
          </form>
          </div>
          </section>
      </div>
      
  )
  
         
        
       
    
}
export default AboutUs