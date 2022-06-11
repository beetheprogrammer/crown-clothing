import HomePage from "./routes/Home-page/Home-page.component";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/Navigation/Navigation.component";
import Authentication from "./routes/Authentication/Authentication.component";
import Shop from "./routes/Shop/Shop.component";
import Checkout from "./routes/Checkout/Checkout.component";
import { useEffect } from "react";
import {
	createUserDocumentFromAuth,
	onAuthStateChangeListerner,
} from "./utils/firebase/firebase.utils";
import { setCurrentUser } from "./store/user/user.actions";
import { useDispatch } from "react-redux";

const App = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		const unsubscribe = onAuthStateChangeListerner((user) => {
			if (user) {
				createUserDocumentFromAuth(user);
			}
			dispatch(setCurrentUser(user));
			// console.log(user);
		});
		return unsubscribe;
	}, []);
	return (
		<Routes>
			<Route path="/" element={<Navigation />}>
				<Route index element={<HomePage />} />
				<Route path="auth" element={<Authentication />} />
				<Route path="shop/*" element={<Shop />} />
				<Route path="checkout" element={<Checkout />} />
			</Route>
		</Routes>
	);
};

export default App;
