import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import withStyles from '@material-ui/styles/withStyles';

const styles = theme => ({
  divider: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
  },
  footer: {
    marginBottom: theme.spacing(1),
    whiteSpace: 'nowrap',
  }
});

const Footer = withStyles(styles)(props => {
  const {
    classes,
    data: {
      site: {
        siteMetadata: {
          title,
          contact: { email, phone },
        },
      },
    },
  } = props;
  //console.log(typeof(data));
  return (
    <>
      <Divider className={classes.divider} />
      <footer
        className={classes.footer}
        id="footer"
      >
        <span>
          <Typography variant="caption" component="span">
            ©{new Date().getFullYear()} {title}{" "}
            <Hidden only={["xs", "sm"]}>–</Hidden>
            <Hidden only={["xl", "lg", "md"]}>
              <br />
            </Hidden>{" "}
            {email} – {phone}
            <br />
            &middot;
          </Typography>
        </span>
      </footer>
    </>
  );
});

export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            contact {
              email
              phone
            }
          }
        }
      }
    `}
    render={data => <Footer data={data} />}
  />
);
