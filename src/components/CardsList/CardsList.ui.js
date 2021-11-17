import styled from "styled-components";

export const Root = styled.div`
    padding: 1rem;
    min-width: 100px;
    min-height: 100px;

    .items {
    display: grid;
    justify-content: center;
    // grid-template-columns:  300px 300px; 
    gap: 1rem;
    }

    h3 {
        padding-bottom: 1rem;
        text-align: center
    }
`;