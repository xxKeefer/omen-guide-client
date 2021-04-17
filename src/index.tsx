import React from 'react'
import ReactDOM from 'react-dom'
import { Helmet } from 'react-helmet'
import CssBaseline from '@material-ui/core/CssBaseline'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Omen Guide</title>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
    </Helmet>
    <CssBaseline />
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
