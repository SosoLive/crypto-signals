import { Hero, Service, MemberShip, GetInTouch } from './Section'
import './home.scss'

const Home = () => {
	return (
		<div className="home">
			<Hero />
			<Service />
			<MemberShip />
			<GetInTouch />
		</div>
	)
}

export default Home
