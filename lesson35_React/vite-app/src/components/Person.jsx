import React from 'react';
import PropTypes from "prop-types";

class Person extends React.Component {
  constructor(props) {
    super();
    console.log('constructor', props);

    this.state = {
      name: props.name || 'No name',
      age: props.age || 11
    }
  }

  // static propTypes = {
  //   name: PropTypes.string,
  //   age: PropTypes.number
  // }

  // методи життєвого циклу
  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate', prevProps, prevState);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }


  // handlers
  handleChangeState = () => {
    this.setState({
      ...this.state,
      name: 'Oleksii',
    })
  }



  render() {
    console.log('render', this.state);
    return <>
      <div>Class component Person: {this.state.name} - {this.state.age}</div>
      <button onClick={this.handleChangeState}>Change State</button>
    </>
  }
}

export default Person;