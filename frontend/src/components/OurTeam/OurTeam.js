import React from 'react'
import "./OurTeam.css"
// import imgaes from '../../images/our-team'

function OurTeam(props) {
  return (
    <>
      <div className='p-r'>
        <div className='team-image'>
                <img alt='team' src={props.member1}/>
        </div>
        <div className='team-detail'>
            <h2>{props.name}</h2>
            <p>{props.position}</p>
        </div>
      </div>
    </>
  )
}

export default OurTeam
