import {ButtonsList,ButtonItem,Button} from './Options.styled'

export const Options = ({ onFeedback, options }) => {
    return (
        <ButtonsList>
           {options.map(button => (
        <ButtonItem key={button}>
          <Button type="button" onClick={() => onFeedback(button)}>
            {button}
          </Button>
        </ButtonItem>
      ))}
        </ButtonsList>
    );
};