import React from "react";
import overview from "../assets/house-fill.svg";
import recent from "../assets/clock.svg";
import star from "../assets/star.svg";
import drafts from "../assets/clipboard2-check.svg";
import tasks from "../assets/check2-square.svg";

function Profile() {
  const links = [
    { name: "overview", icon: overview },
    { name: "recent", icon: recent },
    { name: "shared", icon: star },
    { name: "drafts", icon: drafts },
    { name: "tasks", icon: tasks, tasks: 0 },
  ];
  return (
    <div className="profile ">
      <header className="profile__header">
        <div className="profile__avatar">WA</div>
        <p className="profile__name">Wiki Aryia</p>
        <p className="profile__space">your space</p>
      </header>

      <ul className="profile__content">
        {links.map(({ name, icon, tasks }) => {
          return (
            <li className="profile__link" key={name}>
              <img src={icon} alt={name} /> <p>{name}</p>
              {tasks !== undefined && <p className="profile__tasks">{tasks}</p>}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Profile;
