import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./components/Landing";
import OnlineLearning from "./components/OnlineLearning";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/online_learnings" element={<OnlineLearning />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
