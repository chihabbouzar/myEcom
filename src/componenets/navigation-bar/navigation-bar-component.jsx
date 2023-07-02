import { Link, Outlet } from "react-router-dom"
import { ReactComponent as CrownLogo } from './87 - crown.svg'
import "./navigation-bar.style.scss"

const NavigationBar = () => {
	return (
		<>
			<div className="navigation">

				<Link className="logo-container" to='/'>
					<CrownLogo className="logo"></CrownLogo>
				</Link>
				<div className="nav-links-container">
					<Link className="nav-link" to="/shop">SHOP</Link>
					<Link className="nav-link" to="/signin">SIGN IN</Link>
				</div>
			</div>
        </>
    )
    }

export default NavigationBar