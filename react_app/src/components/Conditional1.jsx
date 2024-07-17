import Code from "./Code.jsx"
import Welcome from "./Welcome.jsx"
export default function Conditional1(){
	const display = false;
	if (display) {
		return (
			<div>
				<Code/>
			</div>
		)
	} else {
		return (
			<div>
				<Welcome/>
			</div>
		)
	}
}
