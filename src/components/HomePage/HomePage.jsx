import { useEffect, useState } from 'react'
import Projects from '../Projects/Projects'
import Skill from '../Skill/Skill'
import './HomePage.scss'
import { isFileServingAllowed } from 'vite'

const HomePage = () => {
  const [loading, setLoading] = useState(true)

  const text = 'Welcome to my Portfolio!! -'
  const spingingText = text.split('').map((char, i) => {
    return (
        <div style={{transform:`rotate(${i * 13}deg)`}} className='text'>{char}</div>
    )
  })

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])


  return (
    <>
      {loading ?(
        <div>loading...</div>
      ) :(
        <>
          <div className='homepage_container'>

          <section className='about'>
              <div className='intro_container'>
                <div className='name' >
                  <h1 >Hi, I'm Anchi Nguyen</h1>
                  <h4>A Software Developer and a seasoned Illustrator</h4>
                </div>

                <div className='intro-paragraph'>
                  <p>I graduated from UofM with a graphic design major. I have done multiple graphic projects. During my time woking on design projects, I need to use HTML and CSS for editing. While learning basic coding for designers, I got interested in software development. </p>
                  <p>My favorite part about the development process is seeing my ideas come to life. I love coming up with ideas, designing the UI using my graphic designer skills, and implementing it using my coding skills. I have done this with my StickyCat project, which is a full-stack application with React frontend and Python backend. </p>
                  <p>I’m very excited to take on new challenges and use my coding and designing skills to make an impact. </p>
                </div>

                <div className='button-link'>
                  <button>Resume</button>
                  <button>LinkedIn</button>
                  <button>Github</button>
                </div>
              </div>

              <div className='img_container'>
                <img src="src/assets/Screen Shot 2024-04-24 at 11.43.27 AM.png" alt="" />
              </div>
          <div className='spinText'>{spingingText}</div>
          </section>



          <Skill/>
          <Projects />
          </div>
        </>
      )}

    </>
  )
}

export default HomePage