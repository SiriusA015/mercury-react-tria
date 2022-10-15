import { Link, Route, Switch } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Register from './Pages/Register/Register'
import LiveEvent from './Pages/LiveEvent/LiveEvent'
import PreviousRaces from './Pages/PreviousRaces/PreviousRaces'


function App() {
	return (
		<div className="App">
			<header>
				<div>
					<h1>Header and Logo</h1>
				</div>
				<nav>
					<ul className="nav">
						<li className="nav-item">
							<Link to='/' className='nav-link'>Home</Link>
						</li>
						<li className="nav-item">
							<Link to='/register' className='nav-link'>Register</Link>
						</li>
						<li className="nav-item">
							<Link to='/live_event' className='nav-link'>Live Event</Link>
						</li>
						<li className="nav-item">
							<Link to='/previous_races' className='nav-link'>Previous Races</Link>
						</li>
					</ul>
				</nav>
			</header>
			<main>
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/register' component={Register} />
					<Route path='/live_event/' component={LiveEvent} />
					<Route path='/previous_races/' component={PreviousRaces} />
				</Switch>
			</main>
		</div>
	);
}

export default App;
