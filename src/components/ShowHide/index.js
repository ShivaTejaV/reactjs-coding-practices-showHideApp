// Write your code here
import './index.css'
import {Component} from 'react'

class ShowHide extends Component {
  state = {btn1: false, btn2: false}

  hideShow1 = () => {
    this.setState(prevState => ({btn1: !prevState.btn1}))
  }

  hideShow2 = () => {
    this.setState(prevState => ({btn2: !prevState.btn2}))
  }

  render() {
    const {btn1, btn2} = this.state
    // console.log(btn1, btn2)
    let cls1
    let cls2
    if (btn1) {
      cls1 = 'name'
    } else {
      cls1 = 'hide'
    }

    if (btn2) {
      cls2 = 'name'
    } else {
      cls2 = 'hide'
    }

    return (
      <div className="bg">
        <h1 className="heading">Show/Hide</h1>
        <div className="buttonContainer">
          <div className="container">
            <button className="button" type="button" onClick={this.hideShow1}>
              Show/Hide Firstname
            </button>
            <h1 className={cls1}>Joe</h1>
          </div>

          <div className="container">
            <button className="button" type="button" onClick={this.hideShow2}>
              Show/Hide Lastname
            </button>
            <h1 className={cls2}>Jonas</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
