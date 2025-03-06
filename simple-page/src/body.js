import './body.css';
import coffee from './assets/espresso.jpg';


function Body(){
    return(
        <>
            <div className="main-content">
                <div className="left-content">
                    <img className='coffee' src={coffee} alt='coffee image'/>
                </div>
                <div className="right-content">
                    <h2>Brewtiful Chaos: The Coffee Lover’s Sanctuary</h2>
                    <p>Welcome, fellow caffeine-dependent lifeform. If you're here, chances are you're running on two hours of sleep, a questionable amount of anxiety, and the desperate hope that coffee will fix everything. Spoiler alert: It won’t. But it will make existing slightly less unbearable, so we take what we can get.

                        They say life is a journey, but let’s be honest—it’s more like a never-ending to-do list written by someone who actively hates you. The only thing standing between you and total collapse is a steaming cup of liquid motivation. Coffee doesn’t judge, doesn’t ask questions, and never lets you down (unless you spill it, and then it betrays you in the worst way possible).

                        Here, we celebrate the sacred ritual of brewing, sipping, and pretending we have our lives together. Whether you like it black, with enough sugar to put you in a coma, or as an overcomplicated latte that takes longer to order than to drink—this is your home.

                        So grab a mug, take a deep, exhausted sigh, and embrace the chaos. Life is a mess, but at least we have coffee. ☕</p>

                        <div className='pages'>
                            <span>Visit our social media pages:</span><br/>
                            <div className='social-media'>
                                <i class="fa-brands fa-facebook"></i>
                                <i class="fa-brands fa-square-instagram"></i>
                                <i class="fa-brands fa-square-x-twitter"></i>
                                <i class="fa-brands fa-wordpress"></i>
                            </div>
                        </div>

                    <div className='contact'>
                        <button className='contactBtn'>Contact Us</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Body;