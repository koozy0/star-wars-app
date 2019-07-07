import React from 'react';

const Header = () => {
  return (
    <header style={STYLES.nav}>
      <div style={STYLES.imgWrapper}>
        <img
          src='http://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG41.png'
          alt='Star Wars logo'
          style={STYLES.img}
        />
      </div>
    </header>
  );
};

export default Header;

const STYLES = {
  nav: {
    display: 'flex',
    padding: '0 20px',
    height: '144px',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    position: 'sticky',
    top: '0',
    left: '0',
    zIndex: '1000',
  },
  imgWrapper: { height: '96px', position: 'relative', zIndex: '100' },
  img: { height: '100%', width: 'auto' },
};
