import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  /*
    constructor(props) {
      super(props);
  
      //    this.handleClick = this.handleClick.bind(this)
  
      this.state = {
        name: "Flavio",
        counter: 0,
      }
    }*/
  state = {
    posts: [
      {
        id: 1,
        title: 'Titulo 1',
        body: "Corpo 1"
      },
      {
        id: 2,
        title: 'Titulo 2',
        body: "Corpo 2"
      },
      {
        id: 1,
        title: 'Titulo 3',
        body: "Corpo 3"
      },
      {
        id: 4,
        title: 'Titulo 4',
        body: "Corpo 4"
      },


    ]
  }
  /*
  handleClick = () => {
    const { name } = this.state;
    console.log('cliquei ${name}');
    this.setState({ neme: "Nome mudou para Gih" })
  };

  handleClickC = () => {
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  }*/

  render() {

    //    const { name, counter } = this.state
    const { posts } = this.state;

    return (
      <div className='App'>

        {posts.map((post) => (
          <div>
            <h1 key={post.id}>{post.title}</h1>
            <h3 key={post.id}>{post.body}</h3>
          </div>
        ))}
      </div>


      /*     
           <div className="App">
             <header className="App-header">
               <img src={logo} className="App-logo" alt="logo" />
               <p>
                 <span onClick={this.handleClick}>{name} - {counter}</span>
                 <br></br>
                 <button onClick={this.handleClickC}>+</button>
               </p>
               <a
                 className="App-link"
                 href="https://reactjs.org"
                 target="_blank"
                 rel="noopener noreferrer"
               >
                 Learn React
               </a>
             </header>
           </div>*/
    );
  }
}

export default App;
