export default function Events() {
	function handleClick() {
		console.log("button clicked");
	}
	return (<div>
		<button onClick={handleClick}>click here</button>
		</div>
	);
}
