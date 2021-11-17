import styled from "styled-components";

export const Root = styled.div`
    // border: 1px solid orange;
    // padding: 1rem;
    // min-width: 100px;
    // min-height: 250px;
    // max-height: 250px;
    // max-width: 250px;
    // display: grid;
    // grid-auto-flow: row;
    // grid-template-rows: max-content 1fr max-content max-content;
    // gap: 1rem;
`;

export const Image = styled.img `
    max-width: 100%;
    max-height: 100px;
    border: 1px solid black;
    align-self: center;
    justify-self: center;
    padding: 0.5rem
`;

export const Title = styled.div `
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: red;
`;
export const Avatar = styled.img `
    width: 30px;
    height: 30px;
    border: 1px solid black;
    border-radius: 50px;
    padding: 0.1rem
`;

export const Top = styled.div `
 display: flex,
`;