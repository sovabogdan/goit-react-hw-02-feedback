import { Component } from 'react';
import {Statistics}  from './Statistics/Statistics';
import { Options } from './Options/Options'
import {Container,Title,Notification} from './App.styled'

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = (value) => {
     this.setState(prevState => {
       return { [value]: prevState[value] + 1 };
    })
  };
    totalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
   positivePercentage = () => {
    const total = this.totalFeedback();
    const { good } = this.state;
    return total !== 0 ? Math.round((good * 100) / total) : 0;
  };
  render() {
    const buttonsArray = Object.keys(this.state);
    const statsArray = Object.entries(this.state);
    const total = this.totalFeedback();
    const value = this.positivePercentage();
    return (
        <Container>
          <Title>Please leave feedback</Title>
          <Options options={buttonsArray} onFeedback={this.handleFeedback} />     
        <Title>Statistics</Title>
{total === 0 ? (
            <Notification>No feedback given</Notification>
          ) : (
            <Statistics total={total} good={value} statsArray={statsArray} />
          )}
      </Container>
    )
}
};
