const ParallaxScroll = ({ imageUrl, children }) => {
  return (
    <div className='relative bg-fixed bg-center bg-cover' style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className='h-screen bg-opacity-75 flex justify-center pt-8'></div>
      {children}
    </div>
  )
}

export default ParallaxScroll
