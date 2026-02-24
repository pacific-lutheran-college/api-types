import { safeParseWithSchema, schemas } from "@plc/tassapi-zod-2026-03";

const validPayload = {
  cmpy_code: "01",
  stud_code: "12345",
  comm_rules: [
    {
      par_code: "P001",
      parent_names: [
        {
          first_name: "Jane",
          preferred_name: "Jane",
          surname: "Citizen",
          deceased_flg: false,
          person_posn: 1,
        },
      ],
      addresses: [],
    },
  ],
};

const invalidPayload = {
  cmpy_code: 1,
  stud_code: "12345",
  comm_rules: "not-an-array",
};

const validResult = safeParseWithSchema(
  schemas.StudentCommunicationRulesResponse,
  validPayload,
);

if (validResult.success) {
  console.log("✅ Valid payload parsed");
  console.log(validResult.data);
} else {
  console.log("❌ Valid payload unexpectedly failed");
  console.log(validResult.error.issues);
}

const invalidResult = safeParseWithSchema(
  schemas.StudentCommunicationRulesResponse,
  invalidPayload,
);

if (!invalidResult.success) {
  console.log("✅ Invalid payload rejected as expected");
  console.log(invalidResult.error.issues.slice(0, 3));
} else {
  console.log("❌ Invalid payload unexpectedly passed");
}
