import './index.css'

const DisplayScoreCard = props => {
  const {score, reset, timerID} = props

  clearInterval(timerID)

  const playagain = () => {
    reset()
  }

  return (
    <div className="score-card-container">
      <div className="temp-container">
        <div className="trophy-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
            alt="trophy"
            className="trophy-image"
          />
        </div>

        <div className="score-display">
          <p className="score-heading">YOUR SCORE</p>
          <h1 className="score">{score}</h1>
        </div>
        <button className="play-again-button" type="button" onClick={playagain}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
            alt="reset"
            className="play-again-image"
          />
          <p className="play-again-text">PLAY AGAIN</p>
        </button>
      </div>
    </div>
  )
}

export default DisplayScoreCard
