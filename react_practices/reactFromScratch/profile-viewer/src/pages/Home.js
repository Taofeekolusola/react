import { useNavigate } from "react-router-dom"
export default function Home() {
    const navigate = useNavigate()
    const handleProfile = () => {
        const username = 'taofeek'
        navigate(`profile/${username}`)
    }
    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={handleProfile}>View Profile</button>
        </div>
    )
}