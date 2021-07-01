import React, { useState } from "react";

const SignalContext = React.createContext([true, () => {}]);

const useSignal = () => React.useContext(SignalContext);

const SignalProvider = props => {
	const [signal, setSignal] = useState(true);
	return <SignalContext.Provider value={[signal, setSignal]}>{props.children}</SignalContext.Provider>;
};

export { SignalContext, useSignal, SignalProvider };
