import '@lottiefiles/lottie-player'
import { ReactComponent as BackgroundSVG } from 'assets/icons/back-bottom.svg'
import Rocket from 'assets/icons/rocket.svg'
// import { rocket } from 'assets/lottie/rocket'

const Hero = () => {
	return (
		<section className="hero">
			<img src="/images/background.png" alt="Background" className="background" />
			<BackgroundSVG className="background-svg" />
			<div className="container">
				<img src="/images/logo.png" alt="Logo" className="logo" />
				<h1>
					<span className="header-first-span">The Ultimate Trading Experience</span>
					<br />
					<span className="header-second-span">BEGINS. HERE.</span>
				</h1>
				<p>
					At Crypto Dreams, we consider ourselves as one of the leading Crypto teaching
					platforms and North America's biggest Instagram community for crypto trading,
					news, and knowledge.
				</p>
				<a href="#membership">
					<button>
						JOIN CRYPTO DREAMS
						<img src="/images/double_down_arrow.png" alt="" />
					</button>
				</a>
				<img src={Rocket} alt="" className="rocket" />
			</div>
		</section>
	)
}

export default Hero
