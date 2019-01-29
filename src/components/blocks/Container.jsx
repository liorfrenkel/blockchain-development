import styled from '@emotion/styled';
import themeUtils from '../../themes/themeUtils';

const paddingHorizontal = ['15px', null, null, '40px', '70px'];
const responsiveHorizontal = themeUtils.mq({
  paddingLeft: paddingHorizontal,
  paddingRight: paddingHorizontal,
});
const Container = styled.div`
  ${responsiveHorizontal}
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  max-width: 1920px;
`;

export default Container;
