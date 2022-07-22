// Adapted from https://codesandbox.io/s/react-typewriter-effect-rdis2?file=/components/Typewriter.js
import React from 'react';

class TypeWriter extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    };

    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.unmounted = false;
    this.loopNum = 0;
    this.period = 5000; // 5 seconds
    this.isCompleted = false;
    this.tick();
  }

  componentWillUnmount() {
    this.unmounted = true;
  }

  tick() {
    if (this.unmounted) {
      return;
    }

    const { data } = this.props;

    let newText = data.substring(0, this.state.text.length + 1);
    this.setState({ text: newText });
    
    if(newText === data) this.isCompleted = true;

    if(!this.isCompleted) {
      let delta = 200 - Math.random() * 100;
      setTimeout(() => {
        if(!this.isCompleted) this.tick();
      }, delta);
    }
  }

  render() {
    return this.state.text;
  }
}

export default TypeWriter;
