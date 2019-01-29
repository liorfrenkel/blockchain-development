import styled from '@emotion/styled';

const Centered = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${p => (p.fullHeight ? '100%' : 'auto')};
`;

export default Centered;
