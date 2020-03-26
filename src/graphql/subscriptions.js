/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateOrganization = `subscription OnCreateOrganization {
  onCreateOrganization {
    id
    name
    groups {
      nextToken
    }
    createdDate
  }
}
`;
export const onUpdateOrganization = `subscription OnUpdateOrganization {
  onUpdateOrganization {
    id
    name
    groups {
      nextToken
    }
    createdDate
  }
}
`;
export const onDeleteOrganization = `subscription OnDeleteOrganization {
  onDeleteOrganization {
    id
    name
    groups {
      nextToken
    }
    createdDate
  }
}
`;
export const onCreateGroup = `subscription OnCreateGroup {
  onCreateGroup {
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
export const onUpdateGroup = `subscription OnUpdateGroup {
  onUpdateGroup {
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
export const onDeleteGroup = `subscription OnDeleteGroup {
  onDeleteGroup {
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
export const onCreateUser = `subscription OnCreateUser {
  onCreateUser {
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
export const onUpdateUser = `subscription OnUpdateUser {
  onUpdateUser {
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
export const onDeleteUser = `subscription OnDeleteUser {
  onDeleteUser {
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
export const onCreateAction = `subscription OnCreateAction {
  onCreateAction {
    id
    userID
    details
    dateTime
  }
}
`;
export const onUpdateAction = `subscription OnUpdateAction {
  onUpdateAction {
    id
    userID
    details
    dateTime
  }
}
`;
export const onDeleteAction = `subscription OnDeleteAction {
  onDeleteAction {
    id
    userID
    details
    dateTime
  }
}
`;
