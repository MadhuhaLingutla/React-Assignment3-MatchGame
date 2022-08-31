import {Component} from 'react'
import './index.css'

class Timer extends Component {
  state = {
    elapsedseconds: 0,
  }

  componentDidMount() {
    setInterval(this.tick, 1000)
  }

  tick = () => {
    const {elapsedseconds} = this.state
    if (elapsedseconds < 60) {
      const updatedelapsedseconds = elapsedseconds + 1
      this.setState({elapsedseconds: updatedelapsedseconds})
    }
  }

  render() {
    const {elapsedseconds} = this.state
    const remainingtime = 60 - elapsedseconds
    return (
      <p className="remainingtime">
        <span className="remainingtime-count">{remainingtime}</span> sec
      </p>
    )
  }
}

export default Timer
