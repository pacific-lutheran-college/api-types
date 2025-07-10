export interface MCEECDYA {
  student: {
    S_INDIG_STS: {
      code: 1 | 2 | 3 | 4 | 9;
      desc:
        | "Aboriginal"
        | "Torres Strait Islander"
        | "Aboriginal & T S I"
        | "neither"
        | "unknown";
    };
    SLOTE_CODE: {
      code: number;
      desc: string;
    };
    SCOB_CODE: {
      code: number;
      desc: string;
    };
    ARRIVE_YR: {
      code: string;
      desc: "ARRIVE_YR";
    };
  };
  __tassversion: "01.058.12.200";
  parent1: {
    MLOTE_CODE: {
      code: number;
      desc: string;
    };
    MSE_CODE: {
      code: 0 | 1 | 2 | 3 | 4;
      desc:
        | "Year 12 or equivalent"
        | "Year 11 or equivalent"
        | "Year 10 or equivalent"
        | "Year 9 or equivalent"
        | "Not stated/unknown";
    };
    MNSE_CODE: {
      code: 0 | 5 | 6 | 7 | 8;
      desc:
        | "Bachelor degree or above"
        | "Advanced diploma / Diploma"
        | "No non-school qualification"
        | "Not stated/unknown"
        | "Certificate I IV (including trade)";
    };
    MOCC_CODE: {
      code: number;
      desc: number;
    };
  };
  parent2: {
    MLOTE_CODE: {
      code: number;
      desc: string;
    };
    MSE_CODE: {
      code: 0 | 1 | 2 | 3 | 4;
      desc:
        | "Year 12 or equivalent"
        | "Year 11 or equivalent"
        | "Year 10 or equivalent"
        | "Year 9 or equivalent"
        | "Not stated/unknown";
    };
    MNSE_CODE: {
      code: 0 | 5 | 6 | 7 | 8;
      desc:
        | "Bachelor degree or above"
        | "Advanced diploma / Diploma"
        | "No non-school qualification"
        | "Not stated/unknown"
        | "Certificate I IV (including trade)";
    };
    MOCC_CODE: {
      code: number;
      desc: number;
    };
  };
  token: {
    timestamp: "{ts '2024-01-20 10:14:56'}";
    studcode: "004438";
  };
}
