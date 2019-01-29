import styled from '@emotion/styled';

const Row = styled.div`
  display: flex;
  flex-direction: ${props => (props.column ? 'column' : 'row')};
  align-items: center;
`;

export default Row;
