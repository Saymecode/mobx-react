import React from 'react';
import './App.css';
import { observer } from 'mobx-react'

const App = observer((props) => (<h1>{props.store.todos[0]}</h1>))

export default App
