import withRoot from "../utils/withRoot";
import React from "react";
import { graphql, Link } from "gatsby";
import * as PropTypes from "prop-types";
import SEO from "../components/SEO";
import Card from "../components/Card";
import Page from "../components/Page";
import HomeFeatures from "../components/HomeFeatures";
import Button from "@material-ui/core/Button";
import Carousel from "../components/Carousel";
import Avatar from "@material-ui/core/Avatar";
import { Gift } from "mdi-material-ui";
import withStyles from "@material-ui/styles/withStyles";
import Amplify from 'aws-amplify'
import config from '../aws-exports'
import { withAuthenticator } from 'aws-amplify-react';

Amplify.configure(config);

const styles = theme => ({
    root: {
      fontWeight: "bold",
    },
  }),
  Home = props => {
    const products = props.data.allMarkdownRemark.edges;
    return (
      <Page title="Language Collaborative Research">
        <SEO title="Home">
          <meta
            name="description"
            content="An experimental website ..."
          />
        </SEO>

        <HomeFeatures />
        <Card
          title="Our Products"
          avatar={
            <Avatar>
              <Gift />
            </Avatar>
          }
          action={
            <Button
              variant="contained"
              color="secondary"
              className={props.classes.root}
              component={Link}
              to="/products"
            >
              View All Products
            </Button>
          }
          style={{ minHeight: 523 }}
        >
          <Carousel items={products} />
        </Card>
      </Page>
    );
  };

export const query = graphql`
  query {
    allFile(filter: { extension: { eq: "jpg" } }) {
      edges {
        node {
          publicURL
        }
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/products/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            image {
              publicURL
            }
            path
            title
            date(formatString: "DD MMMM YYYY")
          }
          excerpt
        }
      }
    }
  }
`;

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withAuthenticator(withRoot(withStyles(styles)(Home)), { includeGreetings: true });
