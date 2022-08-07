import React, {createContext, useState } from 'react';

export const adddata = createContext("");
export const updatedata = createContext("");
export const deldata = createContext("");


const ContextProvider = ({ children }) => {
	
	const [studdata, setStuddata] = useState("");
	const [updata, setUPdata] = useState("");
	const [dltdata, setDLTdata] = useState("");
	
	return (
	
	<adddata.Provider value = {{ studdata, setStuddata }}>
	<updatedata.Provider value = {{ updata ,setUPdata }}>
	<deldata.Provider value = {{ dltdata, setDLTdata }}>
	
	{children}
	
	</deldata.Provider>
	
	</updatedata.Provider>
	</adddata.Provider>
	
)}

export default ContextProvider;