import React, { useState, useContext, createContext } from "react";

const ActivationContext = createContext([false, () => {}]);

const useActivation = () => useContext(ActivationContext);

const ActivationProvider = props => {
	const [active, setActive] = useState(false);
	return (
		<ActivationContext.Provider value={[active, setActive]}>
			{props.children}
		</ActivationContext.Provider>
	);
};

export { ActivationContext, useActivation, ActivationProvider };
