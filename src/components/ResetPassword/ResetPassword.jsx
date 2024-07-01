import React from "react"

const Register = () => {
  return (
    <>
      <section className='contact mb'>
       
        <div className='container'>
          <form className='shadow'>
            <h4>Reset your Password</h4> <br />
        
              <input type='text' placeholder='New Password' />
              <input type='text' placeholder='Confirm New Password' />
            
            <button>Update</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Register