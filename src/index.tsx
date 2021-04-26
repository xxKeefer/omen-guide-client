import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import { AuthProvider } from './contexts/Auth/AuthProvider'
import { GQLProvider } from './contexts/GraphQL/GQLProvider'
import React from 'react'
import ReactDOM from 'react-dom'
import { Helmet } from 'react-helmet'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import theme from './theme'

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
    <AuthProvider>
      <GQLProvider>
        <ThemeProvider theme={theme}>
          <Router>
            <App />
          </Router>
        </ThemeProvider>
      </GQLProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
