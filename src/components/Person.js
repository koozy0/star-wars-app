import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchPerson } from './../actions/people';

class Person extends Component {
  componentWillMount() {
    const searchableName = getSearchableName(this.props.match.params.person);
    this.props.fetchPerson(searchableName);
  }

  render() {
    const { person } = this.props;

    return (
      <div style={STYLES.person}>
        <div style={{ height: '10vh' }} />
        <h1 style={STYLES.header}>{person.name}</h1>
        <ul style={STYLES.list}>
          <li style={STYLES.listItem}>Gender: {person.gender}</li>
          <li style={STYLES.listItem}>Birth year: {person.birth_year}</li>
          <li style={STYLES.listItem}>Height: {person.height}</li>
          <li style={STYLES.listItem}>Mass: {person.mass}</li>
          <li style={STYLES.listItem}>Hair color: {person.hair_color}</li>
          <li style={STYLES.listItem}>Skin color: {person.skin_color}</li>
          <li style={STYLES.listItem}>Eye color: {person.eye_color}</li>
          <li style={STYLES.listItem}>Homeworld: {person.homeworld}</li>
          <li style={STYLES.listItem}>
            Species: {(person.species || []).join(', ')}
          </li>
          <li style={STYLES.listItem}>
            Vehicles: {(person.vehicles || []).join(', ')}
          </li>
          <li style={STYLES.listItem}>
            Starships: {(person.starships || []).join(', ')}
          </li>
          <li style={STYLES.listItem}>
            Appeared in: {(person.films || []).join(', ')}
          </li>

          <li style={STYLES.listItem}>
            <NavLink exact to='/' style={STYLES.link}>
              Back
            </NavLink>
          </li>
        </ul>
        <div style={{ height: '20vh' }} />
      </div>
    );
  }
}

const getSearchableName = name => name.replace(/-/g, '%20');

const mapStateToProps = state => ({
  person: state.peopleReducer.person,
});

const mapDispatchToProps = { fetchPerson };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Person);

const STYLES = {
  header: {
    fontWeight: '500',
    fontFamily: `'Poller One', cursive`,
    lineHeight: '56px',
    margin: '0',
  },
  list: {
    listStyleType: 'none',
    padding: '0',
  },
  listItem: {
    fontFamily: `'Helvetica', sans-serif`,
    lineHeight: '40px',
    fontSize: '20px',
    margin: '0',
  },
  person: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  link: { fontSize: '24px', lineHeight: '72px' },
  fade: {
    left: '0',
    height: '40vh',
    pointerEvents: 'none',
    position: 'fixed',
    width: '100%',
    zIndex: '1',
  },
  fadeTop: {
    backgroundImage: 'linear-gradient(0deg, transparent, black 65%)',
    top: '0',
  },
  fadeBottom: {
    backgroundImage: 'linear-gradient(180deg, transparent, black 65%)',
    bottom: '0',
  },
};
