// Types for SolarWinds WHD ticket detail response
interface Ticket {
  id: number;
  type: string;
  lastUpdated: string;
  shortSubject: string;
  shortDetail: string;
  displayClient: string;
  updateFlagType: number;
  prettyLastUpdated: string;
  latestNote: null | string;
}

interface TicketDetail {
  id: number;
  type: "Ticket";
  bccAddresses: string | null;
  ccAddressesForTech: string | null;
  closeDate: string | null;
  departmentId: number | null;
  lastUpdated: string; // ISO timestamp
  locationId: number | null;
  priorityTypeId: number | null;
  room: string | null;
  statusTypeId: number;
  subject: string;
  clientReporter: TicketClientReporter;
  clientTech: TicketClientTech | null;
  department: unknown | null;
  location: TicketLocation | null;
  prioritytype: TicketPriorityType | null;
  problemtype: TicketProblemType | null;
  statustype: TicketStatusType;
  techGroupLevel: TicketTechGroupLevel | null;
  assets: TicketAsset[];
  detail: string;
  reportDateUtc: string;
  displayDueDate: string | null;
  displayClient: string;
  emailClient: boolean;
  emailTech: boolean;
  emailTechGroupLevel: boolean;
  emailGroupManager: boolean;
  emailCc: boolean;
  emailBcc: boolean;
  needsApproval: boolean;
  ticketEditable: boolean;
  techId: number | null;
  levelNumber: string | null;
  clientId: number;
  flaggedByTech: boolean;
  isPublic: boolean;
  canEscalate: boolean;
  bookmarkableLink: string;
  isDeleted: boolean;
  notes: TicketNote[];
  ticketCustomFields: TicketCustomField[];
  enabledStatusTypes: TicketStatusType[];
  attachments: TicketAttachment[];
}

interface TicketClientReporter {
  id: number;
  type: "Client";
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  notes: string | null;
  phone: string | null;
  phone2: string | null;
  department: string | null;
  location: string | null;
  room: string | null;
  companyName: string | null;
  username: string | null;
}

interface TicketClientTech {
  id: number;
  type: "Tech";
  email: string | null;
  displayName: string | null;
}

interface TicketLocation {
  id: number;
  type: "Location";
  address: string | null;
  city: string | null;
  locationName: string | null;
  postalCode: string | null;
  state: string | null;
  priorityTypes: TicketPriorityType[];
  defaultPriorityTypeId: number | null;
}

interface TicketPriorityType {
  id: number;
  type: "PriorityType";
  priorityTypeName: string;
}

interface TicketProblemType {
  id: number;
  type: "RequestType";
  detailDisplayName: string;
}

interface TicketStatusType {
  id: number;
  type: "StatusType";
  statusTypeName: string;
}

interface TicketTechGroupLevel {
  id: number;
  type: "TechGroupLevel";
  level: number;
  levelName: string;
  shortLevelName: string;
}

interface TicketAsset {
  id: number;
  type: string;
  assetName: string;
}

interface TicketNote {
  id: number;
  type: string;
  date: string;
  isSolution: boolean;
  prettyUpdatedString: string;
  mobileNoteText: string;
  isTechNote: boolean;
  isHidden: boolean;
  attachments: TicketAttachment[];
}

interface TicketCustomField {
  id: number;
  type: string;
  definitionId: number;
  restValue: null;
}

interface TicketAttachment {
  id: number;
  type: string;
  fileName: string;
  sizeString: string;
  uploadDateUtc: string;
}

export { Ticket, TicketDetail };
