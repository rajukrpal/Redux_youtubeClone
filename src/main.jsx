import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from "react-redux"
import store from '../store/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}> {/* store ke andar jo store likha hai wo store File se aarha hai ../store/store.js , ab aesa karne se me store me rkhi koi bhi  value ko app me jitne bhi components hai us me me use kar skta hu */}
    <App />
    </Provider>
  </React.StrictMode>,
)
