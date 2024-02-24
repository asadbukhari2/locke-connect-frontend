import styled from 'styled-components';

export const StyledChatBoatAside = styled.div`
  .title {
    display: block;
    background: linear-gradient(101.18deg, #0034dd -33.77%, #6833ff 50.51%, #99a1f2 131.89%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 12px;
    line-height: 16px;
    text-align: left;
    margin-bottom: 15px;
  }
`;

export const SidbarTabWrapper = styled.div`
  position: relative;
  margin-bottom: 40px;
  .heading {
    display: block;
    margin-bottom: 10px;
    font-size: 24px;
    font-weight: 400;
    line-height: 28px;
    text-align: left;
    text-transform: uppercase;
  }

  .discreption {
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    text-align: left;
  }

  &::before {
    position: absolute;
    content: '';
    height: 1px;
    width: 100%;
    left: 0;
    right: 0;
    bottom: -20px;
    background: linear-gradient(269.97deg, rgba(104, 51, 255, 0) 10.35%, #6833ff 38.76%);
  }
`;
