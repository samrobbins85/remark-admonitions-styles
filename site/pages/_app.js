import React from 'react'
import '../styles/index.css'
import '../styles/prism-atom-dark.css'
import Head from "next/head"



const App = ({Component, pageProps}) => (
  <>
    <Head>
      <title>Tailwind Remark Admonitions</title>
    </Head>
    <div className="container mx-auto prose pt-6 px-6">
      <Component {...pageProps} />
    </div>
    </>
)
export default App