import React, { Component } from 'react';
import Person from './Person';
import { connect } from 'react-redux';
import { fetchPeople } from './../actions/people';

class People extends Component {
  componentWillMount() {
    this.props.fetchPeople();
  }

  render() {
    const { people } = this.props;
    const createPerson = (person, i) => <Person key={i} person={person} />;
    const persons = people.map(createPerson);

    console.log(this.props.people);

    return <div className='grid-container'>{persons}</div>;
  }
}

const mapStateToProps = state => ({
  people: state.peopleReducer.people,
  count: state.peopleReducer.count
});

export default connect(
  mapStateToProps,
  { fetchPeople }
)(People);
