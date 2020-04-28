import React, { Fragment } from 'react';
import Search from '../users/Search';
import User from '../users/User';

const Home = () => {
  return (
    <Fragment>
      <Search />
      <User />
    </Fragment>
  );
};

export default Home;
