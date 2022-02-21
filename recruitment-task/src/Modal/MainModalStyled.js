import styled from "styled-components";

const Section = styled.div`
    height: 40px;
    width: 100%;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SectionTitle = styled.div`
    height: 40px;
    width: 30%;
    display: flex;
    align-items: center;
`;

const SectionContent = styled.div`
    height: 40px;
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SectionSeparator = styled.div`
    width: 300px;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export { Section, SectionTitle, SectionContent, SectionSeparator };