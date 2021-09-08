import React from "react";
import "./profile.css";

function Profile({ html_url, avatar_url, login }) {
  return (
    <article className="card">
      <img src={avatar_url} alt="profile picture" />
      <p className="name">{login}</p>
      <button>
        <a href="">visit</a>
      </button>
    </article>
  );
}

export default Profile;
