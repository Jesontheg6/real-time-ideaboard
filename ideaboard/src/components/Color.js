import React from 'react';
import ReactDOM from 'react-dom';
import { GithubPicker } from 'react-color';

class Color extends React.Component {
  state = {
    color: 'lightyellow',
  };



  handleChangeComplete = (color) => {
    if (this.props.selected) {
      console.log('this.selected.changeBackground ', this.props.selected);
      this.props.selected.changeBackground(color.hex);
    }
    this.setState({ background: color.hex});
    this.props.handleUnselect();
  };

 render() {
    return (
      <div hidden={this.props.selected === null ? true : false}>
      <GithubPicker
        color={ this.state.color}
        onChangeComplete={ this.handleChangeComplete }
      />
      </div>
    );
  }
}

export default Color