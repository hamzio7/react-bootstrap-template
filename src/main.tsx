import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import './theme-switcher.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles/brutalist-bootstrap.scss';
import store from "./store/store.tsx";
import {Provider} from "react-redux";

document.documentElement.setAttribute('data-theme', 'brutalist');

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </StrictMode>,
)
