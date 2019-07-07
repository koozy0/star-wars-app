import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPeople, nextPage } from './../actions/people';
import { NavLink } from 'react-router-dom';

class People extends Component {
  componentWillMount() {
    if (this.props.people.length === 0) {
      this.props.fetchPeople(this.props.page);
    }

    // add event listener for scroll event
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    // remove scroll event to avoid memory leaks
    window.removeEventListener('scroll', this.handleScroll);
  }

  // TODO: debounce the scroll event
  handleScroll = e => {
    const doc = document.documentElement;
    const body = document.body;
    const scrollTop = doc.scrollTop || body.scrollTop;
    const scrollHeight = doc.scrollHeight || body.scrollHeight;
    const clientHeight = doc.clientHeight;
    const percent = (scrollTop / (scrollHeight - clientHeight)) * 100;

    if (
      percent > 80 && // scroll % > 80
      !this.props.loading && // not fetching more people
      this.props.page * 10 < this.props.count // stay within limits (people)
    ) {
      this.props.nextPage(this.props.page);
      this.props.fetchPeople(this.props.page);
    }
  };

  render() {
    const { people } = this.props;

    const createPerson = (person, i) => (
      <div style={STYLES.card} key={i}>
        <h1 style={STYLES.header}>{person.name}</h1>
        <ul style={STYLES.list}>
          <li style={STYLES.listItem}>Gender: {person.gender}</li>
          <li style={STYLES.listItem}>Birth year: {person.birth_year}</li>
          <li style={STYLES.listItem}>Height: {person.height}</li>
          <li style={STYLES.listItem}>Mass: {person.mass}</li>
          <li style={STYLES.listItem}>Hair color: {person.hair_color}</li>
          <li style={STYLES.listItem}>Skin color: {person.skin_color}</li>
          <li style={STYLES.listItem}>
            <NavLink to={`/${getUrlFriendlyPersonName(person.name)}`}>
              More details
            </NavLink>
          </li>
        </ul>
      </div>
    );

    return (
      <div>
        <div style={{ height: '5vh' }} />
        {people.map(createPerson)}
        <div style={{ height: '15vh' }} />
      </div>
    );
  }
}

const getUrlFriendlyPersonName = name =>
  name.toLowerCase().replace(/[^a-z0-9_-]/gi, '-');

const mapStateToProps = state => ({
  people: state.peopleReducer.people,
  count: state.peopleReducer.count,
  page: state.peopleReducer.page,
  loading: state.peopleReducer.loading,
});

const mapDispatchToProps = { fetchPeople, nextPage };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(People);

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
  card: {
    textAlign: 'center',
    padding: '5%',
    minHeight: '450px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
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
