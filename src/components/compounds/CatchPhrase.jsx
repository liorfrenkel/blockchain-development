import React from 'react';
import styled from '@emotion/styled';
import { StaticQuery, graphql } from 'gatsby';
import { Quote } from '../blocks';
import themeUtils from '../../lib/themeUtils';

const responsiveMaxWidth = themeUtils.mq({
  maxWidth: ['90%', '400px'],
});
const TextBlock = styled.div`
  ${responsiveMaxWidth}
  text-align: center;
  margin: 0 auto;
  line-height: 24px;
`;

const CatchPhrase = () => (
  <StaticQuery
    query={detailsQuery}
    render={data => (
      <TextBlock>
        <Quote>{data.site.siteMetadata.catchPhrase}</Quote>
      </TextBlock>
    )}
  />
);

export default CatchPhrase;

const detailsQuery = graphql`
  query SiteCatchPhraseQuery {
    site {
      siteMetadata {
        catchPhrase
      }
    }
  }
`;
