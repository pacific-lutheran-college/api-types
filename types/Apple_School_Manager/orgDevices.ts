interface orgDevicesResponse {
  data: orgDevice[];
  links: {
    self: string;
    next?: string;
  };
  meta: {
    paging: {
      nextCursor?: string;
      limit: number;
    };
  };
}

interface orgDevice {
  type: "orgDevices";
  id: string;
  attributes: DeviceAttributes;
  relationships: DeviceRelationships;
  links: DeviceLinks;
}

interface DeviceAttributes {
  productFamily: string;
  orderDateTime: string;
  meid: string[];
  eid: string;
  serialNumber: string;
  orderNumber: string;
  color: string;
  purchaseSourceType: "APPLE" | string;
  deviceCapacity: string;
  updatedDateTime: string;
  wifiMacAddress: string;
  bluetoothMacAddress: string;
  imei: string[];
  deviceModel: string;
  partNumber: string;
  addedToOrgDateTime: string;
  productType: string;
  purchaseSourceId: string;
  status: "ASSIGNED" | "UNASSIGNED" | string;
}

interface DeviceRelationships {
  assignedServer: {
    links: {
      self: string;
      related: string;
    };
  };
}

interface DeviceLinks {
  self: string;
}

export type { orgDevicesResponse };
