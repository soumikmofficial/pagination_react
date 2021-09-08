import "./App.css";
import useFetch from "./useFetch";
import { useState, useEffect } from "react";
import Profile from "./components/Profile";
const url = "https://api.github.com/users/john-smilga/followers?per_page=100";

function App() {
  const { loading, profiles } = useFetch(url);
  const [page, setPage] = useState(0);
  const [currentProfiles, setCurrentProfiles] = useState([]);

  const prevPage = () => {
    if (page > 0) {
      setPage(page - 1);
    } else {
      setPage(profiles.length - 1);
    }
  };

  const nextPage = () => {
    if (page < profiles.length - 1) {
      setPage(page + 1);
    } else {
      setPage(0);
    }
  };

  useEffect(() => {
    if (loading) return;
    setCurrentProfiles(profiles[page]);
  }, [loading, page]);
  return (
    <div className="App">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <h1>Pagination</h1>
          <div className="card-container">
            {currentProfiles.map((profile) => {
              return <Profile key={profile.id} {...profile} />;
            })}
          </div>
          <div className="page-container">
            <p className="prev" onClick={prevPage}>
              Prev
            </p>
            {profiles.map((button, index) => {
              return (
                <button
                  key={index}
                  onClick={() => setPage(index)}
                  className={index === page ? "active" : null}
                >
                  {index + 1}
                </button>
              );
            })}
            <p className="next" onClick={nextPage}>
              Next
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
