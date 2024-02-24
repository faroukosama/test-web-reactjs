
import './App.css';
import { Component } from 'react';
import { CardList } from './component/card-list/card-list.component';
import { SearchBox } from './component/search-box/search-box.component';
class App extends Component{
  constructor(){
    super();
    this.state={
      monsters: [],
      searchField: ''
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(response =>response.json()).then(users =>this.setState({monsters:users}));
  }
  handleChange = (e)=>{
    this.setState({searchField:e.target.value}, () =>console.log(this.state.searchField))
  }

  render(){
    const {monsters,searchField} =this.state;
    const fillterdMonsters=monsters.filter(e => e.name.toLowerCase().includes(searchField.toLocaleLowerCase()));
    return(
      <div className="App">
        <h1> Monster Roledex </h1>
        <SearchBox placeHolder='Search Monsters..' handleChange={this.handleChange}></SearchBox>
        <CardList monsters={fillterdMonsters}>
        </CardList>
      </div>
    )
  }
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
