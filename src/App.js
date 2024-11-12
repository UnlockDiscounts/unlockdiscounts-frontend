import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./components/Landing";
import OnlineLearning from "./components/OnlineLearning";
import ProductPage from "./components/ProductPage";
import BankingPage from "./components/BankingPage";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/online_learning" element={<OnlineLearning />} />
				<Route path="/banking" element={<BankingPage />} />
				<Route path="/products/:category_param" element={<ProductPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
