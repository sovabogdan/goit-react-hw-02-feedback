import styled from 'styled-components';

export const ButtonsList = styled.ul`
display: flex;
width: 250px;
justify-content: space-between;
`;

export const ButtonItem = styled.li`
width: 75px;
`;

export const Button = styled.button`
width: 100%;
font-weight:bold;
background-color: #1E90FF;
border:2px solid #4682B4;
border-radius: 5px;
cursor: pointer;
:focus,:hover{
    background-color: #00008B;
    color: #87CEEB;
}
`;