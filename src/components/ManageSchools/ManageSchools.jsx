import React from "react"
import img from "../images/pricing.jpg"
import Back from "../common/Back"
import "./ManageSchools.css"

const Register = () => {
  return (
    <>
    <section className='contact mb'>
    <Back name='Manage your School' title='Create an optimal learning environment for students' cover={img} />
     </section> 
      <section className='contact mb'>
       
        <div className='container'>
          <form className='shadow'>
            <h4>Fillup The Form</h4> <br />
            <div>
              <input type='text' placeholder='Name of School' />
              <input type='text' placeholder='Type' />
            </div>
            <input type='text' placeholder='Location' />
            <input type='text' placeholder='Fees' />
            
            <button>Submit Request</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Register
