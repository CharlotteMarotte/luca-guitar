const ParallaxScroll = ({ imageUrl }) => {
  return (
    <div className='bg-fixed bg-center bg-cover' style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className='h-screen bg-opacity-75 flex justify-center pt-8'></div>
    </div>
  )
}

export default ParallaxScroll
