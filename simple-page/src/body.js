import './body.css';
import coffee from './assets/espresso.jpg';


function Body(){
    return(
        <>
            <div className="main-content">
                <div className="left-content">
                    <img className='coffee' src={coffee} alt='coffee image'/>
                </div>
            </div>
        </>
    );
}

export default Body;