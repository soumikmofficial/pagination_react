import "./App.css";
import useFetch from "./useFetch";
import Profile from "./components/Profile";
const url = "https://api.github.com/users/john-smilga/followers?per_page=100";

function App() {
  const { loading, profiles } = useFetch(url);
  return (
    <div className="App">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <h1>Pagination</h1>
          <div className="card-container">
            {profiles.map((profile) => {
              return <Profile key={profile.id} {...profile} />;
            })}
          </div>
          <div className="page-container"></div>
        </>
      )}
    </div>
  );
}

export default App;
