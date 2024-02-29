import React, { useState } from 'react';
import { Card } from '@mui/material';
import Draggable from 'react-draggable';

// Import the button components
import FlagButton from './Canvas/FlagButton';
import StopButton from './Canvas/StopButton';
import UndoButton from './Canvas/UndoButton';
import RedoButton from './Canvas/RedoButton';
import ZoomIn from './Canvas/ZoomIn';
import ZoomOut from './Canvas/ZoomOut';
import FullScreen from './Canvas/FullScreen';

const Canvas = () => {

  return (
    <Card className="highlighted" style={{ position: 'relative', width: '30%', margin: '28px 0', height: '60vh', overflow: 'hidden' }}>
      <h1 style={{ textAlign: 'center', fontSize: '14px' }}>Canvas</h1>
      <Draggable bounds="parent" defaultPosition={{ x: 150, y: 100 }}>
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'url(trial_sprite_nobkg.png) center / contain no-repeat',
            cursor: 'move',
            height: '50%',
            width: '50%'
          }}
        />
      </Draggable>

      <div style={{
        position: 'absolute',
        bottom: 10,
        right: 10,
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
      }}>
        <div>
          <FlagButton onClick={() => { }} />
          <StopButton onClick={() => { }} />
          <UndoButton onClick={() => {}} />
          <RedoButton onClick={() => {}} />
        </div>
        <div>
          <ZoomIn onClick={() => { }} />
          <ZoomOut onClick={() => { }} />
          <FullScreen onClick={() => { }} />
        </div>
      </div>
    </Card>
  );
};

export default Canvas;