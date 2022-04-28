// scss file
import "./hero.scss"

function Hero ({text, numbers}) {
    return (
   
    <div className="hero-content">
        <p className="hero-text">{text}</p>
        <strong className="hero-number">{numbers}</strong>
    </div>
       

    )
}

export default Hero;