import React from 'react';
import { Centered, Title, Paragraph } from '../components/blocks';
import { Layout, Seo } from '../components/compounds';

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <Centered fullHeight>
      <div>
        <Title>404 NOT FOUND</Title>
        <Paragraph>The page you are looking for was not found</Paragraph>
      </div>
    </Centered>
  </Layout>
);

export default NotFoundPage;
