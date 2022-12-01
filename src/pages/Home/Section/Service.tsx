import { useRef } from 'react'
import { useInViewport } from 'react-in-viewport'

const Service = () => {
	const titleRef = useRef<HTMLHeadingElement>(null)
	const titleViewport = useInViewport(titleRef)
	const typeRef = useRef<HTMLDivElement>(null)
	const typeViewport = useInViewport(typeRef)
	const firstItemRef = useRef<HTMLDivElement>(null)
	const firstItemViewport = useInViewport(firstItemRef)
	const secondItemRef = useRef<HTMLDivElement>(null)
	const secondItemViewport = useInViewport(secondItemRef)
	const thirdItemRef = useRef<HTMLDivElement>(null)
	const thirdItemViewport = useInViewport(thirdItemRef)

	return (
		<section className="service">
			<div className="container">
				<h2
					ref={titleRef}
					className={`${
						titleViewport.inViewport && titleViewport.enterCount === 1 && 'animation'
					}`}
				>
					PROPESSIONAL SERVICES
				</h2>
				<h5
					className={`${
						titleViewport.inViewport && titleViewport.enterCount === 1 && 'animation'
					}`}
				>
					The Best Crypto Trading Company In North America
				</h5>
				<div
					className={`type ${
						typeViewport.inViewport && typeViewport.enterCount === 1 && 'animation'
					}`}
					ref={typeRef}
				>
					<h3 className={`${typeViewport.leaveCount >= 1 && 'opacity-1'}`}>
						VIP Trading Group
					</h3>
					<h3 className={`${typeViewport.leaveCount >= 1 && 'opacity-1'}`}>
						Crypto Trading Course
					</h3>
					<h3 className={`${typeViewport.leaveCount >= 1 && 'opacity-1'}`}>
						Daily Trade Signals
					</h3>
				</div>
				<div className="service-detail">
					<div
						className={`item ${
							firstItemViewport.inViewport &&
							firstItemViewport.enterCount === 1 &&
							'animation'
						}`}
						ref={firstItemRef}
					>
						<div className="description">
							<h3>Daily Trade Signals and Market Alerts</h3>
							<p>
								Never miss a trade or a trading update with our custom-built automated
								alert system on mobile and desktop for entries, exits and stop losses.
							</p>
						</div>
						<div className="image">
							<img src="/images/man-investing-in-crypto.png" alt="" />
						</div>
					</div>
					<div
						className={`item ${
							secondItemViewport.inViewport &&
							secondItemViewport.enterCount === 1 &&
							'animation'
						}`}
						ref={secondItemRef}
					>
						<div className="description">
							<h3>Crypto Trading Course</h3>
							<p>
								An extensive course covering all fundamentals of trading and technical
								analysis with a strict protocol on managing risk and developing positive
								and proactive trading psychology.
							</p>
						</div>
						<div className="image">
							<img src="/images/crypto-trading-app.png" alt="" />
						</div>
					</div>
					<div
						className={`item ${
							thirdItemViewport.inViewport &&
							thirdItemViewport.enterCount === 1 &&
							'animation'
						}`}
						ref={thirdItemRef}
					>
						<div className="description">
							<h3>Vip Trading Group</h3>
							<p>
								Join our Massive Community of +2000 Members led by Full-time professional
								traders and gain access to daily market insights, analysis, trade calls
								and signals.
							</p>
						</div>
						<div className="image">
							<img src="/images/man-looking-at-cryptocurrency-trading-desk.png" alt="" />
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Service
