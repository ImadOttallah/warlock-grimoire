import React from 'react';
import User from '../components/Users';
import { useAuth } from '../utils/context/authContext';
import { signOut } from '../utils/auth';

export default function Profile() {
  const { user } = useAuth();
  // console.warn(user);
  return (
    <div>
      <User
        name={user.displayname}
        email={user.email}
        image={user.photoURL}
        lastLogin={user.metadata.lastSignInTime}
      />
      <button size="sm" type="button" onClick={signOut}>Sign Out</button>
    </div>
  );
}
