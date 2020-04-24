import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { OpenProteinDashboard } from './OpenProteinDashboard';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <OpenProteinDashboard metricsWidth={"100vw"} pdbViewHeight={"100vh"} pdbData={{true: "", pred: ""}} showHeader={true} />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
