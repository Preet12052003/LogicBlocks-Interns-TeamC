import React from 'react';
import BlocklyComponent from '../components/BlocklyComponent';
import Canvas from '../components/Canvas';
import AnchorMenu from '../components/AnchorMenu';
import FloatingActionButton from '../components/FloatingActionButton';
import Header from '../components/Header';

const Home = () => {
  return (
    <div>
      <Header />
      <div style={{ textAlign: 'center' }}>
      </div>
      <div className="home_flex_main" style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px', flexDirection: 'row' }}>
        <BlocklyComponent />
        <Canvas />
      </div>
      <AnchorMenu />
      <FloatingActionButton />
    </div>
  );
};

export default Home;
