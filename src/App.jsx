import { useContext } from "react";
import ThemeToggler from "./components/ThemeToggler";
import { ThemeContext } from "./context/ThemeContext";

function App() {
	const { theme } = useContext(ThemeContext);
	return (
		<>
			<div
				className="[background:var(--gradient-light)] dark:[background:var(--gradient-dark)] min-h-screen p-8"
				data-theme={theme || "light"}
			>
				<ThemeToggler />
			</div>
		</>
	);
}

export default App;
