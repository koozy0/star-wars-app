import React from 'react';

const Navbar = () => {
  return (
    <div
      style={{
        display: 'flex',
        padding: '0 20px',
        height: '144px',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        background: '#020100',
        position: 'sticky',
        top: '0',
        zIndex: '100'
      }}
    >
      <div style={{ height: '96px' }}>
        <img
          src='http://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG41.png'
          alt='Star Wars logo'
          style={{ height: '100%', width: 'auto' }}
        />
      </div>
    </div>
  );
};

export default Navbar;
