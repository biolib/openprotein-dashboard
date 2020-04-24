import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { OpenProteinDashboard } from './OpenProteinDashboard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<OpenProteinDashboard metricsWidth={"100vw"} pdbViewHeight={"100vh"} showHeader={true} pdbData={{true: "", pred: ""}}/> , div);
  ReactDOM.unmountComponentAtNode(div);
});

