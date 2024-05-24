import './Navigator.scss'
const Navigator = () => {
  return (
    <header className='header_container'>
        <nav className='navlink_wrapper'>
            <div>home</div>
            <div>about</div>
            <div>projects</div>
            <div>contact</div>
        </nav>

        <div className='logo'>ANCHI NGUYEN</div>

        <div className='social-link_wrapper'>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-github"></i>
            <i className="fa-brands fa-linkedin"></i>
        </div>
    </header>
  )
}

export default Navigator