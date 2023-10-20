// Write your code here
// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {status: true}

  onLight = () => {
    this.setState(prevState => ({status: !prevState.status}))
  }

  render() {
    const {status} = this.state
    return (
      <div className="bg-cont">
        {status && (
          <div className="content-cont dark-cont">
            <h1 className="main-head light-head">Click To Change Mode</h1>
            <button
              className="btn btn-light"
              type="button"
              onClick={this.onLight}
            >
              Light Mode
            </button>
          </div>
        )}
        {!status && (
          <div className="light-cont content-cont ">
            <h1 className="main-head dark-head">Click To Change Mode</h1>
            <button
              className="btn btn-dark"
              type="button"
              onClick={this.onLight}
            >
              Dark Mode
            </button>
          </div>
        )}
      </div>
    )
  }
}

export default LightDarkMode
