import React from 'react'
import ReactDOM from 'react-dom/client'
import { CallBackHook } from './06-memos/CallBackHook'
import { TodoApp } from './08-useReducer/TodoApp'
// import { Padre } from './07-tarea-memo/Padre'
//import { MemoHook } from './06-memos/MemoHook'
//import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
//import { MultipleCustomHooks } from './03-ejemplos/MultipleCustomHooks'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { Layout } from './05-useLayoutEffect/Layout'
//import { Memorize } from './06-memos/Memorize'
//import { CounteCustomHook } from './01-useState/CounteCustomHook'
//import { SimpleForm } from './02-useEffect/SimpleForm'
//import { CounterApp } from './01-useState/CounterApp'
//import {HooksApp} from './HooksApp'
import './index.css'
// import './08-useReducer/intro-reducer'

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
    <TodoApp />
  //</React.StrictMode>
)
