export interface NavGroup {
  groupId: number;
  groupName: string;
  settings: {
    new: number;
    access: string;
    isNotificationsEnabled: boolean;
    isForceFollow: boolean;
  };
  members: {
    id: number;
    _links: {
      profile: string;
      avatar: string;
    };
    title: string;
    firstName: string;
    preferredName: string | null;
    givenName: string;
    lastName: string;
    fullName: string;
    role: string;
    isStaff: boolean;
    campus: string;
    yearLevel: string;
    house: string;
    accessType: "read" | "write" | "admin";
  }[];
}
