import React from 'react';
import { useContext } from 'react';
import { MainMenu } from '../../components/main-menu';
import { GlobalThemeContext } from '../../contexts';

const Home = () => {
  const context = useContext(GlobalThemeContext);

  return <React.Fragment>
    <MainMenu/>
  </React.Fragment>
}

export default Home;