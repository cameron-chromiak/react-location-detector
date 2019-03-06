import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
import Loader from './Loader'


class App extends React.Component{

  state = {
      lat: null,
      errMessage: ''
    }


  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({lat: position.coords.latitude})
      },(err) => {
        this.setState({errMessage: err.message})
      }
    )
  }

  renderContent(){
    if(this.state.errMessage && !this.state.lat){
      return <div>error: {this.state.errMessage}</div>
    }
    if(!this.state.errMessage && this.state.lat){
      return <SeasonDisplay lat={this.state.lat}/>
    }
    return <Loader message='Please accept location request'/>

  }

  render(){
      return(
        <div className='border red'>
          {this.renderContent()}
        </div>
      )
    }
  }


ReactDOM.render(
  <App/>,
  document.getElementById('root')
)
