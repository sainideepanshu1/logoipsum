import React from 'react'
import './AboutMe.css'
import pic from '../../media/About Me.png'
export default function AboutMe() {
  return (
    <div className='outerContainer'>
        <img className='aboutmePic' src={pic} alt="pic" />
        <div className="aboutmeText">
            <div className="aboutMeTitle">
                <div className="about">About</div>
                <div className="aboutMe">About Me</div>
            </div>
            <div className="aboutMeInfo">
                <div className="aboutMeInfoo"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis. Nibh scelerisque ac adipiscing velit non nulla in amet pellentesque.</p>  <p>Sit turpis pretium eget maecenas. Vestibulum dolor mattis consectetur eget commodo vitae. Amet pellentesque sit pulvinar lorem mi a, euismod risus r.</p> </div>
            </div>
        </div>
    </div>
  )
}
