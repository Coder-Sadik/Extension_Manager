import { useContext } from "react";
import Nav from "./components/Nav";
import { ThemeContext } from "./context/ThemeContext";

function App() {
	const { theme, setTheme } = useContext(ThemeContext);
	return (
		<>
			<Nav />
		</>
	);
}

export default App;
