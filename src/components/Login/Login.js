import React from 'react';
import './Login.css'
const Login = ({ data }) => {
    return (
        <div className='outerlogin'>
            <div className="lower1">Login</div>
            <div className="fields">
                {data.map((item) => (
                    <div className="formcolumn">
                        <label htmlFor="">{item.label}</label>
                        <input className='logininputs' type={item.type} placeholder={item.placeholder} />
                    </div>
                ))}

            </div>
            <button className='feedbackbutton'>Submit</button>
        </div>
    );
}

export default Login;
