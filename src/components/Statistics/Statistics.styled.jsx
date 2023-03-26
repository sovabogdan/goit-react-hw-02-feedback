import styled from 'styled-components';

export const Item = styled.li`
:not(:last-child){
margin-bottom:10px;
};
font-size: 20px;
`;

export const Result = styled.p`
font-size: 30px;
font-weight: bold;
:not(:last-child){
    margin-bottom: 0px;
};
`;
