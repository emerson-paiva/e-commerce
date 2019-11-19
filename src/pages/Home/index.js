import React from 'react';

import Directory from '../../components/Directory';

import './Home.scss';

import { HomePageContainer } from './styled';

const Home = () => (
  <HomePageContainer>
    <Directory />
  </HomePageContainer>
);

export default Home;
