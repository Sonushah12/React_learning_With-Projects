import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


const Element = React.createElement(
  'a',
  {href: 'https://google.com', target:'_black'},
  'click me to visit google'
)


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
   Element
  // </React.StrictMode>,
)
