import React, { useContext } from 'react';
import AuthContext from '../../../context/auth/authContext';


const UserProfileStandbyLogo = () => {
  const authContext = useContext(AuthContext);
  const { user } = authContext;

  return (
    <div className="user-home__standby-logo" style={{ color: '#353535' }}>
      <h1>Cinematheque</h1>
      <p>Movie Database</p>
      <h3><span>{user && user.name}</span> Overview Profile</h3>
    </div>
  );
}

export default UserProfileStandbyLogo;
