import React from 'react'
import { HelmetProvider } from 'react-helmet-async'
import AppTitle from './components/AppTitle'
import Layout from './layout'

const App = () => {
  return (
    <>
      <HelmetProvider>
        <Layout />
      </HelmetProvider>
    </>
  )
}

export default App