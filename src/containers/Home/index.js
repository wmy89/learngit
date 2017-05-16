import React, {
  Component
} from 'react'
import {App} from '../../components';
import {TodoList} from '../../components';


class Home extends Component {
  render () {
    return (
      <div>
        <h2>Home Page</h2>
          <TodoList />
          <App />
      </div>
    )
  }
}



export default Home
