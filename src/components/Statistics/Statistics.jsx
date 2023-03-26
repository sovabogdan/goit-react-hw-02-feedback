import {Item,Result} from './Statistics.styled'

export const Statistics = ({ statsArray, good, total }) => {
    return (<>
    <ul>
           {statsArray.map(item => (
          <Item key={item[0]}>
              {item[0]}: {item[1]}
            </Item>
          ))}
        </ul>
        <Result>Total: {total}</Result>
        <Result value={good}> Positive Feedback: {good}%</Result>
    </>);
     
};

