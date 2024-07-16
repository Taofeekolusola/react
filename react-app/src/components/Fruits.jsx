import Fruit from './Fruit.jsx'
export default function Fruits () {
//	const fruits = ["Apple", "Pawpaw", "Orange"];
	const fruits = [
  	{ name: "Apple", emoji: "🍎", price: 10, soldout: true },
  	{ name: "Orange", emoji: "🟠", price: 6, soldout: false },
  	{ name: "Banana", emoji: "🍌", price: 5, soldout: true },
	{ name: "Pineapple", emoji: "🍍", price: 8, soldout: false},
];
	return (<div>
	<ul>
      {fruits.map((fruit) => (
        <Fruit key={fruit.name} name={fruit.name} emoji={fruit.emoji} price={fruit.price} soldout={fruit.soldout}/>
      ))}
	</ul>
	</div>
  );
}
