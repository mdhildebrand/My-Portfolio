import { HashLink as Link } from 'react-router-hash-link';

const Header = () => {
    return (
        <div id="header-bar">
            <Link to={'/#welcome-section'}><p>Home</p></Link>
            <Link to="/#projects-section"><p>Works</p></Link>
            <Link to="/#about-section"><p>About</p></Link>
        </div>
    )
}

export default Header