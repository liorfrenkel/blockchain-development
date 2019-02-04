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
  EmailLink,
} from '../components/blocks';

const IndexPage = ({ data }) => (
  <React.Fragment>
    <BgLogos />
    <Layout
      css={css`
        .Header {
          background-color: transparent;
        }
        .Header--container {
          visibility: hidden;
        }
      `}
    >
      <Seo title="Home" />
      <Centered
        css={css`
          position: absolute;
          left: 0;
          width: 100%;
          z-index: 1;
          top: 0;
          height: 100%;
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
            <EmailLink href={`mailto:${data.site.siteMetadata.email}`}>
              {data.site.siteMetadata.email}
            </EmailLink>
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
