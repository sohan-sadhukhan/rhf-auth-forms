import { useTheme } from "next-themes";
import { ToastContainer } from "react-toastify";

const ToastProvider = () => {
	const { theme } = useTheme();

	return (
		<ToastContainer
			position="bottom-center"
			autoClose={3000}
			theme={theme === "dark" ? "dark" : "light"}
		/>
	);
};

export default ToastProvider;
