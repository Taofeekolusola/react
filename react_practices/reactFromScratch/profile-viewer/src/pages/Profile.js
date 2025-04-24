import { useParams, useNavigate } from "react-router-dom"
export default function Profile() {
    const { username } = useParams()
    const navigate = useNavigate()

    const goHome = () => {
        navigate('/')
    }
    return (
        <div>
            <h2>Welcome {username}!</h2>
            <button onClick={goHome}>Go Home</button>
        </div>
    )
}