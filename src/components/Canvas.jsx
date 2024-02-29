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
  const [canvasStack, setCanvasStack] = useState([{ width: '50%', height: '50%' }]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleUndo = () => {
    console.log(currentIndex)
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleRedo = () => {
    if (currentIndex < canvasStack.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <Card className="highlighted" style={{ position: 'relative', width: '700px', margin: '28px auto', height: '600px', overflow: 'hidden' }}>
      <h1 style={{ textAlign: 'center', fontSize: '14px' }}>Canvas</h1>
      <Draggable bounds="parent" defaultPosition={{ x: 150, y: 100 }}>
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'url(trial_sprite_nobkg.png) center / contain no-repeat',
            cursor: 'move',
            width: canvasStack[currentIndex].width,
            height: canvasStack[currentIndex].height,
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
          <UndoButton onClick={handleUndo} />
          <RedoButton onClick={handleRedo} />
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