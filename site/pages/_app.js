import React from 'react'
import '../styles/index.css'
import '../styles/prism-atom-dark.css'

const App = ({Component, pageProps}) => (
  
    <div className="container mx-auto prose pt-6">
      <Component {...pageProps} />
    </div>
)
export default App