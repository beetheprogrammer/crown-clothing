import HomePage from "./routes/Home-page/Home-page.component";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/Navigation/Navigation.component";
import SignIn from "./routes/Sign-In/Sign-In.component";

const App = () => {
  return (
		<Routes>
			<Route path="/" element={<Navigation />}>
				<Route index element={<HomePage />} />
				<Route path="sign-in" element={<SignIn />} />
			</Route>
		</Routes>
	);
}

export default App;
