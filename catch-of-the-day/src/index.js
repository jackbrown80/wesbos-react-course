import React from 'react'
// Needed to put our JSX onto the DOM
import { render } from 'react-dom'
// Grabs StorePicker component from the given file so that it can be used
import './css/style.css'
import Router from './components/Router'

//render puts our JSX onto the DOM. We pass it the JSX and then where to mount it.
render(<Router />, document.querySelector('#main'))
