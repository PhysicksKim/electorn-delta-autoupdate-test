import React, { useEffect, useRef, useState } from 'react';
import '../styles/Body.scss';
import { Provider, useSelector } from 'react-redux';
import store, { RootState } from '../store/store';
import FixtureIpc from '../ipc/FixtureIpc';
import ControlIpc from '../ipc/ControlIpc';
import DragBar from './drag/DragBar';
import LineupTab from './tabs/lineup/LineupTab';
import '@matchlive/styles/Body.scss';
import '@matchlive/styles/Main.scss';

const Main = () => {
  return (
    <div className="root-container">
      <>
        <FixtureIpc />
        <ControlIpc />
      </>
      <div className="contents-area">
        <LineupTab />
      </div>
    </div>
  );
};

export default Main;
