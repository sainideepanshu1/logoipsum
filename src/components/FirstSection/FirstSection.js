import React from 'react'
import './FirstSection.css'
import pic from '../../media/7b7b81beef751e84be8344c729c39ff8.png'
import headerData from '../../data/Header';
const FirstSection = () => {
  return (
    <div className='outer'>
        <div className="left">
            <div className="content">
                <div className="text1">{headerData.text1}</div>
                <div className="text2">{headerData.text2a}<span>{headerData.text2b}</span><br />{headerData.text2c}</div>
                <div className="text3">{headerData.text3a}<br />{headerData.text3b}</div>
            </div>
            <div className="actions">
                <button className='getbtn'>Get In Touch</button>
            </div>
        </div>
        <div className='right'>
            {/* <img className='photo' src={pic} alt="pic" /> */}
        </div>
    </div>
  )
}

export default FirstSection