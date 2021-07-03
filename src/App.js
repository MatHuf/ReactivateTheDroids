import Panel from "./components/Panel";
import { SignalProvider } from "./context/signalContext";
import { ActivationProvider } from "./context/activationContext";

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
