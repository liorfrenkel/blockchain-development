import styled from '@emotion/styled';
import themeUtils from '../../lib/themeUtils';

const getSizeH = props =>
  props.size
    ? themeUtils.getTheme(props).spacings.horizontal[props.size]
    : themeUtils.getTheme(props).spacings.horizontal[2];

const getSizeV = props =>
  props.size
    ? themeUtils.getTheme(props).spacings.vertical[props.size]
    : themeUtils.getTheme(props).spacings.vertical[2];

const Spacer = styled.div`
  margin-bottom: ${p => (p.vertical ? getSizeV(p) : 0)};
  margin-right: ${p => (p.horizontal ? getSizeH(p) : 0)};
`;

export default Spacer;
