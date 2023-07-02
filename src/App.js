import "./categories.styles.scss";
import NavigationBar from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import SignIn from "./routes/sign-in/sign-in.component";

const Shop = ()=>{
	return(
		<div>
			<h1>Shop page</h1>
		</div>
	)
}


const App = () => {
	
	
	return (
		<Routes>
		
			<Route path="/" element={<NavigationBar/>}>
					<Route index element={<Home></Home>}/>
					<Route path="shop" element={<Shop />} />
					<Route path="SIGNIN" element={<SignIn></SignIn>}></Route>
			</Route>
			<Route path="/signin" element={<SignIn></SignIn>}/>

				
		</Routes>

		);
};

export default App;
