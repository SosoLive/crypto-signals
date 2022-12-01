import React, { useRef } from 'react'
import { useInViewport } from 'react-in-viewport'
import { ReactComponent as PhoneIcon } from '@material-icons/svg/svg/call/outline.svg'
import { ReactComponent as MailIcon } from '@material-icons/svg/svg/mail/outline.svg'
import { ReactComponent as RocketIcon } from '@material-icons/svg/svg/rocket_launch/outline.svg'

const GetInTouch = () => {
	const titleRef = useRef<HTMLHeadingElement>(null)
	const descriptionRef = useRef<HTMLHeadingElement>(null)
	const contactMethodRef = useRef<HTMLDivElement>(null)
	const contactUsRef = useRef<HTMLDivElement>(null)
	const titleViewport = useInViewport(titleRef)
	const descriptionViewport = useInViewport(descriptionRef)
	const contactMethodViewport = useInViewport(contactMethodRef)
	const contactUsViewport = useInViewport(contactUsRef)

	return (
		<section className="get-in-touch">
			<div className="container">
				<h1
					ref={titleRef}
					className={`${
						titleViewport.inViewport && titleViewport.enterCount === 1 && 'animation'
					}`}
				>
					GET IN TOUCH
				</h1>
				<h5
					ref={descriptionRef}
					className={`${
						descriptionViewport.inViewport &&
						descriptionViewport.enterCount === 1 &&
						'animation'
					}`}
				>
					Contact us to have any question answered, or just to say hello
				</h5>
				<div className="divider" />
				<div
					className={`contact-method ${
						contactMethodViewport.inViewport &&
						contactMethodViewport.enterCount === 1 &&
						'animation'
					}`}
					ref={contactMethodRef}
				>
					<div className={`item ${contactMethodViewport.leaveCount >= 1 && 'opacity-1'}`}>
						<PhoneIcon />
						<h2>Call us</h2>
						<h5>Book A Call</h5>
					</div>
					<div className={`item ${contactMethodViewport.leaveCount >= 1 && 'opacity-1'}`}>
						<MailIcon />
						<h2>E-mail us at</h2>
						<h5>info.cryptodreams@gmail.com</h5>
					</div>
					<div className={`item ${contactMethodViewport.leaveCount >= 1 && 'opacity-1'}`}>
						<RocketIcon />
						<h2>Crypto Dreams</h2>
						<h5>To The Moon</h5>
					</div>
				</div>
				<div
					className={`contact-email ${
						contactUsViewport.inViewport &&
						contactUsViewport.enterCount === 1 &&
						'animation'
					}`}
					ref={contactUsRef}
				>
					<img src="/images/instagram.gif" alt="Instagram" className="instagram" />
					<div className="contact-us">
						<input type="text" placeholder="Name" />
						<input type="email" placeholder="Email" />
						<textarea placeholder="Message" rows={6}></textarea>
						<button>Send Message</button>
					</div>
				</div>
				<div className="webengine">
					<a href="https://webengine.site">POWERED BY WEBENGINE -{'>'}</a>
				</div>
			</div>
		</section>
	)
}

export default GetInTouch
