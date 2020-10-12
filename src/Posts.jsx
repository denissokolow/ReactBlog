import React, { Component } from 'react';

export class Posts extends Component {
  

    componentDidMount() {
      fetch('/posts')
        .then(res => res.json())
        .then(users => this.setState({ posts }));
    }
  
    render() {
      return (
        <div className="App">
          <h1>Posts</h1>
          {this.state.posts.map(post =>
            <div key={post.id}>{post.name}</div>
          )}
        </div>
      );
    }
  }