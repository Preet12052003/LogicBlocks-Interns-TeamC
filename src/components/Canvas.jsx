import React from 'react';
import { Card } from '@mui/material';
import Draggable from 'react-draggable';
import { Resizable } from 're-resizable';

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
        <Resizable
          defaultSize={{
            width: '50%',
            height: '50%'
          }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: `url(trial_sprite_nobkg.png) center / contain no-repeat`,
            cursor: 'move',
            aspectRatio: '16 / 9', // Set the aspect ratio to 16:9
            maxHeight: 'calc(100vh - 200px)', // Adjust the max height as needed
            maxWidth: 'calc(100vw - 200px)' // Adjust the max width as needed
          }}
        >
          <div style={{ width: '100%', height: '100%' }} />
        </Resizable>
      </Draggable>

      <div style={{
        position: 'absolute',
        bottom: 10,
        right: 10,
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%'
      }}>
        <div>
          <FlagButton onClick={() => { }} />
          <StopButton onClick={() => { }} />
          <UndoButton onClick={() => { }} />
          <RedoButton onClick={() => { }} />
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
