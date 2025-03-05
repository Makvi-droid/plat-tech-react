import './navbar.css';
import logo from './assets/logo.svg';

function Navbar(){

    return(
        <>
            <section>
                <div className="navigation">
                <img src={logo} alt='company logo'/>
                    <ul>
                        <li><a>Home</a></li>
                        <li><a>Features</a></li>
                        <li><a>About Us</a></li>
                        <li><a><i className="fa-solid fa-circle-user"></i></a></li>
                        <li><a><i className="fa-solid fa-gear"></i></a></li>
                    </ul>
                </div>
            </section>
        </>
    );
}

export default Navbar;