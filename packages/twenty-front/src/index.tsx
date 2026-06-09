import ReactDOM from 'react-dom/client';

import { App } from '@/app/components/App';
import 'react-loading-skeleton/dist/skeleton.css';
import 'twenty-ui-deprecated/style.css';
import 'twenty-ui-deprecated/theme-light.css';
import 'twenty-ui-deprecated/theme-dark.css';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') ?? document.body,
);

root.render(<App />);
