import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./components/Landing";
import OnlineLearning from "./components/OnlineLearning";
import ProductPage from "./components/ProductPage";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/online_learnings" element={<OnlineLearning />} />
				<Route path="/products/:category_param" element={<ProductPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
