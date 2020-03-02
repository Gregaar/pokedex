import React from "react";
import { useAuth0 } from "../../react-auth0-spa";

import profileStyles from "./ProfileStyles";

const Profile = () => {
  const { loading, user } = useAuth0();
  const classes = profileStyles();

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return (
    <div className={classes.Container}>
      <div className={classes.Info}>
        <img src={user.picture} alt="Profile" />
        <h2>{user.name}</h2>
        <p>Email: {user.email}</p>
      </div>
    </div>
  );
};

export default Profile;
