import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {
    isClicked: true,
  }

  onClickEmojis = () => {
    this.setState({isClicked: false})
  }

  renderThankyouCard = () => {
    const {resources} = this.props
    return (
      <div className="thanks-card">
        <img src={resources.loveEmojiUrl} alt="love emoji" className="image" />
        <h1>Thank You!</h1>
        <p className="name">
          We will use your feedback to improve our customer support <br />
          performance.
        </p>
      </div>
    )
  }

  renderCustomerCard = () => {
    const {resources} = this.props
    return (
      <div className="card">
        <h1 className="heading">
          How satisfied are you with our
          <br />
          customer support performance?
        </h1>
        <div className="emojis-container">
          {resources.emojis.map(eachEmoji => (
            <li key={eachEmoji.id} className="emojis-card">
              <button type="button" onClick={this.onClickEmojis}>
                <img
                  src={eachEmoji.imageUrl}
                  alt={eachEmoji.name}
                  className="image"
                />
              </button>
              <p className="name">{resources.emojis[0].name}</p>
            </li>
          ))}
        </div>
      </div>
    )
  }

  render() {
    const {isClicked} = this.state
    return (
      <div className="main-container">
        {isClicked ? this.renderCustomerCard() : this.renderThankyouCard()}
      </div>
    )
  }
}

export default Feedback
