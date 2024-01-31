import styled from "styled-components";

export const ModalContent = styled.div`
  position: relative;
  padding: 15px;
  font-size: 20px;
  line-height: 24px;
  width: 100%;
  padding: 20px;
  border-radius: 15px;
  background: #fff;

  .title {
    display: block;
    margin: 0 0 25px;
  }

  .text-box {
    overflow: hidden;
    text-align: center;
    padding: 5px 0 25px;
  }

  .btn-holder {
    display: flex;
    gap: 15px;
    max-width: 300px;
    margin: 0 auto;
  }
`;