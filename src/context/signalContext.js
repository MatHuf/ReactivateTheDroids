import React, { useState, useContext, createContext } from "react";

const SignalContext = createContext([true, () => {}]);

const useSignal = () => useContext(SignalContext);

const SignalProvider = props => {
	const [signal, setSignal] = useState(true);
	return (
		<SignalContext.Provider value={[signal, setSignal]}>{props.children}</SignalContext.Provider>
	);
};

export { SignalContext, useSignal, SignalProvider };
