import styled from '@emotion/styled';
import themeUtils from '../../lib/themeUtils';

const getSizeV = props =>
  props.size
    ? themeUtils.getTheme(props).spacings.vertical[props.size]
    : themeUtils.getTheme(props).spacings.vertical[2];

const Separator = styled.div`
  width: 17px;
  border-bottom: #000000 solid 6px;
  margin: ${p => getSizeV(p)} 0;
`;

export default Separator;
