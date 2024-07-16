export default function Element() {
	let message;
	const display = true;
	if (!display) {
		message=<h1>This is message1</h1>;
	} else {
		message=<h1>This is message2</h1>;
	}
	return message;
}
