import React from 'react';
import ReactDOM from 'react-dom';
import TradeTable from './tradeTable';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TradeTable />, div);
  ReactDOM.unmountComponentAtNode(div);
});
