import styled from "styled-components";

export const Container = styled.div`
  padding: 15px;
  height: 100%;
  flex: 0 0 320px;
  opacity: ${(props) => (props.done ? 0.5 : 1)};

  & + div {
    border-left: 1px solid rgba(255, 255, 255, 0.1);
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 42px;

    h2 {
      font-weight: 500;
      font-size: 1.2rem;
      padding: 0 0.8rem;
    }

    button {
      width: 36px;
      height: 36px;
      border-radius: 10px;
      background: #673ab7;
      border: 0;
      cursor: pointer;
    }
  }

  ul {
    margin-top: 30px;
  }
`;
