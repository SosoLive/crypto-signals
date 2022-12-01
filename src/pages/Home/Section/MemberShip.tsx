import { useRef } from 'react'
import { useInViewport } from 'react-in-viewport'
import '@lottiefiles/lottie-player'
import { ReactComponent as TickIcon } from '@material-icons/svg/svg/done/outline.svg'
import { membershipPlan } from 'config/membershipPlan'

const MemberShip = () => {
	const partnerRef = useRef<HTMLDivElement>(null)
	const partnerViewport = useInViewport(partnerRef)
	return (
		<section id="membership" className="membership">
			<div className="title">
				<div className="container">
					<div className="introduction">
						<h5>HAPPY TO INTRODUCE OUR</h5>
						<div className="divider" />
						<h1>Membeship Plans</h1>
						<p>
							Stop losing trades and being on the wrong side of the market. Our setups are
							carefully handpicked to bring you all the information you need to make a
							profitable trade while maintaining a low Risk/Reward.
						</p>
					</div>
					<div className="lottie-player">
						<lottie-player
							src="https://assets4.lottiefiles.com/packages/lf20_pvso4otf.json"
							background="transparent"
							speed="1"
							style={{ width: '300px', height: '300px' }}
							loop
							autoplay
						></lottie-player>
					</div>
				</div>
			</div>
			<div className="content">
				<div className="polygon" />
				<div className="container">
					<div className="membership-plans">
						{membershipPlan.map((plan) => (
							<div className="membership-plan" key={plan.type}>
								<h3 className="type">{plan.type}</h3>
								<h1>
									<span className="currency">$</span>&nbsp;
									<span className="price">{plan.price}</span>
									<span className="period"> / {plan.period}</span>
								</h1>
								<div className="detail-list">
									{plan.content.map((detail) => (
										<div className="detail" key={detail}>
											<TickIcon />
											<p>{detail}</p>
										</div>
									))}
								</div>
								<p className="description">{plan.description}</p>
								<button>Get Started</button>
								{plan.isPopular ? <div className="popular">Popular</div> : <></>}
							</div>
						))}
					</div>

					<div className="ascending-arrow">
						<img src="/images/ascending-arrow.png" alt="" />
					</div>
					<div
						className={`partner ${
							partnerViewport.inViewport &&
							partnerViewport.enterCount === 1 &&
							'animation'
						}`}
						ref={partnerRef}
					>
						<div className="partnered-with">
							<h1>
								Partnered With
								<p>Driving technology for leading brands</p>
							</h1>
						</div>
						<div className="binance-logo">
							<img src="/images/binance-logo.png" alt="" />
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default MemberShip
