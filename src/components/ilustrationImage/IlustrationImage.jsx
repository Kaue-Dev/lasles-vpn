import React from 'react'

const IlustrationImage = ({src, width, height}) => {
  return (
    <div>
      <img src={src} alt="IlustrationImage" width={width} height={height} />
    </div>
  )
}

export default IlustrationImage