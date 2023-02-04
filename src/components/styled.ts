import styled from "styled-components";

export const AddFormDiv = styled.div`
  width: 100%;
  button {
    margin: 0 5px;
  }
`;

export const ContentsDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  .results {
    flex:1;
    max-width: 980px;
    .result-each {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-bottom: 10px;
      .box-text {
        display: flex;
        flex: 1;
        margin-left: 10px;
        p {
          background: white;
          padding: 5px 10px;
          border-radius: 5px;
          flex: 1;
        }
      }
    }
  }
`;
