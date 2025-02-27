import React, {useState, useRef, useEffect} from 'react';
import '../Styles/Skills.css';
import SkillBar from './SkillBar';

export default function Skills() {
    
    const[isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef();

    useEffect(() =>{
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsVisible(entry.isIntersecting)
        },
        {
          threshold: 0.2,
        }
      );
      if(sectionRef.current){
        observer.observe(sectionRef.current)
      }

      return () => {
        if(sectionRef.current){
          observer.unobserve(sectionRef.current)
        }
      }
    });

  return (
    <section id='section-skills' ref={sectionRef}>
      <div className='content-about'>
        <div className='content-sobreMi'>
            <h2>HABILIDADES</h2>
            <div className='content-span'>
              <span className='line large'></span>
              <span className='line small'></span>
            </div>
        </div>
      </div>
      <div className='content-skills'>
        < SkillBar skillName="HTMML/CSS" percentage={80} isVisible={isVisible}/>
        < SkillBar skillName="JAVASCRIPS" percentage={30} isVisible={isVisible}/>
        < SkillBar skillName="PHP" percentage={20} isVisible={isVisible}/>
        < SkillBar skillName="REACT" percentage={30} isVisible={isVisible}/>
        < SkillBar skillName="JAVA" percentage={20} isVisible={isVisible}/>
        < SkillBar skillName="MYSQL" percentage={40} isVisible={isVisible}/>
      </div>
    </section>
  )
}
