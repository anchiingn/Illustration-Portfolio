import './Skill.scss'

const Skill = () => {
    return (
        <section className='skills'>
            {/* <h1>Skills</h1>
            <div className='skills_wrapper'>
                <div className='frontend'>
                    <h3>Front-End</h3>
                    <span></span>
                </div>
                <div className='backend'>
                    <h3>Back-End</h3>
                    <span></span>
                </div>
                <div className='data-management'>
                    <h3>Data Management</h3>
                    <span></span>
                </div>
            </div> */}
            <div className='es_container'>
                <div>
                    <h1 style={{marginBottom:'50px'}}>Education</h1>
                    <div style={{marginBottom:'20px'}}>
                        <div style={{display:'flex', justifyContent:'space-between'}}>
                            <h3>App Academy</h3>
                            <h4 style={{fontWeight:'500'}}>May 2023 - Jan 2024</h4>
                        </div>
                        <h5>Software Developer</h5>
                    </div>
                    <div>
                        <div style={{display:'flex', justifyContent:'space-between'}}>
                            <h3>University of Minnesota - Twin Cities</h3>
                            <h4 style={{fontWeight:'500'}}>Sep 2018 -  Aug 2021</h4>
                        </div>
                        <h5>B.F.A Graphic Design</h5>
                    </div>
                </div>

                <div style={{display:'flex', justifyContent:'center'}}>
                    <span id='black-line'></span>
                </div>

                <div>
                    <h1>Skills</h1>
                    <div className='skills_wrapper'>
                        <div className='frontend'>
                            <h3>Front-End</h3>
                            <span></span>
                        </div>
                        <div className='backend'>
                            <h3>Back-End</h3>
                            <span></span>
                        </div>
                        <div className='data-management'>
                            <h3>Data Management</h3>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skill