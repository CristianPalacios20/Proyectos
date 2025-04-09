import React, { useEffect, useState } from 'react';
import '../Styles/SkillsBar.css';

export default function SkillBar({skillName, percentage, isVisible}) {
    const [width, setWidth] = useState(0);

    useEffect(() =>{
      if(isVisible){
        setWidth(percentage);
      }else{
        setWidth(0);
      }
    }, [isVisible, percentage]);

  return (
    <div className='skills'>
      <span className='skill-name'>{ skillName }</span>
      <div className='progress-bar'>
          <div 
            className='progress' 
            style={{ width: `${width}%` }}
          ></div>
          <span className='percentage'>{ percentage }%</span>
      </div>
  </div>
  )
}
