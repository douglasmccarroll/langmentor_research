/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getOrganization = `query GetOrganization($id: ID!) {
  getOrganization(id: $id) {
    id
    name
    groups {
      nextToken
    }
    createdDate
  }
}
`;
export const listOrganizations = `query ListOrganizations(
  $filter: ModelOrganizationFilterInput
  $limit: Int
  $nextToken: String
) {
  listOrganizations(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      createdDate
    }
    nextToken
  }
}
`;
export const getGroup = `query GetGroup($id: ID!) {
  getGroup(id: $id) {
    id
    organizationID
    name
    organization {
      id
      name
      createdDate
    }
    users {
      nextToken
    }
    createdDate
  }
}
`;
export const listGroups = `query ListGroups(
  $filter: ModelGroupFilterInput
  $limit: Int
  $nextToken: String
) {
  listGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      organizationID
      name
      createdDate
    }
    nextToken
  }
}
`;
export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    groupID
    userName
    firstName
    lastName
    fullName
    emailAddress
    phoneNumber
    group {
      id
      organizationID
      name
      createdDate
    }
    actions {
      nextToken
    }
    createdDate
  }
}
`;
export const listUsers = `query ListUsers(
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
    }
    nextToken
  }
}
`;
export const getAction = `query GetAction($id: ID!) {
  getAction(id: $id) {
    id
    userID
    details
    dateTime
  }
}
`;
export const listActions = `query ListActions(
  $filter: ModelActionFilterInput
  $limit: Int
  $nextToken: String
) {
  listActions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      userID
      details
      dateTime
    }
    nextToken
  }
}
`;
