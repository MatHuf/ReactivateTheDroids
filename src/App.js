import Panel from "./components/Panel";
import { SignalProvider } from "./context/signalContext";
import { ActivationProvider } from "./context/activationContect";

// Are styles need here?
import "./App.css";

function App() {
	return (
		<SignalProvider>
			<ActivationProvider>
				<div className="App">
					<Panel />
				</div>
			</ActivationProvider>
		</SignalProvider>
	);
}

export default App;
