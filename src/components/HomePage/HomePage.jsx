import './HomePage.scss'

const HomePage = () => {
  return (
    <>
      <div className='homepage_container'>
        {/* <div className='img_container'>
          <img src="src/assets/Screen Shot 2024-04-24 at 11.43.27 AM.png" alt="" />
        </div> */}

        <div className='intro_container'>
          <div>
            <h1>Anchi Nguyen</h1>
            <h5>A Software Developer and a seasoned Illustrator,</h5>
          </div>

          <div>
            <p>I graduated from UofM with a graphic design major. I have done multiple graphic jobs. During my time at design jobs, I need to use html and css for editing. While learning basic coding for designers, I got interested in software development. </p>
            <p>My favorite part about the development process is seeing my ideas come to life. I love coming up with ideas, designing the UI using my graphic designer skills, and implementing it using my coding skills. I have done this with my StickyCat project, which is a full-stack application with React frontend and Python backend. </p>
            <p>I’m very excited to take on new challenges and use my coding and designing skills to make an impact. </p>
          </div>
        </div>
      </div>

    </>
  )
}

export default HomePage