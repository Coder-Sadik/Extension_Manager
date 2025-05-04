import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Sun from "../assets/images/icon-sun.svg?react";
import Moon from "../assets/images/icon-moon.svg?react";
import Logo from "../assets/images/logo.svg?react";

const ThemeToggler = () => {
	const { theme, setTheme } = useContext(ThemeContext);
	function toggleTheme() {
		if (theme === "dark") {
			setTheme("light");
			localStorage.setItem("theme", "light");
		} else {
			setTheme("dark");
			localStorage.setItem("theme", "dark");
		}
	}
	return (
		<nav
			className="bg-[var(--neutral-0)] dark:bg-[var(--neutral-800)] max-w-2/3 mx-auto p-4 rounded-lg flex justify-between items-center shadow-md"
			data-theme={theme}
		>
			<div className="dark:text-white">
				<Logo />
			</div>{" "}
			<div
				onClick={toggleTheme}
				className="p-2 rounded-lg bg-[var(--neutral-100)] dark:bg-[var(--neutral-700)] hover:bg-[var(--neutral-200)] dark:hover:bg-[var(--neutral-600)] hover:cursor-pointer"
			>
				{theme === "dark" ? <Sun /> : <Moon />}
			</div>
		</nav>
	);
};

export default ThemeToggler;
