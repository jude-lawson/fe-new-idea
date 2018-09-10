import React, {Component} from 'react';

export class ArticleForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    };
  }

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    
  }

  render() {
    return (
      <form>
        <input 
          type="text"
          className="article--title-input"
          placeholder="title"
          onChange={this.handleChange}
          name="title"
        />
        <input 
          type="area"
          className="article--body-input"
          placeholder="Description"
          name="body"
          onChange={this.handleChange}
        />
        <button>SUBMIT</button>
      </form>
    );
  }
}