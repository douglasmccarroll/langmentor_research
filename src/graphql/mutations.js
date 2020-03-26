/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createOrganization = `mutation CreateOrganization(
  $input: CreateOrganizationInput!
  $condition: ModelOrganizationConditionInput
) {
  createOrganization(input: $input, condition: $condition) {
    id
    name
    groups {
      nextToken
    }
    createdDate
  }
}
`;
export const updateOrganization = `mutation UpdateOrganization(
  $input: UpdateOrganizationInput!
  $condition: ModelOrganizationConditionInput
) {
  updateOrganization(input: $input, condition: $condition) {
    id
    name
    groups {
      nextToken
    }
    createdDate
  }
}
`;
export const deleteOrganization = `mutation DeleteOrganization(
  $input: DeleteOrganizationInput!
  $condition: ModelOrganizationConditionInput
) {
  deleteOrganization(input: $input, condition: $condition) {
    id
    name
    groups {
      nextToken
    }
    createdDate
  }
}
`;
export const createGroup = `mutation CreateGroup(
  $input: CreateGroupInput!
  $condition: ModelGroupConditionInput
) {
  createGroup(input: $input, condition: $condition) {
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
export const updateGroup = `mutation UpdateGroup(
  $input: UpdateGroupInput!
  $condition: ModelGroupConditionInput
) {
  updateGroup(input: $input, condition: $condition) {
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
export const deleteGroup = `mutation DeleteGroup(
  $input: DeleteGroupInput!
  $condition: ModelGroupConditionInput
) {
  deleteGroup(input: $input, condition: $condition) {
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
export const createUser = `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
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
export const updateUser = `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
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
export const deleteUser = `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
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
export const createAction = `mutation CreateAction(
  $input: CreateActionInput!
  $condition: ModelActionConditionInput
) {
  createAction(input: $input, condition: $condition) {
    id
    userID
    details
    dateTime
  }
}
`;
export const updateAction = `mutation UpdateAction(
  $input: UpdateActionInput!
  $condition: ModelActionConditionInput
) {
  updateAction(input: $input, condition: $condition) {
    id
    userID
    details
    dateTime
  }
}
`;
export const deleteAction = `mutation DeleteAction(
  $input: DeleteActionInput!
  $condition: ModelActionConditionInput
) {
  deleteAction(input: $input, condition: $condition) {
    id
    userID
    details
    dateTime
  }
}
`;
