import React, { Component,Fragment } from 'react'
import {connect} from 'react-redux'
import {handleInitialData} from '../actions/sharedAction'
import Dashboard from './Dashboard'
import LoadingBar from 'react-redux-loading-bar'
import NewTweet from './NewTweet'
import TweePage from './TweetPage'
import Nav from './Nav'
import {BrowserRouter as Router, Route} from 'react-router-dom'
class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <Router>
        <LoadingBar/>
        <div className='continaer'>
            <Nav/>
            {this.props.loading===true ? null
            : <div>
                <Route path='/' exact component={Dashboard}/>
                <Route path='/tweet/:id' component={TweePage}/>
                <Route path='/new' component={NewTweet}/>
              </div>
            }
        </div>
       </Router>
      
    )
  }
}

function mapStateToProps({authedUser}){
  return{
    loading:authedUser===null
  }
}

export default connect(mapStateToProps)(App)