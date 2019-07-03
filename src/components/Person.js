import React from 'react';

const Person = props => {
  const { person } = props;
  return (
    <div
      className='person-card'
      style={{ border: '1px solid #f9d71c', padding: '32px' }}
    >
      <h1 style={STYLES.header}>{person.name}</h1>
      <ul style={STYLES.list}>
        <li style={STYLES.listItem}>Gender: {person.gender}</li>
        <li style={STYLES.listItem}>Birth year: {person.birth_year}</li>
        <li style={STYLES.listItem}>Height: {person.height}</li>
        <li style={STYLES.listItem}>Mass: {person.mass}</li>
        <li style={STYLES.listItem}>Hair color: {person.hair_color}</li>
        <li style={STYLES.listItem}>Skin color: {person.skin_color}</li>
        <li style={STYLES.listItem}>
          <a href={person.url}>More details</a>
        </li>
      </ul>
    </div>
  );
};

export default Person;

const STYLES = {
  header: {
    fontWeight: '500',
    fontFamily: `'Poller One', cursive`,
    marginBottom: '32px'
  },
  list: {
    listStyleType: 'none',
    padding: '0'
  },
  listItem: {
    fontFamily: `'Raleway', sans-serif`,
    lineHeight: '40px',
    fontSize: '20px',
    margin: '0',
    marginLeft: '20px'
  }
};
