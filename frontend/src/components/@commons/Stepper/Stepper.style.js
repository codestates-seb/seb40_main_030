import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  margin: -10px auto 0;
`;

const Stepper = styled.ol`
  display: flex;
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  flex: 1;
  text-align: center;

  ${({ theme, status }) => css`
    &:before {
      content: '';
      display: block;
      width: calc(${theme.CIRCLE_SIZE} / 2);
      height: calc(${theme.CIRCLE_SIZE} / 2);
      border-radius: 50%;
      background-color: ${status ? '#1070fc' : 'gray'};
      opacity: 0.5;
      margin: 0 auto 10px;
    }

    &:not(:last-child) {
      &:after {
        content: '';
        position: relative;
        top: calc(${theme.CIRCLE_SIZE} / 4);
        width: calc(100% - ${theme.CIRCLE_SIZE} - calc(${theme.SPACING} * 2));
        left: calc(50% + calc(${theme.CIRCLE_SIZE} / 2 + ${theme.SPACING}));
        height: 2px;
        background-color: #e0e0e0;
        order: -1;
      }
    }
  `}
`;

const Title = styled.span`
  font-weight: bold;
  font-size: clamp(1rem, 4vw, 1.25rem);
  margin-bottom: 0.5rem;
`;

const Description = styled.span`
  color: grey;
  font-size: clamp(0.85rem, 2vw, 1rem);
  ${({ theme }) => css`
  padding-left: ${theme.SPACING}
  padding-right: ${theme.SPACING}
  `}
`;

export { Wrapper, Stepper, Item, Title, Description };
