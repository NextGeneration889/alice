import React from 'react'
import Header from './components/Header'
import PayslipChecker from './components/PayslipChecker'

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto p-4">
        <PayslipChecker />
      </div>
    </div>
  )
}

export default App