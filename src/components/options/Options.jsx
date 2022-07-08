import { Buttons } from './Options.styled';

export const Options = ({ onFeedback, options }) => {
  return (
    <ul
    >
      {options.map(button => (
        <li key={button}>
          <Buttons type="button" onClick={() => onFeedback(button)}>
            {button}
          </Buttons>
        </li>
      ))}
    </ul>
  );
};