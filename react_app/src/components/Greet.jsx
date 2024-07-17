export default function Greet({person}) {
	return <h1 className="Greet">{person.greet} {person.name}! {person.message}</h1>
}
