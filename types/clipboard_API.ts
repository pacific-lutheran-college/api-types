interface Session {
  id: number;
  title: string;
  notes: string;
  opponent: null | string;
  bye: boolean;
  cancelled: boolean;
  scored: boolean;
  hexColor: string;
  startDateTime: string;
  endDateTime: string;
  studentParentNotes: string;
  creatorUserId: number;
  seriesId: number;
  organisationScore: null | string;
  opponentScore: null | number;
  result: null | "W" | "L" | "D" | "F" | "OF" | "NR";
  remindStaff: boolean;
  activity: {
    id: number;
    name: string;
    department: {
      id: number;
      name: "Sport" | "Music";
    };
    colour: number;
    hexColor: string;
  };
  feedback: [];
  assignedStaff: [];
  locationData: {
    id: number;
    name: string;
    address: string;
    latitude: number;
    longitude: number;
    owner: {
      id: number;
      name: string;
      acronym: string;
      shortName: string;
      state: "QLD" | "NSW" | "VIC" | "ACT" | "TAS" | "SA" | "NT" | "WA";
    };
  };
  teams: [];
  students: [];
  status: "confirmed" | "unconfirmed" | "draft";
}

interface Selection {
  id: number;
  selectedTimestamp: string;
  selectedByGuardianId: null | number;
  onWaitlist: boolean;
  activity: {
    id: number;
    name: string;
    code: null | string;
    smsCode: null | string;
    description: string;
    activityType: string;
    emoji: string;
    hexColor: string;
    hexContrastColor: string;
  };
  season: {
    id: number;
    name: string;
    hidden: boolean;
    activitySelectionOpenTimestamp: null | string;
    activitySelectionCloseTimestamp: null | string;
  };
  seasonActivityOption: {
    id: null | number;
    label: null | string;
  };
  student: {
    id: number;
    smsId: string;
    firstName: string;
    lastName: string;
    email: string;
    gender: string;
    yearGroup: {
      id: number;
      name: string;
    };
  };
  invoice: {
    id: null | string;
    status: null | string;
  };
}

interface SelectionResponse {
  data: Selection[];
  paginationData: {
    currentPage: number;
    lastPage: number;
    numRecords: number;
    pageLength: number;
  };
}

interface StudentTeams {
  id: number;
  student: {
    id: number;
    smsId: string;
    fullName: string;
  };
  team: {
    id: number;
    name: string;
    sisId: null | string;
    activity: {
      id: number;
      name: string;
    };
  };
  startDateTime: null | string;
  endDateTime: null | string;
}

interface ClipboardStaff {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  mobileNumber: string;
  isAdmin: boolean;
  isManager: boolean;
  employeeId: string;
  frozen: "yes" | "no";
  wwccNumber: string;
  wwccExpiryDate: string;
  updatedDetails: boolean;
  sisId: string | null;
  payment: "ts" | "na";
  inviteEmailLastSentTimestamp: string;
  activitiesPermissions: {
    activityId: number;
    activityName: string;
  }[];
  departments: {
    id: number;
    name: string;
  }[];
}

interface SessionRecord {
  id: number;
  absent: boolean;
  explained: boolean;
  comment: string;
  addedToRoll: boolean;
  attendanceFlags: {
    id: number;
    name: string;
  }[];
  student: {
    id: number;
    firstName: string;
    legalFirstName: string;
    lastName: string;
    smsId: string;
    yearGroup: {
      id: number;
      name: string;
    };
  };
  session: {
    id: number;
    title: string;
    activity: {
      id: number;
      name: string;
    };
    startDateTime: string;
    endDateTime: string;
  };
  team: {
    id: number;
    name: string;
    category: {
      id: number;
      name: string;
    };
  };
  roll: {
    id: number;
    timeMarked: string;
    timeEdited: string;
    markedByUser: {
      id: number;
      firstName: string;
      lastName: string;
      sisId: string;
    };
    editedByUser: {
      id: number;
      firstName: string;
      lastName: string;
      sisId: string;
    };
  };
  updatedTimestamp: string;
  updatedByUser: {
    id: number;
    firstName: string;
    lastName: string;
    sisId: string;
  };
}

export {
  Session,
  Selection,
  SelectionResponse,
  StudentTeams,
  ClipboardStaff,
  SessionRecord,
};
