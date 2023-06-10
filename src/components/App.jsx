import React from 'react';
import { Profile } from './Profile';
import user from '../data/user.json';
import data from '../data/data.json';
import { Statistics } from './Statistics';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={data} />
    </div>
  );
};

export default App;
