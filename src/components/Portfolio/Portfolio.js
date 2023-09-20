import React from 'react'
import PortfolioCards from '../../data/PortfolioCards'
import './Portfolio.css'
import icon from '../../media/Social icon.svg'
import icon2 from '../../media/Vector.svg'

export default function Portfolio() {
  return (
    <div className='outerPortfolio'>
        <div className="upper">
            <div className="upperleft">
                <div className="ultext">
                   <div className="ul1">Recent Projects</div>
                   <div className="ul2">My Portfolio</div>
                </div>
            </div>
            <div className="upperright">
                <button className='visit'><img src={icon} alt="icon" />Visit My Dribble</button>
            </div>
        </div>
        <div className="lower">
        {PortfolioCards.map((i)=>{
        return <div className='pfcards'>
                    <img className='images' src={i.path} alt='pic' />
                    <div className="pfcontent">
                        <div className="uppercon">
                            <div className='title'>{i.title}</div>
                            <div className='info'>{i.info}</div>
                        </div>
                        <div className="lowercon">
                            <div className="lowerleft">View In Dribble</div>
                            <div className="lowerright"><img src={icon2} alt="vector" /></div>
                        </div>
                    </div>
               </div>
        })}
        </div>
    </div>
  )
}
