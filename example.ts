import { 
  EPEligible, 
  NavGroup, 
  SchoolboxAssessment, 
  TASSEmployeeHR 
} from './dist';

// Example usage of Education Perfect types
const mathEligibility: EPEligible = {
  code: "MATH",
  years: [7, 8, 9, 10]
};

// Example usage of Schoolbox types
const navGroup: NavGroup = {
  groupId: 123,
  groupName: "Mathematics Department",
  settings: {
    new: 5,
    access: "read",
    isNotificationsEnabled: true,
    isForceFollow: false
  },
  members: [
    {
      id: 456,
      _links: {
        profile: "/profile/456",
        avatar: "/avatar/456"
      },
      title: "Mr",
      firstName: "John",
      preferredName: null,
      givenName: "John",
      lastName: "Smith",
      fullName: "John Smith",
      role: "Teacher",
      isStaff: true,
      campus: "Main",
      yearLevel: "",
      house: "Blue",
      accessType: "admin"
    }
  ]
};

// Example usage of namespaced types to avoid conflicts
const assessment: SchoolboxAssessment.Assessment = {
  data: [],
  metadata: {
    count: 0,
    cursor: 0
  }
};

console.log("Types are working correctly!");
console.log("Math eligibility:", mathEligibility);
console.log("Nav group:", navGroup.groupName);
