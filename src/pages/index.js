import withRoot from "../utils/withRoot";
import React, {forwardRef} from "react";
import {graphql} from "gatsby";
import SEO from "../components/SEO";
import Page from "../components/Page";
import withStyles from "@material-ui/styles/withStyles";
import Amplify, {API, graphqlOperation} from "aws-amplify";
import config from "../aws-exports";
import {withAuthenticator} from "aws-amplify-react";
import MaterialTable from "material-table";
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import * as queries from "../graphql/queries";

Amplify.configure(config);

const styles = () => ({
  root: {
    fontWeight: "bold",
  },
});

const listUsers = `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      groupID
      userName
      firstName
      lastName
      fullName
      emailAddress
      phoneNumber
      createdDate
      actions {
        items {
          dateTime
          details
          id
          userID
        }
      }
    }
    nextToken
  }
}
`;

const Home = () => { // (props) => {
  API.graphql(graphqlOperation(queries.listGroups))
    .then(
      groupsData => {
        console.log("****************************");
        console.log(groupsData);
        console.log("****");
        const group = groupsData.data.listGroups.items[0];
        const groupId = group.id;
        console.log("Group ID: " + groupId);

        API.graphql(graphqlOperation(listUsers, {
          filter: {
            groupID: {
              eq: groupId
            }
          }
        }))
          .then(
            usersData => {
              console.log("************* Users ***************");
              console.log(usersData);
              console.log("****");
              for (let i = 0; i < usersData.data.listUsers.items.length; i++) {
                let user = usersData.data.listUsers.items[i];
                console.log("************* User ***************");
                console.log(user);
                console.log("****");
                console.log("************* Actions ***************");
                for (let j = 0; j < user.actions.items.length; j++) {
                  let action = user.actions.items[j];
                  let detailsJSON = action.details;
                  let details = JSON.parse(detailsJSON);
                  console.log(details.actionType);
                }
                console.log("****");
              }
            }
          );
      }
    );

  // const products = props.data.allMarkdownRemark.edges;
  return (
    <Page>
      <SEO title="Home">
        <meta
          content="An experimental website ..."
          name="description"
        />
      </SEO>

      <MaterialTable
        icons={tableIcons}
        columns={[
          {title: "First Name", field: "name"},
          {title: "Last Name", field: "surname"},
          {title: "Birth Year", field: "birthYear", type: "numeric"},
          {
            title: "Birth City",
            field: "birthCity",
            lookup: {34: "İstanbul", 63: "Şanlıurfa"}
          }
        ]}
        data={[
          {name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63}
        ]}
        options={{
          pageSize: 10, // Only 5, 10 or 20 - otherwise you will get a warning in the console
          rowStyle: {height: "30px"}
        }}
        title="Comedy and Language Learning"
      />

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

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref}/>),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref}/>),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref}/>),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref}/>),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref}/>),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref}/>),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref}/>),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref}/>),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref}/>),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref}/>),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref}/>),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref}/>),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref}/>),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref}/>),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref}/>),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref}/>),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref}/>)
};

Home.propTypes = {
  // classes: PropTypes.object.isRequired,
};

export default withAuthenticator(withRoot(withStyles(styles)(Home)), {includeGreetings: true});
