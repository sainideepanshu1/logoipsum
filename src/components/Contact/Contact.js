import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
    <div className='outercontact'>
        <div className="contentsection">
            <div className="uppercontent">Get In Touch</div>
            <div className="lowercontent">
                <div className="lower1">Contact us</div>
                <div className="lower2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            </div>
        </div>
        <div className="outerform">
            <form action="">
            <div className="formm">
                <div className="formrow gapp">
                    <div className="formcolumn">
                        <label htmlFor="">First Name</label>
                        <input className='inp' type="text" />
                    </div>
                    <div className="formcolumn">
                        <label htmlFor="">Last Name</label>
                        <input className='inp' type="text" />
                    </div>
                </div>
                <div className="formrow gapp">
                <div className="formcolumn">
                        <label htmlFor="">Email</label>
                        <input className='inp' type="text" />
                    </div>
                    <div className="formcolumn">
                        <label htmlFor="">Phone Number</label>
                        <input className='inp' type="text" />
                    </div>
                </div>
                <div className="formrow">
                    <div className='selecttopic'>
                        <label htmlFor="">Choose a topic</label>
                        <select name="" id=""><option value="">Select...</option></select>
                    </div>
                </div>
                <div className="formrow">
                    <div className="formcolumn">
                    <label htmlFor="">Message</label>
                    <textarea className='message' placeholder='Type your Message...' cols="30" rows="10"></textarea>
                    </div>
                </div>
                <div className="formrow">
                    <div className="check">
                        <input type="checkbox"  />
                        <label htmlFor="">I accept the terms</label>
                    </div>
                </div>
                <button className='sbtbtn'>Submit</button>
            </div>
        </form>
        </div>
    </div>
  )
}

export default Contact