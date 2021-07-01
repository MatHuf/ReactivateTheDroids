import Panel from "./components/Panel";
import { SignalProvider } from "./context/signalContext";

// Are styles need here?
import "./App.css";

function App() {
	return (
		<SignalProvider>
			<div className="App">
				<Panel />
			</div>
		</SignalProvider>
	);
}

export default App;
