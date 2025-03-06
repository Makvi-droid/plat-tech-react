import './footer.css';

function Footer(){

    const date = new Date().getFullYear();

    return(
        <>
            <div className='copyright'>
                <i class="fa-regular fa-copyright"></i>
                <p>Copyright {date}</p>
            </div>
        </>
    );
}

export default Footer;