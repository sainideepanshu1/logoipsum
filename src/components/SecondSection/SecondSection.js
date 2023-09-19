import React from 'react'
import './SecondSection.css'
import card from '../../data/SkillCards'
export default function SecondSection() {
  return (
    <div className='container'>
        <div className="section-tile">
            <div className="skills">My Skills</div>
            <div className="expertise">My Expertise</div>
        </div>
        <div className="row">
        {card.map((i)=>{
        return <div className='card'>
                    <img className='icon' src={i.path} />
                    <div className="content2">
                        <div className='title'>{i.title}</div>
                        <div className='info'>{i.info}</div>
                    </div>
               </div>
        })}
        </div>
    </div>
  )
}
