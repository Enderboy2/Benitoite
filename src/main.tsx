import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'styles/index.css'
import { faB, faCheckSquare, faCoffee, faDatabase, faHouseLaptop, faS, faWindowMaximize, faBars, faGear, faFileCirclePlus,faFolderPlus, faSearch} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faB, faS, faHouseLaptop, faCheckSquare, faCoffee, faDatabase, faWindowMaximize, faBars, faGear,faFileCirclePlus,faFolderPlus,faSearch)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <App />
)
