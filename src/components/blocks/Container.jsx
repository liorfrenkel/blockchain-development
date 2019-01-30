import styled from '@emotion/styled';
import themeUtils from '../../lib/themeUtils';

const paddingHorizontal = props => themeUtils.getTheme(props).padding.container;
const responsiveHorizontal = props => themeUtils.mq({
  paddingLeft: paddingHorizontal(props),
  paddingRight: paddingHorizontal(props),
});
const Container = styled.div`
  ${p => responsiveHorizontal(p)}
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  max-width: 1920px;
`;

export default Container;
