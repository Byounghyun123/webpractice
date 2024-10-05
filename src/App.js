import React from 'react'

const App = () => {
  return (
    <div className="relative min-h-screen z-10 overflow-hidden">
      <video 
        autoPlay 
        loop 
        muted 
        className="fixed right-0 bottom-0 w-full min-h-full z-0"
      >
        <source src="vid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default App