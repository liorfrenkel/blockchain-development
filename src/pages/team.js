import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import themeUtils from '../lib/themeUtils';
import { CatchPhrase, Layout, Seo } from '../components/compounds';
import {
  Centered,
  Row,
  Col,
  Separator,
  Spacer,
  Title,
  EmailLink,
} from '../components/blocks';
const {getTheme} = themeUtils;

const TeamRow = styled(Row)`
  justify-content: space-between;
  margin-left: ${p => getTheme(p).spacings.horizontal[1]};
  ${Col} {
    margin-top: 0;
    margin-right: ${p => getTheme(p).spacings.horizontal[1]};
    margin-bottom: ${p => getTheme(p).spacings.vertical[4]};
    margin-left: 0;
    display: flex;
    justify-content: center;
    flex-basis: 22%;
  }
`;

const TeamMember = ({ name, email, imageSrc, className }) => (
  <div className={className}>
    <div className="image">
      {imageSrc && <Img fluid={imageSrc} />}
    </div>
    <div className="details">
      <Title className="name" size="2">{name}</Title>
      <EmailLink href={`mailto:${email}`}>{email}</EmailLink>
    </div>
  </div>
);
const StyledTeamMember = styled(TeamMember)`
  .image {
    ${themeUtils.mq({
      width: ['260px', null, '326px'],
      height: ['317px', null, '397px'],
    })}
    background-color: #000000;
  }
  .details {
    margin-top: ${p => getTheme(p).spacings.vertical[2]};
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .name {
    text-transform: uppercase;
  }
`;

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Team" />
    <Centered>
      <Row column>
        <Col>
          <Title
            css={theme => ({
              textAlign: 'center',
              marginBottom: getTheme({ theme }).spacings.vertical[2],
            })}
          >
            MEET OUR TEAM
          </Title>
          <CatchPhrase />
        </Col>
        <Col>
          <Separator />
        </Col>
        <Spacer vertical size={2} />
        <Col>
          <TeamRow>
            <Col>
              <StyledTeamMember
                name="Adam Perlow"
                email="adam@zenprotocol.com"
                imageSrc={data.adam.childImageSharp.fluid}
              />
            </Col>
            <Col>
              <StyledTeamMember
                name="Nathan Cook"
                email="nathan@zenprotocol.com"
                imageSrc={data.nathan.childImageSharp.fluid}
              />
            </Col>
            <Col>
              <StyledTeamMember
                name="Sharon Urban"
                email="sharon@zenprotocol.com"
                imageSrc={data.sharon.childImageSharp.fluid}
              />
            </Col>
            <Col>
              <StyledTeamMember
                name="Asher Manning"
                email="asher@zenprotocol.com"
                imageSrc={data.asher.childImageSharp.fluid}
              />
            </Col>
            <Col>
              <StyledTeamMember
                name="Eleanor Milstein"
                email="eleanor@zenprotocol.com"
                imageSrc={data.eleanor.childImageSharp.fluid}
              />
            </Col>
            <Col>
              <StyledTeamMember
                name="Lior Frenkel"
                email="lior@zenprotocol.com"
              />
            </Col>
            <Col>
              <StyledTeamMember
                name="David Brima"
                email="david@zenprotocol.com"
                imageSrc={data.david.childImageSharp.fluid}
              />
            </Col>
            <Col>
              <StyledTeamMember
                name="Ariel Grunfeld"
                email="ariel@zenprotocol.com"
              />
            </Col>
            <Col>
              <StyledTeamMember
                name="Nir Holtzman Ninio"
                email="nir@zenprotocol.com"
              />
            </Col>
            <Col>
              <StyledTeamMember
                name="Dor Karshi"
                email="dor@zenprotocol.com"
                imageSrc={data.dor.childImageSharp.fluid}
              />
            </Col>
          </TeamRow>
        </Col>
      </Row>
    </Centered>
  </Layout>
);
IndexPage.propTypes = {
  data: PropTypes.object,
};

export default IndexPage;

export const imageShape = graphql`
  fragment imageShape on File {
    childImageSharp {
      fluid(maxWidth: 326, maxHeight: 397) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const query = graphql`
  query {
    adam: file(relativePath: { regex: "/team/adam/" }) {
      ...imageShape
    }

    asher: file(relativePath: { regex: "/team/asher/" }) {
      ...imageShape
    }

    david: file(relativePath: { regex: "/team/david/" }) {
      ...imageShape
    }

    dor: file(relativePath: { regex: "/team/dor/" }) {
      ...imageShape
    }

    eleanor: file(relativePath: { regex: "/team/eleanor/" }) {
      ...imageShape
    }

    nathan: file(relativePath: { regex: "/team/nathan/" }) {
      ...imageShape
    }

    sharon: file(relativePath: { regex: "/team/sharon/" }) {
      ...imageShape
    }
  }
`;
