import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  left: 7px;

  span {
    width: 160px;
    background: #c53030;
    color: #fff;
    padding: 8px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 500;
    text-align: center;
    position: absolute;
    bottom: calc(100% + 28px);

    &::before {
      content: '';
      border-style: solid;
      border-color: #c53030 transparent;
      border-width: 6px 6px 0px 6px;
      bottom: 20px;
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;
