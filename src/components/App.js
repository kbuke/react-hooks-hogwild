import React, { useState } from "react";
import Nav from "./Nav";
import PigList from "./PigList";


import hogs from "../porkers_data";
import PigGreaseFilter from "./PigGreaseFilter";
import AlphabetPigs from "./AlphabetPigs";



function App() {

	const[allHogDetails, setAllHogDetails] = useState(hogs)
	const[greasyPigs, setAllGreasyPigs] = useState(false)
	const[alphabetPigs, setAlphabetPigs] = useState(false)

	function handleClick(){
		setAllGreasyPigs(!greasyPigs)
	}

	const allGreasedPigs = allHogDetails.filter((hog) => {
		if(greasyPigs === false) return true
		return hog.greased === true
	})

	function handleAlphabet(){
		setAlphabetPigs(!alphabetPigs)
	}
	const listAlphabetPigs = allGreasedPigs.sort((a,b) => {
		if(alphabetPigs === false) {
			return true
		} else if (alphabetPigs === true && a.name < b.name){
			return -1
		} else if (alphabetPigs === true && a.name > b.name){
			return 1
		} return 0
	})
	console.log(listAlphabetPigs)

	return (
		<div className="App">
			<Nav />
			<PigGreaseFilter handleClick={handleClick} greasyPigs={greasyPigs}/>
			<AlphabetPigs handleAlphabet={handleAlphabet} />
			<PigList allHogDetails={allGreasedPigs}/>
		</div>
	);
}

export default App;
