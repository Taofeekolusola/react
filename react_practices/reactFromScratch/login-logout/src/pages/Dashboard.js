export default function Dashboard({ logout }) {
    return (
      <div>
        <h2>📊 Dashboard</h2>
        <button onClick={logout}>Log Out</button>
      </div>
    );
  }
  