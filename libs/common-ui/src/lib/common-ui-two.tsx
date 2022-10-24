import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface CommonUiProps {}

const StyledCommonUi = styled.div`
  color: pink;
`;

export function CommonUiTwo(props: CommonUiProps) {
  return (
    <StyledCommonUi>
      <h1>Welcome to CommonUi!</h1>
    </StyledCommonUi>
  );
}

export default CommonUiTwo;
