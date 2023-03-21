import { Component } from 'react';


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = (value) => {
    console.log(this.state.value);
     this.setState(prevState => {
       return { [value]: prevState[value] + 1 };
    })
  };
    totalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  render() {
    const buttonsArray = Object.keys(this.state);
    const statsArray = Object.entries(this.state);
    const total = this.totalFeedback();
    console.log(buttonsArray);
    return (
      <>
        <h2>Please leave feedback</h2>
        <ul>
          {buttonsArray.map(button => (
            <li key={button}>
              <button type='button' onClick={()=>this.handleClick(button)}>{button}</button>
            </li>
          ))}
        </ul>
        <h2>Statistics</h2>
        <ul>
          {statsArray.map(item => (
            <li key={item[0]}>
              <p>{item[0]}: {item[1]}</p>
              </li>
            ))}
        </ul>
        <p>Total: {total}</p>
        <p>Positive feedback:</p>
      </>
    )
}
};
