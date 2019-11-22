import React from 'react';
import '../styles.css';

function Table({ images, activeId, findName, findItem, keyDown }) {

  return (
    <>
      <h1 className="header">SELECT YOUR FIGHTER</h1>
        <div className="grid">
          {images.map(item => {
            return <span key={item.id} className={item.id === activeId ? "active" : 'icons'} autoFocus={true}>
              <img 
                key={item.id} 
                src={item.icon} 
                alt={item.name} 
                onKeyDown={(e) => keyDown(e, images)}
                tabIndex={item.id}
                className={item.id === activeId ? "active1" : 'icons'}
                autoFocus={true}
              />
            </span>
          })}
          <div className="left_bottom">
            <img src={findItem(images, activeId)} alt={findName(images, activeId)} className="fighter" />
          </div>
          <div className="right_bottom"></div>
        </div>
    </>
  )
}

export default Table; 