import HomePage from "./routes/Home-page/Home-page.component";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/Navigation/Navigation.component";
import Authentication from "./routes/Authentication/Authentication.component";
import Shop from "./routes/Shop/Shop.component";

const App = () => {
  return (
		<Routes>
			<Route path="/" element={<Navigation />}>
				<Route index element={<HomePage />} />
				<Route path="auth" element={<Authentication />} />
				<Route path="shop" element={<Shop />} />
			</Route>
		</Routes>
	);
}

export default App;
