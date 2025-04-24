import { useParams, useNavigate } from "react-router-dom";

export default function Profile() {
    const { username } = useParams()
    const navigate = useNavigate()
    return (
        <div>
            <h1>Welcome {username}</h1>
            <button onClick={(() => {navigate('/')})}>Go Home</button>
        </div>
        
    )
}