import React from 'react'
import ReactDOM from 'react-dom'
import App from './app/index'
import './assets/styles/index.scss';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faCheckSquare, faCoffee, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

library.add(fab, fas, faCheckSquare, faCoffee, faArrowRight, faArrowLeft)

ReactDOM.render( < App / > , document.getElementById('root'))