import {useState} from 'react'
export default function State() {
	const [count, setCount] = useState(0);
	const [incrementBy, setincrementBy] = useState(1);
	function increment() {
		setCount(count + incrementBy);
	}
	function decrement() {
		setCount(count - incrementBy);
		if (count<=0) {
			return setCount(0);
		}
		
	}
	function incrementVal() {
		setincrementBy(incrementBy+1);
	}
	function decrementVal() {
		setincrementBy(incrementBy-1);
		if (incrementBy<=1) {
			return setincrementBy(1);
		}
	}
	return ( <div>
		<h1>Count is:{count}</h1>
		<button onClick={increment}>Increment</button>
		<button onClick={decrement}>Decrement</button>
		<h1>We are incrementing the value:{incrementBy}</h1>
		<button onClick={incrementVal}>increase incrementBy</button>
		<button onClick={decrementVal}>decrease incrementBy</button>
		</div>
	);
}
