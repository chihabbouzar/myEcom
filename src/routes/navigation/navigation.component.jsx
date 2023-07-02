import { Outlet } from "react-router-dom"
import NavigationBar from "../../componenets/navigation-bar/navigation-bar-component"


const Navigation= () => {
	return (
		<>
			<NavigationBar></NavigationBar>
			<Outlet></Outlet>
		</>
	)
}

export default Navigation