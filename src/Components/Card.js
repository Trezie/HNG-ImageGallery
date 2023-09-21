import React from 'react'

const Card = ({src, title, id, index}) => {
    return (
      <div className="card">
        <img src={src} alt={title} />
      </div>
    );
  
}

export default Card
