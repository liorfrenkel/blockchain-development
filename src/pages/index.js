import React from 'react';
import { css } from '@emotion/core';
import { graphql } from 'gatsby';
import {
  CatchPhrase,
  Layout,
  Seo,
  Logo,
  BgLogos,
} from '../components/compounds';
import {
  Centered,
  Row,
  Col,
  Spacer,
  Separator,
  Link,
} from '../components/blocks';
import themeUtils from '../themes/themeUtils';

const headerHeights = ['80px', '102px']; // defined by the logo height and padding in header
const responsiveContainer = themeUtils.mq({
  top: headerHeights,
  height: headerHeights.map(h => `calc(100% - ${h})`),
});

const IndexPage = ({ data }) => (
  <React.Fragment>
    <BgLogos />
    <Layout>
      <Seo title="Home" />
      <Centered
        fullHeight
        css={css`
          position: absolute;
          left: 0;
          width: 100%;
          z-index: 1;
          ${responsiveContainer}
        `}
      >
        <Row column>
          <Col>
            <Logo css={css({ width: '178px' })} />
            <Spacer vertical size={2} />
          </Col>
          <Col>
            <CatchPhrase />
          </Col>
          <Col>
            <Separator />
          </Col>
          <Col>
            <Link href={`mailto:${data.site.siteMetadata.email}`}>
              {data.site.siteMetadata.email}
            </Link>
          </Col>
        </Row>
      </Centered>
    </Layout>
  </React.Fragment>
);

export default IndexPage;

export const query = graphql`
  query SiteEmailQuery {
    site {
      siteMetadata {
        email
      }
    }
  }
`;
