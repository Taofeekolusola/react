import {useState} from 'react'
export default function Form() {
	const [name, setName] = useState({firstname: "", lastname: ""});
	function handleSubmit(e) {
		e.preventDefault();
		console.log("logged to console")
	}
	return <div>
		{name.firstname} - {name.lastname}
		<form>
		<input onChange={(e)=>setName({...name, firstname: e.target.value})} type="text" value={name.firstname}/>
		<input onChange={(e)=>setName({...name, lastname: e.target.value})} type="text" value={name.lastname}/>
		</form>
		<button onClick={(e)=>handleSubmit(e)}>Add</button>
		</div>
}
