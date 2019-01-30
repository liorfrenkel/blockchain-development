import styled from '@emotion/styled';

const Row = styled.div`
  display: flex;
  flex-direction: ${props => (props.column ? 'column' : 'row')};
  flex-wrap: wrap;
  align-items: ${props => (props.column ? 'center' : 'flex-start')};
`;

export default Row;
