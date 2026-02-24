import { z } from "zod";
import { safeParseWithSchema, schemas } from "@plc/tassapi-zod-2026-03";

const parentDetailsListSchema = z.array(
  schemas.StudentCommunicationRulesParentDetailsResponse,
);

const validListPayload = [
  {
    par_code: "P001",
    parent_names: [
      {
        first_name: "Alex",
        preferred_name: "Alex",
        surname: "Citizen",
        deceased_flg: false,
        person_posn: 1,
      },
    ],
    addresses: [],
  },
  {
    par_code: "P002",
    parent_names: [],
    addresses: [],
  },
];

const invalidListPayload = [
  {
    par_code: "P003",
    parent_names: "not-an-array",
    addresses: [],
  },
];

const validResult = safeParseWithSchema(
  parentDetailsListSchema,
  validListPayload,
);
if (validResult.success) {
  console.log("✅ Valid list payload parsed");
  console.log(`Items: ${validResult.data.length}`);
} else {
  console.log("❌ Valid list payload unexpectedly failed");
  console.log(validResult.error.issues);
}

const invalidResult = safeParseWithSchema(
  parentDetailsListSchema,
  invalidListPayload,
);
if (!invalidResult.success) {
  console.log("✅ Invalid list payload rejected as expected");
  console.log(invalidResult.error.issues.slice(0, 3));
} else {
  console.log("❌ Invalid list payload unexpectedly passed");
}
