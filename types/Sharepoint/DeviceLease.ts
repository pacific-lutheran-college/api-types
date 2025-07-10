// Basic user info type
interface User {
  email: string;
  id: string;
  displayName: string;
}

// Application info type
interface Application {
  id: string;
  displayName: string;
}

// Actor type (user or application)
interface Actor {
  user?: User;
  application?: Application;
}

// Content type info
interface ContentType {
  id: string;
  name: string;
}

// Parent reference info
interface ParentReference {
  id: string;
  siteId: string;
}

// Fields type containing form data
interface Fields {
  Created: string;
  StudentFirstName: string;
  StudentSurname: string;
  StudentID?: string;
  YearRange: string;
  DeviceChoice: string;
  DeviceOption: string;
  AcceptedConditions: boolean;
  UnderstandFinancial: boolean;
  AcknowledgeAdviceinWriting: boolean;
  WorkflowId: string;
  FormId: string;
  isParent: boolean;
  isEnrollment: boolean;
  ParentName?: string;
  ParentLastName?: string;
  RequestorLookupId?: string;
  id: string;
  Status?: "Cancelled" | "Duplicate" | "Collected";
  ContentType: string;
  Modified: string;
  AuthorLookupId: string;
  EditorLookupId: string;
  _UIVersionString: string;
  Attachments: boolean;
  Edit: string;
  ItemChildCount: string;
  FolderChildCount: string;
  _ComplianceFlags: string;
  _ComplianceTag: string;
  _ComplianceTagWrittenTime: string;
  _ComplianceTagUserId: string;
  AppAuthorLookupId: string;
  AppEditorLookupId: string;
}

// Main list item type
interface ListItem {
  "@odata.etag": string;
  createdDateTime: string;
  eTag: string;
  id: string;
  lastModifiedDateTime: string;
  webUrl: string;
  createdBy: Actor;
  lastModifiedBy: Actor;
  parentReference: ParentReference;
  contentType: ContentType;
  "fields@odata.context": string;
  fields: Fields;
}

// Root response type
interface DeviceLeaseResponse {
  "@odata.context": string;
  "@odata.nextLink"?: string;
  value: ListItem[];
}

export { DeviceLeaseResponse, ListItem, Fields };
