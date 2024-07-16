import Code from './Code'
import Welcome from './Welcome'
export default function Ternary() {
	const display = !true;
	let message1 = <h1>This is message1</h1>;
	let message2 = <h1>This is message2</h1>;
	let dis = display? <Code/> : <Welcome/>;
	return dis;
}
