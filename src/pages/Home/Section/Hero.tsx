import '@lottiefiles/lottie-player'
import { ReactComponent as BackgroundSVG } from 'assets/icons/back-bottom.svg'
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
				<lottie-player
					src="https://crytodreams.io/wp-content/uploads/2022/09/lf30_editor_qwyw85mi.json"
					background="transparent"
					speed="1"
					style={{ width: '200px', height: '270px' }}
					loop
					autoplay
				></lottie-player>
			</div>
		</section>
	)
}

export default Hero
