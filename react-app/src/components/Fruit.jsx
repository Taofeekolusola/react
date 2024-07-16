export default function Fruit({soldout,name,price,emoji}) {
	return (
        <div>
                <li>
                    <h1>{emoji} {name} ${price}{soldout? "Soldout": "Available"}</h1>
                </li>
	</div>
	)
}	
