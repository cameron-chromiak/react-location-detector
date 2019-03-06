import React from 'react'
import './SeasonDisplay.css'

const seasonConfig = {
  summer: {
    text:'Let\'s hit the yeach',
    iconName: 'sun'
  },
  winter: {
    text: 'Burr, it is cold',
    iconName: 'snowflake'
  }
}

const getSeason = (lat, month)=> {
  if(month > 2 && month < 9){
      return lat > 0 ? 'summer' : 'winter'
  }else{
      return lat > 0 ? 'winter' : 'summer'
  }

}

const SeasonDisplay = (props) =>{
  const season = getSeason(props.lat, new Date().getMonth())
  const {text, iconName} = seasonConfig[season]

  return( <div>
    <i className={`icon-left ${iconName} icon massive`}/>
    <h1>{text}</h1>
    <i className={`icon-right ${iconName} icon massive`}/>
  </div>)
}

export default SeasonDisplay
