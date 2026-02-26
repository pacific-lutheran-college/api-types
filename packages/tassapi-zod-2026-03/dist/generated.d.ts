import { z } from "zod";
export declare const schemas: {
    GetUserTokenRequest: z.ZodObject<{
        clientKey: z.ZodOptional<z.ZodString>;
        clientSecret: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        clientKey?: string | undefined;
        clientSecret?: string | undefined;
    }, {
        clientKey?: string | undefined;
        clientSecret?: string | undefined;
    }>;
    AllowedCompanyDetails: z.ZodObject<{
        cmpy_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        name_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        cmpy_code?: string | null | undefined;
        name_text?: string | null | undefined;
    }, {
        cmpy_code?: string | null | undefined;
        name_text?: string | null | undefined;
    }>;
    UserTokenResponse: z.ZodObject<{
        token: z.ZodOptional<z.ZodString>;
        token_expiry_date: z.ZodOptional<z.ZodString>;
        allowed_companies: z.ZodOptional<z.ZodArray<z.ZodObject<{
            cmpy_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            name_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            cmpy_code?: string | null | undefined;
            name_text?: string | null | undefined;
        }, {
            cmpy_code?: string | null | undefined;
            name_text?: string | null | undefined;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        token?: string | undefined;
        token_expiry_date?: string | undefined;
        allowed_companies?: {
            cmpy_code?: string | null | undefined;
            name_text?: string | null | undefined;
        }[] | undefined;
    }, {
        token?: string | undefined;
        token_expiry_date?: string | undefined;
        allowed_companies?: {
            cmpy_code?: string | null | undefined;
            name_text?: string | null | undefined;
        }[] | undefined;
    }>;
    ExceptionDetails: z.ZodObject<{
        status: z.ZodOptional<z.ZodNumber>;
        title: z.ZodOptional<z.ZodString>;
        detail: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        status?: number | undefined;
        title?: string | undefined;
        detail?: string | undefined;
    }, {
        status?: number | undefined;
        title?: string | undefined;
        detail?: string | undefined;
    }>;
    ValidationExceptionDetails: z.ZodIntersection<z.ZodObject<{
        status: z.ZodOptional<z.ZodNumber>;
        title: z.ZodOptional<z.ZodString>;
        detail: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        status?: number | undefined;
        title?: string | undefined;
        detail?: string | undefined;
    }, {
        status?: number | undefined;
        title?: string | undefined;
        detail?: string | undefined;
    }>, z.ZodObject<{
        errors: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodArray<z.ZodString, "many">>>;
    }, "strip", z.ZodTypeAny, {
        errors?: Record<string, string[]> | undefined;
    }, {
        errors?: Record<string, string[]> | undefined;
    }>>;
    AbsenceReasonOptionsResponse: z.ZodObject<{
        code: z.ZodOptional<z.ZodString>;
        desc: z.ZodOptional<z.ZodString>;
        is_active: z.ZodOptional<z.ZodBoolean>;
        acceptable_reason: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        code?: string | undefined;
        desc?: string | undefined;
        is_active?: boolean | undefined;
        acceptable_reason?: boolean | undefined;
    }, {
        code?: string | undefined;
        desc?: string | undefined;
        is_active?: boolean | undefined;
        acceptable_reason?: boolean | undefined;
    }>;
    OptionsResponseActive: z.ZodObject<{
        code: z.ZodOptional<z.ZodString>;
        desc: z.ZodOptional<z.ZodString>;
        is_active: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        code?: string | undefined;
        desc?: string | undefined;
        is_active?: boolean | undefined;
    }, {
        code?: string | undefined;
        desc?: string | undefined;
        is_active?: boolean | undefined;
    }>;
    OptionsResponse: z.ZodObject<{
        code: z.ZodOptional<z.ZodString>;
        desc: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        code?: string | undefined;
        desc?: string | undefined;
    }, {
        code?: string | undefined;
        desc?: string | undefined;
    }>;
    StudentAttendanceResponse: z.ZodObject<{
        cmpy_code: z.ZodOptional<z.ZodString>;
        stud_code: z.ZodOptional<z.ZodString>;
        absent_date: z.ZodOptional<z.ZodString>;
        absent_time: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        absent_type: z.ZodOptional<z.ZodString>;
        reas_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        dcert_flg: z.ZodOptional<z.ZodBoolean>;
        par_flg: z.ZodOptional<z.ZodBoolean>;
        par_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        corr_flg: z.ZodOptional<z.ZodBoolean>;
        corr_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        prd_code: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        ref_num: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        abs_from_time: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        abs_to_time: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        key_num: z.ZodOptional<z.ZodNumber>;
        tt_id: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        note_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        year_grp: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        boarder: z.ZodOptional<z.ZodBoolean>;
        house: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        pctut_grp: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        gender: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        campus_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        has_attachment: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        cmpy_code?: string | undefined;
        stud_code?: string | undefined;
        absent_date?: string | undefined;
        absent_time?: string | null | undefined;
        absent_type?: string | undefined;
        reas_code?: string | null | undefined;
        dcert_flg?: boolean | undefined;
        par_flg?: boolean | undefined;
        par_date?: string | null | undefined;
        corr_flg?: boolean | undefined;
        corr_date?: string | null | undefined;
        prd_code?: number | null | undefined;
        ref_num?: string | null | undefined;
        abs_from_time?: string | null | undefined;
        abs_to_time?: string | null | undefined;
        key_num?: number | undefined;
        tt_id?: number | null | undefined;
        note_text?: string | null | undefined;
        year_grp?: number | null | undefined;
        boarder?: boolean | undefined;
        house?: string | null | undefined;
        pctut_grp?: string | null | undefined;
        gender?: string | null | undefined;
        campus_code?: string | null | undefined;
        has_attachment?: boolean | undefined;
    }, {
        cmpy_code?: string | undefined;
        stud_code?: string | undefined;
        absent_date?: string | undefined;
        absent_time?: string | null | undefined;
        absent_type?: string | undefined;
        reas_code?: string | null | undefined;
        dcert_flg?: boolean | undefined;
        par_flg?: boolean | undefined;
        par_date?: string | null | undefined;
        corr_flg?: boolean | undefined;
        corr_date?: string | null | undefined;
        prd_code?: number | null | undefined;
        ref_num?: string | null | undefined;
        abs_from_time?: string | null | undefined;
        abs_to_time?: string | null | undefined;
        key_num?: number | undefined;
        tt_id?: number | null | undefined;
        note_text?: string | null | undefined;
        year_grp?: number | null | undefined;
        boarder?: boolean | undefined;
        house?: string | null | undefined;
        pctut_grp?: string | null | undefined;
        gender?: string | null | undefined;
        campus_code?: string | null | undefined;
        has_attachment?: boolean | undefined;
    }>;
    StudentCommunicationRulesParentNameResponse: z.ZodObject<{
        parent_type: z.ZodOptional<z.ZodString>;
        deceased_flg: z.ZodOptional<z.ZodBoolean>;
        first_name: z.ZodOptional<z.ZodString>;
        gender: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        initials: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        person_posn: z.ZodOptional<z.ZodNumber>;
        preferred_name: z.ZodOptional<z.ZodString>;
        suffix: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        surname: z.ZodOptional<z.ZodString>;
        title: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        title?: string | null | undefined;
        gender?: string | null | undefined;
        parent_type?: string | undefined;
        deceased_flg?: boolean | undefined;
        first_name?: string | undefined;
        initials?: string | null | undefined;
        person_posn?: number | undefined;
        preferred_name?: string | undefined;
        suffix?: string | null | undefined;
        surname?: string | undefined;
    }, {
        title?: string | null | undefined;
        gender?: string | null | undefined;
        parent_type?: string | undefined;
        deceased_flg?: boolean | undefined;
        first_name?: string | undefined;
        initials?: string | null | undefined;
        person_posn?: number | undefined;
        preferred_name?: string | undefined;
        suffix?: string | null | undefined;
        surname?: string | undefined;
    }>;
    StudentCommunicationRulesCommunicationTypeResponse: z.ZodObject<{
        commtype_code: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        commtype_code?: string | undefined;
    }, {
        commtype_code?: string | undefined;
    }>;
    StudentCommunicationRulesParentAddressResponse: z.ZodObject<{
        add_num: z.ZodOptional<z.ZodNumber>;
        addr1: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        addr2: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        addr3: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        addr_desc: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        addressee: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        bus_phone: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        call_order: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        country: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        e_mail1: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        e_mail2: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        fax: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        home_phone: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        mobile1: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        mobile2: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        person_posn: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        post_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        relationship: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        salutation: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        sms_flg1: z.ZodOptional<z.ZodBoolean>;
        sms_flg2: z.ZodOptional<z.ZodBoolean>;
        state_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        town_sub: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        comm_types: z.ZodOptional<z.ZodArray<z.ZodObject<{
            commtype_code: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            commtype_code?: string | undefined;
        }, {
            commtype_code?: string | undefined;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        person_posn?: number | null | undefined;
        add_num?: number | undefined;
        addr1?: string | null | undefined;
        addr2?: string | null | undefined;
        addr3?: string | null | undefined;
        addr_desc?: string | null | undefined;
        addressee?: string | null | undefined;
        bus_phone?: string | null | undefined;
        call_order?: number | null | undefined;
        country?: string | null | undefined;
        e_mail1?: string | null | undefined;
        e_mail2?: string | null | undefined;
        fax?: string | null | undefined;
        home_phone?: string | null | undefined;
        mobile1?: string | null | undefined;
        mobile2?: string | null | undefined;
        post_code?: string | null | undefined;
        relationship?: string | null | undefined;
        salutation?: string | null | undefined;
        sms_flg1?: boolean | undefined;
        sms_flg2?: boolean | undefined;
        state_code?: string | null | undefined;
        town_sub?: string | null | undefined;
        comm_types?: {
            commtype_code?: string | undefined;
        }[] | undefined;
    }, {
        person_posn?: number | null | undefined;
        add_num?: number | undefined;
        addr1?: string | null | undefined;
        addr2?: string | null | undefined;
        addr3?: string | null | undefined;
        addr_desc?: string | null | undefined;
        addressee?: string | null | undefined;
        bus_phone?: string | null | undefined;
        call_order?: number | null | undefined;
        country?: string | null | undefined;
        e_mail1?: string | null | undefined;
        e_mail2?: string | null | undefined;
        fax?: string | null | undefined;
        home_phone?: string | null | undefined;
        mobile1?: string | null | undefined;
        mobile2?: string | null | undefined;
        post_code?: string | null | undefined;
        relationship?: string | null | undefined;
        salutation?: string | null | undefined;
        sms_flg1?: boolean | undefined;
        sms_flg2?: boolean | undefined;
        state_code?: string | null | undefined;
        town_sub?: string | null | undefined;
        comm_types?: {
            commtype_code?: string | undefined;
        }[] | undefined;
    }>;
    StudentCommunicationRulesParentDetailsResponse: z.ZodObject<{
        par_code: z.ZodOptional<z.ZodString>;
        parent_names: z.ZodOptional<z.ZodArray<z.ZodObject<{
            parent_type: z.ZodOptional<z.ZodString>;
            deceased_flg: z.ZodOptional<z.ZodBoolean>;
            first_name: z.ZodOptional<z.ZodString>;
            gender: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            initials: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            person_posn: z.ZodOptional<z.ZodNumber>;
            preferred_name: z.ZodOptional<z.ZodString>;
            suffix: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            surname: z.ZodOptional<z.ZodString>;
            title: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            title?: string | null | undefined;
            gender?: string | null | undefined;
            parent_type?: string | undefined;
            deceased_flg?: boolean | undefined;
            first_name?: string | undefined;
            initials?: string | null | undefined;
            person_posn?: number | undefined;
            preferred_name?: string | undefined;
            suffix?: string | null | undefined;
            surname?: string | undefined;
        }, {
            title?: string | null | undefined;
            gender?: string | null | undefined;
            parent_type?: string | undefined;
            deceased_flg?: boolean | undefined;
            first_name?: string | undefined;
            initials?: string | null | undefined;
            person_posn?: number | undefined;
            preferred_name?: string | undefined;
            suffix?: string | null | undefined;
            surname?: string | undefined;
        }>, "many">>;
        addresses: z.ZodOptional<z.ZodArray<z.ZodObject<{
            add_num: z.ZodOptional<z.ZodNumber>;
            addr1: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            addr2: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            addr3: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            addr_desc: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            addressee: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            bus_phone: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            call_order: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            country: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            e_mail1: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            e_mail2: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            fax: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            home_phone: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            mobile1: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            mobile2: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            person_posn: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            post_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            relationship: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            salutation: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            sms_flg1: z.ZodOptional<z.ZodBoolean>;
            sms_flg2: z.ZodOptional<z.ZodBoolean>;
            state_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            town_sub: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            comm_types: z.ZodOptional<z.ZodArray<z.ZodObject<{
                commtype_code: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                commtype_code?: string | undefined;
            }, {
                commtype_code?: string | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            person_posn?: number | null | undefined;
            add_num?: number | undefined;
            addr1?: string | null | undefined;
            addr2?: string | null | undefined;
            addr3?: string | null | undefined;
            addr_desc?: string | null | undefined;
            addressee?: string | null | undefined;
            bus_phone?: string | null | undefined;
            call_order?: number | null | undefined;
            country?: string | null | undefined;
            e_mail1?: string | null | undefined;
            e_mail2?: string | null | undefined;
            fax?: string | null | undefined;
            home_phone?: string | null | undefined;
            mobile1?: string | null | undefined;
            mobile2?: string | null | undefined;
            post_code?: string | null | undefined;
            relationship?: string | null | undefined;
            salutation?: string | null | undefined;
            sms_flg1?: boolean | undefined;
            sms_flg2?: boolean | undefined;
            state_code?: string | null | undefined;
            town_sub?: string | null | undefined;
            comm_types?: {
                commtype_code?: string | undefined;
            }[] | undefined;
        }, {
            person_posn?: number | null | undefined;
            add_num?: number | undefined;
            addr1?: string | null | undefined;
            addr2?: string | null | undefined;
            addr3?: string | null | undefined;
            addr_desc?: string | null | undefined;
            addressee?: string | null | undefined;
            bus_phone?: string | null | undefined;
            call_order?: number | null | undefined;
            country?: string | null | undefined;
            e_mail1?: string | null | undefined;
            e_mail2?: string | null | undefined;
            fax?: string | null | undefined;
            home_phone?: string | null | undefined;
            mobile1?: string | null | undefined;
            mobile2?: string | null | undefined;
            post_code?: string | null | undefined;
            relationship?: string | null | undefined;
            salutation?: string | null | undefined;
            sms_flg1?: boolean | undefined;
            sms_flg2?: boolean | undefined;
            state_code?: string | null | undefined;
            town_sub?: string | null | undefined;
            comm_types?: {
                commtype_code?: string | undefined;
            }[] | undefined;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        par_code?: string | undefined;
        parent_names?: {
            title?: string | null | undefined;
            gender?: string | null | undefined;
            parent_type?: string | undefined;
            deceased_flg?: boolean | undefined;
            first_name?: string | undefined;
            initials?: string | null | undefined;
            person_posn?: number | undefined;
            preferred_name?: string | undefined;
            suffix?: string | null | undefined;
            surname?: string | undefined;
        }[] | undefined;
        addresses?: {
            person_posn?: number | null | undefined;
            add_num?: number | undefined;
            addr1?: string | null | undefined;
            addr2?: string | null | undefined;
            addr3?: string | null | undefined;
            addr_desc?: string | null | undefined;
            addressee?: string | null | undefined;
            bus_phone?: string | null | undefined;
            call_order?: number | null | undefined;
            country?: string | null | undefined;
            e_mail1?: string | null | undefined;
            e_mail2?: string | null | undefined;
            fax?: string | null | undefined;
            home_phone?: string | null | undefined;
            mobile1?: string | null | undefined;
            mobile2?: string | null | undefined;
            post_code?: string | null | undefined;
            relationship?: string | null | undefined;
            salutation?: string | null | undefined;
            sms_flg1?: boolean | undefined;
            sms_flg2?: boolean | undefined;
            state_code?: string | null | undefined;
            town_sub?: string | null | undefined;
            comm_types?: {
                commtype_code?: string | undefined;
            }[] | undefined;
        }[] | undefined;
    }, {
        par_code?: string | undefined;
        parent_names?: {
            title?: string | null | undefined;
            gender?: string | null | undefined;
            parent_type?: string | undefined;
            deceased_flg?: boolean | undefined;
            first_name?: string | undefined;
            initials?: string | null | undefined;
            person_posn?: number | undefined;
            preferred_name?: string | undefined;
            suffix?: string | null | undefined;
            surname?: string | undefined;
        }[] | undefined;
        addresses?: {
            person_posn?: number | null | undefined;
            add_num?: number | undefined;
            addr1?: string | null | undefined;
            addr2?: string | null | undefined;
            addr3?: string | null | undefined;
            addr_desc?: string | null | undefined;
            addressee?: string | null | undefined;
            bus_phone?: string | null | undefined;
            call_order?: number | null | undefined;
            country?: string | null | undefined;
            e_mail1?: string | null | undefined;
            e_mail2?: string | null | undefined;
            fax?: string | null | undefined;
            home_phone?: string | null | undefined;
            mobile1?: string | null | undefined;
            mobile2?: string | null | undefined;
            post_code?: string | null | undefined;
            relationship?: string | null | undefined;
            salutation?: string | null | undefined;
            sms_flg1?: boolean | undefined;
            sms_flg2?: boolean | undefined;
            state_code?: string | null | undefined;
            town_sub?: string | null | undefined;
            comm_types?: {
                commtype_code?: string | undefined;
            }[] | undefined;
        }[] | undefined;
    }>;
    StudentCommunicationRulesResponse: z.ZodObject<{
        cmpy_code: z.ZodOptional<z.ZodString>;
        stud_code: z.ZodOptional<z.ZodString>;
        comm_rules: z.ZodOptional<z.ZodArray<z.ZodObject<{
            par_code: z.ZodOptional<z.ZodString>;
            parent_names: z.ZodOptional<z.ZodArray<z.ZodObject<{
                parent_type: z.ZodOptional<z.ZodString>;
                deceased_flg: z.ZodOptional<z.ZodBoolean>;
                first_name: z.ZodOptional<z.ZodString>;
                gender: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                initials: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                person_posn: z.ZodOptional<z.ZodNumber>;
                preferred_name: z.ZodOptional<z.ZodString>;
                suffix: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                surname: z.ZodOptional<z.ZodString>;
                title: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                title?: string | null | undefined;
                gender?: string | null | undefined;
                parent_type?: string | undefined;
                deceased_flg?: boolean | undefined;
                first_name?: string | undefined;
                initials?: string | null | undefined;
                person_posn?: number | undefined;
                preferred_name?: string | undefined;
                suffix?: string | null | undefined;
                surname?: string | undefined;
            }, {
                title?: string | null | undefined;
                gender?: string | null | undefined;
                parent_type?: string | undefined;
                deceased_flg?: boolean | undefined;
                first_name?: string | undefined;
                initials?: string | null | undefined;
                person_posn?: number | undefined;
                preferred_name?: string | undefined;
                suffix?: string | null | undefined;
                surname?: string | undefined;
            }>, "many">>;
            addresses: z.ZodOptional<z.ZodArray<z.ZodObject<{
                add_num: z.ZodOptional<z.ZodNumber>;
                addr1: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                addr2: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                addr3: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                addr_desc: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                addressee: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                bus_phone: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                call_order: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                country: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                e_mail1: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                e_mail2: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                fax: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                home_phone: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                mobile1: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                mobile2: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                person_posn: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                post_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                relationship: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                salutation: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                sms_flg1: z.ZodOptional<z.ZodBoolean>;
                sms_flg2: z.ZodOptional<z.ZodBoolean>;
                state_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                town_sub: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                comm_types: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    commtype_code: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    commtype_code?: string | undefined;
                }, {
                    commtype_code?: string | undefined;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                person_posn?: number | null | undefined;
                add_num?: number | undefined;
                addr1?: string | null | undefined;
                addr2?: string | null | undefined;
                addr3?: string | null | undefined;
                addr_desc?: string | null | undefined;
                addressee?: string | null | undefined;
                bus_phone?: string | null | undefined;
                call_order?: number | null | undefined;
                country?: string | null | undefined;
                e_mail1?: string | null | undefined;
                e_mail2?: string | null | undefined;
                fax?: string | null | undefined;
                home_phone?: string | null | undefined;
                mobile1?: string | null | undefined;
                mobile2?: string | null | undefined;
                post_code?: string | null | undefined;
                relationship?: string | null | undefined;
                salutation?: string | null | undefined;
                sms_flg1?: boolean | undefined;
                sms_flg2?: boolean | undefined;
                state_code?: string | null | undefined;
                town_sub?: string | null | undefined;
                comm_types?: {
                    commtype_code?: string | undefined;
                }[] | undefined;
            }, {
                person_posn?: number | null | undefined;
                add_num?: number | undefined;
                addr1?: string | null | undefined;
                addr2?: string | null | undefined;
                addr3?: string | null | undefined;
                addr_desc?: string | null | undefined;
                addressee?: string | null | undefined;
                bus_phone?: string | null | undefined;
                call_order?: number | null | undefined;
                country?: string | null | undefined;
                e_mail1?: string | null | undefined;
                e_mail2?: string | null | undefined;
                fax?: string | null | undefined;
                home_phone?: string | null | undefined;
                mobile1?: string | null | undefined;
                mobile2?: string | null | undefined;
                post_code?: string | null | undefined;
                relationship?: string | null | undefined;
                salutation?: string | null | undefined;
                sms_flg1?: boolean | undefined;
                sms_flg2?: boolean | undefined;
                state_code?: string | null | undefined;
                town_sub?: string | null | undefined;
                comm_types?: {
                    commtype_code?: string | undefined;
                }[] | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            par_code?: string | undefined;
            parent_names?: {
                title?: string | null | undefined;
                gender?: string | null | undefined;
                parent_type?: string | undefined;
                deceased_flg?: boolean | undefined;
                first_name?: string | undefined;
                initials?: string | null | undefined;
                person_posn?: number | undefined;
                preferred_name?: string | undefined;
                suffix?: string | null | undefined;
                surname?: string | undefined;
            }[] | undefined;
            addresses?: {
                person_posn?: number | null | undefined;
                add_num?: number | undefined;
                addr1?: string | null | undefined;
                addr2?: string | null | undefined;
                addr3?: string | null | undefined;
                addr_desc?: string | null | undefined;
                addressee?: string | null | undefined;
                bus_phone?: string | null | undefined;
                call_order?: number | null | undefined;
                country?: string | null | undefined;
                e_mail1?: string | null | undefined;
                e_mail2?: string | null | undefined;
                fax?: string | null | undefined;
                home_phone?: string | null | undefined;
                mobile1?: string | null | undefined;
                mobile2?: string | null | undefined;
                post_code?: string | null | undefined;
                relationship?: string | null | undefined;
                salutation?: string | null | undefined;
                sms_flg1?: boolean | undefined;
                sms_flg2?: boolean | undefined;
                state_code?: string | null | undefined;
                town_sub?: string | null | undefined;
                comm_types?: {
                    commtype_code?: string | undefined;
                }[] | undefined;
            }[] | undefined;
        }, {
            par_code?: string | undefined;
            parent_names?: {
                title?: string | null | undefined;
                gender?: string | null | undefined;
                parent_type?: string | undefined;
                deceased_flg?: boolean | undefined;
                first_name?: string | undefined;
                initials?: string | null | undefined;
                person_posn?: number | undefined;
                preferred_name?: string | undefined;
                suffix?: string | null | undefined;
                surname?: string | undefined;
            }[] | undefined;
            addresses?: {
                person_posn?: number | null | undefined;
                add_num?: number | undefined;
                addr1?: string | null | undefined;
                addr2?: string | null | undefined;
                addr3?: string | null | undefined;
                addr_desc?: string | null | undefined;
                addressee?: string | null | undefined;
                bus_phone?: string | null | undefined;
                call_order?: number | null | undefined;
                country?: string | null | undefined;
                e_mail1?: string | null | undefined;
                e_mail2?: string | null | undefined;
                fax?: string | null | undefined;
                home_phone?: string | null | undefined;
                mobile1?: string | null | undefined;
                mobile2?: string | null | undefined;
                post_code?: string | null | undefined;
                relationship?: string | null | undefined;
                salutation?: string | null | undefined;
                sms_flg1?: boolean | undefined;
                sms_flg2?: boolean | undefined;
                state_code?: string | null | undefined;
                town_sub?: string | null | undefined;
                comm_types?: {
                    commtype_code?: string | undefined;
                }[] | undefined;
            }[] | undefined;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        cmpy_code?: string | undefined;
        stud_code?: string | undefined;
        comm_rules?: {
            par_code?: string | undefined;
            parent_names?: {
                title?: string | null | undefined;
                gender?: string | null | undefined;
                parent_type?: string | undefined;
                deceased_flg?: boolean | undefined;
                first_name?: string | undefined;
                initials?: string | null | undefined;
                person_posn?: number | undefined;
                preferred_name?: string | undefined;
                suffix?: string | null | undefined;
                surname?: string | undefined;
            }[] | undefined;
            addresses?: {
                person_posn?: number | null | undefined;
                add_num?: number | undefined;
                addr1?: string | null | undefined;
                addr2?: string | null | undefined;
                addr3?: string | null | undefined;
                addr_desc?: string | null | undefined;
                addressee?: string | null | undefined;
                bus_phone?: string | null | undefined;
                call_order?: number | null | undefined;
                country?: string | null | undefined;
                e_mail1?: string | null | undefined;
                e_mail2?: string | null | undefined;
                fax?: string | null | undefined;
                home_phone?: string | null | undefined;
                mobile1?: string | null | undefined;
                mobile2?: string | null | undefined;
                post_code?: string | null | undefined;
                relationship?: string | null | undefined;
                salutation?: string | null | undefined;
                sms_flg1?: boolean | undefined;
                sms_flg2?: boolean | undefined;
                state_code?: string | null | undefined;
                town_sub?: string | null | undefined;
                comm_types?: {
                    commtype_code?: string | undefined;
                }[] | undefined;
            }[] | undefined;
        }[] | undefined;
    }, {
        cmpy_code?: string | undefined;
        stud_code?: string | undefined;
        comm_rules?: {
            par_code?: string | undefined;
            parent_names?: {
                title?: string | null | undefined;
                gender?: string | null | undefined;
                parent_type?: string | undefined;
                deceased_flg?: boolean | undefined;
                first_name?: string | undefined;
                initials?: string | null | undefined;
                person_posn?: number | undefined;
                preferred_name?: string | undefined;
                suffix?: string | null | undefined;
                surname?: string | undefined;
            }[] | undefined;
            addresses?: {
                person_posn?: number | null | undefined;
                add_num?: number | undefined;
                addr1?: string | null | undefined;
                addr2?: string | null | undefined;
                addr3?: string | null | undefined;
                addr_desc?: string | null | undefined;
                addressee?: string | null | undefined;
                bus_phone?: string | null | undefined;
                call_order?: number | null | undefined;
                country?: string | null | undefined;
                e_mail1?: string | null | undefined;
                e_mail2?: string | null | undefined;
                fax?: string | null | undefined;
                home_phone?: string | null | undefined;
                mobile1?: string | null | undefined;
                mobile2?: string | null | undefined;
                post_code?: string | null | undefined;
                relationship?: string | null | undefined;
                salutation?: string | null | undefined;
                sms_flg1?: boolean | undefined;
                sms_flg2?: boolean | undefined;
                state_code?: string | null | undefined;
                town_sub?: string | null | undefined;
                comm_types?: {
                    commtype_code?: string | undefined;
                }[] | undefined;
            }[] | undefined;
        }[] | undefined;
    }>;
    StudentResponse: z.ZodObject<{
        alt_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        boarder: z.ZodOptional<z.ZodBoolean>;
        campus_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ceider: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        cmpy_code: z.ZodOptional<z.ZodString>;
        compare_flg: z.ZodOptional<z.ZodString>;
        date_arrival: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        distance_ed: z.ZodOptional<z.ZodBoolean>;
        dob: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        doe: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        dol: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        e_mail: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        entry_lev: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        ffpos: z.ZodOptional<z.ZodBoolean>;
        first_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        form_cls: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        fte: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        gender: z.ZodOptional<z.ZodString>;
        house: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        idm_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        mob_phone: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        multipar_flg: z.ZodOptional<z.ZodBoolean>;
        next_yr_ind: z.ZodOptional<z.ZodString>;
        other_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        par_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        pctut_grp: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        preferred_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        preferred_surname: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        prev_school: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        privacy_flg: z.ZodOptional<z.ZodBoolean>;
        religion: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        resident_sts: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        sms_flg: z.ZodOptional<z.ZodBoolean>;
        stud_code: z.ZodOptional<z.ZodString>;
        stud_govt_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        stud_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        surname: z.ZodOptional<z.ZodString>;
        update_on: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        usi: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        visa_expiry: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        visa_subclass: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        web_access_ind: z.ZodOptional<z.ZodBoolean>;
        year_grp: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, "strip", z.ZodTypeAny, {
        cmpy_code?: string | undefined;
        stud_code?: string | undefined;
        year_grp?: number | null | undefined;
        boarder?: boolean | undefined;
        house?: string | null | undefined;
        pctut_grp?: string | null | undefined;
        gender?: string | undefined;
        campus_code?: string | null | undefined;
        first_name?: string | null | undefined;
        preferred_name?: string | null | undefined;
        surname?: string | undefined;
        par_code?: string | null | undefined;
        alt_id?: string | null | undefined;
        ceider?: string | null | undefined;
        compare_flg?: string | undefined;
        date_arrival?: string | null | undefined;
        distance_ed?: boolean | undefined;
        dob?: string | null | undefined;
        doe?: string | null | undefined;
        dol?: string | null | undefined;
        e_mail?: string | null | undefined;
        entry_lev?: number | null | undefined;
        ffpos?: boolean | undefined;
        form_cls?: string | null | undefined;
        fte?: number | null | undefined;
        idm_id?: string | null | undefined;
        mob_phone?: string | null | undefined;
        multipar_flg?: boolean | undefined;
        next_yr_ind?: string | undefined;
        other_name?: string | null | undefined;
        preferred_surname?: string | null | undefined;
        prev_school?: string | null | undefined;
        privacy_flg?: boolean | undefined;
        religion?: string | null | undefined;
        resident_sts?: string | null | undefined;
        sms_flg?: boolean | undefined;
        stud_govt_id?: string | null | undefined;
        stud_id?: string | null | undefined;
        update_on?: string | null | undefined;
        usi?: string | null | undefined;
        visa_expiry?: string | null | undefined;
        visa_subclass?: string | null | undefined;
        web_access_ind?: boolean | undefined;
    }, {
        cmpy_code?: string | undefined;
        stud_code?: string | undefined;
        year_grp?: number | null | undefined;
        boarder?: boolean | undefined;
        house?: string | null | undefined;
        pctut_grp?: string | null | undefined;
        gender?: string | undefined;
        campus_code?: string | null | undefined;
        first_name?: string | null | undefined;
        preferred_name?: string | null | undefined;
        surname?: string | undefined;
        par_code?: string | null | undefined;
        alt_id?: string | null | undefined;
        ceider?: string | null | undefined;
        compare_flg?: string | undefined;
        date_arrival?: string | null | undefined;
        distance_ed?: boolean | undefined;
        dob?: string | null | undefined;
        doe?: string | null | undefined;
        dol?: string | null | undefined;
        e_mail?: string | null | undefined;
        entry_lev?: number | null | undefined;
        ffpos?: boolean | undefined;
        form_cls?: string | null | undefined;
        fte?: number | null | undefined;
        idm_id?: string | null | undefined;
        mob_phone?: string | null | undefined;
        multipar_flg?: boolean | undefined;
        next_yr_ind?: string | undefined;
        other_name?: string | null | undefined;
        preferred_surname?: string | null | undefined;
        prev_school?: string | null | undefined;
        privacy_flg?: boolean | undefined;
        religion?: string | null | undefined;
        resident_sts?: string | null | undefined;
        sms_flg?: boolean | undefined;
        stud_govt_id?: string | null | undefined;
        stud_id?: string | null | undefined;
        update_on?: string | null | undefined;
        usi?: string | null | undefined;
        visa_expiry?: string | null | undefined;
        visa_subclass?: string | null | undefined;
        web_access_ind?: boolean | undefined;
    }>;
    CommonStudentUpdateRequest: z.ZodObject<{
        alt_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        boarder: z.ZodOptional<z.ZodBoolean>;
        campus_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ceider: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        compare_flg: z.ZodString;
        date_arrival: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        distance_ed: z.ZodOptional<z.ZodBoolean>;
        dob: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        doe: z.ZodString;
        dol: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        e_mail: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        entry_lev: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        ffpos: z.ZodOptional<z.ZodBoolean>;
        first_name: z.ZodString;
        form_cls: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        fte: z.ZodNumber;
        gender: z.ZodString;
        house: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        idm_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        mob_phone: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        next_yr_ind: z.ZodOptional<z.ZodString>;
        other_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        pctut_grp: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        preferred_name: z.ZodString;
        preferred_surname: z.ZodString;
        prev_school: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        privacy_flg: z.ZodOptional<z.ZodBoolean>;
        religion: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        resident_sts: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        sms_flg: z.ZodOptional<z.ZodBoolean>;
        stud_code: z.ZodOptional<z.ZodString>;
        surname: z.ZodString;
        usi: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        visa_expiry: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        visa_subclass: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        web_access_ind: z.ZodOptional<z.ZodBoolean>;
        year_grp: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        year_grp: number;
        gender: string;
        first_name: string;
        preferred_name: string;
        surname: string;
        compare_flg: string;
        doe: string;
        fte: number;
        preferred_surname: string;
        stud_code?: string | undefined;
        boarder?: boolean | undefined;
        house?: string | null | undefined;
        pctut_grp?: string | null | undefined;
        campus_code?: string | null | undefined;
        alt_id?: string | null | undefined;
        ceider?: string | null | undefined;
        date_arrival?: string | null | undefined;
        distance_ed?: boolean | undefined;
        dob?: string | null | undefined;
        dol?: string | null | undefined;
        e_mail?: string | null | undefined;
        entry_lev?: number | null | undefined;
        ffpos?: boolean | undefined;
        form_cls?: string | null | undefined;
        idm_id?: string | null | undefined;
        mob_phone?: string | null | undefined;
        next_yr_ind?: string | undefined;
        other_name?: string | null | undefined;
        prev_school?: string | null | undefined;
        privacy_flg?: boolean | undefined;
        religion?: string | null | undefined;
        resident_sts?: string | null | undefined;
        sms_flg?: boolean | undefined;
        usi?: string | null | undefined;
        visa_expiry?: string | null | undefined;
        visa_subclass?: string | null | undefined;
        web_access_ind?: boolean | undefined;
    }, {
        year_grp: number;
        gender: string;
        first_name: string;
        preferred_name: string;
        surname: string;
        compare_flg: string;
        doe: string;
        fte: number;
        preferred_surname: string;
        stud_code?: string | undefined;
        boarder?: boolean | undefined;
        house?: string | null | undefined;
        pctut_grp?: string | null | undefined;
        campus_code?: string | null | undefined;
        alt_id?: string | null | undefined;
        ceider?: string | null | undefined;
        date_arrival?: string | null | undefined;
        distance_ed?: boolean | undefined;
        dob?: string | null | undefined;
        dol?: string | null | undefined;
        e_mail?: string | null | undefined;
        entry_lev?: number | null | undefined;
        ffpos?: boolean | undefined;
        form_cls?: string | null | undefined;
        idm_id?: string | null | undefined;
        mob_phone?: string | null | undefined;
        next_yr_ind?: string | undefined;
        other_name?: string | null | undefined;
        prev_school?: string | null | undefined;
        privacy_flg?: boolean | undefined;
        religion?: string | null | undefined;
        resident_sts?: string | null | undefined;
        sms_flg?: boolean | undefined;
        usi?: string | null | undefined;
        visa_expiry?: string | null | undefined;
        visa_subclass?: string | null | undefined;
        web_access_ind?: boolean | undefined;
    }>;
    UpdateStudentRequest: z.ZodIntersection<z.ZodObject<{
        alt_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        boarder: z.ZodOptional<z.ZodBoolean>;
        campus_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ceider: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        compare_flg: z.ZodString;
        date_arrival: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        distance_ed: z.ZodOptional<z.ZodBoolean>;
        dob: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        doe: z.ZodString;
        dol: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        e_mail: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        entry_lev: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        ffpos: z.ZodOptional<z.ZodBoolean>;
        first_name: z.ZodString;
        form_cls: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        fte: z.ZodNumber;
        gender: z.ZodString;
        house: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        idm_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        mob_phone: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        next_yr_ind: z.ZodOptional<z.ZodString>;
        other_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        pctut_grp: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        preferred_name: z.ZodString;
        preferred_surname: z.ZodString;
        prev_school: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        privacy_flg: z.ZodOptional<z.ZodBoolean>;
        religion: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        resident_sts: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        sms_flg: z.ZodOptional<z.ZodBoolean>;
        stud_code: z.ZodOptional<z.ZodString>;
        surname: z.ZodString;
        usi: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        visa_expiry: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        visa_subclass: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        web_access_ind: z.ZodOptional<z.ZodBoolean>;
        year_grp: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        year_grp: number;
        gender: string;
        first_name: string;
        preferred_name: string;
        surname: string;
        compare_flg: string;
        doe: string;
        fte: number;
        preferred_surname: string;
        stud_code?: string | undefined;
        boarder?: boolean | undefined;
        house?: string | null | undefined;
        pctut_grp?: string | null | undefined;
        campus_code?: string | null | undefined;
        alt_id?: string | null | undefined;
        ceider?: string | null | undefined;
        date_arrival?: string | null | undefined;
        distance_ed?: boolean | undefined;
        dob?: string | null | undefined;
        dol?: string | null | undefined;
        e_mail?: string | null | undefined;
        entry_lev?: number | null | undefined;
        ffpos?: boolean | undefined;
        form_cls?: string | null | undefined;
        idm_id?: string | null | undefined;
        mob_phone?: string | null | undefined;
        next_yr_ind?: string | undefined;
        other_name?: string | null | undefined;
        prev_school?: string | null | undefined;
        privacy_flg?: boolean | undefined;
        religion?: string | null | undefined;
        resident_sts?: string | null | undefined;
        sms_flg?: boolean | undefined;
        usi?: string | null | undefined;
        visa_expiry?: string | null | undefined;
        visa_subclass?: string | null | undefined;
        web_access_ind?: boolean | undefined;
    }, {
        year_grp: number;
        gender: string;
        first_name: string;
        preferred_name: string;
        surname: string;
        compare_flg: string;
        doe: string;
        fte: number;
        preferred_surname: string;
        stud_code?: string | undefined;
        boarder?: boolean | undefined;
        house?: string | null | undefined;
        pctut_grp?: string | null | undefined;
        campus_code?: string | null | undefined;
        alt_id?: string | null | undefined;
        ceider?: string | null | undefined;
        date_arrival?: string | null | undefined;
        distance_ed?: boolean | undefined;
        dob?: string | null | undefined;
        dol?: string | null | undefined;
        e_mail?: string | null | undefined;
        entry_lev?: number | null | undefined;
        ffpos?: boolean | undefined;
        form_cls?: string | null | undefined;
        idm_id?: string | null | undefined;
        mob_phone?: string | null | undefined;
        next_yr_ind?: string | undefined;
        other_name?: string | null | undefined;
        prev_school?: string | null | undefined;
        privacy_flg?: boolean | undefined;
        religion?: string | null | undefined;
        resident_sts?: string | null | undefined;
        sms_flg?: boolean | undefined;
        usi?: string | null | undefined;
        visa_expiry?: string | null | undefined;
        visa_subclass?: string | null | undefined;
        web_access_ind?: boolean | undefined;
    }>, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
    OperationBase: z.ZodObject<{
        path: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        op: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        from: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        path?: string | null | undefined;
        op?: string | null | undefined;
        from?: string | null | undefined;
    }, {
        path?: string | null | undefined;
        op?: string | null | undefined;
        from?: string | null | undefined;
    }>;
    Operation: z.ZodIntersection<z.ZodObject<{
        path: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        op: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        from: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        path?: string | null | undefined;
        op?: string | null | undefined;
        from?: string | null | undefined;
    }, {
        path?: string | null | undefined;
        op?: string | null | undefined;
        from?: string | null | undefined;
    }>, z.ZodObject<{
        value: z.ZodOptional<z.ZodNullable<z.ZodUnknown>>;
    }, "strip", z.ZodTypeAny, {
        value?: unknown;
    }, {
        value?: unknown;
    }>>;
    StudentMceecdyaResponse: z.ZodObject<{
        cmpy_code: z.ZodOptional<z.ZodString>;
        stud_code: z.ZodOptional<z.ZodString>;
        arrive_yr: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        flote_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        fnse_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        focc_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        fse_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        mlote_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        mnse_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        mocc_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        mse_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        s_indig_sts: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        scob_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        slote_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        update_on: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        cmpy_code?: string | undefined;
        stud_code?: string | undefined;
        update_on?: string | null | undefined;
        arrive_yr?: number | null | undefined;
        flote_code?: string | null | undefined;
        fnse_code?: string | null | undefined;
        focc_code?: string | null | undefined;
        fse_code?: string | null | undefined;
        mlote_code?: string | null | undefined;
        mnse_code?: string | null | undefined;
        mocc_code?: string | null | undefined;
        mse_code?: string | null | undefined;
        s_indig_sts?: string | null | undefined;
        scob_code?: string | null | undefined;
        slote_code?: string | null | undefined;
    }, {
        cmpy_code?: string | undefined;
        stud_code?: string | undefined;
        update_on?: string | null | undefined;
        arrive_yr?: number | null | undefined;
        flote_code?: string | null | undefined;
        fnse_code?: string | null | undefined;
        focc_code?: string | null | undefined;
        fse_code?: string | null | undefined;
        mlote_code?: string | null | undefined;
        mnse_code?: string | null | undefined;
        mocc_code?: string | null | undefined;
        mse_code?: string | null | undefined;
        s_indig_sts?: string | null | undefined;
        scob_code?: string | null | undefined;
        slote_code?: string | null | undefined;
    }>;
    UpdateStudentMceecdyaRequest: z.ZodObject<{
        arrive_yr: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        flote_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        fnse_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        focc_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        fse_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        mlote_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        mnse_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        mocc_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        mse_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        s_indig_sts: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        scob_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        slote_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        arrive_yr?: number | null | undefined;
        flote_code?: string | null | undefined;
        fnse_code?: string | null | undefined;
        focc_code?: string | null | undefined;
        fse_code?: string | null | undefined;
        mlote_code?: string | null | undefined;
        mnse_code?: string | null | undefined;
        mocc_code?: string | null | undefined;
        mse_code?: string | null | undefined;
        s_indig_sts?: string | null | undefined;
        scob_code?: string | null | undefined;
        slote_code?: string | null | undefined;
    }, {
        arrive_yr?: number | null | undefined;
        flote_code?: string | null | undefined;
        fnse_code?: string | null | undefined;
        focc_code?: string | null | undefined;
        fse_code?: string | null | undefined;
        mlote_code?: string | null | undefined;
        mnse_code?: string | null | undefined;
        mocc_code?: string | null | undefined;
        mse_code?: string | null | undefined;
        s_indig_sts?: string | null | undefined;
        scob_code?: string | null | undefined;
        slote_code?: string | null | undefined;
    }>;
    StudentStandardNoteResponse: z.ZodObject<{
        cmpy_code: z.ZodOptional<z.ZodString>;
        stud_code: z.ZodOptional<z.ZodString>;
        note_cat: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        note_date: z.ZodOptional<z.ZodString>;
        note_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        note_uid: z.ZodOptional<z.ZodString>;
        has_attachment: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        cmpy_code?: string | undefined;
        stud_code?: string | undefined;
        note_text?: string | null | undefined;
        has_attachment?: boolean | undefined;
        note_cat?: string | null | undefined;
        note_date?: string | undefined;
        note_uid?: string | undefined;
    }, {
        cmpy_code?: string | undefined;
        stud_code?: string | undefined;
        note_text?: string | null | undefined;
        has_attachment?: boolean | undefined;
        note_cat?: string | null | undefined;
        note_date?: string | undefined;
        note_uid?: string | undefined;
    }>;
    CommonStudentStandardNoteUpdateRequest: z.ZodObject<{
        note_cat: z.ZodString;
        note_date: z.ZodString;
        note_text: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        note_text: string;
        note_cat: string;
        note_date: string;
    }, {
        note_text: string;
        note_cat: string;
        note_date: string;
    }>;
    AddStudentStandardNoteRequest: z.ZodIntersection<z.ZodObject<{
        note_cat: z.ZodString;
        note_date: z.ZodString;
        note_text: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        note_text: string;
        note_cat: string;
        note_date: string;
    }, {
        note_text: string;
        note_cat: string;
        note_date: string;
    }>, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
    UpdateStudentStandardNoteRequest: z.ZodIntersection<z.ZodObject<{
        note_cat: z.ZodString;
        note_date: z.ZodString;
        note_text: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        note_text: string;
        note_cat: string;
        note_date: string;
    }, {
        note_text: string;
        note_cat: string;
        note_date: string;
    }>, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
    FileResponse: z.ZodObject<{
        file_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        file_size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        date_uploaded: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        attach_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        file_name?: string | null | undefined;
        file_size?: number | null | undefined;
        date_uploaded?: string | null | undefined;
        attach_id?: string | null | undefined;
    }, {
        file_name?: string | null | undefined;
        file_size?: number | null | undefined;
        date_uploaded?: string | null | undefined;
        attach_id?: string | null | undefined;
    }>;
    Notes_AddStudentStandardNotesAttachment_Body: z.ZodObject<{
        file_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        file_content: z.ZodOptional<z.ZodNullable<z.ZodType<File, z.ZodTypeDef, File>>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        file_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        file_content: z.ZodOptional<z.ZodNullable<z.ZodType<File, z.ZodTypeDef, File>>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        file_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        file_content: z.ZodOptional<z.ZodNullable<z.ZodType<File, z.ZodTypeDef, File>>>;
    }, z.ZodTypeAny, "passthrough">>;
    NewAttachmentResponse: z.ZodObject<{
        attach_id: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        attach_id?: string | undefined;
    }, {
        attach_id?: string | undefined;
    }>;
    StudentConfidentialNoteResponse: z.ZodObject<{
        cmpy_code: z.ZodOptional<z.ZodString>;
        stud_code: z.ZodOptional<z.ZodString>;
        note_cat: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        note_date: z.ZodOptional<z.ZodString>;
        note_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        note_uid: z.ZodOptional<z.ZodString>;
        has_attachment: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        cmpy_code?: string | undefined;
        stud_code?: string | undefined;
        note_text?: string | null | undefined;
        has_attachment?: boolean | undefined;
        note_cat?: string | null | undefined;
        note_date?: string | undefined;
        note_uid?: string | undefined;
    }, {
        cmpy_code?: string | undefined;
        stud_code?: string | undefined;
        note_text?: string | null | undefined;
        has_attachment?: boolean | undefined;
        note_cat?: string | null | undefined;
        note_date?: string | undefined;
        note_uid?: string | undefined;
    }>;
    CommonStudentConfidentialNoteUpdateRequest: z.ZodObject<{
        note_cat: z.ZodString;
        note_date: z.ZodString;
        note_text: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        note_text: string;
        note_cat: string;
        note_date: string;
    }, {
        note_text: string;
        note_cat: string;
        note_date: string;
    }>;
    AddStudentConfidentialNoteRequest: z.ZodIntersection<z.ZodObject<{
        note_cat: z.ZodString;
        note_date: z.ZodString;
        note_text: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        note_text: string;
        note_cat: string;
        note_date: string;
    }, {
        note_text: string;
        note_cat: string;
        note_date: string;
    }>, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
    UpdateStudentConfidentialNoteRequest: z.ZodIntersection<z.ZodObject<{
        note_cat: z.ZodString;
        note_date: z.ZodString;
        note_text: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        note_text: string;
        note_cat: string;
        note_date: string;
    }, {
        note_text: string;
        note_cat: string;
        note_date: string;
    }>, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
    StudentPhotoChange: z.ZodObject<{
        stud_code: z.ZodOptional<z.ZodString>;
        photo_update_on: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        stud_code?: string | undefined;
        photo_update_on?: string | undefined;
    }, {
        stud_code?: string | undefined;
        photo_update_on?: string | undefined;
    }>;
    StudentPhotoChangesResponse: z.ZodObject<{
        cmpy_code: z.ZodOptional<z.ZodString>;
        change_key: z.ZodOptional<z.ZodString>;
        changes: z.ZodOptional<z.ZodArray<z.ZodObject<{
            stud_code: z.ZodOptional<z.ZodString>;
            photo_update_on: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            stud_code?: string | undefined;
            photo_update_on?: string | undefined;
        }, {
            stud_code?: string | undefined;
            photo_update_on?: string | undefined;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        cmpy_code?: string | undefined;
        change_key?: string | undefined;
        changes?: {
            stud_code?: string | undefined;
            photo_update_on?: string | undefined;
        }[] | undefined;
    }, {
        cmpy_code?: string | undefined;
        change_key?: string | undefined;
        changes?: {
            stud_code?: string | undefined;
            photo_update_on?: string | undefined;
        }[] | undefined;
    }>;
    UDFieldDetails: z.ZodObject<{
        field_name: z.ZodOptional<z.ZodString>;
        field_desc: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        sort_order: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        field_name?: string | undefined;
        field_desc?: string | null | undefined;
        sort_order?: number | undefined;
    }, {
        field_name?: string | undefined;
        field_desc?: string | null | undefined;
        sort_order?: number | undefined;
    }>;
    UDFieldReferenceValue: z.ZodObject<{
        ud_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud_desc: z.ZodOptional<z.ZodString>;
        sort_order: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        sort_order?: number | undefined;
        ud_code?: string | null | undefined;
        ud_desc?: string | undefined;
    }, {
        sort_order?: number | undefined;
        ud_code?: string | null | undefined;
        ud_desc?: string | undefined;
    }>;
    UDCodeFieldDetails: z.ZodIntersection<z.ZodObject<{
        field_name: z.ZodOptional<z.ZodString>;
        field_desc: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        sort_order: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        field_name?: string | undefined;
        field_desc?: string | null | undefined;
        sort_order?: number | undefined;
    }, {
        field_name?: string | undefined;
        field_desc?: string | null | undefined;
        sort_order?: number | undefined;
    }>, z.ZodObject<{
        reference_values: z.ZodOptional<z.ZodArray<z.ZodObject<{
            ud_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud_desc: z.ZodOptional<z.ZodString>;
            sort_order: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            sort_order?: number | undefined;
            ud_code?: string | null | undefined;
            ud_desc?: string | undefined;
        }, {
            sort_order?: number | undefined;
            ud_code?: string | null | undefined;
            ud_desc?: string | undefined;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        reference_values?: {
            sort_order?: number | undefined;
            ud_code?: string | null | undefined;
            ud_desc?: string | undefined;
        }[] | undefined;
    }, {
        reference_values?: {
            sort_order?: number | undefined;
            ud_code?: string | null | undefined;
            ud_desc?: string | undefined;
        }[] | undefined;
    }>>;
    UDAttachmentFieldDetails: z.ZodIntersection<z.ZodObject<{
        field_name: z.ZodOptional<z.ZodString>;
        field_desc: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        sort_order: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        field_name?: string | undefined;
        field_desc?: string | null | undefined;
        sort_order?: number | undefined;
    }, {
        field_name?: string | undefined;
        field_desc?: string | null | undefined;
        sort_order?: number | undefined;
    }>, z.ZodObject<{
        field_number: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        field_number?: number | undefined;
    }, {
        field_number?: number | undefined;
    }>>;
    UDFieldTypes: z.ZodObject<{
        ud_flags: z.ZodOptional<z.ZodArray<z.ZodObject<{
            field_name: z.ZodOptional<z.ZodString>;
            field_desc: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            sort_order: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            field_name?: string | undefined;
            field_desc?: string | null | undefined;
            sort_order?: number | undefined;
        }, {
            field_name?: string | undefined;
            field_desc?: string | null | undefined;
            sort_order?: number | undefined;
        }>, "many">>;
        ud_codes: z.ZodOptional<z.ZodArray<z.ZodIntersection<z.ZodObject<{
            field_name: z.ZodOptional<z.ZodString>;
            field_desc: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            sort_order: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            field_name?: string | undefined;
            field_desc?: string | null | undefined;
            sort_order?: number | undefined;
        }, {
            field_name?: string | undefined;
            field_desc?: string | null | undefined;
            sort_order?: number | undefined;
        }>, z.ZodObject<{
            reference_values: z.ZodOptional<z.ZodArray<z.ZodObject<{
                ud_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud_desc: z.ZodOptional<z.ZodString>;
                sort_order: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                sort_order?: number | undefined;
                ud_code?: string | null | undefined;
                ud_desc?: string | undefined;
            }, {
                sort_order?: number | undefined;
                ud_code?: string | null | undefined;
                ud_desc?: string | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            reference_values?: {
                sort_order?: number | undefined;
                ud_code?: string | null | undefined;
                ud_desc?: string | undefined;
            }[] | undefined;
        }, {
            reference_values?: {
                sort_order?: number | undefined;
                ud_code?: string | null | undefined;
                ud_desc?: string | undefined;
            }[] | undefined;
        }>>, "many">>;
        ud_text: z.ZodOptional<z.ZodArray<z.ZodObject<{
            field_name: z.ZodOptional<z.ZodString>;
            field_desc: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            sort_order: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            field_name?: string | undefined;
            field_desc?: string | null | undefined;
            sort_order?: number | undefined;
        }, {
            field_name?: string | undefined;
            field_desc?: string | null | undefined;
            sort_order?: number | undefined;
        }>, "many">>;
        ud_dates: z.ZodOptional<z.ZodArray<z.ZodObject<{
            field_name: z.ZodOptional<z.ZodString>;
            field_desc: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            sort_order: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            field_name?: string | undefined;
            field_desc?: string | null | undefined;
            sort_order?: number | undefined;
        }, {
            field_name?: string | undefined;
            field_desc?: string | null | undefined;
            sort_order?: number | undefined;
        }>, "many">>;
        ud_attachments: z.ZodOptional<z.ZodArray<z.ZodIntersection<z.ZodObject<{
            field_name: z.ZodOptional<z.ZodString>;
            field_desc: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            sort_order: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            field_name?: string | undefined;
            field_desc?: string | null | undefined;
            sort_order?: number | undefined;
        }, {
            field_name?: string | undefined;
            field_desc?: string | null | undefined;
            sort_order?: number | undefined;
        }>, z.ZodObject<{
            field_number: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            field_number?: number | undefined;
        }, {
            field_number?: number | undefined;
        }>>, "many">>;
    }, "strip", z.ZodTypeAny, {
        ud_flags?: {
            field_name?: string | undefined;
            field_desc?: string | null | undefined;
            sort_order?: number | undefined;
        }[] | undefined;
        ud_codes?: ({
            field_name?: string | undefined;
            field_desc?: string | null | undefined;
            sort_order?: number | undefined;
        } & {
            reference_values?: {
                sort_order?: number | undefined;
                ud_code?: string | null | undefined;
                ud_desc?: string | undefined;
            }[] | undefined;
        })[] | undefined;
        ud_text?: {
            field_name?: string | undefined;
            field_desc?: string | null | undefined;
            sort_order?: number | undefined;
        }[] | undefined;
        ud_dates?: {
            field_name?: string | undefined;
            field_desc?: string | null | undefined;
            sort_order?: number | undefined;
        }[] | undefined;
        ud_attachments?: ({
            field_name?: string | undefined;
            field_desc?: string | null | undefined;
            sort_order?: number | undefined;
        } & {
            field_number?: number | undefined;
        })[] | undefined;
    }, {
        ud_flags?: {
            field_name?: string | undefined;
            field_desc?: string | null | undefined;
            sort_order?: number | undefined;
        }[] | undefined;
        ud_codes?: ({
            field_name?: string | undefined;
            field_desc?: string | null | undefined;
            sort_order?: number | undefined;
        } & {
            reference_values?: {
                sort_order?: number | undefined;
                ud_code?: string | null | undefined;
                ud_desc?: string | undefined;
            }[] | undefined;
        })[] | undefined;
        ud_text?: {
            field_name?: string | undefined;
            field_desc?: string | null | undefined;
            sort_order?: number | undefined;
        }[] | undefined;
        ud_dates?: {
            field_name?: string | undefined;
            field_desc?: string | null | undefined;
            sort_order?: number | undefined;
        }[] | undefined;
        ud_attachments?: ({
            field_name?: string | undefined;
            field_desc?: string | null | undefined;
            sort_order?: number | undefined;
        } & {
            field_number?: number | undefined;
        })[] | undefined;
    }>;
    UDAreaOptionsResponse: z.ZodObject<{
        cmpy_code: z.ZodOptional<z.ZodString>;
        area_code: z.ZodOptional<z.ZodString>;
        area_desc: z.ZodOptional<z.ZodString>;
        ud_fields: z.ZodOptional<z.ZodObject<{
            ud_flags: z.ZodOptional<z.ZodArray<z.ZodObject<{
                field_name: z.ZodOptional<z.ZodString>;
                field_desc: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                sort_order: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                field_name?: string | undefined;
                field_desc?: string | null | undefined;
                sort_order?: number | undefined;
            }, {
                field_name?: string | undefined;
                field_desc?: string | null | undefined;
                sort_order?: number | undefined;
            }>, "many">>;
            ud_codes: z.ZodOptional<z.ZodArray<z.ZodIntersection<z.ZodObject<{
                field_name: z.ZodOptional<z.ZodString>;
                field_desc: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                sort_order: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                field_name?: string | undefined;
                field_desc?: string | null | undefined;
                sort_order?: number | undefined;
            }, {
                field_name?: string | undefined;
                field_desc?: string | null | undefined;
                sort_order?: number | undefined;
            }>, z.ZodObject<{
                reference_values: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    ud_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    ud_desc: z.ZodOptional<z.ZodString>;
                    sort_order: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    sort_order?: number | undefined;
                    ud_code?: string | null | undefined;
                    ud_desc?: string | undefined;
                }, {
                    sort_order?: number | undefined;
                    ud_code?: string | null | undefined;
                    ud_desc?: string | undefined;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                reference_values?: {
                    sort_order?: number | undefined;
                    ud_code?: string | null | undefined;
                    ud_desc?: string | undefined;
                }[] | undefined;
            }, {
                reference_values?: {
                    sort_order?: number | undefined;
                    ud_code?: string | null | undefined;
                    ud_desc?: string | undefined;
                }[] | undefined;
            }>>, "many">>;
            ud_text: z.ZodOptional<z.ZodArray<z.ZodObject<{
                field_name: z.ZodOptional<z.ZodString>;
                field_desc: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                sort_order: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                field_name?: string | undefined;
                field_desc?: string | null | undefined;
                sort_order?: number | undefined;
            }, {
                field_name?: string | undefined;
                field_desc?: string | null | undefined;
                sort_order?: number | undefined;
            }>, "many">>;
            ud_dates: z.ZodOptional<z.ZodArray<z.ZodObject<{
                field_name: z.ZodOptional<z.ZodString>;
                field_desc: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                sort_order: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                field_name?: string | undefined;
                field_desc?: string | null | undefined;
                sort_order?: number | undefined;
            }, {
                field_name?: string | undefined;
                field_desc?: string | null | undefined;
                sort_order?: number | undefined;
            }>, "many">>;
            ud_attachments: z.ZodOptional<z.ZodArray<z.ZodIntersection<z.ZodObject<{
                field_name: z.ZodOptional<z.ZodString>;
                field_desc: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                sort_order: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                field_name?: string | undefined;
                field_desc?: string | null | undefined;
                sort_order?: number | undefined;
            }, {
                field_name?: string | undefined;
                field_desc?: string | null | undefined;
                sort_order?: number | undefined;
            }>, z.ZodObject<{
                field_number: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                field_number?: number | undefined;
            }, {
                field_number?: number | undefined;
            }>>, "many">>;
        }, "strip", z.ZodTypeAny, {
            ud_flags?: {
                field_name?: string | undefined;
                field_desc?: string | null | undefined;
                sort_order?: number | undefined;
            }[] | undefined;
            ud_codes?: ({
                field_name?: string | undefined;
                field_desc?: string | null | undefined;
                sort_order?: number | undefined;
            } & {
                reference_values?: {
                    sort_order?: number | undefined;
                    ud_code?: string | null | undefined;
                    ud_desc?: string | undefined;
                }[] | undefined;
            })[] | undefined;
            ud_text?: {
                field_name?: string | undefined;
                field_desc?: string | null | undefined;
                sort_order?: number | undefined;
            }[] | undefined;
            ud_dates?: {
                field_name?: string | undefined;
                field_desc?: string | null | undefined;
                sort_order?: number | undefined;
            }[] | undefined;
            ud_attachments?: ({
                field_name?: string | undefined;
                field_desc?: string | null | undefined;
                sort_order?: number | undefined;
            } & {
                field_number?: number | undefined;
            })[] | undefined;
        }, {
            ud_flags?: {
                field_name?: string | undefined;
                field_desc?: string | null | undefined;
                sort_order?: number | undefined;
            }[] | undefined;
            ud_codes?: ({
                field_name?: string | undefined;
                field_desc?: string | null | undefined;
                sort_order?: number | undefined;
            } & {
                reference_values?: {
                    sort_order?: number | undefined;
                    ud_code?: string | null | undefined;
                    ud_desc?: string | undefined;
                }[] | undefined;
            })[] | undefined;
            ud_text?: {
                field_name?: string | undefined;
                field_desc?: string | null | undefined;
                sort_order?: number | undefined;
            }[] | undefined;
            ud_dates?: {
                field_name?: string | undefined;
                field_desc?: string | null | undefined;
                sort_order?: number | undefined;
            }[] | undefined;
            ud_attachments?: ({
                field_name?: string | undefined;
                field_desc?: string | null | undefined;
                sort_order?: number | undefined;
            } & {
                field_number?: number | undefined;
            })[] | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        cmpy_code?: string | undefined;
        area_code?: string | undefined;
        area_desc?: string | undefined;
        ud_fields?: {
            ud_flags?: {
                field_name?: string | undefined;
                field_desc?: string | null | undefined;
                sort_order?: number | undefined;
            }[] | undefined;
            ud_codes?: ({
                field_name?: string | undefined;
                field_desc?: string | null | undefined;
                sort_order?: number | undefined;
            } & {
                reference_values?: {
                    sort_order?: number | undefined;
                    ud_code?: string | null | undefined;
                    ud_desc?: string | undefined;
                }[] | undefined;
            })[] | undefined;
            ud_text?: {
                field_name?: string | undefined;
                field_desc?: string | null | undefined;
                sort_order?: number | undefined;
            }[] | undefined;
            ud_dates?: {
                field_name?: string | undefined;
                field_desc?: string | null | undefined;
                sort_order?: number | undefined;
            }[] | undefined;
            ud_attachments?: ({
                field_name?: string | undefined;
                field_desc?: string | null | undefined;
                sort_order?: number | undefined;
            } & {
                field_number?: number | undefined;
            })[] | undefined;
        } | undefined;
    }, {
        cmpy_code?: string | undefined;
        area_code?: string | undefined;
        area_desc?: string | undefined;
        ud_fields?: {
            ud_flags?: {
                field_name?: string | undefined;
                field_desc?: string | null | undefined;
                sort_order?: number | undefined;
            }[] | undefined;
            ud_codes?: ({
                field_name?: string | undefined;
                field_desc?: string | null | undefined;
                sort_order?: number | undefined;
            } & {
                reference_values?: {
                    sort_order?: number | undefined;
                    ud_code?: string | null | undefined;
                    ud_desc?: string | undefined;
                }[] | undefined;
            })[] | undefined;
            ud_text?: {
                field_name?: string | undefined;
                field_desc?: string | null | undefined;
                sort_order?: number | undefined;
            }[] | undefined;
            ud_dates?: {
                field_name?: string | undefined;
                field_desc?: string | null | undefined;
                sort_order?: number | undefined;
            }[] | undefined;
            ud_attachments?: ({
                field_name?: string | undefined;
                field_desc?: string | null | undefined;
                sort_order?: number | undefined;
            } & {
                field_number?: number | undefined;
            })[] | undefined;
        } | undefined;
    }>;
    StudentUDAreaFlagResponse: z.ZodObject<{
        ud1_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud2_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud3_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud4_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud5_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud6_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud7_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud8_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud9_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud10_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        ud1_flg?: string | null | undefined;
        ud2_flg?: string | null | undefined;
        ud3_flg?: string | null | undefined;
        ud4_flg?: string | null | undefined;
        ud5_flg?: string | null | undefined;
        ud6_flg?: string | null | undefined;
        ud7_flg?: string | null | undefined;
        ud8_flg?: string | null | undefined;
        ud9_flg?: string | null | undefined;
        ud10_flg?: string | null | undefined;
    }, {
        ud1_flg?: string | null | undefined;
        ud2_flg?: string | null | undefined;
        ud3_flg?: string | null | undefined;
        ud4_flg?: string | null | undefined;
        ud5_flg?: string | null | undefined;
        ud6_flg?: string | null | undefined;
        ud7_flg?: string | null | undefined;
        ud8_flg?: string | null | undefined;
        ud9_flg?: string | null | undefined;
        ud10_flg?: string | null | undefined;
    }>;
    StudentUDAreaCodeResponse: z.ZodObject<{
        ud11_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud12_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud13_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud14_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud15_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud16_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud17_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud18_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud19_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud20_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        ud11_code?: string | null | undefined;
        ud12_code?: string | null | undefined;
        ud13_code?: string | null | undefined;
        ud14_code?: string | null | undefined;
        ud15_code?: string | null | undefined;
        ud16_code?: string | null | undefined;
        ud17_code?: string | null | undefined;
        ud18_code?: string | null | undefined;
        ud19_code?: string | null | undefined;
        ud20_code?: string | null | undefined;
    }, {
        ud11_code?: string | null | undefined;
        ud12_code?: string | null | undefined;
        ud13_code?: string | null | undefined;
        ud14_code?: string | null | undefined;
        ud15_code?: string | null | undefined;
        ud16_code?: string | null | undefined;
        ud17_code?: string | null | undefined;
        ud18_code?: string | null | undefined;
        ud19_code?: string | null | undefined;
        ud20_code?: string | null | undefined;
    }>;
    StudentUDAreaTextResponse: z.ZodObject<{
        ud21_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud22_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud23_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud24_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud25_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud26_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud27_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud28_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud29_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud30_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        ud21_text?: string | null | undefined;
        ud22_text?: string | null | undefined;
        ud23_text?: string | null | undefined;
        ud24_text?: string | null | undefined;
        ud25_text?: string | null | undefined;
        ud26_text?: string | null | undefined;
        ud27_text?: string | null | undefined;
        ud28_text?: string | null | undefined;
        ud29_text?: string | null | undefined;
        ud30_text?: string | null | undefined;
    }, {
        ud21_text?: string | null | undefined;
        ud22_text?: string | null | undefined;
        ud23_text?: string | null | undefined;
        ud24_text?: string | null | undefined;
        ud25_text?: string | null | undefined;
        ud26_text?: string | null | undefined;
        ud27_text?: string | null | undefined;
        ud28_text?: string | null | undefined;
        ud29_text?: string | null | undefined;
        ud30_text?: string | null | undefined;
    }>;
    StudentUDAreaDateResponse: z.ZodObject<{
        ud31_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud32_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud33_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud34_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud35_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud36_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud37_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud38_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud39_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud40_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        ud31_date?: string | null | undefined;
        ud32_date?: string | null | undefined;
        ud33_date?: string | null | undefined;
        ud34_date?: string | null | undefined;
        ud35_date?: string | null | undefined;
        ud36_date?: string | null | undefined;
        ud37_date?: string | null | undefined;
        ud38_date?: string | null | undefined;
        ud39_date?: string | null | undefined;
        ud40_date?: string | null | undefined;
    }, {
        ud31_date?: string | null | undefined;
        ud32_date?: string | null | undefined;
        ud33_date?: string | null | undefined;
        ud34_date?: string | null | undefined;
        ud35_date?: string | null | undefined;
        ud36_date?: string | null | undefined;
        ud37_date?: string | null | undefined;
        ud38_date?: string | null | undefined;
        ud39_date?: string | null | undefined;
        ud40_date?: string | null | undefined;
    }>;
    FileDetails: z.ZodObject<{
        file_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        file_size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        date_uploaded: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        attach_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        file_name?: string | null | undefined;
        file_size?: number | null | undefined;
        date_uploaded?: string | null | undefined;
        attach_id?: string | null | undefined;
    }, {
        file_name?: string | null | undefined;
        file_size?: number | null | undefined;
        date_uploaded?: string | null | undefined;
        attach_id?: string | null | undefined;
    }>;
    AttachmentDetails: z.ZodObject<{
        field_number: z.ZodOptional<z.ZodNumber>;
        files: z.ZodOptional<z.ZodArray<z.ZodObject<{
            file_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            file_size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            date_uploaded: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            attach_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            file_name?: string | null | undefined;
            file_size?: number | null | undefined;
            date_uploaded?: string | null | undefined;
            attach_id?: string | null | undefined;
        }, {
            file_name?: string | null | undefined;
            file_size?: number | null | undefined;
            date_uploaded?: string | null | undefined;
            attach_id?: string | null | undefined;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        field_number?: number | undefined;
        files?: {
            file_name?: string | null | undefined;
            file_size?: number | null | undefined;
            date_uploaded?: string | null | undefined;
            attach_id?: string | null | undefined;
        }[] | undefined;
    }, {
        field_number?: number | undefined;
        files?: {
            file_name?: string | null | undefined;
            file_size?: number | null | undefined;
            date_uploaded?: string | null | undefined;
            attach_id?: string | null | undefined;
        }[] | undefined;
    }>;
    StudentUDAreaAttachmentResponse: z.ZodObject<{
        ud41_attachment_details: z.ZodOptional<z.ZodObject<{
            field_number: z.ZodOptional<z.ZodNumber>;
            files: z.ZodOptional<z.ZodArray<z.ZodObject<{
                file_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                file_size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                date_uploaded: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                attach_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }, {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            field_number?: number | undefined;
            files?: {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }[] | undefined;
        }, {
            field_number?: number | undefined;
            files?: {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }[] | undefined;
        }>>;
        ud42_attachment_details: z.ZodOptional<z.ZodObject<{
            field_number: z.ZodOptional<z.ZodNumber>;
            files: z.ZodOptional<z.ZodArray<z.ZodObject<{
                file_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                file_size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                date_uploaded: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                attach_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }, {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            field_number?: number | undefined;
            files?: {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }[] | undefined;
        }, {
            field_number?: number | undefined;
            files?: {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }[] | undefined;
        }>>;
        ud43_attachment_details: z.ZodOptional<z.ZodObject<{
            field_number: z.ZodOptional<z.ZodNumber>;
            files: z.ZodOptional<z.ZodArray<z.ZodObject<{
                file_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                file_size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                date_uploaded: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                attach_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }, {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            field_number?: number | undefined;
            files?: {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }[] | undefined;
        }, {
            field_number?: number | undefined;
            files?: {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }[] | undefined;
        }>>;
        ud44_attachment_details: z.ZodOptional<z.ZodObject<{
            field_number: z.ZodOptional<z.ZodNumber>;
            files: z.ZodOptional<z.ZodArray<z.ZodObject<{
                file_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                file_size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                date_uploaded: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                attach_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }, {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            field_number?: number | undefined;
            files?: {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }[] | undefined;
        }, {
            field_number?: number | undefined;
            files?: {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }[] | undefined;
        }>>;
        ud45_attachment_details: z.ZodOptional<z.ZodObject<{
            field_number: z.ZodOptional<z.ZodNumber>;
            files: z.ZodOptional<z.ZodArray<z.ZodObject<{
                file_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                file_size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                date_uploaded: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                attach_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }, {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            field_number?: number | undefined;
            files?: {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }[] | undefined;
        }, {
            field_number?: number | undefined;
            files?: {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }[] | undefined;
        }>>;
        ud46_attachment_details: z.ZodOptional<z.ZodObject<{
            field_number: z.ZodOptional<z.ZodNumber>;
            files: z.ZodOptional<z.ZodArray<z.ZodObject<{
                file_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                file_size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                date_uploaded: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                attach_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }, {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            field_number?: number | undefined;
            files?: {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }[] | undefined;
        }, {
            field_number?: number | undefined;
            files?: {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }[] | undefined;
        }>>;
        ud47_attachment_details: z.ZodOptional<z.ZodObject<{
            field_number: z.ZodOptional<z.ZodNumber>;
            files: z.ZodOptional<z.ZodArray<z.ZodObject<{
                file_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                file_size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                date_uploaded: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                attach_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }, {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            field_number?: number | undefined;
            files?: {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }[] | undefined;
        }, {
            field_number?: number | undefined;
            files?: {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }[] | undefined;
        }>>;
        ud48_attachment_details: z.ZodOptional<z.ZodObject<{
            field_number: z.ZodOptional<z.ZodNumber>;
            files: z.ZodOptional<z.ZodArray<z.ZodObject<{
                file_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                file_size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                date_uploaded: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                attach_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }, {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            field_number?: number | undefined;
            files?: {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }[] | undefined;
        }, {
            field_number?: number | undefined;
            files?: {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }[] | undefined;
        }>>;
        ud49_attachment_details: z.ZodOptional<z.ZodObject<{
            field_number: z.ZodOptional<z.ZodNumber>;
            files: z.ZodOptional<z.ZodArray<z.ZodObject<{
                file_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                file_size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                date_uploaded: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                attach_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }, {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            field_number?: number | undefined;
            files?: {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }[] | undefined;
        }, {
            field_number?: number | undefined;
            files?: {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }[] | undefined;
        }>>;
        ud50_attachment_details: z.ZodOptional<z.ZodObject<{
            field_number: z.ZodOptional<z.ZodNumber>;
            files: z.ZodOptional<z.ZodArray<z.ZodObject<{
                file_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                file_size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                date_uploaded: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                attach_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }, {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            field_number?: number | undefined;
            files?: {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }[] | undefined;
        }, {
            field_number?: number | undefined;
            files?: {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }[] | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        ud41_attachment_details?: {
            field_number?: number | undefined;
            files?: {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }[] | undefined;
        } | undefined;
        ud42_attachment_details?: {
            field_number?: number | undefined;
            files?: {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }[] | undefined;
        } | undefined;
        ud43_attachment_details?: {
            field_number?: number | undefined;
            files?: {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }[] | undefined;
        } | undefined;
        ud44_attachment_details?: {
            field_number?: number | undefined;
            files?: {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }[] | undefined;
        } | undefined;
        ud45_attachment_details?: {
            field_number?: number | undefined;
            files?: {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }[] | undefined;
        } | undefined;
        ud46_attachment_details?: {
            field_number?: number | undefined;
            files?: {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }[] | undefined;
        } | undefined;
        ud47_attachment_details?: {
            field_number?: number | undefined;
            files?: {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }[] | undefined;
        } | undefined;
        ud48_attachment_details?: {
            field_number?: number | undefined;
            files?: {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }[] | undefined;
        } | undefined;
        ud49_attachment_details?: {
            field_number?: number | undefined;
            files?: {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }[] | undefined;
        } | undefined;
        ud50_attachment_details?: {
            field_number?: number | undefined;
            files?: {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }[] | undefined;
        } | undefined;
    }, {
        ud41_attachment_details?: {
            field_number?: number | undefined;
            files?: {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }[] | undefined;
        } | undefined;
        ud42_attachment_details?: {
            field_number?: number | undefined;
            files?: {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }[] | undefined;
        } | undefined;
        ud43_attachment_details?: {
            field_number?: number | undefined;
            files?: {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }[] | undefined;
        } | undefined;
        ud44_attachment_details?: {
            field_number?: number | undefined;
            files?: {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }[] | undefined;
        } | undefined;
        ud45_attachment_details?: {
            field_number?: number | undefined;
            files?: {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }[] | undefined;
        } | undefined;
        ud46_attachment_details?: {
            field_number?: number | undefined;
            files?: {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }[] | undefined;
        } | undefined;
        ud47_attachment_details?: {
            field_number?: number | undefined;
            files?: {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }[] | undefined;
        } | undefined;
        ud48_attachment_details?: {
            field_number?: number | undefined;
            files?: {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }[] | undefined;
        } | undefined;
        ud49_attachment_details?: {
            field_number?: number | undefined;
            files?: {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }[] | undefined;
        } | undefined;
        ud50_attachment_details?: {
            field_number?: number | undefined;
            files?: {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }[] | undefined;
        } | undefined;
    }>;
    StudentUDAreaFieldsResponse: z.ZodObject<{
        ud_flags: z.ZodOptional<z.ZodObject<{
            ud1_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud2_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud3_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud4_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud5_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud6_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud7_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud8_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud9_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud10_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            ud1_flg?: string | null | undefined;
            ud2_flg?: string | null | undefined;
            ud3_flg?: string | null | undefined;
            ud4_flg?: string | null | undefined;
            ud5_flg?: string | null | undefined;
            ud6_flg?: string | null | undefined;
            ud7_flg?: string | null | undefined;
            ud8_flg?: string | null | undefined;
            ud9_flg?: string | null | undefined;
            ud10_flg?: string | null | undefined;
        }, {
            ud1_flg?: string | null | undefined;
            ud2_flg?: string | null | undefined;
            ud3_flg?: string | null | undefined;
            ud4_flg?: string | null | undefined;
            ud5_flg?: string | null | undefined;
            ud6_flg?: string | null | undefined;
            ud7_flg?: string | null | undefined;
            ud8_flg?: string | null | undefined;
            ud9_flg?: string | null | undefined;
            ud10_flg?: string | null | undefined;
        }>>;
        ud_codes: z.ZodOptional<z.ZodObject<{
            ud11_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud12_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud13_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud14_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud15_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud16_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud17_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud18_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud19_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud20_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            ud11_code?: string | null | undefined;
            ud12_code?: string | null | undefined;
            ud13_code?: string | null | undefined;
            ud14_code?: string | null | undefined;
            ud15_code?: string | null | undefined;
            ud16_code?: string | null | undefined;
            ud17_code?: string | null | undefined;
            ud18_code?: string | null | undefined;
            ud19_code?: string | null | undefined;
            ud20_code?: string | null | undefined;
        }, {
            ud11_code?: string | null | undefined;
            ud12_code?: string | null | undefined;
            ud13_code?: string | null | undefined;
            ud14_code?: string | null | undefined;
            ud15_code?: string | null | undefined;
            ud16_code?: string | null | undefined;
            ud17_code?: string | null | undefined;
            ud18_code?: string | null | undefined;
            ud19_code?: string | null | undefined;
            ud20_code?: string | null | undefined;
        }>>;
        ud_text: z.ZodOptional<z.ZodObject<{
            ud21_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud22_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud23_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud24_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud25_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud26_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud27_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud28_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud29_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud30_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            ud21_text?: string | null | undefined;
            ud22_text?: string | null | undefined;
            ud23_text?: string | null | undefined;
            ud24_text?: string | null | undefined;
            ud25_text?: string | null | undefined;
            ud26_text?: string | null | undefined;
            ud27_text?: string | null | undefined;
            ud28_text?: string | null | undefined;
            ud29_text?: string | null | undefined;
            ud30_text?: string | null | undefined;
        }, {
            ud21_text?: string | null | undefined;
            ud22_text?: string | null | undefined;
            ud23_text?: string | null | undefined;
            ud24_text?: string | null | undefined;
            ud25_text?: string | null | undefined;
            ud26_text?: string | null | undefined;
            ud27_text?: string | null | undefined;
            ud28_text?: string | null | undefined;
            ud29_text?: string | null | undefined;
            ud30_text?: string | null | undefined;
        }>>;
        ud_dates: z.ZodOptional<z.ZodObject<{
            ud31_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud32_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud33_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud34_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud35_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud36_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud37_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud38_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud39_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud40_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            ud31_date?: string | null | undefined;
            ud32_date?: string | null | undefined;
            ud33_date?: string | null | undefined;
            ud34_date?: string | null | undefined;
            ud35_date?: string | null | undefined;
            ud36_date?: string | null | undefined;
            ud37_date?: string | null | undefined;
            ud38_date?: string | null | undefined;
            ud39_date?: string | null | undefined;
            ud40_date?: string | null | undefined;
        }, {
            ud31_date?: string | null | undefined;
            ud32_date?: string | null | undefined;
            ud33_date?: string | null | undefined;
            ud34_date?: string | null | undefined;
            ud35_date?: string | null | undefined;
            ud36_date?: string | null | undefined;
            ud37_date?: string | null | undefined;
            ud38_date?: string | null | undefined;
            ud39_date?: string | null | undefined;
            ud40_date?: string | null | undefined;
        }>>;
        ud_attachments: z.ZodOptional<z.ZodObject<{
            ud41_attachment_details: z.ZodOptional<z.ZodObject<{
                field_number: z.ZodOptional<z.ZodNumber>;
                files: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    file_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    file_size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                    date_uploaded: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    attach_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                }, "strip", z.ZodTypeAny, {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }, {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            }, {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            }>>;
            ud42_attachment_details: z.ZodOptional<z.ZodObject<{
                field_number: z.ZodOptional<z.ZodNumber>;
                files: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    file_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    file_size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                    date_uploaded: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    attach_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                }, "strip", z.ZodTypeAny, {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }, {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            }, {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            }>>;
            ud43_attachment_details: z.ZodOptional<z.ZodObject<{
                field_number: z.ZodOptional<z.ZodNumber>;
                files: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    file_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    file_size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                    date_uploaded: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    attach_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                }, "strip", z.ZodTypeAny, {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }, {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            }, {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            }>>;
            ud44_attachment_details: z.ZodOptional<z.ZodObject<{
                field_number: z.ZodOptional<z.ZodNumber>;
                files: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    file_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    file_size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                    date_uploaded: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    attach_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                }, "strip", z.ZodTypeAny, {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }, {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            }, {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            }>>;
            ud45_attachment_details: z.ZodOptional<z.ZodObject<{
                field_number: z.ZodOptional<z.ZodNumber>;
                files: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    file_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    file_size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                    date_uploaded: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    attach_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                }, "strip", z.ZodTypeAny, {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }, {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            }, {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            }>>;
            ud46_attachment_details: z.ZodOptional<z.ZodObject<{
                field_number: z.ZodOptional<z.ZodNumber>;
                files: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    file_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    file_size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                    date_uploaded: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    attach_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                }, "strip", z.ZodTypeAny, {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }, {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            }, {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            }>>;
            ud47_attachment_details: z.ZodOptional<z.ZodObject<{
                field_number: z.ZodOptional<z.ZodNumber>;
                files: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    file_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    file_size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                    date_uploaded: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    attach_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                }, "strip", z.ZodTypeAny, {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }, {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            }, {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            }>>;
            ud48_attachment_details: z.ZodOptional<z.ZodObject<{
                field_number: z.ZodOptional<z.ZodNumber>;
                files: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    file_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    file_size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                    date_uploaded: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    attach_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                }, "strip", z.ZodTypeAny, {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }, {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            }, {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            }>>;
            ud49_attachment_details: z.ZodOptional<z.ZodObject<{
                field_number: z.ZodOptional<z.ZodNumber>;
                files: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    file_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    file_size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                    date_uploaded: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    attach_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                }, "strip", z.ZodTypeAny, {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }, {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            }, {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            }>>;
            ud50_attachment_details: z.ZodOptional<z.ZodObject<{
                field_number: z.ZodOptional<z.ZodNumber>;
                files: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    file_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    file_size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                    date_uploaded: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    attach_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                }, "strip", z.ZodTypeAny, {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }, {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            }, {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            ud41_attachment_details?: {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            } | undefined;
            ud42_attachment_details?: {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            } | undefined;
            ud43_attachment_details?: {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            } | undefined;
            ud44_attachment_details?: {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            } | undefined;
            ud45_attachment_details?: {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            } | undefined;
            ud46_attachment_details?: {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            } | undefined;
            ud47_attachment_details?: {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            } | undefined;
            ud48_attachment_details?: {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            } | undefined;
            ud49_attachment_details?: {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            } | undefined;
            ud50_attachment_details?: {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            } | undefined;
        }, {
            ud41_attachment_details?: {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            } | undefined;
            ud42_attachment_details?: {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            } | undefined;
            ud43_attachment_details?: {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            } | undefined;
            ud44_attachment_details?: {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            } | undefined;
            ud45_attachment_details?: {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            } | undefined;
            ud46_attachment_details?: {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            } | undefined;
            ud47_attachment_details?: {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            } | undefined;
            ud48_attachment_details?: {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            } | undefined;
            ud49_attachment_details?: {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            } | undefined;
            ud50_attachment_details?: {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            } | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        ud_flags?: {
            ud1_flg?: string | null | undefined;
            ud2_flg?: string | null | undefined;
            ud3_flg?: string | null | undefined;
            ud4_flg?: string | null | undefined;
            ud5_flg?: string | null | undefined;
            ud6_flg?: string | null | undefined;
            ud7_flg?: string | null | undefined;
            ud8_flg?: string | null | undefined;
            ud9_flg?: string | null | undefined;
            ud10_flg?: string | null | undefined;
        } | undefined;
        ud_codes?: {
            ud11_code?: string | null | undefined;
            ud12_code?: string | null | undefined;
            ud13_code?: string | null | undefined;
            ud14_code?: string | null | undefined;
            ud15_code?: string | null | undefined;
            ud16_code?: string | null | undefined;
            ud17_code?: string | null | undefined;
            ud18_code?: string | null | undefined;
            ud19_code?: string | null | undefined;
            ud20_code?: string | null | undefined;
        } | undefined;
        ud_text?: {
            ud21_text?: string | null | undefined;
            ud22_text?: string | null | undefined;
            ud23_text?: string | null | undefined;
            ud24_text?: string | null | undefined;
            ud25_text?: string | null | undefined;
            ud26_text?: string | null | undefined;
            ud27_text?: string | null | undefined;
            ud28_text?: string | null | undefined;
            ud29_text?: string | null | undefined;
            ud30_text?: string | null | undefined;
        } | undefined;
        ud_dates?: {
            ud31_date?: string | null | undefined;
            ud32_date?: string | null | undefined;
            ud33_date?: string | null | undefined;
            ud34_date?: string | null | undefined;
            ud35_date?: string | null | undefined;
            ud36_date?: string | null | undefined;
            ud37_date?: string | null | undefined;
            ud38_date?: string | null | undefined;
            ud39_date?: string | null | undefined;
            ud40_date?: string | null | undefined;
        } | undefined;
        ud_attachments?: {
            ud41_attachment_details?: {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            } | undefined;
            ud42_attachment_details?: {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            } | undefined;
            ud43_attachment_details?: {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            } | undefined;
            ud44_attachment_details?: {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            } | undefined;
            ud45_attachment_details?: {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            } | undefined;
            ud46_attachment_details?: {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            } | undefined;
            ud47_attachment_details?: {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            } | undefined;
            ud48_attachment_details?: {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            } | undefined;
            ud49_attachment_details?: {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            } | undefined;
            ud50_attachment_details?: {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            } | undefined;
        } | undefined;
    }, {
        ud_flags?: {
            ud1_flg?: string | null | undefined;
            ud2_flg?: string | null | undefined;
            ud3_flg?: string | null | undefined;
            ud4_flg?: string | null | undefined;
            ud5_flg?: string | null | undefined;
            ud6_flg?: string | null | undefined;
            ud7_flg?: string | null | undefined;
            ud8_flg?: string | null | undefined;
            ud9_flg?: string | null | undefined;
            ud10_flg?: string | null | undefined;
        } | undefined;
        ud_codes?: {
            ud11_code?: string | null | undefined;
            ud12_code?: string | null | undefined;
            ud13_code?: string | null | undefined;
            ud14_code?: string | null | undefined;
            ud15_code?: string | null | undefined;
            ud16_code?: string | null | undefined;
            ud17_code?: string | null | undefined;
            ud18_code?: string | null | undefined;
            ud19_code?: string | null | undefined;
            ud20_code?: string | null | undefined;
        } | undefined;
        ud_text?: {
            ud21_text?: string | null | undefined;
            ud22_text?: string | null | undefined;
            ud23_text?: string | null | undefined;
            ud24_text?: string | null | undefined;
            ud25_text?: string | null | undefined;
            ud26_text?: string | null | undefined;
            ud27_text?: string | null | undefined;
            ud28_text?: string | null | undefined;
            ud29_text?: string | null | undefined;
            ud30_text?: string | null | undefined;
        } | undefined;
        ud_dates?: {
            ud31_date?: string | null | undefined;
            ud32_date?: string | null | undefined;
            ud33_date?: string | null | undefined;
            ud34_date?: string | null | undefined;
            ud35_date?: string | null | undefined;
            ud36_date?: string | null | undefined;
            ud37_date?: string | null | undefined;
            ud38_date?: string | null | undefined;
            ud39_date?: string | null | undefined;
            ud40_date?: string | null | undefined;
        } | undefined;
        ud_attachments?: {
            ud41_attachment_details?: {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            } | undefined;
            ud42_attachment_details?: {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            } | undefined;
            ud43_attachment_details?: {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            } | undefined;
            ud44_attachment_details?: {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            } | undefined;
            ud45_attachment_details?: {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            } | undefined;
            ud46_attachment_details?: {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            } | undefined;
            ud47_attachment_details?: {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            } | undefined;
            ud48_attachment_details?: {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            } | undefined;
            ud49_attachment_details?: {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            } | undefined;
            ud50_attachment_details?: {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            } | undefined;
        } | undefined;
    }>;
    StudentUDAreaResponse: z.ZodObject<{
        cmpy_code: z.ZodOptional<z.ZodString>;
        area_code: z.ZodOptional<z.ZodString>;
        stud_code: z.ZodOptional<z.ZodString>;
        update_on: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud_fields: z.ZodOptional<z.ZodObject<{
            ud_flags: z.ZodOptional<z.ZodObject<{
                ud1_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud2_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud3_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud4_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud5_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud6_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud7_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud8_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud9_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud10_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                ud1_flg?: string | null | undefined;
                ud2_flg?: string | null | undefined;
                ud3_flg?: string | null | undefined;
                ud4_flg?: string | null | undefined;
                ud5_flg?: string | null | undefined;
                ud6_flg?: string | null | undefined;
                ud7_flg?: string | null | undefined;
                ud8_flg?: string | null | undefined;
                ud9_flg?: string | null | undefined;
                ud10_flg?: string | null | undefined;
            }, {
                ud1_flg?: string | null | undefined;
                ud2_flg?: string | null | undefined;
                ud3_flg?: string | null | undefined;
                ud4_flg?: string | null | undefined;
                ud5_flg?: string | null | undefined;
                ud6_flg?: string | null | undefined;
                ud7_flg?: string | null | undefined;
                ud8_flg?: string | null | undefined;
                ud9_flg?: string | null | undefined;
                ud10_flg?: string | null | undefined;
            }>>;
            ud_codes: z.ZodOptional<z.ZodObject<{
                ud11_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud12_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud13_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud14_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud15_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud16_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud17_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud18_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud19_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud20_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                ud11_code?: string | null | undefined;
                ud12_code?: string | null | undefined;
                ud13_code?: string | null | undefined;
                ud14_code?: string | null | undefined;
                ud15_code?: string | null | undefined;
                ud16_code?: string | null | undefined;
                ud17_code?: string | null | undefined;
                ud18_code?: string | null | undefined;
                ud19_code?: string | null | undefined;
                ud20_code?: string | null | undefined;
            }, {
                ud11_code?: string | null | undefined;
                ud12_code?: string | null | undefined;
                ud13_code?: string | null | undefined;
                ud14_code?: string | null | undefined;
                ud15_code?: string | null | undefined;
                ud16_code?: string | null | undefined;
                ud17_code?: string | null | undefined;
                ud18_code?: string | null | undefined;
                ud19_code?: string | null | undefined;
                ud20_code?: string | null | undefined;
            }>>;
            ud_text: z.ZodOptional<z.ZodObject<{
                ud21_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud22_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud23_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud24_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud25_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud26_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud27_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud28_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud29_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud30_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                ud21_text?: string | null | undefined;
                ud22_text?: string | null | undefined;
                ud23_text?: string | null | undefined;
                ud24_text?: string | null | undefined;
                ud25_text?: string | null | undefined;
                ud26_text?: string | null | undefined;
                ud27_text?: string | null | undefined;
                ud28_text?: string | null | undefined;
                ud29_text?: string | null | undefined;
                ud30_text?: string | null | undefined;
            }, {
                ud21_text?: string | null | undefined;
                ud22_text?: string | null | undefined;
                ud23_text?: string | null | undefined;
                ud24_text?: string | null | undefined;
                ud25_text?: string | null | undefined;
                ud26_text?: string | null | undefined;
                ud27_text?: string | null | undefined;
                ud28_text?: string | null | undefined;
                ud29_text?: string | null | undefined;
                ud30_text?: string | null | undefined;
            }>>;
            ud_dates: z.ZodOptional<z.ZodObject<{
                ud31_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud32_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud33_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud34_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud35_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud36_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud37_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud38_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud39_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud40_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                ud31_date?: string | null | undefined;
                ud32_date?: string | null | undefined;
                ud33_date?: string | null | undefined;
                ud34_date?: string | null | undefined;
                ud35_date?: string | null | undefined;
                ud36_date?: string | null | undefined;
                ud37_date?: string | null | undefined;
                ud38_date?: string | null | undefined;
                ud39_date?: string | null | undefined;
                ud40_date?: string | null | undefined;
            }, {
                ud31_date?: string | null | undefined;
                ud32_date?: string | null | undefined;
                ud33_date?: string | null | undefined;
                ud34_date?: string | null | undefined;
                ud35_date?: string | null | undefined;
                ud36_date?: string | null | undefined;
                ud37_date?: string | null | undefined;
                ud38_date?: string | null | undefined;
                ud39_date?: string | null | undefined;
                ud40_date?: string | null | undefined;
            }>>;
            ud_attachments: z.ZodOptional<z.ZodObject<{
                ud41_attachment_details: z.ZodOptional<z.ZodObject<{
                    field_number: z.ZodOptional<z.ZodNumber>;
                    files: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        file_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                        file_size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                        date_uploaded: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                        attach_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    }, "strip", z.ZodTypeAny, {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }, {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                }, {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                }>>;
                ud42_attachment_details: z.ZodOptional<z.ZodObject<{
                    field_number: z.ZodOptional<z.ZodNumber>;
                    files: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        file_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                        file_size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                        date_uploaded: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                        attach_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    }, "strip", z.ZodTypeAny, {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }, {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                }, {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                }>>;
                ud43_attachment_details: z.ZodOptional<z.ZodObject<{
                    field_number: z.ZodOptional<z.ZodNumber>;
                    files: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        file_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                        file_size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                        date_uploaded: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                        attach_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    }, "strip", z.ZodTypeAny, {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }, {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                }, {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                }>>;
                ud44_attachment_details: z.ZodOptional<z.ZodObject<{
                    field_number: z.ZodOptional<z.ZodNumber>;
                    files: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        file_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                        file_size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                        date_uploaded: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                        attach_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    }, "strip", z.ZodTypeAny, {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }, {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                }, {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                }>>;
                ud45_attachment_details: z.ZodOptional<z.ZodObject<{
                    field_number: z.ZodOptional<z.ZodNumber>;
                    files: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        file_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                        file_size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                        date_uploaded: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                        attach_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    }, "strip", z.ZodTypeAny, {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }, {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                }, {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                }>>;
                ud46_attachment_details: z.ZodOptional<z.ZodObject<{
                    field_number: z.ZodOptional<z.ZodNumber>;
                    files: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        file_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                        file_size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                        date_uploaded: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                        attach_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    }, "strip", z.ZodTypeAny, {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }, {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                }, {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                }>>;
                ud47_attachment_details: z.ZodOptional<z.ZodObject<{
                    field_number: z.ZodOptional<z.ZodNumber>;
                    files: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        file_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                        file_size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                        date_uploaded: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                        attach_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    }, "strip", z.ZodTypeAny, {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }, {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                }, {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                }>>;
                ud48_attachment_details: z.ZodOptional<z.ZodObject<{
                    field_number: z.ZodOptional<z.ZodNumber>;
                    files: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        file_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                        file_size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                        date_uploaded: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                        attach_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    }, "strip", z.ZodTypeAny, {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }, {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                }, {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                }>>;
                ud49_attachment_details: z.ZodOptional<z.ZodObject<{
                    field_number: z.ZodOptional<z.ZodNumber>;
                    files: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        file_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                        file_size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                        date_uploaded: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                        attach_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    }, "strip", z.ZodTypeAny, {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }, {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                }, {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                }>>;
                ud50_attachment_details: z.ZodOptional<z.ZodObject<{
                    field_number: z.ZodOptional<z.ZodNumber>;
                    files: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        file_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                        file_size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                        date_uploaded: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                        attach_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    }, "strip", z.ZodTypeAny, {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }, {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                }, {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                }>>;
            }, "strip", z.ZodTypeAny, {
                ud41_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud42_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud43_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud44_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud45_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud46_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud47_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud48_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud49_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud50_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
            }, {
                ud41_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud42_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud43_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud44_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud45_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud46_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud47_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud48_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud49_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud50_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            ud_flags?: {
                ud1_flg?: string | null | undefined;
                ud2_flg?: string | null | undefined;
                ud3_flg?: string | null | undefined;
                ud4_flg?: string | null | undefined;
                ud5_flg?: string | null | undefined;
                ud6_flg?: string | null | undefined;
                ud7_flg?: string | null | undefined;
                ud8_flg?: string | null | undefined;
                ud9_flg?: string | null | undefined;
                ud10_flg?: string | null | undefined;
            } | undefined;
            ud_codes?: {
                ud11_code?: string | null | undefined;
                ud12_code?: string | null | undefined;
                ud13_code?: string | null | undefined;
                ud14_code?: string | null | undefined;
                ud15_code?: string | null | undefined;
                ud16_code?: string | null | undefined;
                ud17_code?: string | null | undefined;
                ud18_code?: string | null | undefined;
                ud19_code?: string | null | undefined;
                ud20_code?: string | null | undefined;
            } | undefined;
            ud_text?: {
                ud21_text?: string | null | undefined;
                ud22_text?: string | null | undefined;
                ud23_text?: string | null | undefined;
                ud24_text?: string | null | undefined;
                ud25_text?: string | null | undefined;
                ud26_text?: string | null | undefined;
                ud27_text?: string | null | undefined;
                ud28_text?: string | null | undefined;
                ud29_text?: string | null | undefined;
                ud30_text?: string | null | undefined;
            } | undefined;
            ud_dates?: {
                ud31_date?: string | null | undefined;
                ud32_date?: string | null | undefined;
                ud33_date?: string | null | undefined;
                ud34_date?: string | null | undefined;
                ud35_date?: string | null | undefined;
                ud36_date?: string | null | undefined;
                ud37_date?: string | null | undefined;
                ud38_date?: string | null | undefined;
                ud39_date?: string | null | undefined;
                ud40_date?: string | null | undefined;
            } | undefined;
            ud_attachments?: {
                ud41_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud42_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud43_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud44_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud45_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud46_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud47_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud48_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud49_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud50_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
            } | undefined;
        }, {
            ud_flags?: {
                ud1_flg?: string | null | undefined;
                ud2_flg?: string | null | undefined;
                ud3_flg?: string | null | undefined;
                ud4_flg?: string | null | undefined;
                ud5_flg?: string | null | undefined;
                ud6_flg?: string | null | undefined;
                ud7_flg?: string | null | undefined;
                ud8_flg?: string | null | undefined;
                ud9_flg?: string | null | undefined;
                ud10_flg?: string | null | undefined;
            } | undefined;
            ud_codes?: {
                ud11_code?: string | null | undefined;
                ud12_code?: string | null | undefined;
                ud13_code?: string | null | undefined;
                ud14_code?: string | null | undefined;
                ud15_code?: string | null | undefined;
                ud16_code?: string | null | undefined;
                ud17_code?: string | null | undefined;
                ud18_code?: string | null | undefined;
                ud19_code?: string | null | undefined;
                ud20_code?: string | null | undefined;
            } | undefined;
            ud_text?: {
                ud21_text?: string | null | undefined;
                ud22_text?: string | null | undefined;
                ud23_text?: string | null | undefined;
                ud24_text?: string | null | undefined;
                ud25_text?: string | null | undefined;
                ud26_text?: string | null | undefined;
                ud27_text?: string | null | undefined;
                ud28_text?: string | null | undefined;
                ud29_text?: string | null | undefined;
                ud30_text?: string | null | undefined;
            } | undefined;
            ud_dates?: {
                ud31_date?: string | null | undefined;
                ud32_date?: string | null | undefined;
                ud33_date?: string | null | undefined;
                ud34_date?: string | null | undefined;
                ud35_date?: string | null | undefined;
                ud36_date?: string | null | undefined;
                ud37_date?: string | null | undefined;
                ud38_date?: string | null | undefined;
                ud39_date?: string | null | undefined;
                ud40_date?: string | null | undefined;
            } | undefined;
            ud_attachments?: {
                ud41_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud42_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud43_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud44_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud45_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud46_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud47_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud48_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud49_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud50_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
            } | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        cmpy_code?: string | undefined;
        stud_code?: string | undefined;
        update_on?: string | null | undefined;
        area_code?: string | undefined;
        ud_fields?: {
            ud_flags?: {
                ud1_flg?: string | null | undefined;
                ud2_flg?: string | null | undefined;
                ud3_flg?: string | null | undefined;
                ud4_flg?: string | null | undefined;
                ud5_flg?: string | null | undefined;
                ud6_flg?: string | null | undefined;
                ud7_flg?: string | null | undefined;
                ud8_flg?: string | null | undefined;
                ud9_flg?: string | null | undefined;
                ud10_flg?: string | null | undefined;
            } | undefined;
            ud_codes?: {
                ud11_code?: string | null | undefined;
                ud12_code?: string | null | undefined;
                ud13_code?: string | null | undefined;
                ud14_code?: string | null | undefined;
                ud15_code?: string | null | undefined;
                ud16_code?: string | null | undefined;
                ud17_code?: string | null | undefined;
                ud18_code?: string | null | undefined;
                ud19_code?: string | null | undefined;
                ud20_code?: string | null | undefined;
            } | undefined;
            ud_text?: {
                ud21_text?: string | null | undefined;
                ud22_text?: string | null | undefined;
                ud23_text?: string | null | undefined;
                ud24_text?: string | null | undefined;
                ud25_text?: string | null | undefined;
                ud26_text?: string | null | undefined;
                ud27_text?: string | null | undefined;
                ud28_text?: string | null | undefined;
                ud29_text?: string | null | undefined;
                ud30_text?: string | null | undefined;
            } | undefined;
            ud_dates?: {
                ud31_date?: string | null | undefined;
                ud32_date?: string | null | undefined;
                ud33_date?: string | null | undefined;
                ud34_date?: string | null | undefined;
                ud35_date?: string | null | undefined;
                ud36_date?: string | null | undefined;
                ud37_date?: string | null | undefined;
                ud38_date?: string | null | undefined;
                ud39_date?: string | null | undefined;
                ud40_date?: string | null | undefined;
            } | undefined;
            ud_attachments?: {
                ud41_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud42_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud43_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud44_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud45_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud46_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud47_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud48_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud49_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud50_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
    }, {
        cmpy_code?: string | undefined;
        stud_code?: string | undefined;
        update_on?: string | null | undefined;
        area_code?: string | undefined;
        ud_fields?: {
            ud_flags?: {
                ud1_flg?: string | null | undefined;
                ud2_flg?: string | null | undefined;
                ud3_flg?: string | null | undefined;
                ud4_flg?: string | null | undefined;
                ud5_flg?: string | null | undefined;
                ud6_flg?: string | null | undefined;
                ud7_flg?: string | null | undefined;
                ud8_flg?: string | null | undefined;
                ud9_flg?: string | null | undefined;
                ud10_flg?: string | null | undefined;
            } | undefined;
            ud_codes?: {
                ud11_code?: string | null | undefined;
                ud12_code?: string | null | undefined;
                ud13_code?: string | null | undefined;
                ud14_code?: string | null | undefined;
                ud15_code?: string | null | undefined;
                ud16_code?: string | null | undefined;
                ud17_code?: string | null | undefined;
                ud18_code?: string | null | undefined;
                ud19_code?: string | null | undefined;
                ud20_code?: string | null | undefined;
            } | undefined;
            ud_text?: {
                ud21_text?: string | null | undefined;
                ud22_text?: string | null | undefined;
                ud23_text?: string | null | undefined;
                ud24_text?: string | null | undefined;
                ud25_text?: string | null | undefined;
                ud26_text?: string | null | undefined;
                ud27_text?: string | null | undefined;
                ud28_text?: string | null | undefined;
                ud29_text?: string | null | undefined;
                ud30_text?: string | null | undefined;
            } | undefined;
            ud_dates?: {
                ud31_date?: string | null | undefined;
                ud32_date?: string | null | undefined;
                ud33_date?: string | null | undefined;
                ud34_date?: string | null | undefined;
                ud35_date?: string | null | undefined;
                ud36_date?: string | null | undefined;
                ud37_date?: string | null | undefined;
                ud38_date?: string | null | undefined;
                ud39_date?: string | null | undefined;
                ud40_date?: string | null | undefined;
            } | undefined;
            ud_attachments?: {
                ud41_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud42_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud43_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud44_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud45_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud46_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud47_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud48_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud49_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud50_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
    }>;
    StudentUDAreaFlagRequest: z.ZodObject<{
        ud1_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud2_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud3_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud4_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud5_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud6_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud7_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud8_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud9_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud10_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        ud1_flg?: string | null | undefined;
        ud2_flg?: string | null | undefined;
        ud3_flg?: string | null | undefined;
        ud4_flg?: string | null | undefined;
        ud5_flg?: string | null | undefined;
        ud6_flg?: string | null | undefined;
        ud7_flg?: string | null | undefined;
        ud8_flg?: string | null | undefined;
        ud9_flg?: string | null | undefined;
        ud10_flg?: string | null | undefined;
    }, {
        ud1_flg?: string | null | undefined;
        ud2_flg?: string | null | undefined;
        ud3_flg?: string | null | undefined;
        ud4_flg?: string | null | undefined;
        ud5_flg?: string | null | undefined;
        ud6_flg?: string | null | undefined;
        ud7_flg?: string | null | undefined;
        ud8_flg?: string | null | undefined;
        ud9_flg?: string | null | undefined;
        ud10_flg?: string | null | undefined;
    }>;
    StudentUDAreaCodeRequest: z.ZodObject<{
        ud11_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud12_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud13_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud14_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud15_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud16_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud17_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud18_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud19_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud20_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        ud11_code?: string | null | undefined;
        ud12_code?: string | null | undefined;
        ud13_code?: string | null | undefined;
        ud14_code?: string | null | undefined;
        ud15_code?: string | null | undefined;
        ud16_code?: string | null | undefined;
        ud17_code?: string | null | undefined;
        ud18_code?: string | null | undefined;
        ud19_code?: string | null | undefined;
        ud20_code?: string | null | undefined;
    }, {
        ud11_code?: string | null | undefined;
        ud12_code?: string | null | undefined;
        ud13_code?: string | null | undefined;
        ud14_code?: string | null | undefined;
        ud15_code?: string | null | undefined;
        ud16_code?: string | null | undefined;
        ud17_code?: string | null | undefined;
        ud18_code?: string | null | undefined;
        ud19_code?: string | null | undefined;
        ud20_code?: string | null | undefined;
    }>;
    StudentUDAreaTextRequest: z.ZodObject<{
        ud21_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud22_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud23_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud24_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud25_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud26_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud27_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud28_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud29_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud30_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        ud21_text?: string | null | undefined;
        ud22_text?: string | null | undefined;
        ud23_text?: string | null | undefined;
        ud24_text?: string | null | undefined;
        ud25_text?: string | null | undefined;
        ud26_text?: string | null | undefined;
        ud27_text?: string | null | undefined;
        ud28_text?: string | null | undefined;
        ud29_text?: string | null | undefined;
        ud30_text?: string | null | undefined;
    }, {
        ud21_text?: string | null | undefined;
        ud22_text?: string | null | undefined;
        ud23_text?: string | null | undefined;
        ud24_text?: string | null | undefined;
        ud25_text?: string | null | undefined;
        ud26_text?: string | null | undefined;
        ud27_text?: string | null | undefined;
        ud28_text?: string | null | undefined;
        ud29_text?: string | null | undefined;
        ud30_text?: string | null | undefined;
    }>;
    StudentUDAreaDateRequest: z.ZodObject<{
        ud31_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud32_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud33_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud34_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud35_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud36_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud37_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud38_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud39_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud40_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        ud31_date?: string | null | undefined;
        ud32_date?: string | null | undefined;
        ud33_date?: string | null | undefined;
        ud34_date?: string | null | undefined;
        ud35_date?: string | null | undefined;
        ud36_date?: string | null | undefined;
        ud37_date?: string | null | undefined;
        ud38_date?: string | null | undefined;
        ud39_date?: string | null | undefined;
        ud40_date?: string | null | undefined;
    }, {
        ud31_date?: string | null | undefined;
        ud32_date?: string | null | undefined;
        ud33_date?: string | null | undefined;
        ud34_date?: string | null | undefined;
        ud35_date?: string | null | undefined;
        ud36_date?: string | null | undefined;
        ud37_date?: string | null | undefined;
        ud38_date?: string | null | undefined;
        ud39_date?: string | null | undefined;
        ud40_date?: string | null | undefined;
    }>;
    StudentUDAreaFieldsRequest: z.ZodObject<{
        ud_flags: z.ZodOptional<z.ZodObject<{
            ud1_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud2_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud3_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud4_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud5_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud6_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud7_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud8_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud9_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud10_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            ud1_flg?: string | null | undefined;
            ud2_flg?: string | null | undefined;
            ud3_flg?: string | null | undefined;
            ud4_flg?: string | null | undefined;
            ud5_flg?: string | null | undefined;
            ud6_flg?: string | null | undefined;
            ud7_flg?: string | null | undefined;
            ud8_flg?: string | null | undefined;
            ud9_flg?: string | null | undefined;
            ud10_flg?: string | null | undefined;
        }, {
            ud1_flg?: string | null | undefined;
            ud2_flg?: string | null | undefined;
            ud3_flg?: string | null | undefined;
            ud4_flg?: string | null | undefined;
            ud5_flg?: string | null | undefined;
            ud6_flg?: string | null | undefined;
            ud7_flg?: string | null | undefined;
            ud8_flg?: string | null | undefined;
            ud9_flg?: string | null | undefined;
            ud10_flg?: string | null | undefined;
        }>>;
        ud_codes: z.ZodOptional<z.ZodObject<{
            ud11_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud12_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud13_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud14_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud15_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud16_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud17_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud18_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud19_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud20_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            ud11_code?: string | null | undefined;
            ud12_code?: string | null | undefined;
            ud13_code?: string | null | undefined;
            ud14_code?: string | null | undefined;
            ud15_code?: string | null | undefined;
            ud16_code?: string | null | undefined;
            ud17_code?: string | null | undefined;
            ud18_code?: string | null | undefined;
            ud19_code?: string | null | undefined;
            ud20_code?: string | null | undefined;
        }, {
            ud11_code?: string | null | undefined;
            ud12_code?: string | null | undefined;
            ud13_code?: string | null | undefined;
            ud14_code?: string | null | undefined;
            ud15_code?: string | null | undefined;
            ud16_code?: string | null | undefined;
            ud17_code?: string | null | undefined;
            ud18_code?: string | null | undefined;
            ud19_code?: string | null | undefined;
            ud20_code?: string | null | undefined;
        }>>;
        ud_text: z.ZodOptional<z.ZodObject<{
            ud21_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud22_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud23_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud24_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud25_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud26_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud27_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud28_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud29_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud30_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            ud21_text?: string | null | undefined;
            ud22_text?: string | null | undefined;
            ud23_text?: string | null | undefined;
            ud24_text?: string | null | undefined;
            ud25_text?: string | null | undefined;
            ud26_text?: string | null | undefined;
            ud27_text?: string | null | undefined;
            ud28_text?: string | null | undefined;
            ud29_text?: string | null | undefined;
            ud30_text?: string | null | undefined;
        }, {
            ud21_text?: string | null | undefined;
            ud22_text?: string | null | undefined;
            ud23_text?: string | null | undefined;
            ud24_text?: string | null | undefined;
            ud25_text?: string | null | undefined;
            ud26_text?: string | null | undefined;
            ud27_text?: string | null | undefined;
            ud28_text?: string | null | undefined;
            ud29_text?: string | null | undefined;
            ud30_text?: string | null | undefined;
        }>>;
        ud_dates: z.ZodOptional<z.ZodObject<{
            ud31_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud32_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud33_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud34_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud35_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud36_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud37_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud38_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud39_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud40_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            ud31_date?: string | null | undefined;
            ud32_date?: string | null | undefined;
            ud33_date?: string | null | undefined;
            ud34_date?: string | null | undefined;
            ud35_date?: string | null | undefined;
            ud36_date?: string | null | undefined;
            ud37_date?: string | null | undefined;
            ud38_date?: string | null | undefined;
            ud39_date?: string | null | undefined;
            ud40_date?: string | null | undefined;
        }, {
            ud31_date?: string | null | undefined;
            ud32_date?: string | null | undefined;
            ud33_date?: string | null | undefined;
            ud34_date?: string | null | undefined;
            ud35_date?: string | null | undefined;
            ud36_date?: string | null | undefined;
            ud37_date?: string | null | undefined;
            ud38_date?: string | null | undefined;
            ud39_date?: string | null | undefined;
            ud40_date?: string | null | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        ud_flags?: {
            ud1_flg?: string | null | undefined;
            ud2_flg?: string | null | undefined;
            ud3_flg?: string | null | undefined;
            ud4_flg?: string | null | undefined;
            ud5_flg?: string | null | undefined;
            ud6_flg?: string | null | undefined;
            ud7_flg?: string | null | undefined;
            ud8_flg?: string | null | undefined;
            ud9_flg?: string | null | undefined;
            ud10_flg?: string | null | undefined;
        } | undefined;
        ud_codes?: {
            ud11_code?: string | null | undefined;
            ud12_code?: string | null | undefined;
            ud13_code?: string | null | undefined;
            ud14_code?: string | null | undefined;
            ud15_code?: string | null | undefined;
            ud16_code?: string | null | undefined;
            ud17_code?: string | null | undefined;
            ud18_code?: string | null | undefined;
            ud19_code?: string | null | undefined;
            ud20_code?: string | null | undefined;
        } | undefined;
        ud_text?: {
            ud21_text?: string | null | undefined;
            ud22_text?: string | null | undefined;
            ud23_text?: string | null | undefined;
            ud24_text?: string | null | undefined;
            ud25_text?: string | null | undefined;
            ud26_text?: string | null | undefined;
            ud27_text?: string | null | undefined;
            ud28_text?: string | null | undefined;
            ud29_text?: string | null | undefined;
            ud30_text?: string | null | undefined;
        } | undefined;
        ud_dates?: {
            ud31_date?: string | null | undefined;
            ud32_date?: string | null | undefined;
            ud33_date?: string | null | undefined;
            ud34_date?: string | null | undefined;
            ud35_date?: string | null | undefined;
            ud36_date?: string | null | undefined;
            ud37_date?: string | null | undefined;
            ud38_date?: string | null | undefined;
            ud39_date?: string | null | undefined;
            ud40_date?: string | null | undefined;
        } | undefined;
    }, {
        ud_flags?: {
            ud1_flg?: string | null | undefined;
            ud2_flg?: string | null | undefined;
            ud3_flg?: string | null | undefined;
            ud4_flg?: string | null | undefined;
            ud5_flg?: string | null | undefined;
            ud6_flg?: string | null | undefined;
            ud7_flg?: string | null | undefined;
            ud8_flg?: string | null | undefined;
            ud9_flg?: string | null | undefined;
            ud10_flg?: string | null | undefined;
        } | undefined;
        ud_codes?: {
            ud11_code?: string | null | undefined;
            ud12_code?: string | null | undefined;
            ud13_code?: string | null | undefined;
            ud14_code?: string | null | undefined;
            ud15_code?: string | null | undefined;
            ud16_code?: string | null | undefined;
            ud17_code?: string | null | undefined;
            ud18_code?: string | null | undefined;
            ud19_code?: string | null | undefined;
            ud20_code?: string | null | undefined;
        } | undefined;
        ud_text?: {
            ud21_text?: string | null | undefined;
            ud22_text?: string | null | undefined;
            ud23_text?: string | null | undefined;
            ud24_text?: string | null | undefined;
            ud25_text?: string | null | undefined;
            ud26_text?: string | null | undefined;
            ud27_text?: string | null | undefined;
            ud28_text?: string | null | undefined;
            ud29_text?: string | null | undefined;
            ud30_text?: string | null | undefined;
        } | undefined;
        ud_dates?: {
            ud31_date?: string | null | undefined;
            ud32_date?: string | null | undefined;
            ud33_date?: string | null | undefined;
            ud34_date?: string | null | undefined;
            ud35_date?: string | null | undefined;
            ud36_date?: string | null | undefined;
            ud37_date?: string | null | undefined;
            ud38_date?: string | null | undefined;
            ud39_date?: string | null | undefined;
            ud40_date?: string | null | undefined;
        } | undefined;
    }>;
    CommonStudentUDAreaUpdateRequest: z.ZodObject<{
        ud_fields: z.ZodOptional<z.ZodObject<{
            ud_flags: z.ZodOptional<z.ZodObject<{
                ud1_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud2_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud3_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud4_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud5_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud6_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud7_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud8_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud9_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud10_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                ud1_flg?: string | null | undefined;
                ud2_flg?: string | null | undefined;
                ud3_flg?: string | null | undefined;
                ud4_flg?: string | null | undefined;
                ud5_flg?: string | null | undefined;
                ud6_flg?: string | null | undefined;
                ud7_flg?: string | null | undefined;
                ud8_flg?: string | null | undefined;
                ud9_flg?: string | null | undefined;
                ud10_flg?: string | null | undefined;
            }, {
                ud1_flg?: string | null | undefined;
                ud2_flg?: string | null | undefined;
                ud3_flg?: string | null | undefined;
                ud4_flg?: string | null | undefined;
                ud5_flg?: string | null | undefined;
                ud6_flg?: string | null | undefined;
                ud7_flg?: string | null | undefined;
                ud8_flg?: string | null | undefined;
                ud9_flg?: string | null | undefined;
                ud10_flg?: string | null | undefined;
            }>>;
            ud_codes: z.ZodOptional<z.ZodObject<{
                ud11_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud12_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud13_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud14_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud15_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud16_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud17_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud18_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud19_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud20_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                ud11_code?: string | null | undefined;
                ud12_code?: string | null | undefined;
                ud13_code?: string | null | undefined;
                ud14_code?: string | null | undefined;
                ud15_code?: string | null | undefined;
                ud16_code?: string | null | undefined;
                ud17_code?: string | null | undefined;
                ud18_code?: string | null | undefined;
                ud19_code?: string | null | undefined;
                ud20_code?: string | null | undefined;
            }, {
                ud11_code?: string | null | undefined;
                ud12_code?: string | null | undefined;
                ud13_code?: string | null | undefined;
                ud14_code?: string | null | undefined;
                ud15_code?: string | null | undefined;
                ud16_code?: string | null | undefined;
                ud17_code?: string | null | undefined;
                ud18_code?: string | null | undefined;
                ud19_code?: string | null | undefined;
                ud20_code?: string | null | undefined;
            }>>;
            ud_text: z.ZodOptional<z.ZodObject<{
                ud21_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud22_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud23_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud24_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud25_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud26_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud27_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud28_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud29_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud30_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                ud21_text?: string | null | undefined;
                ud22_text?: string | null | undefined;
                ud23_text?: string | null | undefined;
                ud24_text?: string | null | undefined;
                ud25_text?: string | null | undefined;
                ud26_text?: string | null | undefined;
                ud27_text?: string | null | undefined;
                ud28_text?: string | null | undefined;
                ud29_text?: string | null | undefined;
                ud30_text?: string | null | undefined;
            }, {
                ud21_text?: string | null | undefined;
                ud22_text?: string | null | undefined;
                ud23_text?: string | null | undefined;
                ud24_text?: string | null | undefined;
                ud25_text?: string | null | undefined;
                ud26_text?: string | null | undefined;
                ud27_text?: string | null | undefined;
                ud28_text?: string | null | undefined;
                ud29_text?: string | null | undefined;
                ud30_text?: string | null | undefined;
            }>>;
            ud_dates: z.ZodOptional<z.ZodObject<{
                ud31_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud32_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud33_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud34_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud35_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud36_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud37_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud38_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud39_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud40_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                ud31_date?: string | null | undefined;
                ud32_date?: string | null | undefined;
                ud33_date?: string | null | undefined;
                ud34_date?: string | null | undefined;
                ud35_date?: string | null | undefined;
                ud36_date?: string | null | undefined;
                ud37_date?: string | null | undefined;
                ud38_date?: string | null | undefined;
                ud39_date?: string | null | undefined;
                ud40_date?: string | null | undefined;
            }, {
                ud31_date?: string | null | undefined;
                ud32_date?: string | null | undefined;
                ud33_date?: string | null | undefined;
                ud34_date?: string | null | undefined;
                ud35_date?: string | null | undefined;
                ud36_date?: string | null | undefined;
                ud37_date?: string | null | undefined;
                ud38_date?: string | null | undefined;
                ud39_date?: string | null | undefined;
                ud40_date?: string | null | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            ud_flags?: {
                ud1_flg?: string | null | undefined;
                ud2_flg?: string | null | undefined;
                ud3_flg?: string | null | undefined;
                ud4_flg?: string | null | undefined;
                ud5_flg?: string | null | undefined;
                ud6_flg?: string | null | undefined;
                ud7_flg?: string | null | undefined;
                ud8_flg?: string | null | undefined;
                ud9_flg?: string | null | undefined;
                ud10_flg?: string | null | undefined;
            } | undefined;
            ud_codes?: {
                ud11_code?: string | null | undefined;
                ud12_code?: string | null | undefined;
                ud13_code?: string | null | undefined;
                ud14_code?: string | null | undefined;
                ud15_code?: string | null | undefined;
                ud16_code?: string | null | undefined;
                ud17_code?: string | null | undefined;
                ud18_code?: string | null | undefined;
                ud19_code?: string | null | undefined;
                ud20_code?: string | null | undefined;
            } | undefined;
            ud_text?: {
                ud21_text?: string | null | undefined;
                ud22_text?: string | null | undefined;
                ud23_text?: string | null | undefined;
                ud24_text?: string | null | undefined;
                ud25_text?: string | null | undefined;
                ud26_text?: string | null | undefined;
                ud27_text?: string | null | undefined;
                ud28_text?: string | null | undefined;
                ud29_text?: string | null | undefined;
                ud30_text?: string | null | undefined;
            } | undefined;
            ud_dates?: {
                ud31_date?: string | null | undefined;
                ud32_date?: string | null | undefined;
                ud33_date?: string | null | undefined;
                ud34_date?: string | null | undefined;
                ud35_date?: string | null | undefined;
                ud36_date?: string | null | undefined;
                ud37_date?: string | null | undefined;
                ud38_date?: string | null | undefined;
                ud39_date?: string | null | undefined;
                ud40_date?: string | null | undefined;
            } | undefined;
        }, {
            ud_flags?: {
                ud1_flg?: string | null | undefined;
                ud2_flg?: string | null | undefined;
                ud3_flg?: string | null | undefined;
                ud4_flg?: string | null | undefined;
                ud5_flg?: string | null | undefined;
                ud6_flg?: string | null | undefined;
                ud7_flg?: string | null | undefined;
                ud8_flg?: string | null | undefined;
                ud9_flg?: string | null | undefined;
                ud10_flg?: string | null | undefined;
            } | undefined;
            ud_codes?: {
                ud11_code?: string | null | undefined;
                ud12_code?: string | null | undefined;
                ud13_code?: string | null | undefined;
                ud14_code?: string | null | undefined;
                ud15_code?: string | null | undefined;
                ud16_code?: string | null | undefined;
                ud17_code?: string | null | undefined;
                ud18_code?: string | null | undefined;
                ud19_code?: string | null | undefined;
                ud20_code?: string | null | undefined;
            } | undefined;
            ud_text?: {
                ud21_text?: string | null | undefined;
                ud22_text?: string | null | undefined;
                ud23_text?: string | null | undefined;
                ud24_text?: string | null | undefined;
                ud25_text?: string | null | undefined;
                ud26_text?: string | null | undefined;
                ud27_text?: string | null | undefined;
                ud28_text?: string | null | undefined;
                ud29_text?: string | null | undefined;
                ud30_text?: string | null | undefined;
            } | undefined;
            ud_dates?: {
                ud31_date?: string | null | undefined;
                ud32_date?: string | null | undefined;
                ud33_date?: string | null | undefined;
                ud34_date?: string | null | undefined;
                ud35_date?: string | null | undefined;
                ud36_date?: string | null | undefined;
                ud37_date?: string | null | undefined;
                ud38_date?: string | null | undefined;
                ud39_date?: string | null | undefined;
                ud40_date?: string | null | undefined;
            } | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        ud_fields?: {
            ud_flags?: {
                ud1_flg?: string | null | undefined;
                ud2_flg?: string | null | undefined;
                ud3_flg?: string | null | undefined;
                ud4_flg?: string | null | undefined;
                ud5_flg?: string | null | undefined;
                ud6_flg?: string | null | undefined;
                ud7_flg?: string | null | undefined;
                ud8_flg?: string | null | undefined;
                ud9_flg?: string | null | undefined;
                ud10_flg?: string | null | undefined;
            } | undefined;
            ud_codes?: {
                ud11_code?: string | null | undefined;
                ud12_code?: string | null | undefined;
                ud13_code?: string | null | undefined;
                ud14_code?: string | null | undefined;
                ud15_code?: string | null | undefined;
                ud16_code?: string | null | undefined;
                ud17_code?: string | null | undefined;
                ud18_code?: string | null | undefined;
                ud19_code?: string | null | undefined;
                ud20_code?: string | null | undefined;
            } | undefined;
            ud_text?: {
                ud21_text?: string | null | undefined;
                ud22_text?: string | null | undefined;
                ud23_text?: string | null | undefined;
                ud24_text?: string | null | undefined;
                ud25_text?: string | null | undefined;
                ud26_text?: string | null | undefined;
                ud27_text?: string | null | undefined;
                ud28_text?: string | null | undefined;
                ud29_text?: string | null | undefined;
                ud30_text?: string | null | undefined;
            } | undefined;
            ud_dates?: {
                ud31_date?: string | null | undefined;
                ud32_date?: string | null | undefined;
                ud33_date?: string | null | undefined;
                ud34_date?: string | null | undefined;
                ud35_date?: string | null | undefined;
                ud36_date?: string | null | undefined;
                ud37_date?: string | null | undefined;
                ud38_date?: string | null | undefined;
                ud39_date?: string | null | undefined;
                ud40_date?: string | null | undefined;
            } | undefined;
        } | undefined;
    }, {
        ud_fields?: {
            ud_flags?: {
                ud1_flg?: string | null | undefined;
                ud2_flg?: string | null | undefined;
                ud3_flg?: string | null | undefined;
                ud4_flg?: string | null | undefined;
                ud5_flg?: string | null | undefined;
                ud6_flg?: string | null | undefined;
                ud7_flg?: string | null | undefined;
                ud8_flg?: string | null | undefined;
                ud9_flg?: string | null | undefined;
                ud10_flg?: string | null | undefined;
            } | undefined;
            ud_codes?: {
                ud11_code?: string | null | undefined;
                ud12_code?: string | null | undefined;
                ud13_code?: string | null | undefined;
                ud14_code?: string | null | undefined;
                ud15_code?: string | null | undefined;
                ud16_code?: string | null | undefined;
                ud17_code?: string | null | undefined;
                ud18_code?: string | null | undefined;
                ud19_code?: string | null | undefined;
                ud20_code?: string | null | undefined;
            } | undefined;
            ud_text?: {
                ud21_text?: string | null | undefined;
                ud22_text?: string | null | undefined;
                ud23_text?: string | null | undefined;
                ud24_text?: string | null | undefined;
                ud25_text?: string | null | undefined;
                ud26_text?: string | null | undefined;
                ud27_text?: string | null | undefined;
                ud28_text?: string | null | undefined;
                ud29_text?: string | null | undefined;
                ud30_text?: string | null | undefined;
            } | undefined;
            ud_dates?: {
                ud31_date?: string | null | undefined;
                ud32_date?: string | null | undefined;
                ud33_date?: string | null | undefined;
                ud34_date?: string | null | undefined;
                ud35_date?: string | null | undefined;
                ud36_date?: string | null | undefined;
                ud37_date?: string | null | undefined;
                ud38_date?: string | null | undefined;
                ud39_date?: string | null | undefined;
                ud40_date?: string | null | undefined;
            } | undefined;
        } | undefined;
    }>;
    AddStudentUDAreaRequest: z.ZodIntersection<z.ZodObject<{
        ud_fields: z.ZodOptional<z.ZodObject<{
            ud_flags: z.ZodOptional<z.ZodObject<{
                ud1_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud2_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud3_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud4_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud5_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud6_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud7_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud8_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud9_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud10_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                ud1_flg?: string | null | undefined;
                ud2_flg?: string | null | undefined;
                ud3_flg?: string | null | undefined;
                ud4_flg?: string | null | undefined;
                ud5_flg?: string | null | undefined;
                ud6_flg?: string | null | undefined;
                ud7_flg?: string | null | undefined;
                ud8_flg?: string | null | undefined;
                ud9_flg?: string | null | undefined;
                ud10_flg?: string | null | undefined;
            }, {
                ud1_flg?: string | null | undefined;
                ud2_flg?: string | null | undefined;
                ud3_flg?: string | null | undefined;
                ud4_flg?: string | null | undefined;
                ud5_flg?: string | null | undefined;
                ud6_flg?: string | null | undefined;
                ud7_flg?: string | null | undefined;
                ud8_flg?: string | null | undefined;
                ud9_flg?: string | null | undefined;
                ud10_flg?: string | null | undefined;
            }>>;
            ud_codes: z.ZodOptional<z.ZodObject<{
                ud11_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud12_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud13_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud14_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud15_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud16_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud17_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud18_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud19_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud20_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                ud11_code?: string | null | undefined;
                ud12_code?: string | null | undefined;
                ud13_code?: string | null | undefined;
                ud14_code?: string | null | undefined;
                ud15_code?: string | null | undefined;
                ud16_code?: string | null | undefined;
                ud17_code?: string | null | undefined;
                ud18_code?: string | null | undefined;
                ud19_code?: string | null | undefined;
                ud20_code?: string | null | undefined;
            }, {
                ud11_code?: string | null | undefined;
                ud12_code?: string | null | undefined;
                ud13_code?: string | null | undefined;
                ud14_code?: string | null | undefined;
                ud15_code?: string | null | undefined;
                ud16_code?: string | null | undefined;
                ud17_code?: string | null | undefined;
                ud18_code?: string | null | undefined;
                ud19_code?: string | null | undefined;
                ud20_code?: string | null | undefined;
            }>>;
            ud_text: z.ZodOptional<z.ZodObject<{
                ud21_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud22_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud23_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud24_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud25_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud26_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud27_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud28_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud29_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud30_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                ud21_text?: string | null | undefined;
                ud22_text?: string | null | undefined;
                ud23_text?: string | null | undefined;
                ud24_text?: string | null | undefined;
                ud25_text?: string | null | undefined;
                ud26_text?: string | null | undefined;
                ud27_text?: string | null | undefined;
                ud28_text?: string | null | undefined;
                ud29_text?: string | null | undefined;
                ud30_text?: string | null | undefined;
            }, {
                ud21_text?: string | null | undefined;
                ud22_text?: string | null | undefined;
                ud23_text?: string | null | undefined;
                ud24_text?: string | null | undefined;
                ud25_text?: string | null | undefined;
                ud26_text?: string | null | undefined;
                ud27_text?: string | null | undefined;
                ud28_text?: string | null | undefined;
                ud29_text?: string | null | undefined;
                ud30_text?: string | null | undefined;
            }>>;
            ud_dates: z.ZodOptional<z.ZodObject<{
                ud31_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud32_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud33_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud34_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud35_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud36_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud37_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud38_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud39_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud40_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                ud31_date?: string | null | undefined;
                ud32_date?: string | null | undefined;
                ud33_date?: string | null | undefined;
                ud34_date?: string | null | undefined;
                ud35_date?: string | null | undefined;
                ud36_date?: string | null | undefined;
                ud37_date?: string | null | undefined;
                ud38_date?: string | null | undefined;
                ud39_date?: string | null | undefined;
                ud40_date?: string | null | undefined;
            }, {
                ud31_date?: string | null | undefined;
                ud32_date?: string | null | undefined;
                ud33_date?: string | null | undefined;
                ud34_date?: string | null | undefined;
                ud35_date?: string | null | undefined;
                ud36_date?: string | null | undefined;
                ud37_date?: string | null | undefined;
                ud38_date?: string | null | undefined;
                ud39_date?: string | null | undefined;
                ud40_date?: string | null | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            ud_flags?: {
                ud1_flg?: string | null | undefined;
                ud2_flg?: string | null | undefined;
                ud3_flg?: string | null | undefined;
                ud4_flg?: string | null | undefined;
                ud5_flg?: string | null | undefined;
                ud6_flg?: string | null | undefined;
                ud7_flg?: string | null | undefined;
                ud8_flg?: string | null | undefined;
                ud9_flg?: string | null | undefined;
                ud10_flg?: string | null | undefined;
            } | undefined;
            ud_codes?: {
                ud11_code?: string | null | undefined;
                ud12_code?: string | null | undefined;
                ud13_code?: string | null | undefined;
                ud14_code?: string | null | undefined;
                ud15_code?: string | null | undefined;
                ud16_code?: string | null | undefined;
                ud17_code?: string | null | undefined;
                ud18_code?: string | null | undefined;
                ud19_code?: string | null | undefined;
                ud20_code?: string | null | undefined;
            } | undefined;
            ud_text?: {
                ud21_text?: string | null | undefined;
                ud22_text?: string | null | undefined;
                ud23_text?: string | null | undefined;
                ud24_text?: string | null | undefined;
                ud25_text?: string | null | undefined;
                ud26_text?: string | null | undefined;
                ud27_text?: string | null | undefined;
                ud28_text?: string | null | undefined;
                ud29_text?: string | null | undefined;
                ud30_text?: string | null | undefined;
            } | undefined;
            ud_dates?: {
                ud31_date?: string | null | undefined;
                ud32_date?: string | null | undefined;
                ud33_date?: string | null | undefined;
                ud34_date?: string | null | undefined;
                ud35_date?: string | null | undefined;
                ud36_date?: string | null | undefined;
                ud37_date?: string | null | undefined;
                ud38_date?: string | null | undefined;
                ud39_date?: string | null | undefined;
                ud40_date?: string | null | undefined;
            } | undefined;
        }, {
            ud_flags?: {
                ud1_flg?: string | null | undefined;
                ud2_flg?: string | null | undefined;
                ud3_flg?: string | null | undefined;
                ud4_flg?: string | null | undefined;
                ud5_flg?: string | null | undefined;
                ud6_flg?: string | null | undefined;
                ud7_flg?: string | null | undefined;
                ud8_flg?: string | null | undefined;
                ud9_flg?: string | null | undefined;
                ud10_flg?: string | null | undefined;
            } | undefined;
            ud_codes?: {
                ud11_code?: string | null | undefined;
                ud12_code?: string | null | undefined;
                ud13_code?: string | null | undefined;
                ud14_code?: string | null | undefined;
                ud15_code?: string | null | undefined;
                ud16_code?: string | null | undefined;
                ud17_code?: string | null | undefined;
                ud18_code?: string | null | undefined;
                ud19_code?: string | null | undefined;
                ud20_code?: string | null | undefined;
            } | undefined;
            ud_text?: {
                ud21_text?: string | null | undefined;
                ud22_text?: string | null | undefined;
                ud23_text?: string | null | undefined;
                ud24_text?: string | null | undefined;
                ud25_text?: string | null | undefined;
                ud26_text?: string | null | undefined;
                ud27_text?: string | null | undefined;
                ud28_text?: string | null | undefined;
                ud29_text?: string | null | undefined;
                ud30_text?: string | null | undefined;
            } | undefined;
            ud_dates?: {
                ud31_date?: string | null | undefined;
                ud32_date?: string | null | undefined;
                ud33_date?: string | null | undefined;
                ud34_date?: string | null | undefined;
                ud35_date?: string | null | undefined;
                ud36_date?: string | null | undefined;
                ud37_date?: string | null | undefined;
                ud38_date?: string | null | undefined;
                ud39_date?: string | null | undefined;
                ud40_date?: string | null | undefined;
            } | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        ud_fields?: {
            ud_flags?: {
                ud1_flg?: string | null | undefined;
                ud2_flg?: string | null | undefined;
                ud3_flg?: string | null | undefined;
                ud4_flg?: string | null | undefined;
                ud5_flg?: string | null | undefined;
                ud6_flg?: string | null | undefined;
                ud7_flg?: string | null | undefined;
                ud8_flg?: string | null | undefined;
                ud9_flg?: string | null | undefined;
                ud10_flg?: string | null | undefined;
            } | undefined;
            ud_codes?: {
                ud11_code?: string | null | undefined;
                ud12_code?: string | null | undefined;
                ud13_code?: string | null | undefined;
                ud14_code?: string | null | undefined;
                ud15_code?: string | null | undefined;
                ud16_code?: string | null | undefined;
                ud17_code?: string | null | undefined;
                ud18_code?: string | null | undefined;
                ud19_code?: string | null | undefined;
                ud20_code?: string | null | undefined;
            } | undefined;
            ud_text?: {
                ud21_text?: string | null | undefined;
                ud22_text?: string | null | undefined;
                ud23_text?: string | null | undefined;
                ud24_text?: string | null | undefined;
                ud25_text?: string | null | undefined;
                ud26_text?: string | null | undefined;
                ud27_text?: string | null | undefined;
                ud28_text?: string | null | undefined;
                ud29_text?: string | null | undefined;
                ud30_text?: string | null | undefined;
            } | undefined;
            ud_dates?: {
                ud31_date?: string | null | undefined;
                ud32_date?: string | null | undefined;
                ud33_date?: string | null | undefined;
                ud34_date?: string | null | undefined;
                ud35_date?: string | null | undefined;
                ud36_date?: string | null | undefined;
                ud37_date?: string | null | undefined;
                ud38_date?: string | null | undefined;
                ud39_date?: string | null | undefined;
                ud40_date?: string | null | undefined;
            } | undefined;
        } | undefined;
    }, {
        ud_fields?: {
            ud_flags?: {
                ud1_flg?: string | null | undefined;
                ud2_flg?: string | null | undefined;
                ud3_flg?: string | null | undefined;
                ud4_flg?: string | null | undefined;
                ud5_flg?: string | null | undefined;
                ud6_flg?: string | null | undefined;
                ud7_flg?: string | null | undefined;
                ud8_flg?: string | null | undefined;
                ud9_flg?: string | null | undefined;
                ud10_flg?: string | null | undefined;
            } | undefined;
            ud_codes?: {
                ud11_code?: string | null | undefined;
                ud12_code?: string | null | undefined;
                ud13_code?: string | null | undefined;
                ud14_code?: string | null | undefined;
                ud15_code?: string | null | undefined;
                ud16_code?: string | null | undefined;
                ud17_code?: string | null | undefined;
                ud18_code?: string | null | undefined;
                ud19_code?: string | null | undefined;
                ud20_code?: string | null | undefined;
            } | undefined;
            ud_text?: {
                ud21_text?: string | null | undefined;
                ud22_text?: string | null | undefined;
                ud23_text?: string | null | undefined;
                ud24_text?: string | null | undefined;
                ud25_text?: string | null | undefined;
                ud26_text?: string | null | undefined;
                ud27_text?: string | null | undefined;
                ud28_text?: string | null | undefined;
                ud29_text?: string | null | undefined;
                ud30_text?: string | null | undefined;
            } | undefined;
            ud_dates?: {
                ud31_date?: string | null | undefined;
                ud32_date?: string | null | undefined;
                ud33_date?: string | null | undefined;
                ud34_date?: string | null | undefined;
                ud35_date?: string | null | undefined;
                ud36_date?: string | null | undefined;
                ud37_date?: string | null | undefined;
                ud38_date?: string | null | undefined;
                ud39_date?: string | null | undefined;
                ud40_date?: string | null | undefined;
            } | undefined;
        } | undefined;
    }>, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
    UpdateStudentUDAreaRequest: z.ZodIntersection<z.ZodObject<{
        ud_fields: z.ZodOptional<z.ZodObject<{
            ud_flags: z.ZodOptional<z.ZodObject<{
                ud1_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud2_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud3_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud4_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud5_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud6_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud7_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud8_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud9_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud10_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                ud1_flg?: string | null | undefined;
                ud2_flg?: string | null | undefined;
                ud3_flg?: string | null | undefined;
                ud4_flg?: string | null | undefined;
                ud5_flg?: string | null | undefined;
                ud6_flg?: string | null | undefined;
                ud7_flg?: string | null | undefined;
                ud8_flg?: string | null | undefined;
                ud9_flg?: string | null | undefined;
                ud10_flg?: string | null | undefined;
            }, {
                ud1_flg?: string | null | undefined;
                ud2_flg?: string | null | undefined;
                ud3_flg?: string | null | undefined;
                ud4_flg?: string | null | undefined;
                ud5_flg?: string | null | undefined;
                ud6_flg?: string | null | undefined;
                ud7_flg?: string | null | undefined;
                ud8_flg?: string | null | undefined;
                ud9_flg?: string | null | undefined;
                ud10_flg?: string | null | undefined;
            }>>;
            ud_codes: z.ZodOptional<z.ZodObject<{
                ud11_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud12_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud13_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud14_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud15_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud16_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud17_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud18_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud19_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud20_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                ud11_code?: string | null | undefined;
                ud12_code?: string | null | undefined;
                ud13_code?: string | null | undefined;
                ud14_code?: string | null | undefined;
                ud15_code?: string | null | undefined;
                ud16_code?: string | null | undefined;
                ud17_code?: string | null | undefined;
                ud18_code?: string | null | undefined;
                ud19_code?: string | null | undefined;
                ud20_code?: string | null | undefined;
            }, {
                ud11_code?: string | null | undefined;
                ud12_code?: string | null | undefined;
                ud13_code?: string | null | undefined;
                ud14_code?: string | null | undefined;
                ud15_code?: string | null | undefined;
                ud16_code?: string | null | undefined;
                ud17_code?: string | null | undefined;
                ud18_code?: string | null | undefined;
                ud19_code?: string | null | undefined;
                ud20_code?: string | null | undefined;
            }>>;
            ud_text: z.ZodOptional<z.ZodObject<{
                ud21_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud22_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud23_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud24_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud25_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud26_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud27_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud28_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud29_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud30_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                ud21_text?: string | null | undefined;
                ud22_text?: string | null | undefined;
                ud23_text?: string | null | undefined;
                ud24_text?: string | null | undefined;
                ud25_text?: string | null | undefined;
                ud26_text?: string | null | undefined;
                ud27_text?: string | null | undefined;
                ud28_text?: string | null | undefined;
                ud29_text?: string | null | undefined;
                ud30_text?: string | null | undefined;
            }, {
                ud21_text?: string | null | undefined;
                ud22_text?: string | null | undefined;
                ud23_text?: string | null | undefined;
                ud24_text?: string | null | undefined;
                ud25_text?: string | null | undefined;
                ud26_text?: string | null | undefined;
                ud27_text?: string | null | undefined;
                ud28_text?: string | null | undefined;
                ud29_text?: string | null | undefined;
                ud30_text?: string | null | undefined;
            }>>;
            ud_dates: z.ZodOptional<z.ZodObject<{
                ud31_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud32_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud33_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud34_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud35_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud36_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud37_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud38_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud39_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud40_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                ud31_date?: string | null | undefined;
                ud32_date?: string | null | undefined;
                ud33_date?: string | null | undefined;
                ud34_date?: string | null | undefined;
                ud35_date?: string | null | undefined;
                ud36_date?: string | null | undefined;
                ud37_date?: string | null | undefined;
                ud38_date?: string | null | undefined;
                ud39_date?: string | null | undefined;
                ud40_date?: string | null | undefined;
            }, {
                ud31_date?: string | null | undefined;
                ud32_date?: string | null | undefined;
                ud33_date?: string | null | undefined;
                ud34_date?: string | null | undefined;
                ud35_date?: string | null | undefined;
                ud36_date?: string | null | undefined;
                ud37_date?: string | null | undefined;
                ud38_date?: string | null | undefined;
                ud39_date?: string | null | undefined;
                ud40_date?: string | null | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            ud_flags?: {
                ud1_flg?: string | null | undefined;
                ud2_flg?: string | null | undefined;
                ud3_flg?: string | null | undefined;
                ud4_flg?: string | null | undefined;
                ud5_flg?: string | null | undefined;
                ud6_flg?: string | null | undefined;
                ud7_flg?: string | null | undefined;
                ud8_flg?: string | null | undefined;
                ud9_flg?: string | null | undefined;
                ud10_flg?: string | null | undefined;
            } | undefined;
            ud_codes?: {
                ud11_code?: string | null | undefined;
                ud12_code?: string | null | undefined;
                ud13_code?: string | null | undefined;
                ud14_code?: string | null | undefined;
                ud15_code?: string | null | undefined;
                ud16_code?: string | null | undefined;
                ud17_code?: string | null | undefined;
                ud18_code?: string | null | undefined;
                ud19_code?: string | null | undefined;
                ud20_code?: string | null | undefined;
            } | undefined;
            ud_text?: {
                ud21_text?: string | null | undefined;
                ud22_text?: string | null | undefined;
                ud23_text?: string | null | undefined;
                ud24_text?: string | null | undefined;
                ud25_text?: string | null | undefined;
                ud26_text?: string | null | undefined;
                ud27_text?: string | null | undefined;
                ud28_text?: string | null | undefined;
                ud29_text?: string | null | undefined;
                ud30_text?: string | null | undefined;
            } | undefined;
            ud_dates?: {
                ud31_date?: string | null | undefined;
                ud32_date?: string | null | undefined;
                ud33_date?: string | null | undefined;
                ud34_date?: string | null | undefined;
                ud35_date?: string | null | undefined;
                ud36_date?: string | null | undefined;
                ud37_date?: string | null | undefined;
                ud38_date?: string | null | undefined;
                ud39_date?: string | null | undefined;
                ud40_date?: string | null | undefined;
            } | undefined;
        }, {
            ud_flags?: {
                ud1_flg?: string | null | undefined;
                ud2_flg?: string | null | undefined;
                ud3_flg?: string | null | undefined;
                ud4_flg?: string | null | undefined;
                ud5_flg?: string | null | undefined;
                ud6_flg?: string | null | undefined;
                ud7_flg?: string | null | undefined;
                ud8_flg?: string | null | undefined;
                ud9_flg?: string | null | undefined;
                ud10_flg?: string | null | undefined;
            } | undefined;
            ud_codes?: {
                ud11_code?: string | null | undefined;
                ud12_code?: string | null | undefined;
                ud13_code?: string | null | undefined;
                ud14_code?: string | null | undefined;
                ud15_code?: string | null | undefined;
                ud16_code?: string | null | undefined;
                ud17_code?: string | null | undefined;
                ud18_code?: string | null | undefined;
                ud19_code?: string | null | undefined;
                ud20_code?: string | null | undefined;
            } | undefined;
            ud_text?: {
                ud21_text?: string | null | undefined;
                ud22_text?: string | null | undefined;
                ud23_text?: string | null | undefined;
                ud24_text?: string | null | undefined;
                ud25_text?: string | null | undefined;
                ud26_text?: string | null | undefined;
                ud27_text?: string | null | undefined;
                ud28_text?: string | null | undefined;
                ud29_text?: string | null | undefined;
                ud30_text?: string | null | undefined;
            } | undefined;
            ud_dates?: {
                ud31_date?: string | null | undefined;
                ud32_date?: string | null | undefined;
                ud33_date?: string | null | undefined;
                ud34_date?: string | null | undefined;
                ud35_date?: string | null | undefined;
                ud36_date?: string | null | undefined;
                ud37_date?: string | null | undefined;
                ud38_date?: string | null | undefined;
                ud39_date?: string | null | undefined;
                ud40_date?: string | null | undefined;
            } | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        ud_fields?: {
            ud_flags?: {
                ud1_flg?: string | null | undefined;
                ud2_flg?: string | null | undefined;
                ud3_flg?: string | null | undefined;
                ud4_flg?: string | null | undefined;
                ud5_flg?: string | null | undefined;
                ud6_flg?: string | null | undefined;
                ud7_flg?: string | null | undefined;
                ud8_flg?: string | null | undefined;
                ud9_flg?: string | null | undefined;
                ud10_flg?: string | null | undefined;
            } | undefined;
            ud_codes?: {
                ud11_code?: string | null | undefined;
                ud12_code?: string | null | undefined;
                ud13_code?: string | null | undefined;
                ud14_code?: string | null | undefined;
                ud15_code?: string | null | undefined;
                ud16_code?: string | null | undefined;
                ud17_code?: string | null | undefined;
                ud18_code?: string | null | undefined;
                ud19_code?: string | null | undefined;
                ud20_code?: string | null | undefined;
            } | undefined;
            ud_text?: {
                ud21_text?: string | null | undefined;
                ud22_text?: string | null | undefined;
                ud23_text?: string | null | undefined;
                ud24_text?: string | null | undefined;
                ud25_text?: string | null | undefined;
                ud26_text?: string | null | undefined;
                ud27_text?: string | null | undefined;
                ud28_text?: string | null | undefined;
                ud29_text?: string | null | undefined;
                ud30_text?: string | null | undefined;
            } | undefined;
            ud_dates?: {
                ud31_date?: string | null | undefined;
                ud32_date?: string | null | undefined;
                ud33_date?: string | null | undefined;
                ud34_date?: string | null | undefined;
                ud35_date?: string | null | undefined;
                ud36_date?: string | null | undefined;
                ud37_date?: string | null | undefined;
                ud38_date?: string | null | undefined;
                ud39_date?: string | null | undefined;
                ud40_date?: string | null | undefined;
            } | undefined;
        } | undefined;
    }, {
        ud_fields?: {
            ud_flags?: {
                ud1_flg?: string | null | undefined;
                ud2_flg?: string | null | undefined;
                ud3_flg?: string | null | undefined;
                ud4_flg?: string | null | undefined;
                ud5_flg?: string | null | undefined;
                ud6_flg?: string | null | undefined;
                ud7_flg?: string | null | undefined;
                ud8_flg?: string | null | undefined;
                ud9_flg?: string | null | undefined;
                ud10_flg?: string | null | undefined;
            } | undefined;
            ud_codes?: {
                ud11_code?: string | null | undefined;
                ud12_code?: string | null | undefined;
                ud13_code?: string | null | undefined;
                ud14_code?: string | null | undefined;
                ud15_code?: string | null | undefined;
                ud16_code?: string | null | undefined;
                ud17_code?: string | null | undefined;
                ud18_code?: string | null | undefined;
                ud19_code?: string | null | undefined;
                ud20_code?: string | null | undefined;
            } | undefined;
            ud_text?: {
                ud21_text?: string | null | undefined;
                ud22_text?: string | null | undefined;
                ud23_text?: string | null | undefined;
                ud24_text?: string | null | undefined;
                ud25_text?: string | null | undefined;
                ud26_text?: string | null | undefined;
                ud27_text?: string | null | undefined;
                ud28_text?: string | null | undefined;
                ud29_text?: string | null | undefined;
                ud30_text?: string | null | undefined;
            } | undefined;
            ud_dates?: {
                ud31_date?: string | null | undefined;
                ud32_date?: string | null | undefined;
                ud33_date?: string | null | undefined;
                ud34_date?: string | null | undefined;
                ud35_date?: string | null | undefined;
                ud36_date?: string | null | undefined;
                ud37_date?: string | null | undefined;
                ud38_date?: string | null | undefined;
                ud39_date?: string | null | undefined;
                ud40_date?: string | null | undefined;
            } | undefined;
        } | undefined;
    }>, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
    UDFlagResponse: z.ZodObject<{
        ud1_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud2_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud3_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud4_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud5_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud6_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud7_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud8_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud9_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud10_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        ud1_flg?: string | null | undefined;
        ud2_flg?: string | null | undefined;
        ud3_flg?: string | null | undefined;
        ud4_flg?: string | null | undefined;
        ud5_flg?: string | null | undefined;
        ud6_flg?: string | null | undefined;
        ud7_flg?: string | null | undefined;
        ud8_flg?: string | null | undefined;
        ud9_flg?: string | null | undefined;
        ud10_flg?: string | null | undefined;
    }, {
        ud1_flg?: string | null | undefined;
        ud2_flg?: string | null | undefined;
        ud3_flg?: string | null | undefined;
        ud4_flg?: string | null | undefined;
        ud5_flg?: string | null | undefined;
        ud6_flg?: string | null | undefined;
        ud7_flg?: string | null | undefined;
        ud8_flg?: string | null | undefined;
        ud9_flg?: string | null | undefined;
        ud10_flg?: string | null | undefined;
    }>;
    UDCodeResponse: z.ZodObject<{
        ud11_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud12_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud13_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud14_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud15_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud16_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud17_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud18_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud19_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud20_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        ud11_code?: string | null | undefined;
        ud12_code?: string | null | undefined;
        ud13_code?: string | null | undefined;
        ud14_code?: string | null | undefined;
        ud15_code?: string | null | undefined;
        ud16_code?: string | null | undefined;
        ud17_code?: string | null | undefined;
        ud18_code?: string | null | undefined;
        ud19_code?: string | null | undefined;
        ud20_code?: string | null | undefined;
    }, {
        ud11_code?: string | null | undefined;
        ud12_code?: string | null | undefined;
        ud13_code?: string | null | undefined;
        ud14_code?: string | null | undefined;
        ud15_code?: string | null | undefined;
        ud16_code?: string | null | undefined;
        ud17_code?: string | null | undefined;
        ud18_code?: string | null | undefined;
        ud19_code?: string | null | undefined;
        ud20_code?: string | null | undefined;
    }>;
    UDTextResponse: z.ZodObject<{
        ud21_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud22_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud23_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud24_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud25_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        ud21_text?: string | null | undefined;
        ud22_text?: string | null | undefined;
        ud23_text?: string | null | undefined;
        ud24_text?: string | null | undefined;
        ud25_text?: string | null | undefined;
    }, {
        ud21_text?: string | null | undefined;
        ud22_text?: string | null | undefined;
        ud23_text?: string | null | undefined;
        ud24_text?: string | null | undefined;
        ud25_text?: string | null | undefined;
    }>;
    UDFieldsResponse: z.ZodObject<{
        ud_flags: z.ZodOptional<z.ZodObject<{
            ud1_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud2_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud3_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud4_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud5_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud6_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud7_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud8_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud9_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud10_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            ud1_flg?: string | null | undefined;
            ud2_flg?: string | null | undefined;
            ud3_flg?: string | null | undefined;
            ud4_flg?: string | null | undefined;
            ud5_flg?: string | null | undefined;
            ud6_flg?: string | null | undefined;
            ud7_flg?: string | null | undefined;
            ud8_flg?: string | null | undefined;
            ud9_flg?: string | null | undefined;
            ud10_flg?: string | null | undefined;
        }, {
            ud1_flg?: string | null | undefined;
            ud2_flg?: string | null | undefined;
            ud3_flg?: string | null | undefined;
            ud4_flg?: string | null | undefined;
            ud5_flg?: string | null | undefined;
            ud6_flg?: string | null | undefined;
            ud7_flg?: string | null | undefined;
            ud8_flg?: string | null | undefined;
            ud9_flg?: string | null | undefined;
            ud10_flg?: string | null | undefined;
        }>>;
        ud_codes: z.ZodOptional<z.ZodObject<{
            ud11_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud12_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud13_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud14_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud15_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud16_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud17_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud18_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud19_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud20_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            ud11_code?: string | null | undefined;
            ud12_code?: string | null | undefined;
            ud13_code?: string | null | undefined;
            ud14_code?: string | null | undefined;
            ud15_code?: string | null | undefined;
            ud16_code?: string | null | undefined;
            ud17_code?: string | null | undefined;
            ud18_code?: string | null | undefined;
            ud19_code?: string | null | undefined;
            ud20_code?: string | null | undefined;
        }, {
            ud11_code?: string | null | undefined;
            ud12_code?: string | null | undefined;
            ud13_code?: string | null | undefined;
            ud14_code?: string | null | undefined;
            ud15_code?: string | null | undefined;
            ud16_code?: string | null | undefined;
            ud17_code?: string | null | undefined;
            ud18_code?: string | null | undefined;
            ud19_code?: string | null | undefined;
            ud20_code?: string | null | undefined;
        }>>;
        ud_text: z.ZodOptional<z.ZodObject<{
            ud21_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud22_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud23_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud24_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud25_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            ud21_text?: string | null | undefined;
            ud22_text?: string | null | undefined;
            ud23_text?: string | null | undefined;
            ud24_text?: string | null | undefined;
            ud25_text?: string | null | undefined;
        }, {
            ud21_text?: string | null | undefined;
            ud22_text?: string | null | undefined;
            ud23_text?: string | null | undefined;
            ud24_text?: string | null | undefined;
            ud25_text?: string | null | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        ud_flags?: {
            ud1_flg?: string | null | undefined;
            ud2_flg?: string | null | undefined;
            ud3_flg?: string | null | undefined;
            ud4_flg?: string | null | undefined;
            ud5_flg?: string | null | undefined;
            ud6_flg?: string | null | undefined;
            ud7_flg?: string | null | undefined;
            ud8_flg?: string | null | undefined;
            ud9_flg?: string | null | undefined;
            ud10_flg?: string | null | undefined;
        } | undefined;
        ud_codes?: {
            ud11_code?: string | null | undefined;
            ud12_code?: string | null | undefined;
            ud13_code?: string | null | undefined;
            ud14_code?: string | null | undefined;
            ud15_code?: string | null | undefined;
            ud16_code?: string | null | undefined;
            ud17_code?: string | null | undefined;
            ud18_code?: string | null | undefined;
            ud19_code?: string | null | undefined;
            ud20_code?: string | null | undefined;
        } | undefined;
        ud_text?: {
            ud21_text?: string | null | undefined;
            ud22_text?: string | null | undefined;
            ud23_text?: string | null | undefined;
            ud24_text?: string | null | undefined;
            ud25_text?: string | null | undefined;
        } | undefined;
    }, {
        ud_flags?: {
            ud1_flg?: string | null | undefined;
            ud2_flg?: string | null | undefined;
            ud3_flg?: string | null | undefined;
            ud4_flg?: string | null | undefined;
            ud5_flg?: string | null | undefined;
            ud6_flg?: string | null | undefined;
            ud7_flg?: string | null | undefined;
            ud8_flg?: string | null | undefined;
            ud9_flg?: string | null | undefined;
            ud10_flg?: string | null | undefined;
        } | undefined;
        ud_codes?: {
            ud11_code?: string | null | undefined;
            ud12_code?: string | null | undefined;
            ud13_code?: string | null | undefined;
            ud14_code?: string | null | undefined;
            ud15_code?: string | null | undefined;
            ud16_code?: string | null | undefined;
            ud17_code?: string | null | undefined;
            ud18_code?: string | null | undefined;
            ud19_code?: string | null | undefined;
            ud20_code?: string | null | undefined;
        } | undefined;
        ud_text?: {
            ud21_text?: string | null | undefined;
            ud22_text?: string | null | undefined;
            ud23_text?: string | null | undefined;
            ud24_text?: string | null | undefined;
            ud25_text?: string | null | undefined;
        } | undefined;
    }>;
    StudentUDFieldsResponse: z.ZodObject<{
        cmpy_code: z.ZodOptional<z.ZodString>;
        stud_code: z.ZodOptional<z.ZodString>;
        ud_fields: z.ZodOptional<z.ZodObject<{
            ud_flags: z.ZodOptional<z.ZodObject<{
                ud1_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud2_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud3_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud4_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud5_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud6_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud7_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud8_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud9_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud10_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                ud1_flg?: string | null | undefined;
                ud2_flg?: string | null | undefined;
                ud3_flg?: string | null | undefined;
                ud4_flg?: string | null | undefined;
                ud5_flg?: string | null | undefined;
                ud6_flg?: string | null | undefined;
                ud7_flg?: string | null | undefined;
                ud8_flg?: string | null | undefined;
                ud9_flg?: string | null | undefined;
                ud10_flg?: string | null | undefined;
            }, {
                ud1_flg?: string | null | undefined;
                ud2_flg?: string | null | undefined;
                ud3_flg?: string | null | undefined;
                ud4_flg?: string | null | undefined;
                ud5_flg?: string | null | undefined;
                ud6_flg?: string | null | undefined;
                ud7_flg?: string | null | undefined;
                ud8_flg?: string | null | undefined;
                ud9_flg?: string | null | undefined;
                ud10_flg?: string | null | undefined;
            }>>;
            ud_codes: z.ZodOptional<z.ZodObject<{
                ud11_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud12_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud13_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud14_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud15_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud16_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud17_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud18_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud19_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud20_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                ud11_code?: string | null | undefined;
                ud12_code?: string | null | undefined;
                ud13_code?: string | null | undefined;
                ud14_code?: string | null | undefined;
                ud15_code?: string | null | undefined;
                ud16_code?: string | null | undefined;
                ud17_code?: string | null | undefined;
                ud18_code?: string | null | undefined;
                ud19_code?: string | null | undefined;
                ud20_code?: string | null | undefined;
            }, {
                ud11_code?: string | null | undefined;
                ud12_code?: string | null | undefined;
                ud13_code?: string | null | undefined;
                ud14_code?: string | null | undefined;
                ud15_code?: string | null | undefined;
                ud16_code?: string | null | undefined;
                ud17_code?: string | null | undefined;
                ud18_code?: string | null | undefined;
                ud19_code?: string | null | undefined;
                ud20_code?: string | null | undefined;
            }>>;
            ud_text: z.ZodOptional<z.ZodObject<{
                ud21_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud22_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud23_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud24_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud25_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                ud21_text?: string | null | undefined;
                ud22_text?: string | null | undefined;
                ud23_text?: string | null | undefined;
                ud24_text?: string | null | undefined;
                ud25_text?: string | null | undefined;
            }, {
                ud21_text?: string | null | undefined;
                ud22_text?: string | null | undefined;
                ud23_text?: string | null | undefined;
                ud24_text?: string | null | undefined;
                ud25_text?: string | null | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            ud_flags?: {
                ud1_flg?: string | null | undefined;
                ud2_flg?: string | null | undefined;
                ud3_flg?: string | null | undefined;
                ud4_flg?: string | null | undefined;
                ud5_flg?: string | null | undefined;
                ud6_flg?: string | null | undefined;
                ud7_flg?: string | null | undefined;
                ud8_flg?: string | null | undefined;
                ud9_flg?: string | null | undefined;
                ud10_flg?: string | null | undefined;
            } | undefined;
            ud_codes?: {
                ud11_code?: string | null | undefined;
                ud12_code?: string | null | undefined;
                ud13_code?: string | null | undefined;
                ud14_code?: string | null | undefined;
                ud15_code?: string | null | undefined;
                ud16_code?: string | null | undefined;
                ud17_code?: string | null | undefined;
                ud18_code?: string | null | undefined;
                ud19_code?: string | null | undefined;
                ud20_code?: string | null | undefined;
            } | undefined;
            ud_text?: {
                ud21_text?: string | null | undefined;
                ud22_text?: string | null | undefined;
                ud23_text?: string | null | undefined;
                ud24_text?: string | null | undefined;
                ud25_text?: string | null | undefined;
            } | undefined;
        }, {
            ud_flags?: {
                ud1_flg?: string | null | undefined;
                ud2_flg?: string | null | undefined;
                ud3_flg?: string | null | undefined;
                ud4_flg?: string | null | undefined;
                ud5_flg?: string | null | undefined;
                ud6_flg?: string | null | undefined;
                ud7_flg?: string | null | undefined;
                ud8_flg?: string | null | undefined;
                ud9_flg?: string | null | undefined;
                ud10_flg?: string | null | undefined;
            } | undefined;
            ud_codes?: {
                ud11_code?: string | null | undefined;
                ud12_code?: string | null | undefined;
                ud13_code?: string | null | undefined;
                ud14_code?: string | null | undefined;
                ud15_code?: string | null | undefined;
                ud16_code?: string | null | undefined;
                ud17_code?: string | null | undefined;
                ud18_code?: string | null | undefined;
                ud19_code?: string | null | undefined;
                ud20_code?: string | null | undefined;
            } | undefined;
            ud_text?: {
                ud21_text?: string | null | undefined;
                ud22_text?: string | null | undefined;
                ud23_text?: string | null | undefined;
                ud24_text?: string | null | undefined;
                ud25_text?: string | null | undefined;
            } | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        cmpy_code?: string | undefined;
        stud_code?: string | undefined;
        ud_fields?: {
            ud_flags?: {
                ud1_flg?: string | null | undefined;
                ud2_flg?: string | null | undefined;
                ud3_flg?: string | null | undefined;
                ud4_flg?: string | null | undefined;
                ud5_flg?: string | null | undefined;
                ud6_flg?: string | null | undefined;
                ud7_flg?: string | null | undefined;
                ud8_flg?: string | null | undefined;
                ud9_flg?: string | null | undefined;
                ud10_flg?: string | null | undefined;
            } | undefined;
            ud_codes?: {
                ud11_code?: string | null | undefined;
                ud12_code?: string | null | undefined;
                ud13_code?: string | null | undefined;
                ud14_code?: string | null | undefined;
                ud15_code?: string | null | undefined;
                ud16_code?: string | null | undefined;
                ud17_code?: string | null | undefined;
                ud18_code?: string | null | undefined;
                ud19_code?: string | null | undefined;
                ud20_code?: string | null | undefined;
            } | undefined;
            ud_text?: {
                ud21_text?: string | null | undefined;
                ud22_text?: string | null | undefined;
                ud23_text?: string | null | undefined;
                ud24_text?: string | null | undefined;
                ud25_text?: string | null | undefined;
            } | undefined;
        } | undefined;
    }, {
        cmpy_code?: string | undefined;
        stud_code?: string | undefined;
        ud_fields?: {
            ud_flags?: {
                ud1_flg?: string | null | undefined;
                ud2_flg?: string | null | undefined;
                ud3_flg?: string | null | undefined;
                ud4_flg?: string | null | undefined;
                ud5_flg?: string | null | undefined;
                ud6_flg?: string | null | undefined;
                ud7_flg?: string | null | undefined;
                ud8_flg?: string | null | undefined;
                ud9_flg?: string | null | undefined;
                ud10_flg?: string | null | undefined;
            } | undefined;
            ud_codes?: {
                ud11_code?: string | null | undefined;
                ud12_code?: string | null | undefined;
                ud13_code?: string | null | undefined;
                ud14_code?: string | null | undefined;
                ud15_code?: string | null | undefined;
                ud16_code?: string | null | undefined;
                ud17_code?: string | null | undefined;
                ud18_code?: string | null | undefined;
                ud19_code?: string | null | undefined;
                ud20_code?: string | null | undefined;
            } | undefined;
            ud_text?: {
                ud21_text?: string | null | undefined;
                ud22_text?: string | null | undefined;
                ud23_text?: string | null | undefined;
                ud24_text?: string | null | undefined;
                ud25_text?: string | null | undefined;
            } | undefined;
        } | undefined;
    }>;
    UDFlagRequest: z.ZodObject<{
        ud1_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud2_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud3_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud4_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud5_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud6_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud7_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud8_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud9_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud10_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        ud1_flg?: string | null | undefined;
        ud2_flg?: string | null | undefined;
        ud3_flg?: string | null | undefined;
        ud4_flg?: string | null | undefined;
        ud5_flg?: string | null | undefined;
        ud6_flg?: string | null | undefined;
        ud7_flg?: string | null | undefined;
        ud8_flg?: string | null | undefined;
        ud9_flg?: string | null | undefined;
        ud10_flg?: string | null | undefined;
    }, {
        ud1_flg?: string | null | undefined;
        ud2_flg?: string | null | undefined;
        ud3_flg?: string | null | undefined;
        ud4_flg?: string | null | undefined;
        ud5_flg?: string | null | undefined;
        ud6_flg?: string | null | undefined;
        ud7_flg?: string | null | undefined;
        ud8_flg?: string | null | undefined;
        ud9_flg?: string | null | undefined;
        ud10_flg?: string | null | undefined;
    }>;
    UDCodeRequest: z.ZodObject<{
        ud11_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud12_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud13_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud14_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud15_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud16_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud17_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud18_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud19_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud20_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        ud11_code?: string | null | undefined;
        ud12_code?: string | null | undefined;
        ud13_code?: string | null | undefined;
        ud14_code?: string | null | undefined;
        ud15_code?: string | null | undefined;
        ud16_code?: string | null | undefined;
        ud17_code?: string | null | undefined;
        ud18_code?: string | null | undefined;
        ud19_code?: string | null | undefined;
        ud20_code?: string | null | undefined;
    }, {
        ud11_code?: string | null | undefined;
        ud12_code?: string | null | undefined;
        ud13_code?: string | null | undefined;
        ud14_code?: string | null | undefined;
        ud15_code?: string | null | undefined;
        ud16_code?: string | null | undefined;
        ud17_code?: string | null | undefined;
        ud18_code?: string | null | undefined;
        ud19_code?: string | null | undefined;
        ud20_code?: string | null | undefined;
    }>;
    UDTextRequest: z.ZodObject<{
        ud21_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud22_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud23_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud24_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud25_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        ud21_text?: string | null | undefined;
        ud22_text?: string | null | undefined;
        ud23_text?: string | null | undefined;
        ud24_text?: string | null | undefined;
        ud25_text?: string | null | undefined;
    }, {
        ud21_text?: string | null | undefined;
        ud22_text?: string | null | undefined;
        ud23_text?: string | null | undefined;
        ud24_text?: string | null | undefined;
        ud25_text?: string | null | undefined;
    }>;
    UDFieldsRequest: z.ZodObject<{
        ud_flags: z.ZodOptional<z.ZodObject<{
            ud1_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud2_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud3_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud4_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud5_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud6_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud7_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud8_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud9_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud10_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            ud1_flg?: string | null | undefined;
            ud2_flg?: string | null | undefined;
            ud3_flg?: string | null | undefined;
            ud4_flg?: string | null | undefined;
            ud5_flg?: string | null | undefined;
            ud6_flg?: string | null | undefined;
            ud7_flg?: string | null | undefined;
            ud8_flg?: string | null | undefined;
            ud9_flg?: string | null | undefined;
            ud10_flg?: string | null | undefined;
        }, {
            ud1_flg?: string | null | undefined;
            ud2_flg?: string | null | undefined;
            ud3_flg?: string | null | undefined;
            ud4_flg?: string | null | undefined;
            ud5_flg?: string | null | undefined;
            ud6_flg?: string | null | undefined;
            ud7_flg?: string | null | undefined;
            ud8_flg?: string | null | undefined;
            ud9_flg?: string | null | undefined;
            ud10_flg?: string | null | undefined;
        }>>;
        ud_codes: z.ZodOptional<z.ZodObject<{
            ud11_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud12_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud13_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud14_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud15_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud16_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud17_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud18_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud19_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud20_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            ud11_code?: string | null | undefined;
            ud12_code?: string | null | undefined;
            ud13_code?: string | null | undefined;
            ud14_code?: string | null | undefined;
            ud15_code?: string | null | undefined;
            ud16_code?: string | null | undefined;
            ud17_code?: string | null | undefined;
            ud18_code?: string | null | undefined;
            ud19_code?: string | null | undefined;
            ud20_code?: string | null | undefined;
        }, {
            ud11_code?: string | null | undefined;
            ud12_code?: string | null | undefined;
            ud13_code?: string | null | undefined;
            ud14_code?: string | null | undefined;
            ud15_code?: string | null | undefined;
            ud16_code?: string | null | undefined;
            ud17_code?: string | null | undefined;
            ud18_code?: string | null | undefined;
            ud19_code?: string | null | undefined;
            ud20_code?: string | null | undefined;
        }>>;
        ud_text: z.ZodOptional<z.ZodObject<{
            ud21_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud22_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud23_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud24_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud25_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            ud21_text?: string | null | undefined;
            ud22_text?: string | null | undefined;
            ud23_text?: string | null | undefined;
            ud24_text?: string | null | undefined;
            ud25_text?: string | null | undefined;
        }, {
            ud21_text?: string | null | undefined;
            ud22_text?: string | null | undefined;
            ud23_text?: string | null | undefined;
            ud24_text?: string | null | undefined;
            ud25_text?: string | null | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        ud_flags?: {
            ud1_flg?: string | null | undefined;
            ud2_flg?: string | null | undefined;
            ud3_flg?: string | null | undefined;
            ud4_flg?: string | null | undefined;
            ud5_flg?: string | null | undefined;
            ud6_flg?: string | null | undefined;
            ud7_flg?: string | null | undefined;
            ud8_flg?: string | null | undefined;
            ud9_flg?: string | null | undefined;
            ud10_flg?: string | null | undefined;
        } | undefined;
        ud_codes?: {
            ud11_code?: string | null | undefined;
            ud12_code?: string | null | undefined;
            ud13_code?: string | null | undefined;
            ud14_code?: string | null | undefined;
            ud15_code?: string | null | undefined;
            ud16_code?: string | null | undefined;
            ud17_code?: string | null | undefined;
            ud18_code?: string | null | undefined;
            ud19_code?: string | null | undefined;
            ud20_code?: string | null | undefined;
        } | undefined;
        ud_text?: {
            ud21_text?: string | null | undefined;
            ud22_text?: string | null | undefined;
            ud23_text?: string | null | undefined;
            ud24_text?: string | null | undefined;
            ud25_text?: string | null | undefined;
        } | undefined;
    }, {
        ud_flags?: {
            ud1_flg?: string | null | undefined;
            ud2_flg?: string | null | undefined;
            ud3_flg?: string | null | undefined;
            ud4_flg?: string | null | undefined;
            ud5_flg?: string | null | undefined;
            ud6_flg?: string | null | undefined;
            ud7_flg?: string | null | undefined;
            ud8_flg?: string | null | undefined;
            ud9_flg?: string | null | undefined;
            ud10_flg?: string | null | undefined;
        } | undefined;
        ud_codes?: {
            ud11_code?: string | null | undefined;
            ud12_code?: string | null | undefined;
            ud13_code?: string | null | undefined;
            ud14_code?: string | null | undefined;
            ud15_code?: string | null | undefined;
            ud16_code?: string | null | undefined;
            ud17_code?: string | null | undefined;
            ud18_code?: string | null | undefined;
            ud19_code?: string | null | undefined;
            ud20_code?: string | null | undefined;
        } | undefined;
        ud_text?: {
            ud21_text?: string | null | undefined;
            ud22_text?: string | null | undefined;
            ud23_text?: string | null | undefined;
            ud24_text?: string | null | undefined;
            ud25_text?: string | null | undefined;
        } | undefined;
    }>;
    UpdateStudentUDFieldsRequest: z.ZodObject<{
        ud_fields: z.ZodOptional<z.ZodObject<{
            ud_flags: z.ZodOptional<z.ZodObject<{
                ud1_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud2_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud3_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud4_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud5_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud6_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud7_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud8_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud9_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud10_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                ud1_flg?: string | null | undefined;
                ud2_flg?: string | null | undefined;
                ud3_flg?: string | null | undefined;
                ud4_flg?: string | null | undefined;
                ud5_flg?: string | null | undefined;
                ud6_flg?: string | null | undefined;
                ud7_flg?: string | null | undefined;
                ud8_flg?: string | null | undefined;
                ud9_flg?: string | null | undefined;
                ud10_flg?: string | null | undefined;
            }, {
                ud1_flg?: string | null | undefined;
                ud2_flg?: string | null | undefined;
                ud3_flg?: string | null | undefined;
                ud4_flg?: string | null | undefined;
                ud5_flg?: string | null | undefined;
                ud6_flg?: string | null | undefined;
                ud7_flg?: string | null | undefined;
                ud8_flg?: string | null | undefined;
                ud9_flg?: string | null | undefined;
                ud10_flg?: string | null | undefined;
            }>>;
            ud_codes: z.ZodOptional<z.ZodObject<{
                ud11_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud12_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud13_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud14_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud15_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud16_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud17_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud18_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud19_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud20_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                ud11_code?: string | null | undefined;
                ud12_code?: string | null | undefined;
                ud13_code?: string | null | undefined;
                ud14_code?: string | null | undefined;
                ud15_code?: string | null | undefined;
                ud16_code?: string | null | undefined;
                ud17_code?: string | null | undefined;
                ud18_code?: string | null | undefined;
                ud19_code?: string | null | undefined;
                ud20_code?: string | null | undefined;
            }, {
                ud11_code?: string | null | undefined;
                ud12_code?: string | null | undefined;
                ud13_code?: string | null | undefined;
                ud14_code?: string | null | undefined;
                ud15_code?: string | null | undefined;
                ud16_code?: string | null | undefined;
                ud17_code?: string | null | undefined;
                ud18_code?: string | null | undefined;
                ud19_code?: string | null | undefined;
                ud20_code?: string | null | undefined;
            }>>;
            ud_text: z.ZodOptional<z.ZodObject<{
                ud21_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud22_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud23_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud24_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud25_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                ud21_text?: string | null | undefined;
                ud22_text?: string | null | undefined;
                ud23_text?: string | null | undefined;
                ud24_text?: string | null | undefined;
                ud25_text?: string | null | undefined;
            }, {
                ud21_text?: string | null | undefined;
                ud22_text?: string | null | undefined;
                ud23_text?: string | null | undefined;
                ud24_text?: string | null | undefined;
                ud25_text?: string | null | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            ud_flags?: {
                ud1_flg?: string | null | undefined;
                ud2_flg?: string | null | undefined;
                ud3_flg?: string | null | undefined;
                ud4_flg?: string | null | undefined;
                ud5_flg?: string | null | undefined;
                ud6_flg?: string | null | undefined;
                ud7_flg?: string | null | undefined;
                ud8_flg?: string | null | undefined;
                ud9_flg?: string | null | undefined;
                ud10_flg?: string | null | undefined;
            } | undefined;
            ud_codes?: {
                ud11_code?: string | null | undefined;
                ud12_code?: string | null | undefined;
                ud13_code?: string | null | undefined;
                ud14_code?: string | null | undefined;
                ud15_code?: string | null | undefined;
                ud16_code?: string | null | undefined;
                ud17_code?: string | null | undefined;
                ud18_code?: string | null | undefined;
                ud19_code?: string | null | undefined;
                ud20_code?: string | null | undefined;
            } | undefined;
            ud_text?: {
                ud21_text?: string | null | undefined;
                ud22_text?: string | null | undefined;
                ud23_text?: string | null | undefined;
                ud24_text?: string | null | undefined;
                ud25_text?: string | null | undefined;
            } | undefined;
        }, {
            ud_flags?: {
                ud1_flg?: string | null | undefined;
                ud2_flg?: string | null | undefined;
                ud3_flg?: string | null | undefined;
                ud4_flg?: string | null | undefined;
                ud5_flg?: string | null | undefined;
                ud6_flg?: string | null | undefined;
                ud7_flg?: string | null | undefined;
                ud8_flg?: string | null | undefined;
                ud9_flg?: string | null | undefined;
                ud10_flg?: string | null | undefined;
            } | undefined;
            ud_codes?: {
                ud11_code?: string | null | undefined;
                ud12_code?: string | null | undefined;
                ud13_code?: string | null | undefined;
                ud14_code?: string | null | undefined;
                ud15_code?: string | null | undefined;
                ud16_code?: string | null | undefined;
                ud17_code?: string | null | undefined;
                ud18_code?: string | null | undefined;
                ud19_code?: string | null | undefined;
                ud20_code?: string | null | undefined;
            } | undefined;
            ud_text?: {
                ud21_text?: string | null | undefined;
                ud22_text?: string | null | undefined;
                ud23_text?: string | null | undefined;
                ud24_text?: string | null | undefined;
                ud25_text?: string | null | undefined;
            } | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        ud_fields?: {
            ud_flags?: {
                ud1_flg?: string | null | undefined;
                ud2_flg?: string | null | undefined;
                ud3_flg?: string | null | undefined;
                ud4_flg?: string | null | undefined;
                ud5_flg?: string | null | undefined;
                ud6_flg?: string | null | undefined;
                ud7_flg?: string | null | undefined;
                ud8_flg?: string | null | undefined;
                ud9_flg?: string | null | undefined;
                ud10_flg?: string | null | undefined;
            } | undefined;
            ud_codes?: {
                ud11_code?: string | null | undefined;
                ud12_code?: string | null | undefined;
                ud13_code?: string | null | undefined;
                ud14_code?: string | null | undefined;
                ud15_code?: string | null | undefined;
                ud16_code?: string | null | undefined;
                ud17_code?: string | null | undefined;
                ud18_code?: string | null | undefined;
                ud19_code?: string | null | undefined;
                ud20_code?: string | null | undefined;
            } | undefined;
            ud_text?: {
                ud21_text?: string | null | undefined;
                ud22_text?: string | null | undefined;
                ud23_text?: string | null | undefined;
                ud24_text?: string | null | undefined;
                ud25_text?: string | null | undefined;
            } | undefined;
        } | undefined;
    }, {
        ud_fields?: {
            ud_flags?: {
                ud1_flg?: string | null | undefined;
                ud2_flg?: string | null | undefined;
                ud3_flg?: string | null | undefined;
                ud4_flg?: string | null | undefined;
                ud5_flg?: string | null | undefined;
                ud6_flg?: string | null | undefined;
                ud7_flg?: string | null | undefined;
                ud8_flg?: string | null | undefined;
                ud9_flg?: string | null | undefined;
                ud10_flg?: string | null | undefined;
            } | undefined;
            ud_codes?: {
                ud11_code?: string | null | undefined;
                ud12_code?: string | null | undefined;
                ud13_code?: string | null | undefined;
                ud14_code?: string | null | undefined;
                ud15_code?: string | null | undefined;
                ud16_code?: string | null | undefined;
                ud17_code?: string | null | undefined;
                ud18_code?: string | null | undefined;
                ud19_code?: string | null | undefined;
                ud20_code?: string | null | undefined;
            } | undefined;
            ud_text?: {
                ud21_text?: string | null | undefined;
                ud22_text?: string | null | undefined;
                ud23_text?: string | null | undefined;
                ud24_text?: string | null | undefined;
                ud25_text?: string | null | undefined;
            } | undefined;
        } | undefined;
    }>;
    StudentUDFieldOptionDetails: z.ZodObject<{
        field_name: z.ZodOptional<z.ZodString>;
        field_desc: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        sort_order: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        field_name?: string | undefined;
        field_desc?: string | null | undefined;
        sort_order?: number | undefined;
    }, {
        field_name?: string | undefined;
        field_desc?: string | null | undefined;
        sort_order?: number | undefined;
    }>;
    StudentUDFieldOptionReferenceValue: z.ZodObject<{
        ud_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud_desc: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        sort_order: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        sort_order?: number | undefined;
        ud_code?: string | null | undefined;
        ud_desc?: string | null | undefined;
    }, {
        sort_order?: number | undefined;
        ud_code?: string | null | undefined;
        ud_desc?: string | null | undefined;
    }>;
    StudentUDCodeFieldOptionDetails: z.ZodIntersection<z.ZodObject<{
        field_name: z.ZodOptional<z.ZodString>;
        field_desc: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        sort_order: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        field_name?: string | undefined;
        field_desc?: string | null | undefined;
        sort_order?: number | undefined;
    }, {
        field_name?: string | undefined;
        field_desc?: string | null | undefined;
        sort_order?: number | undefined;
    }>, z.ZodObject<{
        reference_values: z.ZodOptional<z.ZodArray<z.ZodObject<{
            ud_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud_desc: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            sort_order: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            sort_order?: number | undefined;
            ud_code?: string | null | undefined;
            ud_desc?: string | null | undefined;
        }, {
            sort_order?: number | undefined;
            ud_code?: string | null | undefined;
            ud_desc?: string | null | undefined;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        reference_values?: {
            sort_order?: number | undefined;
            ud_code?: string | null | undefined;
            ud_desc?: string | null | undefined;
        }[] | undefined;
    }, {
        reference_values?: {
            sort_order?: number | undefined;
            ud_code?: string | null | undefined;
            ud_desc?: string | null | undefined;
        }[] | undefined;
    }>>;
    StudentUDFieldOptionTypes: z.ZodObject<{
        ud_flags: z.ZodOptional<z.ZodArray<z.ZodObject<{
            field_name: z.ZodOptional<z.ZodString>;
            field_desc: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            sort_order: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            field_name?: string | undefined;
            field_desc?: string | null | undefined;
            sort_order?: number | undefined;
        }, {
            field_name?: string | undefined;
            field_desc?: string | null | undefined;
            sort_order?: number | undefined;
        }>, "many">>;
        ud_codes: z.ZodOptional<z.ZodArray<z.ZodIntersection<z.ZodObject<{
            field_name: z.ZodOptional<z.ZodString>;
            field_desc: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            sort_order: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            field_name?: string | undefined;
            field_desc?: string | null | undefined;
            sort_order?: number | undefined;
        }, {
            field_name?: string | undefined;
            field_desc?: string | null | undefined;
            sort_order?: number | undefined;
        }>, z.ZodObject<{
            reference_values: z.ZodOptional<z.ZodArray<z.ZodObject<{
                ud_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud_desc: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                sort_order: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                sort_order?: number | undefined;
                ud_code?: string | null | undefined;
                ud_desc?: string | null | undefined;
            }, {
                sort_order?: number | undefined;
                ud_code?: string | null | undefined;
                ud_desc?: string | null | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            reference_values?: {
                sort_order?: number | undefined;
                ud_code?: string | null | undefined;
                ud_desc?: string | null | undefined;
            }[] | undefined;
        }, {
            reference_values?: {
                sort_order?: number | undefined;
                ud_code?: string | null | undefined;
                ud_desc?: string | null | undefined;
            }[] | undefined;
        }>>, "many">>;
        ud_text: z.ZodOptional<z.ZodArray<z.ZodObject<{
            field_name: z.ZodOptional<z.ZodString>;
            field_desc: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            sort_order: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            field_name?: string | undefined;
            field_desc?: string | null | undefined;
            sort_order?: number | undefined;
        }, {
            field_name?: string | undefined;
            field_desc?: string | null | undefined;
            sort_order?: number | undefined;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        ud_flags?: {
            field_name?: string | undefined;
            field_desc?: string | null | undefined;
            sort_order?: number | undefined;
        }[] | undefined;
        ud_codes?: ({
            field_name?: string | undefined;
            field_desc?: string | null | undefined;
            sort_order?: number | undefined;
        } & {
            reference_values?: {
                sort_order?: number | undefined;
                ud_code?: string | null | undefined;
                ud_desc?: string | null | undefined;
            }[] | undefined;
        })[] | undefined;
        ud_text?: {
            field_name?: string | undefined;
            field_desc?: string | null | undefined;
            sort_order?: number | undefined;
        }[] | undefined;
    }, {
        ud_flags?: {
            field_name?: string | undefined;
            field_desc?: string | null | undefined;
            sort_order?: number | undefined;
        }[] | undefined;
        ud_codes?: ({
            field_name?: string | undefined;
            field_desc?: string | null | undefined;
            sort_order?: number | undefined;
        } & {
            reference_values?: {
                sort_order?: number | undefined;
                ud_code?: string | null | undefined;
                ud_desc?: string | null | undefined;
            }[] | undefined;
        })[] | undefined;
        ud_text?: {
            field_name?: string | undefined;
            field_desc?: string | null | undefined;
            sort_order?: number | undefined;
        }[] | undefined;
    }>;
    StudentUDFieldOptionResponse: z.ZodObject<{
        ud_fields: z.ZodOptional<z.ZodObject<{
            ud_flags: z.ZodOptional<z.ZodArray<z.ZodObject<{
                field_name: z.ZodOptional<z.ZodString>;
                field_desc: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                sort_order: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                field_name?: string | undefined;
                field_desc?: string | null | undefined;
                sort_order?: number | undefined;
            }, {
                field_name?: string | undefined;
                field_desc?: string | null | undefined;
                sort_order?: number | undefined;
            }>, "many">>;
            ud_codes: z.ZodOptional<z.ZodArray<z.ZodIntersection<z.ZodObject<{
                field_name: z.ZodOptional<z.ZodString>;
                field_desc: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                sort_order: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                field_name?: string | undefined;
                field_desc?: string | null | undefined;
                sort_order?: number | undefined;
            }, {
                field_name?: string | undefined;
                field_desc?: string | null | undefined;
                sort_order?: number | undefined;
            }>, z.ZodObject<{
                reference_values: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    ud_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    ud_desc: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    sort_order: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    sort_order?: number | undefined;
                    ud_code?: string | null | undefined;
                    ud_desc?: string | null | undefined;
                }, {
                    sort_order?: number | undefined;
                    ud_code?: string | null | undefined;
                    ud_desc?: string | null | undefined;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                reference_values?: {
                    sort_order?: number | undefined;
                    ud_code?: string | null | undefined;
                    ud_desc?: string | null | undefined;
                }[] | undefined;
            }, {
                reference_values?: {
                    sort_order?: number | undefined;
                    ud_code?: string | null | undefined;
                    ud_desc?: string | null | undefined;
                }[] | undefined;
            }>>, "many">>;
            ud_text: z.ZodOptional<z.ZodArray<z.ZodObject<{
                field_name: z.ZodOptional<z.ZodString>;
                field_desc: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                sort_order: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                field_name?: string | undefined;
                field_desc?: string | null | undefined;
                sort_order?: number | undefined;
            }, {
                field_name?: string | undefined;
                field_desc?: string | null | undefined;
                sort_order?: number | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            ud_flags?: {
                field_name?: string | undefined;
                field_desc?: string | null | undefined;
                sort_order?: number | undefined;
            }[] | undefined;
            ud_codes?: ({
                field_name?: string | undefined;
                field_desc?: string | null | undefined;
                sort_order?: number | undefined;
            } & {
                reference_values?: {
                    sort_order?: number | undefined;
                    ud_code?: string | null | undefined;
                    ud_desc?: string | null | undefined;
                }[] | undefined;
            })[] | undefined;
            ud_text?: {
                field_name?: string | undefined;
                field_desc?: string | null | undefined;
                sort_order?: number | undefined;
            }[] | undefined;
        }, {
            ud_flags?: {
                field_name?: string | undefined;
                field_desc?: string | null | undefined;
                sort_order?: number | undefined;
            }[] | undefined;
            ud_codes?: ({
                field_name?: string | undefined;
                field_desc?: string | null | undefined;
                sort_order?: number | undefined;
            } & {
                reference_values?: {
                    sort_order?: number | undefined;
                    ud_code?: string | null | undefined;
                    ud_desc?: string | null | undefined;
                }[] | undefined;
            })[] | undefined;
            ud_text?: {
                field_name?: string | undefined;
                field_desc?: string | null | undefined;
                sort_order?: number | undefined;
            }[] | undefined;
        }>>;
        cmpy_code: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        cmpy_code?: string | undefined;
        ud_fields?: {
            ud_flags?: {
                field_name?: string | undefined;
                field_desc?: string | null | undefined;
                sort_order?: number | undefined;
            }[] | undefined;
            ud_codes?: ({
                field_name?: string | undefined;
                field_desc?: string | null | undefined;
                sort_order?: number | undefined;
            } & {
                reference_values?: {
                    sort_order?: number | undefined;
                    ud_code?: string | null | undefined;
                    ud_desc?: string | null | undefined;
                }[] | undefined;
            })[] | undefined;
            ud_text?: {
                field_name?: string | undefined;
                field_desc?: string | null | undefined;
                sort_order?: number | undefined;
            }[] | undefined;
        } | undefined;
    }, {
        cmpy_code?: string | undefined;
        ud_fields?: {
            ud_flags?: {
                field_name?: string | undefined;
                field_desc?: string | null | undefined;
                sort_order?: number | undefined;
            }[] | undefined;
            ud_codes?: ({
                field_name?: string | undefined;
                field_desc?: string | null | undefined;
                sort_order?: number | undefined;
            } & {
                reference_values?: {
                    sort_order?: number | undefined;
                    ud_code?: string | null | undefined;
                    ud_desc?: string | null | undefined;
                }[] | undefined;
            })[] | undefined;
            ud_text?: {
                field_name?: string | undefined;
                field_desc?: string | null | undefined;
                sort_order?: number | undefined;
            }[] | undefined;
        } | undefined;
    }>;
    EmployeeLeaveBalanceResponse: z.ZodObject<{
        acr_code: z.ZodOptional<z.ZodString>;
        cmpy_code: z.ZodOptional<z.ZodString>;
        emp_code: z.ZodOptional<z.ZodString>;
        ent_qty: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        lst_up_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        non_acr_day_qty: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        nts_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        rate_amt: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        str_ent_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        cmpy_code?: string | undefined;
        acr_code?: string | undefined;
        emp_code?: string | undefined;
        ent_qty?: number | null | undefined;
        lst_up_date?: string | null | undefined;
        non_acr_day_qty?: number | null | undefined;
        nts_code?: string | null | undefined;
        rate_amt?: number | null | undefined;
        str_ent_date?: string | null | undefined;
    }, {
        cmpy_code?: string | undefined;
        acr_code?: string | undefined;
        emp_code?: string | undefined;
        ent_qty?: number | null | undefined;
        lst_up_date?: string | null | undefined;
        non_acr_day_qty?: number | null | undefined;
        nts_code?: string | null | undefined;
        rate_amt?: number | null | undefined;
        str_ent_date?: string | null | undefined;
    }>;
    UsualSigns: z.ZodObject<{
        wheez_flg: z.ZodOptional<z.ZodBoolean>;
        tight_flg: z.ZodOptional<z.ZodBoolean>;
        cough_flg: z.ZodOptional<z.ZodBoolean>;
        breath_flg: z.ZodOptional<z.ZodBoolean>;
        speak_flg: z.ZodOptional<z.ZodBoolean>;
        comm_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        wheez_flg?: boolean | undefined;
        tight_flg?: boolean | undefined;
        cough_flg?: boolean | undefined;
        breath_flg?: boolean | undefined;
        speak_flg?: boolean | undefined;
        comm_text?: string | null | undefined;
    }, {
        wheez_flg?: boolean | undefined;
        tight_flg?: boolean | undefined;
        cough_flg?: boolean | undefined;
        breath_flg?: boolean | undefined;
        speak_flg?: boolean | undefined;
        comm_text?: string | null | undefined;
    }>;
    WorseningSigns: z.ZodObject<{
        wheez_flg: z.ZodOptional<z.ZodBoolean>;
        tight_flg: z.ZodOptional<z.ZodBoolean>;
        cough_flg: z.ZodOptional<z.ZodBoolean>;
        breath_flg: z.ZodOptional<z.ZodBoolean>;
        speak_flg: z.ZodOptional<z.ZodBoolean>;
        comm_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        wheez_flg?: boolean | undefined;
        tight_flg?: boolean | undefined;
        cough_flg?: boolean | undefined;
        breath_flg?: boolean | undefined;
        speak_flg?: boolean | undefined;
        comm_text?: string | null | undefined;
    }, {
        wheez_flg?: boolean | undefined;
        tight_flg?: boolean | undefined;
        cough_flg?: boolean | undefined;
        breath_flg?: boolean | undefined;
        speak_flg?: boolean | undefined;
        comm_text?: string | null | undefined;
    }>;
    Triggers: z.ZodObject<{
        exercise_flg: z.ZodOptional<z.ZodBoolean>;
        cold_virus_flg: z.ZodOptional<z.ZodBoolean>;
        pollen_flg: z.ZodOptional<z.ZodBoolean>;
        dust_flg: z.ZodOptional<z.ZodBoolean>;
        food_flg: z.ZodOptional<z.ZodBoolean>;
        food_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        comm_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        comm_text?: string | null | undefined;
        exercise_flg?: boolean | undefined;
        cold_virus_flg?: boolean | undefined;
        pollen_flg?: boolean | undefined;
        dust_flg?: boolean | undefined;
        food_flg?: boolean | undefined;
        food_text?: string | null | undefined;
    }, {
        comm_text?: string | null | undefined;
        exercise_flg?: boolean | undefined;
        cold_virus_flg?: boolean | undefined;
        pollen_flg?: boolean | undefined;
        dust_flg?: boolean | undefined;
        food_flg?: boolean | undefined;
        food_text?: string | null | undefined;
    }>;
    AsthmaManagementResponse: z.ZodObject<{
        cmpy_code: z.ZodOptional<z.ZodString>;
        stud_code: z.ZodOptional<z.ZodString>;
        usual_signs: z.ZodOptional<z.ZodObject<{
            wheez_flg: z.ZodOptional<z.ZodBoolean>;
            tight_flg: z.ZodOptional<z.ZodBoolean>;
            cough_flg: z.ZodOptional<z.ZodBoolean>;
            breath_flg: z.ZodOptional<z.ZodBoolean>;
            speak_flg: z.ZodOptional<z.ZodBoolean>;
            comm_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            wheez_flg?: boolean | undefined;
            tight_flg?: boolean | undefined;
            cough_flg?: boolean | undefined;
            breath_flg?: boolean | undefined;
            speak_flg?: boolean | undefined;
            comm_text?: string | null | undefined;
        }, {
            wheez_flg?: boolean | undefined;
            tight_flg?: boolean | undefined;
            cough_flg?: boolean | undefined;
            breath_flg?: boolean | undefined;
            speak_flg?: boolean | undefined;
            comm_text?: string | null | undefined;
        }>>;
        worsening_signs: z.ZodOptional<z.ZodObject<{
            wheez_flg: z.ZodOptional<z.ZodBoolean>;
            tight_flg: z.ZodOptional<z.ZodBoolean>;
            cough_flg: z.ZodOptional<z.ZodBoolean>;
            breath_flg: z.ZodOptional<z.ZodBoolean>;
            speak_flg: z.ZodOptional<z.ZodBoolean>;
            comm_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            wheez_flg?: boolean | undefined;
            tight_flg?: boolean | undefined;
            cough_flg?: boolean | undefined;
            breath_flg?: boolean | undefined;
            speak_flg?: boolean | undefined;
            comm_text?: string | null | undefined;
        }, {
            wheez_flg?: boolean | undefined;
            tight_flg?: boolean | undefined;
            cough_flg?: boolean | undefined;
            breath_flg?: boolean | undefined;
            speak_flg?: boolean | undefined;
            comm_text?: string | null | undefined;
        }>>;
        triggers: z.ZodOptional<z.ZodObject<{
            exercise_flg: z.ZodOptional<z.ZodBoolean>;
            cold_virus_flg: z.ZodOptional<z.ZodBoolean>;
            pollen_flg: z.ZodOptional<z.ZodBoolean>;
            dust_flg: z.ZodOptional<z.ZodBoolean>;
            food_flg: z.ZodOptional<z.ZodBoolean>;
            food_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            comm_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            comm_text?: string | null | undefined;
            exercise_flg?: boolean | undefined;
            cold_virus_flg?: boolean | undefined;
            pollen_flg?: boolean | undefined;
            dust_flg?: boolean | undefined;
            food_flg?: boolean | undefined;
            food_text?: string | null | undefined;
        }, {
            comm_text?: string | null | undefined;
            exercise_flg?: boolean | undefined;
            cold_virus_flg?: boolean | undefined;
            pollen_flg?: boolean | undefined;
            dust_flg?: boolean | undefined;
            food_flg?: boolean | undefined;
            food_text?: string | null | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        cmpy_code?: string | undefined;
        stud_code?: string | undefined;
        usual_signs?: {
            wheez_flg?: boolean | undefined;
            tight_flg?: boolean | undefined;
            cough_flg?: boolean | undefined;
            breath_flg?: boolean | undefined;
            speak_flg?: boolean | undefined;
            comm_text?: string | null | undefined;
        } | undefined;
        worsening_signs?: {
            wheez_flg?: boolean | undefined;
            tight_flg?: boolean | undefined;
            cough_flg?: boolean | undefined;
            breath_flg?: boolean | undefined;
            speak_flg?: boolean | undefined;
            comm_text?: string | null | undefined;
        } | undefined;
        triggers?: {
            comm_text?: string | null | undefined;
            exercise_flg?: boolean | undefined;
            cold_virus_flg?: boolean | undefined;
            pollen_flg?: boolean | undefined;
            dust_flg?: boolean | undefined;
            food_flg?: boolean | undefined;
            food_text?: string | null | undefined;
        } | undefined;
    }, {
        cmpy_code?: string | undefined;
        stud_code?: string | undefined;
        usual_signs?: {
            wheez_flg?: boolean | undefined;
            tight_flg?: boolean | undefined;
            cough_flg?: boolean | undefined;
            breath_flg?: boolean | undefined;
            speak_flg?: boolean | undefined;
            comm_text?: string | null | undefined;
        } | undefined;
        worsening_signs?: {
            wheez_flg?: boolean | undefined;
            tight_flg?: boolean | undefined;
            cough_flg?: boolean | undefined;
            breath_flg?: boolean | undefined;
            speak_flg?: boolean | undefined;
            comm_text?: string | null | undefined;
        } | undefined;
        triggers?: {
            comm_text?: string | null | undefined;
            exercise_flg?: boolean | undefined;
            cold_virus_flg?: boolean | undefined;
            pollen_flg?: boolean | undefined;
            dust_flg?: boolean | undefined;
            food_flg?: boolean | undefined;
            food_text?: string | null | undefined;
        } | undefined;
    }>;
    UsualSigns2: z.ZodObject<{
        wheez_flg: z.ZodOptional<z.ZodBoolean>;
        tight_flg: z.ZodOptional<z.ZodBoolean>;
        cough_flg: z.ZodOptional<z.ZodBoolean>;
        breath_flg: z.ZodOptional<z.ZodBoolean>;
        speak_flg: z.ZodOptional<z.ZodBoolean>;
        comm_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        wheez_flg?: boolean | undefined;
        tight_flg?: boolean | undefined;
        cough_flg?: boolean | undefined;
        breath_flg?: boolean | undefined;
        speak_flg?: boolean | undefined;
        comm_text?: string | null | undefined;
    }, {
        wheez_flg?: boolean | undefined;
        tight_flg?: boolean | undefined;
        cough_flg?: boolean | undefined;
        breath_flg?: boolean | undefined;
        speak_flg?: boolean | undefined;
        comm_text?: string | null | undefined;
    }>;
    WorseningSigns2: z.ZodObject<{
        wheez_flg: z.ZodOptional<z.ZodBoolean>;
        tight_flg: z.ZodOptional<z.ZodBoolean>;
        cough_flg: z.ZodOptional<z.ZodBoolean>;
        breath_flg: z.ZodOptional<z.ZodBoolean>;
        speak_flg: z.ZodOptional<z.ZodBoolean>;
        comm_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        wheez_flg?: boolean | undefined;
        tight_flg?: boolean | undefined;
        cough_flg?: boolean | undefined;
        breath_flg?: boolean | undefined;
        speak_flg?: boolean | undefined;
        comm_text?: string | null | undefined;
    }, {
        wheez_flg?: boolean | undefined;
        tight_flg?: boolean | undefined;
        cough_flg?: boolean | undefined;
        breath_flg?: boolean | undefined;
        speak_flg?: boolean | undefined;
        comm_text?: string | null | undefined;
    }>;
    Triggers2: z.ZodObject<{
        exercise_flg: z.ZodOptional<z.ZodBoolean>;
        cold_virus_flg: z.ZodOptional<z.ZodBoolean>;
        pollen_flg: z.ZodOptional<z.ZodBoolean>;
        dust_flg: z.ZodOptional<z.ZodBoolean>;
        food_flg: z.ZodOptional<z.ZodBoolean>;
        food_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        comm_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        comm_text?: string | null | undefined;
        exercise_flg?: boolean | undefined;
        cold_virus_flg?: boolean | undefined;
        pollen_flg?: boolean | undefined;
        dust_flg?: boolean | undefined;
        food_flg?: boolean | undefined;
        food_text?: string | null | undefined;
    }, {
        comm_text?: string | null | undefined;
        exercise_flg?: boolean | undefined;
        cold_virus_flg?: boolean | undefined;
        pollen_flg?: boolean | undefined;
        dust_flg?: boolean | undefined;
        food_flg?: boolean | undefined;
        food_text?: string | null | undefined;
    }>;
    UpdateAsthmaManagementRequest: z.ZodObject<{
        usual_signs: z.ZodOptional<z.ZodObject<{
            wheez_flg: z.ZodOptional<z.ZodBoolean>;
            tight_flg: z.ZodOptional<z.ZodBoolean>;
            cough_flg: z.ZodOptional<z.ZodBoolean>;
            breath_flg: z.ZodOptional<z.ZodBoolean>;
            speak_flg: z.ZodOptional<z.ZodBoolean>;
            comm_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            wheez_flg?: boolean | undefined;
            tight_flg?: boolean | undefined;
            cough_flg?: boolean | undefined;
            breath_flg?: boolean | undefined;
            speak_flg?: boolean | undefined;
            comm_text?: string | null | undefined;
        }, {
            wheez_flg?: boolean | undefined;
            tight_flg?: boolean | undefined;
            cough_flg?: boolean | undefined;
            breath_flg?: boolean | undefined;
            speak_flg?: boolean | undefined;
            comm_text?: string | null | undefined;
        }>>;
        worsening_signs: z.ZodOptional<z.ZodObject<{
            wheez_flg: z.ZodOptional<z.ZodBoolean>;
            tight_flg: z.ZodOptional<z.ZodBoolean>;
            cough_flg: z.ZodOptional<z.ZodBoolean>;
            breath_flg: z.ZodOptional<z.ZodBoolean>;
            speak_flg: z.ZodOptional<z.ZodBoolean>;
            comm_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            wheez_flg?: boolean | undefined;
            tight_flg?: boolean | undefined;
            cough_flg?: boolean | undefined;
            breath_flg?: boolean | undefined;
            speak_flg?: boolean | undefined;
            comm_text?: string | null | undefined;
        }, {
            wheez_flg?: boolean | undefined;
            tight_flg?: boolean | undefined;
            cough_flg?: boolean | undefined;
            breath_flg?: boolean | undefined;
            speak_flg?: boolean | undefined;
            comm_text?: string | null | undefined;
        }>>;
        triggers: z.ZodOptional<z.ZodObject<{
            exercise_flg: z.ZodOptional<z.ZodBoolean>;
            cold_virus_flg: z.ZodOptional<z.ZodBoolean>;
            pollen_flg: z.ZodOptional<z.ZodBoolean>;
            dust_flg: z.ZodOptional<z.ZodBoolean>;
            food_flg: z.ZodOptional<z.ZodBoolean>;
            food_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            comm_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            comm_text?: string | null | undefined;
            exercise_flg?: boolean | undefined;
            cold_virus_flg?: boolean | undefined;
            pollen_flg?: boolean | undefined;
            dust_flg?: boolean | undefined;
            food_flg?: boolean | undefined;
            food_text?: string | null | undefined;
        }, {
            comm_text?: string | null | undefined;
            exercise_flg?: boolean | undefined;
            cold_virus_flg?: boolean | undefined;
            pollen_flg?: boolean | undefined;
            dust_flg?: boolean | undefined;
            food_flg?: boolean | undefined;
            food_text?: string | null | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        usual_signs?: {
            wheez_flg?: boolean | undefined;
            tight_flg?: boolean | undefined;
            cough_flg?: boolean | undefined;
            breath_flg?: boolean | undefined;
            speak_flg?: boolean | undefined;
            comm_text?: string | null | undefined;
        } | undefined;
        worsening_signs?: {
            wheez_flg?: boolean | undefined;
            tight_flg?: boolean | undefined;
            cough_flg?: boolean | undefined;
            breath_flg?: boolean | undefined;
            speak_flg?: boolean | undefined;
            comm_text?: string | null | undefined;
        } | undefined;
        triggers?: {
            comm_text?: string | null | undefined;
            exercise_flg?: boolean | undefined;
            cold_virus_flg?: boolean | undefined;
            pollen_flg?: boolean | undefined;
            dust_flg?: boolean | undefined;
            food_flg?: boolean | undefined;
            food_text?: string | null | undefined;
        } | undefined;
    }, {
        usual_signs?: {
            wheez_flg?: boolean | undefined;
            tight_flg?: boolean | undefined;
            cough_flg?: boolean | undefined;
            breath_flg?: boolean | undefined;
            speak_flg?: boolean | undefined;
            comm_text?: string | null | undefined;
        } | undefined;
        worsening_signs?: {
            wheez_flg?: boolean | undefined;
            tight_flg?: boolean | undefined;
            cough_flg?: boolean | undefined;
            breath_flg?: boolean | undefined;
            speak_flg?: boolean | undefined;
            comm_text?: string | null | undefined;
        } | undefined;
        triggers?: {
            comm_text?: string | null | undefined;
            exercise_flg?: boolean | undefined;
            cold_virus_flg?: boolean | undefined;
            pollen_flg?: boolean | undefined;
            dust_flg?: boolean | undefined;
            food_flg?: boolean | undefined;
            food_text?: string | null | undefined;
        } | undefined;
    }>;
    UdText: z.ZodObject<{
        ud1_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud2_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud3_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud4_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud5_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud6_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud7_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud8_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud9_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud10_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        ud1_text?: string | null | undefined;
        ud2_text?: string | null | undefined;
        ud3_text?: string | null | undefined;
        ud4_text?: string | null | undefined;
        ud5_text?: string | null | undefined;
        ud6_text?: string | null | undefined;
        ud7_text?: string | null | undefined;
        ud8_text?: string | null | undefined;
        ud9_text?: string | null | undefined;
        ud10_text?: string | null | undefined;
    }, {
        ud1_text?: string | null | undefined;
        ud2_text?: string | null | undefined;
        ud3_text?: string | null | undefined;
        ud4_text?: string | null | undefined;
        ud5_text?: string | null | undefined;
        ud6_text?: string | null | undefined;
        ud7_text?: string | null | undefined;
        ud8_text?: string | null | undefined;
        ud9_text?: string | null | undefined;
        ud10_text?: string | null | undefined;
    }>;
    UdFields: z.ZodObject<{
        ud_text: z.ZodOptional<z.ZodObject<{
            ud1_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud2_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud3_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud4_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud5_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud6_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud7_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud8_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud9_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud10_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            ud1_text?: string | null | undefined;
            ud2_text?: string | null | undefined;
            ud3_text?: string | null | undefined;
            ud4_text?: string | null | undefined;
            ud5_text?: string | null | undefined;
            ud6_text?: string | null | undefined;
            ud7_text?: string | null | undefined;
            ud8_text?: string | null | undefined;
            ud9_text?: string | null | undefined;
            ud10_text?: string | null | undefined;
        }, {
            ud1_text?: string | null | undefined;
            ud2_text?: string | null | undefined;
            ud3_text?: string | null | undefined;
            ud4_text?: string | null | undefined;
            ud5_text?: string | null | undefined;
            ud6_text?: string | null | undefined;
            ud7_text?: string | null | undefined;
            ud8_text?: string | null | undefined;
            ud9_text?: string | null | undefined;
            ud10_text?: string | null | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        ud_text?: {
            ud1_text?: string | null | undefined;
            ud2_text?: string | null | undefined;
            ud3_text?: string | null | undefined;
            ud4_text?: string | null | undefined;
            ud5_text?: string | null | undefined;
            ud6_text?: string | null | undefined;
            ud7_text?: string | null | undefined;
            ud8_text?: string | null | undefined;
            ud9_text?: string | null | undefined;
            ud10_text?: string | null | undefined;
        } | undefined;
    }, {
        ud_text?: {
            ud1_text?: string | null | undefined;
            ud2_text?: string | null | undefined;
            ud3_text?: string | null | undefined;
            ud4_text?: string | null | undefined;
            ud5_text?: string | null | undefined;
            ud6_text?: string | null | undefined;
            ud7_text?: string | null | undefined;
            ud8_text?: string | null | undefined;
            ud9_text?: string | null | undefined;
            ud10_text?: string | null | undefined;
        } | undefined;
    }>;
    StudentMedicalConditionResponse: z.ZodObject<{
        cmpy_code: z.ZodOptional<z.ZodString>;
        last_occ_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        mcond_code: z.ZodOptional<z.ZodString>;
        severe_ind: z.ZodOptional<z.ZodBoolean>;
        stud_code: z.ZodOptional<z.ZodString>;
        treat_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        active_flg: z.ZodOptional<z.ZodBoolean>;
        ud_fields: z.ZodOptional<z.ZodObject<{
            ud_text: z.ZodOptional<z.ZodObject<{
                ud1_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud2_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud3_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud4_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud5_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud6_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud7_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud8_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud9_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud10_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                ud1_text?: string | null | undefined;
                ud2_text?: string | null | undefined;
                ud3_text?: string | null | undefined;
                ud4_text?: string | null | undefined;
                ud5_text?: string | null | undefined;
                ud6_text?: string | null | undefined;
                ud7_text?: string | null | undefined;
                ud8_text?: string | null | undefined;
                ud9_text?: string | null | undefined;
                ud10_text?: string | null | undefined;
            }, {
                ud1_text?: string | null | undefined;
                ud2_text?: string | null | undefined;
                ud3_text?: string | null | undefined;
                ud4_text?: string | null | undefined;
                ud5_text?: string | null | undefined;
                ud6_text?: string | null | undefined;
                ud7_text?: string | null | undefined;
                ud8_text?: string | null | undefined;
                ud9_text?: string | null | undefined;
                ud10_text?: string | null | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            ud_text?: {
                ud1_text?: string | null | undefined;
                ud2_text?: string | null | undefined;
                ud3_text?: string | null | undefined;
                ud4_text?: string | null | undefined;
                ud5_text?: string | null | undefined;
                ud6_text?: string | null | undefined;
                ud7_text?: string | null | undefined;
                ud8_text?: string | null | undefined;
                ud9_text?: string | null | undefined;
                ud10_text?: string | null | undefined;
            } | undefined;
        }, {
            ud_text?: {
                ud1_text?: string | null | undefined;
                ud2_text?: string | null | undefined;
                ud3_text?: string | null | undefined;
                ud4_text?: string | null | undefined;
                ud5_text?: string | null | undefined;
                ud6_text?: string | null | undefined;
                ud7_text?: string | null | undefined;
                ud8_text?: string | null | undefined;
                ud9_text?: string | null | undefined;
                ud10_text?: string | null | undefined;
            } | undefined;
        }>>;
        has_attachment: z.ZodOptional<z.ZodBoolean>;
        has_note: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        cmpy_code?: string | undefined;
        stud_code?: string | undefined;
        has_attachment?: boolean | undefined;
        ud_fields?: {
            ud_text?: {
                ud1_text?: string | null | undefined;
                ud2_text?: string | null | undefined;
                ud3_text?: string | null | undefined;
                ud4_text?: string | null | undefined;
                ud5_text?: string | null | undefined;
                ud6_text?: string | null | undefined;
                ud7_text?: string | null | undefined;
                ud8_text?: string | null | undefined;
                ud9_text?: string | null | undefined;
                ud10_text?: string | null | undefined;
            } | undefined;
        } | undefined;
        last_occ_date?: string | null | undefined;
        mcond_code?: string | undefined;
        severe_ind?: boolean | undefined;
        treat_text?: string | null | undefined;
        active_flg?: boolean | undefined;
        has_note?: boolean | undefined;
    }, {
        cmpy_code?: string | undefined;
        stud_code?: string | undefined;
        has_attachment?: boolean | undefined;
        ud_fields?: {
            ud_text?: {
                ud1_text?: string | null | undefined;
                ud2_text?: string | null | undefined;
                ud3_text?: string | null | undefined;
                ud4_text?: string | null | undefined;
                ud5_text?: string | null | undefined;
                ud6_text?: string | null | undefined;
                ud7_text?: string | null | undefined;
                ud8_text?: string | null | undefined;
                ud9_text?: string | null | undefined;
                ud10_text?: string | null | undefined;
            } | undefined;
        } | undefined;
        last_occ_date?: string | null | undefined;
        mcond_code?: string | undefined;
        severe_ind?: boolean | undefined;
        treat_text?: string | null | undefined;
        active_flg?: boolean | undefined;
        has_note?: boolean | undefined;
    }>;
    UdText2: z.ZodObject<{
        ud1_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud2_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud3_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud4_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud5_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud6_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud7_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud8_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud9_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud10_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        ud1_text?: string | null | undefined;
        ud2_text?: string | null | undefined;
        ud3_text?: string | null | undefined;
        ud4_text?: string | null | undefined;
        ud5_text?: string | null | undefined;
        ud6_text?: string | null | undefined;
        ud7_text?: string | null | undefined;
        ud8_text?: string | null | undefined;
        ud9_text?: string | null | undefined;
        ud10_text?: string | null | undefined;
    }, {
        ud1_text?: string | null | undefined;
        ud2_text?: string | null | undefined;
        ud3_text?: string | null | undefined;
        ud4_text?: string | null | undefined;
        ud5_text?: string | null | undefined;
        ud6_text?: string | null | undefined;
        ud7_text?: string | null | undefined;
        ud8_text?: string | null | undefined;
        ud9_text?: string | null | undefined;
        ud10_text?: string | null | undefined;
    }>;
    UdFields2: z.ZodObject<{
        ud_text: z.ZodOptional<z.ZodObject<{
            ud1_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud2_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud3_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud4_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud5_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud6_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud7_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud8_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud9_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud10_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            ud1_text?: string | null | undefined;
            ud2_text?: string | null | undefined;
            ud3_text?: string | null | undefined;
            ud4_text?: string | null | undefined;
            ud5_text?: string | null | undefined;
            ud6_text?: string | null | undefined;
            ud7_text?: string | null | undefined;
            ud8_text?: string | null | undefined;
            ud9_text?: string | null | undefined;
            ud10_text?: string | null | undefined;
        }, {
            ud1_text?: string | null | undefined;
            ud2_text?: string | null | undefined;
            ud3_text?: string | null | undefined;
            ud4_text?: string | null | undefined;
            ud5_text?: string | null | undefined;
            ud6_text?: string | null | undefined;
            ud7_text?: string | null | undefined;
            ud8_text?: string | null | undefined;
            ud9_text?: string | null | undefined;
            ud10_text?: string | null | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        ud_text?: {
            ud1_text?: string | null | undefined;
            ud2_text?: string | null | undefined;
            ud3_text?: string | null | undefined;
            ud4_text?: string | null | undefined;
            ud5_text?: string | null | undefined;
            ud6_text?: string | null | undefined;
            ud7_text?: string | null | undefined;
            ud8_text?: string | null | undefined;
            ud9_text?: string | null | undefined;
            ud10_text?: string | null | undefined;
        } | undefined;
    }, {
        ud_text?: {
            ud1_text?: string | null | undefined;
            ud2_text?: string | null | undefined;
            ud3_text?: string | null | undefined;
            ud4_text?: string | null | undefined;
            ud5_text?: string | null | undefined;
            ud6_text?: string | null | undefined;
            ud7_text?: string | null | undefined;
            ud8_text?: string | null | undefined;
            ud9_text?: string | null | undefined;
            ud10_text?: string | null | undefined;
        } | undefined;
    }>;
    AddStudentMedicalConditionRequest: z.ZodObject<{
        last_occ_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        mcond_code: z.ZodOptional<z.ZodString>;
        severe_ind: z.ZodOptional<z.ZodBoolean>;
        treat_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        active_flg: z.ZodOptional<z.ZodBoolean>;
        ud_fields: z.ZodOptional<z.ZodObject<{
            ud_text: z.ZodOptional<z.ZodObject<{
                ud1_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud2_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud3_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud4_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud5_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud6_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud7_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud8_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud9_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud10_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                ud1_text?: string | null | undefined;
                ud2_text?: string | null | undefined;
                ud3_text?: string | null | undefined;
                ud4_text?: string | null | undefined;
                ud5_text?: string | null | undefined;
                ud6_text?: string | null | undefined;
                ud7_text?: string | null | undefined;
                ud8_text?: string | null | undefined;
                ud9_text?: string | null | undefined;
                ud10_text?: string | null | undefined;
            }, {
                ud1_text?: string | null | undefined;
                ud2_text?: string | null | undefined;
                ud3_text?: string | null | undefined;
                ud4_text?: string | null | undefined;
                ud5_text?: string | null | undefined;
                ud6_text?: string | null | undefined;
                ud7_text?: string | null | undefined;
                ud8_text?: string | null | undefined;
                ud9_text?: string | null | undefined;
                ud10_text?: string | null | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            ud_text?: {
                ud1_text?: string | null | undefined;
                ud2_text?: string | null | undefined;
                ud3_text?: string | null | undefined;
                ud4_text?: string | null | undefined;
                ud5_text?: string | null | undefined;
                ud6_text?: string | null | undefined;
                ud7_text?: string | null | undefined;
                ud8_text?: string | null | undefined;
                ud9_text?: string | null | undefined;
                ud10_text?: string | null | undefined;
            } | undefined;
        }, {
            ud_text?: {
                ud1_text?: string | null | undefined;
                ud2_text?: string | null | undefined;
                ud3_text?: string | null | undefined;
                ud4_text?: string | null | undefined;
                ud5_text?: string | null | undefined;
                ud6_text?: string | null | undefined;
                ud7_text?: string | null | undefined;
                ud8_text?: string | null | undefined;
                ud9_text?: string | null | undefined;
                ud10_text?: string | null | undefined;
            } | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        ud_fields?: {
            ud_text?: {
                ud1_text?: string | null | undefined;
                ud2_text?: string | null | undefined;
                ud3_text?: string | null | undefined;
                ud4_text?: string | null | undefined;
                ud5_text?: string | null | undefined;
                ud6_text?: string | null | undefined;
                ud7_text?: string | null | undefined;
                ud8_text?: string | null | undefined;
                ud9_text?: string | null | undefined;
                ud10_text?: string | null | undefined;
            } | undefined;
        } | undefined;
        last_occ_date?: string | null | undefined;
        mcond_code?: string | undefined;
        severe_ind?: boolean | undefined;
        treat_text?: string | null | undefined;
        active_flg?: boolean | undefined;
    }, {
        ud_fields?: {
            ud_text?: {
                ud1_text?: string | null | undefined;
                ud2_text?: string | null | undefined;
                ud3_text?: string | null | undefined;
                ud4_text?: string | null | undefined;
                ud5_text?: string | null | undefined;
                ud6_text?: string | null | undefined;
                ud7_text?: string | null | undefined;
                ud8_text?: string | null | undefined;
                ud9_text?: string | null | undefined;
                ud10_text?: string | null | undefined;
            } | undefined;
        } | undefined;
        last_occ_date?: string | null | undefined;
        mcond_code?: string | undefined;
        severe_ind?: boolean | undefined;
        treat_text?: string | null | undefined;
        active_flg?: boolean | undefined;
    }>;
    UdText3: z.ZodObject<{
        ud1_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud2_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud3_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud4_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud5_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud6_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud7_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud8_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud9_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud10_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        ud1_text?: string | null | undefined;
        ud2_text?: string | null | undefined;
        ud3_text?: string | null | undefined;
        ud4_text?: string | null | undefined;
        ud5_text?: string | null | undefined;
        ud6_text?: string | null | undefined;
        ud7_text?: string | null | undefined;
        ud8_text?: string | null | undefined;
        ud9_text?: string | null | undefined;
        ud10_text?: string | null | undefined;
    }, {
        ud1_text?: string | null | undefined;
        ud2_text?: string | null | undefined;
        ud3_text?: string | null | undefined;
        ud4_text?: string | null | undefined;
        ud5_text?: string | null | undefined;
        ud6_text?: string | null | undefined;
        ud7_text?: string | null | undefined;
        ud8_text?: string | null | undefined;
        ud9_text?: string | null | undefined;
        ud10_text?: string | null | undefined;
    }>;
    UdFields3: z.ZodObject<{
        ud_text: z.ZodOptional<z.ZodObject<{
            ud1_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud2_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud3_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud4_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud5_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud6_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud7_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud8_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud9_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud10_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            ud1_text?: string | null | undefined;
            ud2_text?: string | null | undefined;
            ud3_text?: string | null | undefined;
            ud4_text?: string | null | undefined;
            ud5_text?: string | null | undefined;
            ud6_text?: string | null | undefined;
            ud7_text?: string | null | undefined;
            ud8_text?: string | null | undefined;
            ud9_text?: string | null | undefined;
            ud10_text?: string | null | undefined;
        }, {
            ud1_text?: string | null | undefined;
            ud2_text?: string | null | undefined;
            ud3_text?: string | null | undefined;
            ud4_text?: string | null | undefined;
            ud5_text?: string | null | undefined;
            ud6_text?: string | null | undefined;
            ud7_text?: string | null | undefined;
            ud8_text?: string | null | undefined;
            ud9_text?: string | null | undefined;
            ud10_text?: string | null | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        ud_text?: {
            ud1_text?: string | null | undefined;
            ud2_text?: string | null | undefined;
            ud3_text?: string | null | undefined;
            ud4_text?: string | null | undefined;
            ud5_text?: string | null | undefined;
            ud6_text?: string | null | undefined;
            ud7_text?: string | null | undefined;
            ud8_text?: string | null | undefined;
            ud9_text?: string | null | undefined;
            ud10_text?: string | null | undefined;
        } | undefined;
    }, {
        ud_text?: {
            ud1_text?: string | null | undefined;
            ud2_text?: string | null | undefined;
            ud3_text?: string | null | undefined;
            ud4_text?: string | null | undefined;
            ud5_text?: string | null | undefined;
            ud6_text?: string | null | undefined;
            ud7_text?: string | null | undefined;
            ud8_text?: string | null | undefined;
            ud9_text?: string | null | undefined;
            ud10_text?: string | null | undefined;
        } | undefined;
    }>;
    UpdateStudentMedicalConditionRequest: z.ZodObject<{
        last_occ_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        severe_ind: z.ZodOptional<z.ZodBoolean>;
        treat_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        active_flg: z.ZodOptional<z.ZodBoolean>;
        ud_fields: z.ZodOptional<z.ZodObject<{
            ud_text: z.ZodOptional<z.ZodObject<{
                ud1_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud2_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud3_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud4_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud5_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud6_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud7_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud8_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud9_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud10_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                ud1_text?: string | null | undefined;
                ud2_text?: string | null | undefined;
                ud3_text?: string | null | undefined;
                ud4_text?: string | null | undefined;
                ud5_text?: string | null | undefined;
                ud6_text?: string | null | undefined;
                ud7_text?: string | null | undefined;
                ud8_text?: string | null | undefined;
                ud9_text?: string | null | undefined;
                ud10_text?: string | null | undefined;
            }, {
                ud1_text?: string | null | undefined;
                ud2_text?: string | null | undefined;
                ud3_text?: string | null | undefined;
                ud4_text?: string | null | undefined;
                ud5_text?: string | null | undefined;
                ud6_text?: string | null | undefined;
                ud7_text?: string | null | undefined;
                ud8_text?: string | null | undefined;
                ud9_text?: string | null | undefined;
                ud10_text?: string | null | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            ud_text?: {
                ud1_text?: string | null | undefined;
                ud2_text?: string | null | undefined;
                ud3_text?: string | null | undefined;
                ud4_text?: string | null | undefined;
                ud5_text?: string | null | undefined;
                ud6_text?: string | null | undefined;
                ud7_text?: string | null | undefined;
                ud8_text?: string | null | undefined;
                ud9_text?: string | null | undefined;
                ud10_text?: string | null | undefined;
            } | undefined;
        }, {
            ud_text?: {
                ud1_text?: string | null | undefined;
                ud2_text?: string | null | undefined;
                ud3_text?: string | null | undefined;
                ud4_text?: string | null | undefined;
                ud5_text?: string | null | undefined;
                ud6_text?: string | null | undefined;
                ud7_text?: string | null | undefined;
                ud8_text?: string | null | undefined;
                ud9_text?: string | null | undefined;
                ud10_text?: string | null | undefined;
            } | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        ud_fields?: {
            ud_text?: {
                ud1_text?: string | null | undefined;
                ud2_text?: string | null | undefined;
                ud3_text?: string | null | undefined;
                ud4_text?: string | null | undefined;
                ud5_text?: string | null | undefined;
                ud6_text?: string | null | undefined;
                ud7_text?: string | null | undefined;
                ud8_text?: string | null | undefined;
                ud9_text?: string | null | undefined;
                ud10_text?: string | null | undefined;
            } | undefined;
        } | undefined;
        last_occ_date?: string | null | undefined;
        severe_ind?: boolean | undefined;
        treat_text?: string | null | undefined;
        active_flg?: boolean | undefined;
    }, {
        ud_fields?: {
            ud_text?: {
                ud1_text?: string | null | undefined;
                ud2_text?: string | null | undefined;
                ud3_text?: string | null | undefined;
                ud4_text?: string | null | undefined;
                ud5_text?: string | null | undefined;
                ud6_text?: string | null | undefined;
                ud7_text?: string | null | undefined;
                ud8_text?: string | null | undefined;
                ud9_text?: string | null | undefined;
                ud10_text?: string | null | undefined;
            } | undefined;
        } | undefined;
        last_occ_date?: string | null | undefined;
        severe_ind?: boolean | undefined;
        treat_text?: string | null | undefined;
        active_flg?: boolean | undefined;
    }>;
    StudentMedicalConditionNoteResponse: z.ZodObject<{
        cmpy_code: z.ZodOptional<z.ZodString>;
        stud_code: z.ZodOptional<z.ZodString>;
        mcond_code: z.ZodOptional<z.ZodString>;
        note_date: z.ZodOptional<z.ZodString>;
        note_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        note_uid: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        cmpy_code?: string | undefined;
        stud_code?: string | undefined;
        note_text?: string | null | undefined;
        note_date?: string | undefined;
        note_uid?: string | undefined;
        mcond_code?: string | undefined;
    }, {
        cmpy_code?: string | undefined;
        stud_code?: string | undefined;
        note_text?: string | null | undefined;
        note_date?: string | undefined;
        note_uid?: string | undefined;
        mcond_code?: string | undefined;
    }>;
    AddStudentMedicalConditionNoteRequest: z.ZodObject<{
        note_date: z.ZodString;
        note_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        note_date: string;
        note_text?: string | null | undefined;
    }, {
        note_date: string;
        note_text?: string | null | undefined;
    }>;
    UpdateStudentMedicalConditionNoteRequest: z.ZodObject<{
        note_date: z.ZodString;
        note_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        note_date: string;
        note_text?: string | null | undefined;
    }, {
        note_date: string;
        note_text?: string | null | undefined;
    }>;
    StudentImmunisationResponse: z.ZodObject<{
        cmpy_code: z.ZodOptional<z.ZodString>;
        imm_code: z.ZodOptional<z.ZodString>;
        imm_year: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        stud_code: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        cmpy_code?: string | undefined;
        stud_code?: string | undefined;
        imm_code?: string | undefined;
        imm_year?: number | null | undefined;
    }, {
        cmpy_code?: string | undefined;
        stud_code?: string | undefined;
        imm_code?: string | undefined;
        imm_year?: number | null | undefined;
    }>;
    AddStudentImmunisationRequest: z.ZodObject<{
        imm_code: z.ZodString;
        imm_year: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        imm_code: string;
        imm_year: number;
    }, {
        imm_code: string;
        imm_year: number;
    }>;
    UpdateStudentImmunisationRequest: z.ZodObject<{
        imm_year: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        imm_year: number;
    }, {
        imm_year: number;
    }>;
    StudentImmunisationRegisterResponse: z.ZodObject<{
        cmpy_code: z.ZodOptional<z.ZodString>;
        air_state_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        next_due_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        stud_code: z.ZodOptional<z.ZodString>;
        status_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        has_attachment: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        cmpy_code?: string | undefined;
        stud_code?: string | undefined;
        has_attachment?: boolean | undefined;
        air_state_date?: string | null | undefined;
        next_due_date?: string | null | undefined;
        status_code?: string | null | undefined;
    }, {
        cmpy_code?: string | undefined;
        stud_code?: string | undefined;
        has_attachment?: boolean | undefined;
        air_state_date?: string | null | undefined;
        next_due_date?: string | null | undefined;
        status_code?: string | null | undefined;
    }>;
    UpdateStudentImmunisationRegisterRequest: z.ZodObject<{
        next_due_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        status_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        next_due_date?: string | null | undefined;
        status_code?: string | null | undefined;
    }, {
        next_due_date?: string | null | undefined;
        status_code?: string | null | undefined;
    }>;
    Immunisations_AddStudentImmunisationRegisterAttachment_Body: z.ZodObject<{
        air_state_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        file_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        file_content: z.ZodOptional<z.ZodNullable<z.ZodType<File, z.ZodTypeDef, File>>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        air_state_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        file_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        file_content: z.ZodOptional<z.ZodNullable<z.ZodType<File, z.ZodTypeDef, File>>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        air_state_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        file_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        file_content: z.ZodOptional<z.ZodNullable<z.ZodType<File, z.ZodTypeDef, File>>>;
    }, z.ZodTypeAny, "passthrough">>;
    StudentMedicationResponse: z.ZodObject<{
        active_flg: z.ZodOptional<z.ZodBoolean>;
        administer: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        cmpy_code: z.ZodOptional<z.ZodString>;
        doc_phone: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        end_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        expiry_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        mcond_code: z.ZodOptional<z.ZodString>;
        med_detl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        med_meth: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        med_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        medication_uid: z.ZodOptional<z.ZodString>;
        min_time_between_doses: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        script_doc: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        start_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        stud_code: z.ZodOptional<z.ZodString>;
        training: z.ZodOptional<z.ZodBoolean>;
        has_attachment: z.ZodOptional<z.ZodBoolean>;
        has_note: z.ZodOptional<z.ZodBoolean>;
        has_schedule: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        cmpy_code?: string | undefined;
        stud_code?: string | undefined;
        has_attachment?: boolean | undefined;
        mcond_code?: string | undefined;
        active_flg?: boolean | undefined;
        has_note?: boolean | undefined;
        administer?: string | null | undefined;
        doc_phone?: string | null | undefined;
        end_date?: string | null | undefined;
        expiry_date?: string | null | undefined;
        med_detl?: string | null | undefined;
        med_meth?: string | null | undefined;
        med_text?: string | null | undefined;
        medication_uid?: string | undefined;
        min_time_between_doses?: number | null | undefined;
        script_doc?: string | null | undefined;
        start_date?: string | null | undefined;
        training?: boolean | undefined;
        has_schedule?: boolean | undefined;
    }, {
        cmpy_code?: string | undefined;
        stud_code?: string | undefined;
        has_attachment?: boolean | undefined;
        mcond_code?: string | undefined;
        active_flg?: boolean | undefined;
        has_note?: boolean | undefined;
        administer?: string | null | undefined;
        doc_phone?: string | null | undefined;
        end_date?: string | null | undefined;
        expiry_date?: string | null | undefined;
        med_detl?: string | null | undefined;
        med_meth?: string | null | undefined;
        med_text?: string | null | undefined;
        medication_uid?: string | undefined;
        min_time_between_doses?: number | null | undefined;
        script_doc?: string | null | undefined;
        start_date?: string | null | undefined;
        training?: boolean | undefined;
        has_schedule?: boolean | undefined;
    }>;
    AddStudentMedicationRequest: z.ZodObject<{
        active_flg: z.ZodOptional<z.ZodBoolean>;
        administer: z.ZodOptional<z.ZodString>;
        doc_phone: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        end_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        expiry_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        med_detl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        med_meth: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        med_text: z.ZodOptional<z.ZodString>;
        min_time_between_doses: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        script_doc: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        start_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        training: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        active_flg?: boolean | undefined;
        administer?: string | undefined;
        doc_phone?: string | null | undefined;
        end_date?: string | null | undefined;
        expiry_date?: string | null | undefined;
        med_detl?: string | null | undefined;
        med_meth?: string | null | undefined;
        med_text?: string | undefined;
        min_time_between_doses?: number | null | undefined;
        script_doc?: string | null | undefined;
        start_date?: string | null | undefined;
        training?: boolean | undefined;
    }, {
        active_flg?: boolean | undefined;
        administer?: string | undefined;
        doc_phone?: string | null | undefined;
        end_date?: string | null | undefined;
        expiry_date?: string | null | undefined;
        med_detl?: string | null | undefined;
        med_meth?: string | null | undefined;
        med_text?: string | undefined;
        min_time_between_doses?: number | null | undefined;
        script_doc?: string | null | undefined;
        start_date?: string | null | undefined;
        training?: boolean | undefined;
    }>;
    UpdateStudentMedicationRequest: z.ZodObject<{
        active_flg: z.ZodOptional<z.ZodBoolean>;
        administer: z.ZodOptional<z.ZodString>;
        doc_phone: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        end_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        expiry_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        med_detl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        med_meth: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        med_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        medication_uid: z.ZodOptional<z.ZodString>;
        script_doc: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        start_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        stud_code: z.ZodOptional<z.ZodString>;
        training: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        stud_code?: string | undefined;
        active_flg?: boolean | undefined;
        administer?: string | undefined;
        doc_phone?: string | null | undefined;
        end_date?: string | null | undefined;
        expiry_date?: string | null | undefined;
        med_detl?: string | null | undefined;
        med_meth?: string | null | undefined;
        med_text?: string | null | undefined;
        medication_uid?: string | undefined;
        script_doc?: string | null | undefined;
        start_date?: string | null | undefined;
        training?: boolean | undefined;
    }, {
        stud_code?: string | undefined;
        active_flg?: boolean | undefined;
        administer?: string | undefined;
        doc_phone?: string | null | undefined;
        end_date?: string | null | undefined;
        expiry_date?: string | null | undefined;
        med_detl?: string | null | undefined;
        med_meth?: string | null | undefined;
        med_text?: string | null | undefined;
        medication_uid?: string | undefined;
        script_doc?: string | null | undefined;
        start_date?: string | null | undefined;
        training?: boolean | undefined;
    }>;
    StudentMedicationNoteResponse: z.ZodObject<{
        cmpy_code: z.ZodOptional<z.ZodString>;
        stud_code: z.ZodOptional<z.ZodString>;
        mcond_code: z.ZodOptional<z.ZodString>;
        medication_uid: z.ZodOptional<z.ZodString>;
        note_date: z.ZodOptional<z.ZodString>;
        note_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        note_uid: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        cmpy_code?: string | undefined;
        stud_code?: string | undefined;
        note_text?: string | null | undefined;
        note_date?: string | undefined;
        note_uid?: string | undefined;
        mcond_code?: string | undefined;
        medication_uid?: string | undefined;
    }, {
        cmpy_code?: string | undefined;
        stud_code?: string | undefined;
        note_text?: string | null | undefined;
        note_date?: string | undefined;
        note_uid?: string | undefined;
        mcond_code?: string | undefined;
        medication_uid?: string | undefined;
    }>;
    AddStudentMedicationNoteRequest: z.ZodObject<{
        note_date: z.ZodOptional<z.ZodString>;
        note_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        note_text?: string | null | undefined;
        note_date?: string | undefined;
    }, {
        note_text?: string | null | undefined;
        note_date?: string | undefined;
    }>;
    UpdateStudentMedicationNoteRequest: z.ZodObject<{
        note_date: z.ZodOptional<z.ZodString>;
        note_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        note_text?: string | null | undefined;
        note_date?: string | undefined;
    }, {
        note_text?: string | null | undefined;
        note_date?: string | undefined;
    }>;
    DaysResponse: z.ZodObject<{
        mon_flg: z.ZodOptional<z.ZodBoolean>;
        tue_flg: z.ZodOptional<z.ZodBoolean>;
        wed_flg: z.ZodOptional<z.ZodBoolean>;
        thu_flg: z.ZodOptional<z.ZodBoolean>;
        fri_flg: z.ZodOptional<z.ZodBoolean>;
        sat_flg: z.ZodOptional<z.ZodBoolean>;
        sun_flg: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        mon_flg?: boolean | undefined;
        tue_flg?: boolean | undefined;
        wed_flg?: boolean | undefined;
        thu_flg?: boolean | undefined;
        fri_flg?: boolean | undefined;
        sat_flg?: boolean | undefined;
        sun_flg?: boolean | undefined;
    }, {
        mon_flg?: boolean | undefined;
        tue_flg?: boolean | undefined;
        wed_flg?: boolean | undefined;
        thu_flg?: boolean | undefined;
        fri_flg?: boolean | undefined;
        sat_flg?: boolean | undefined;
        sun_flg?: boolean | undefined;
    }>;
    StudentMedicationScheduleResponse: z.ZodObject<{
        cmpy_code: z.ZodOptional<z.ZodString>;
        stud_code: z.ZodOptional<z.ZodString>;
        mcond_code: z.ZodOptional<z.ZodString>;
        medication_uid: z.ZodOptional<z.ZodString>;
        sched_uid: z.ZodOptional<z.ZodString>;
        med_dose: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        med_time: z.ZodOptional<z.ZodString>;
        shed_start_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        shed_end_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        days: z.ZodOptional<z.ZodObject<{
            mon_flg: z.ZodOptional<z.ZodBoolean>;
            tue_flg: z.ZodOptional<z.ZodBoolean>;
            wed_flg: z.ZodOptional<z.ZodBoolean>;
            thu_flg: z.ZodOptional<z.ZodBoolean>;
            fri_flg: z.ZodOptional<z.ZodBoolean>;
            sat_flg: z.ZodOptional<z.ZodBoolean>;
            sun_flg: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            mon_flg?: boolean | undefined;
            tue_flg?: boolean | undefined;
            wed_flg?: boolean | undefined;
            thu_flg?: boolean | undefined;
            fri_flg?: boolean | undefined;
            sat_flg?: boolean | undefined;
            sun_flg?: boolean | undefined;
        }, {
            mon_flg?: boolean | undefined;
            tue_flg?: boolean | undefined;
            wed_flg?: boolean | undefined;
            thu_flg?: boolean | undefined;
            fri_flg?: boolean | undefined;
            sat_flg?: boolean | undefined;
            sun_flg?: boolean | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        cmpy_code?: string | undefined;
        stud_code?: string | undefined;
        mcond_code?: string | undefined;
        medication_uid?: string | undefined;
        sched_uid?: string | undefined;
        med_dose?: string | null | undefined;
        med_time?: string | undefined;
        shed_start_date?: string | null | undefined;
        shed_end_date?: string | null | undefined;
        days?: {
            mon_flg?: boolean | undefined;
            tue_flg?: boolean | undefined;
            wed_flg?: boolean | undefined;
            thu_flg?: boolean | undefined;
            fri_flg?: boolean | undefined;
            sat_flg?: boolean | undefined;
            sun_flg?: boolean | undefined;
        } | undefined;
    }, {
        cmpy_code?: string | undefined;
        stud_code?: string | undefined;
        mcond_code?: string | undefined;
        medication_uid?: string | undefined;
        sched_uid?: string | undefined;
        med_dose?: string | null | undefined;
        med_time?: string | undefined;
        shed_start_date?: string | null | undefined;
        shed_end_date?: string | null | undefined;
        days?: {
            mon_flg?: boolean | undefined;
            tue_flg?: boolean | undefined;
            wed_flg?: boolean | undefined;
            thu_flg?: boolean | undefined;
            fri_flg?: boolean | undefined;
            sat_flg?: boolean | undefined;
            sun_flg?: boolean | undefined;
        } | undefined;
    }>;
    DaysRequest: z.ZodObject<{
        mon_flg: z.ZodOptional<z.ZodBoolean>;
        tue_flg: z.ZodOptional<z.ZodBoolean>;
        wed_flg: z.ZodOptional<z.ZodBoolean>;
        thu_flg: z.ZodOptional<z.ZodBoolean>;
        fri_flg: z.ZodOptional<z.ZodBoolean>;
        sat_flg: z.ZodOptional<z.ZodBoolean>;
        sun_flg: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        mon_flg?: boolean | undefined;
        tue_flg?: boolean | undefined;
        wed_flg?: boolean | undefined;
        thu_flg?: boolean | undefined;
        fri_flg?: boolean | undefined;
        sat_flg?: boolean | undefined;
        sun_flg?: boolean | undefined;
    }, {
        mon_flg?: boolean | undefined;
        tue_flg?: boolean | undefined;
        wed_flg?: boolean | undefined;
        thu_flg?: boolean | undefined;
        fri_flg?: boolean | undefined;
        sat_flg?: boolean | undefined;
        sun_flg?: boolean | undefined;
    }>;
    AddStudentMedicationScheduleRequest: z.ZodObject<{
        med_dose: z.ZodString;
        med_time: z.ZodString;
        shed_start_date: z.ZodString;
        shed_end_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        days: z.ZodOptional<z.ZodObject<{
            mon_flg: z.ZodOptional<z.ZodBoolean>;
            tue_flg: z.ZodOptional<z.ZodBoolean>;
            wed_flg: z.ZodOptional<z.ZodBoolean>;
            thu_flg: z.ZodOptional<z.ZodBoolean>;
            fri_flg: z.ZodOptional<z.ZodBoolean>;
            sat_flg: z.ZodOptional<z.ZodBoolean>;
            sun_flg: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            mon_flg?: boolean | undefined;
            tue_flg?: boolean | undefined;
            wed_flg?: boolean | undefined;
            thu_flg?: boolean | undefined;
            fri_flg?: boolean | undefined;
            sat_flg?: boolean | undefined;
            sun_flg?: boolean | undefined;
        }, {
            mon_flg?: boolean | undefined;
            tue_flg?: boolean | undefined;
            wed_flg?: boolean | undefined;
            thu_flg?: boolean | undefined;
            fri_flg?: boolean | undefined;
            sat_flg?: boolean | undefined;
            sun_flg?: boolean | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        med_dose: string;
        med_time: string;
        shed_start_date: string;
        shed_end_date?: string | null | undefined;
        days?: {
            mon_flg?: boolean | undefined;
            tue_flg?: boolean | undefined;
            wed_flg?: boolean | undefined;
            thu_flg?: boolean | undefined;
            fri_flg?: boolean | undefined;
            sat_flg?: boolean | undefined;
            sun_flg?: boolean | undefined;
        } | undefined;
    }, {
        med_dose: string;
        med_time: string;
        shed_start_date: string;
        shed_end_date?: string | null | undefined;
        days?: {
            mon_flg?: boolean | undefined;
            tue_flg?: boolean | undefined;
            wed_flg?: boolean | undefined;
            thu_flg?: boolean | undefined;
            fri_flg?: boolean | undefined;
            sat_flg?: boolean | undefined;
            sun_flg?: boolean | undefined;
        } | undefined;
    }>;
    DaysRequest2: z.ZodObject<{
        mon_flg: z.ZodOptional<z.ZodBoolean>;
        tue_flg: z.ZodOptional<z.ZodBoolean>;
        wed_flg: z.ZodOptional<z.ZodBoolean>;
        thu_flg: z.ZodOptional<z.ZodBoolean>;
        fri_flg: z.ZodOptional<z.ZodBoolean>;
        sat_flg: z.ZodOptional<z.ZodBoolean>;
        sun_flg: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        mon_flg?: boolean | undefined;
        tue_flg?: boolean | undefined;
        wed_flg?: boolean | undefined;
        thu_flg?: boolean | undefined;
        fri_flg?: boolean | undefined;
        sat_flg?: boolean | undefined;
        sun_flg?: boolean | undefined;
    }, {
        mon_flg?: boolean | undefined;
        tue_flg?: boolean | undefined;
        wed_flg?: boolean | undefined;
        thu_flg?: boolean | undefined;
        fri_flg?: boolean | undefined;
        sat_flg?: boolean | undefined;
        sun_flg?: boolean | undefined;
    }>;
    UpdateStudentMedicationScheduleRequest: z.ZodObject<{
        med_dose: z.ZodString;
        med_time: z.ZodString;
        shed_start_date: z.ZodString;
        shed_end_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        days: z.ZodOptional<z.ZodObject<{
            mon_flg: z.ZodOptional<z.ZodBoolean>;
            tue_flg: z.ZodOptional<z.ZodBoolean>;
            wed_flg: z.ZodOptional<z.ZodBoolean>;
            thu_flg: z.ZodOptional<z.ZodBoolean>;
            fri_flg: z.ZodOptional<z.ZodBoolean>;
            sat_flg: z.ZodOptional<z.ZodBoolean>;
            sun_flg: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            mon_flg?: boolean | undefined;
            tue_flg?: boolean | undefined;
            wed_flg?: boolean | undefined;
            thu_flg?: boolean | undefined;
            fri_flg?: boolean | undefined;
            sat_flg?: boolean | undefined;
            sun_flg?: boolean | undefined;
        }, {
            mon_flg?: boolean | undefined;
            tue_flg?: boolean | undefined;
            wed_flg?: boolean | undefined;
            thu_flg?: boolean | undefined;
            fri_flg?: boolean | undefined;
            sat_flg?: boolean | undefined;
            sun_flg?: boolean | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        med_dose: string;
        med_time: string;
        shed_start_date: string;
        shed_end_date?: string | null | undefined;
        days?: {
            mon_flg?: boolean | undefined;
            tue_flg?: boolean | undefined;
            wed_flg?: boolean | undefined;
            thu_flg?: boolean | undefined;
            fri_flg?: boolean | undefined;
            sat_flg?: boolean | undefined;
            sun_flg?: boolean | undefined;
        } | undefined;
    }, {
        med_dose: string;
        med_time: string;
        shed_start_date: string;
        shed_end_date?: string | null | undefined;
        days?: {
            mon_flg?: boolean | undefined;
            tue_flg?: boolean | undefined;
            wed_flg?: boolean | undefined;
            thu_flg?: boolean | undefined;
            fri_flg?: boolean | undefined;
            sat_flg?: boolean | undefined;
            sun_flg?: boolean | undefined;
        } | undefined;
    }>;
    StudentMedicalStandardNoteResponse: z.ZodObject<{
        cmpy_code: z.ZodOptional<z.ZodString>;
        stud_code: z.ZodOptional<z.ZodString>;
        note_cat: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        note_date: z.ZodOptional<z.ZodString>;
        note_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        note_uid: z.ZodOptional<z.ZodString>;
        has_attachment: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        cmpy_code?: string | undefined;
        stud_code?: string | undefined;
        note_text?: string | null | undefined;
        has_attachment?: boolean | undefined;
        note_cat?: string | null | undefined;
        note_date?: string | undefined;
        note_uid?: string | undefined;
    }, {
        cmpy_code?: string | undefined;
        stud_code?: string | undefined;
        note_text?: string | null | undefined;
        has_attachment?: boolean | undefined;
        note_cat?: string | null | undefined;
        note_date?: string | undefined;
        note_uid?: string | undefined;
    }>;
    CommonStudentMedicalStandardNoteUpdateRequest: z.ZodObject<{
        note_cat: z.ZodString;
        note_date: z.ZodString;
        note_text: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        note_text: string;
        note_cat: string;
        note_date: string;
    }, {
        note_text: string;
        note_cat: string;
        note_date: string;
    }>;
    AddStudentMedicalStandardNoteRequest: z.ZodIntersection<z.ZodObject<{
        note_cat: z.ZodString;
        note_date: z.ZodString;
        note_text: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        note_text: string;
        note_cat: string;
        note_date: string;
    }, {
        note_text: string;
        note_cat: string;
        note_date: string;
    }>, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
    UpdateStudentMedicalStandardNoteRequest: z.ZodIntersection<z.ZodObject<{
        note_cat: z.ZodString;
        note_date: z.ZodString;
        note_text: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        note_text: string;
        note_cat: string;
        note_date: string;
    }, {
        note_text: string;
        note_cat: string;
        note_date: string;
    }>, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
    StudentMedicalConfidentialNoteResponse: z.ZodObject<{
        cmpy_code: z.ZodOptional<z.ZodString>;
        stud_code: z.ZodOptional<z.ZodString>;
        note_cat: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        note_date: z.ZodOptional<z.ZodString>;
        note_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        note_uid: z.ZodOptional<z.ZodString>;
        has_attachment: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        cmpy_code?: string | undefined;
        stud_code?: string | undefined;
        note_text?: string | null | undefined;
        has_attachment?: boolean | undefined;
        note_cat?: string | null | undefined;
        note_date?: string | undefined;
        note_uid?: string | undefined;
    }, {
        cmpy_code?: string | undefined;
        stud_code?: string | undefined;
        note_text?: string | null | undefined;
        has_attachment?: boolean | undefined;
        note_cat?: string | null | undefined;
        note_date?: string | undefined;
        note_uid?: string | undefined;
    }>;
    CommonStudentMedicalConfidentialNoteUpdateRequest: z.ZodObject<{
        note_cat: z.ZodString;
        note_date: z.ZodString;
        note_text: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        note_text: string;
        note_cat: string;
        note_date: string;
    }, {
        note_text: string;
        note_cat: string;
        note_date: string;
    }>;
    AddStudentMedicalConfidentialNoteRequest: z.ZodIntersection<z.ZodObject<{
        note_cat: z.ZodString;
        note_date: z.ZodString;
        note_text: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        note_text: string;
        note_cat: string;
        note_date: string;
    }, {
        note_text: string;
        note_cat: string;
        note_date: string;
    }>, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
    UpdateStudentMedicalConfidentialNoteRequest: z.ZodIntersection<z.ZodObject<{
        note_cat: z.ZodString;
        note_date: z.ZodString;
        note_text: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        note_text: string;
        note_cat: string;
        note_date: string;
    }, {
        note_text: string;
        note_cat: string;
        note_date: string;
    }>, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
    StudentPractitionerResponse: z.ZodObject<{
        cmpy_code: z.ZodOptional<z.ZodString>;
        doct_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        doct_phone: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        prac_num: z.ZodOptional<z.ZodNumber>;
        ptype_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        stud_code: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        cmpy_code?: string | undefined;
        stud_code?: string | undefined;
        doct_name?: string | null | undefined;
        doct_phone?: string | null | undefined;
        prac_num?: number | undefined;
        ptype_code?: string | null | undefined;
    }, {
        cmpy_code?: string | undefined;
        stud_code?: string | undefined;
        doct_name?: string | null | undefined;
        doct_phone?: string | null | undefined;
        prac_num?: number | undefined;
        ptype_code?: string | null | undefined;
    }>;
    AddStudentPractitionerRequest: z.ZodObject<{
        doct_phone: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        doct_name: z.ZodString;
        ptype_code: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        doct_name: string;
        ptype_code: string;
        doct_phone?: string | null | undefined;
    }, {
        doct_name: string;
        ptype_code: string;
        doct_phone?: string | null | undefined;
    }>;
    CommonStudentPractitionerUpdateRequest: z.ZodObject<{
        doct_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        doct_phone: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ptype_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        doct_name?: string | null | undefined;
        doct_phone?: string | null | undefined;
        ptype_code?: string | null | undefined;
    }, {
        doct_name?: string | null | undefined;
        doct_phone?: string | null | undefined;
        ptype_code?: string | null | undefined;
    }>;
    UpdateStudentPractitionerRequest: z.ZodIntersection<z.ZodObject<{
        doct_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        doct_phone: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ptype_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        doct_name?: string | null | undefined;
        doct_phone?: string | null | undefined;
        ptype_code?: string | null | undefined;
    }, {
        doct_name?: string | null | undefined;
        doct_phone?: string | null | undefined;
        ptype_code?: string | null | undefined;
    }>, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
    StudentMedicalSupplementaryResponse: z.ZodObject<{
        cmpy_code: z.ZodOptional<z.ZodString>;
        stud_code: z.ZodOptional<z.ZodString>;
        msupp_code: z.ZodOptional<z.ZodString>;
        comm_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        cmpy_code?: string | undefined;
        stud_code?: string | undefined;
        comm_text?: string | null | undefined;
        msupp_code?: string | undefined;
    }, {
        cmpy_code?: string | undefined;
        stud_code?: string | undefined;
        comm_text?: string | null | undefined;
        msupp_code?: string | undefined;
    }>;
    AddStudentMedicalSupplementaryRequest: z.ZodObject<{
        msupp_code: z.ZodOptional<z.ZodString>;
        comm_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        comm_text?: string | null | undefined;
        msupp_code?: string | undefined;
    }, {
        comm_text?: string | null | undefined;
        msupp_code?: string | undefined;
    }>;
    UpdateStudentMedicalSupplementaryRequest: z.ZodObject<{
        comm_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        comm_text?: string | null | undefined;
    }, {
        comm_text?: string | null | undefined;
    }>;
    YearPeriodOptionsResponse: z.ZodObject<{
        year_num: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        period_num: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        start_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        end_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        end_date?: string | null | undefined;
        start_date?: string | null | undefined;
        year_num?: number | null | undefined;
        period_num?: number | null | undefined;
    }, {
        end_date?: string | null | undefined;
        start_date?: string | null | undefined;
        year_num?: number | null | undefined;
        period_num?: number | null | undefined;
    }>;
    SegmentResponse: z.ZodObject<{
        flex_code: z.ZodOptional<z.ZodString>;
        desc_text: z.ZodOptional<z.ZodString>;
        group_code: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        flex_code?: string | undefined;
        desc_text?: string | undefined;
        group_code?: string | undefined;
    }, {
        flex_code?: string | undefined;
        desc_text?: string | undefined;
        group_code?: string | undefined;
    }>;
    CodeStructureResponse: z.ZodObject<{
        start_num: z.ZodOptional<z.ZodNumber>;
        length_num: z.ZodOptional<z.ZodNumber>;
        desc_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        default_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        type_ind: z.ZodOptional<z.ZodString>;
        dept_consol_flg: z.ZodOptional<z.ZodBoolean>;
        segments: z.ZodOptional<z.ZodArray<z.ZodObject<{
            flex_code: z.ZodOptional<z.ZodString>;
            desc_text: z.ZodOptional<z.ZodString>;
            group_code: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            flex_code?: string | undefined;
            desc_text?: string | undefined;
            group_code?: string | undefined;
        }, {
            flex_code?: string | undefined;
            desc_text?: string | undefined;
            group_code?: string | undefined;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        desc_text?: string | null | undefined;
        start_num?: number | undefined;
        length_num?: number | undefined;
        default_text?: string | null | undefined;
        type_ind?: string | undefined;
        dept_consol_flg?: boolean | undefined;
        segments?: {
            flex_code?: string | undefined;
            desc_text?: string | undefined;
            group_code?: string | undefined;
        }[] | undefined;
    }, {
        desc_text?: string | null | undefined;
        start_num?: number | undefined;
        length_num?: number | undefined;
        default_text?: string | null | undefined;
        type_ind?: string | undefined;
        dept_consol_flg?: boolean | undefined;
        segments?: {
            flex_code?: string | undefined;
            desc_text?: string | undefined;
            group_code?: string | undefined;
        }[] | undefined;
    }>;
    CodeFormatRulesResponse: z.ZodObject<{
        cmpy_code: z.ZodOptional<z.ZodString>;
        code_structure: z.ZodOptional<z.ZodArray<z.ZodObject<{
            start_num: z.ZodOptional<z.ZodNumber>;
            length_num: z.ZodOptional<z.ZodNumber>;
            desc_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            default_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            type_ind: z.ZodOptional<z.ZodString>;
            dept_consol_flg: z.ZodOptional<z.ZodBoolean>;
            segments: z.ZodOptional<z.ZodArray<z.ZodObject<{
                flex_code: z.ZodOptional<z.ZodString>;
                desc_text: z.ZodOptional<z.ZodString>;
                group_code: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                flex_code?: string | undefined;
                desc_text?: string | undefined;
                group_code?: string | undefined;
            }, {
                flex_code?: string | undefined;
                desc_text?: string | undefined;
                group_code?: string | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            desc_text?: string | null | undefined;
            start_num?: number | undefined;
            length_num?: number | undefined;
            default_text?: string | null | undefined;
            type_ind?: string | undefined;
            dept_consol_flg?: boolean | undefined;
            segments?: {
                flex_code?: string | undefined;
                desc_text?: string | undefined;
                group_code?: string | undefined;
            }[] | undefined;
        }, {
            desc_text?: string | null | undefined;
            start_num?: number | undefined;
            length_num?: number | undefined;
            default_text?: string | null | undefined;
            type_ind?: string | undefined;
            dept_consol_flg?: boolean | undefined;
            segments?: {
                flex_code?: string | undefined;
                desc_text?: string | undefined;
                group_code?: string | undefined;
            }[] | undefined;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        cmpy_code?: string | undefined;
        code_structure?: {
            desc_text?: string | null | undefined;
            start_num?: number | undefined;
            length_num?: number | undefined;
            default_text?: string | null | undefined;
            type_ind?: string | undefined;
            dept_consol_flg?: boolean | undefined;
            segments?: {
                flex_code?: string | undefined;
                desc_text?: string | undefined;
                group_code?: string | undefined;
            }[] | undefined;
        }[] | undefined;
    }, {
        cmpy_code?: string | undefined;
        code_structure?: {
            desc_text?: string | null | undefined;
            start_num?: number | undefined;
            length_num?: number | undefined;
            default_text?: string | null | undefined;
            type_ind?: string | undefined;
            dept_consol_flg?: boolean | undefined;
            segments?: {
                flex_code?: string | undefined;
                desc_text?: string | undefined;
                group_code?: string | undefined;
            }[] | undefined;
        }[] | undefined;
    }>;
    ReportingCodeOptionsFieldReferenceValue: z.ZodObject<{
        ref_code: z.ZodOptional<z.ZodString>;
        ref_desc: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        ref_code?: string | undefined;
        ref_desc?: string | undefined;
    }, {
        ref_code?: string | undefined;
        ref_desc?: string | undefined;
    }>;
    ReportingCodeOptionsFieldDetails: z.ZodObject<{
        field_name: z.ZodOptional<z.ZodString>;
        field_desc: z.ZodOptional<z.ZodString>;
        reference_values: z.ZodOptional<z.ZodArray<z.ZodObject<{
            ref_code: z.ZodOptional<z.ZodString>;
            ref_desc: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            ref_code?: string | undefined;
            ref_desc?: string | undefined;
        }, {
            ref_code?: string | undefined;
            ref_desc?: string | undefined;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        field_name?: string | undefined;
        field_desc?: string | undefined;
        reference_values?: {
            ref_code?: string | undefined;
            ref_desc?: string | undefined;
        }[] | undefined;
    }, {
        field_name?: string | undefined;
        field_desc?: string | undefined;
        reference_values?: {
            ref_code?: string | undefined;
            ref_desc?: string | undefined;
        }[] | undefined;
    }>;
    ReportingCodeResponse: z.ZodObject<{
        cmpy_code: z.ZodOptional<z.ZodString>;
        field_details: z.ZodOptional<z.ZodArray<z.ZodObject<{
            field_name: z.ZodOptional<z.ZodString>;
            field_desc: z.ZodOptional<z.ZodString>;
            reference_values: z.ZodOptional<z.ZodArray<z.ZodObject<{
                ref_code: z.ZodOptional<z.ZodString>;
                ref_desc: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                ref_code?: string | undefined;
                ref_desc?: string | undefined;
            }, {
                ref_code?: string | undefined;
                ref_desc?: string | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            field_name?: string | undefined;
            field_desc?: string | undefined;
            reference_values?: {
                ref_code?: string | undefined;
                ref_desc?: string | undefined;
            }[] | undefined;
        }, {
            field_name?: string | undefined;
            field_desc?: string | undefined;
            reference_values?: {
                ref_code?: string | undefined;
                ref_desc?: string | undefined;
            }[] | undefined;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        cmpy_code?: string | undefined;
        field_details?: {
            field_name?: string | undefined;
            field_desc?: string | undefined;
            reference_values?: {
                ref_code?: string | undefined;
                ref_desc?: string | undefined;
            }[] | undefined;
        }[] | undefined;
    }, {
        cmpy_code?: string | undefined;
        field_details?: {
            field_name?: string | undefined;
            field_desc?: string | undefined;
            reference_values?: {
                ref_code?: string | undefined;
                ref_desc?: string | undefined;
            }[] | undefined;
        }[] | undefined;
    }>;
    GeneralLedgerAccountResponse: z.ZodObject<{
        cmpy_code: z.ZodOptional<z.ZodString>;
        acct_code: z.ZodOptional<z.ZodString>;
        desc_text: z.ZodOptional<z.ZodString>;
        start_year_num: z.ZodOptional<z.ZodNumber>;
        start_period_num: z.ZodOptional<z.ZodNumber>;
        end_year_num: z.ZodOptional<z.ZodNumber>;
        end_period_num: z.ZodOptional<z.ZodNumber>;
        group_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        external_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        type_ind: z.ZodOptional<z.ZodString>;
        def_tax_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        cmpy_code?: string | undefined;
        desc_text?: string | undefined;
        group_code?: string | null | undefined;
        type_ind?: string | undefined;
        acct_code?: string | undefined;
        start_year_num?: number | undefined;
        start_period_num?: number | undefined;
        end_year_num?: number | undefined;
        end_period_num?: number | undefined;
        external_code?: string | null | undefined;
        def_tax_code?: string | null | undefined;
    }, {
        cmpy_code?: string | undefined;
        desc_text?: string | undefined;
        group_code?: string | null | undefined;
        type_ind?: string | undefined;
        acct_code?: string | undefined;
        start_year_num?: number | undefined;
        start_period_num?: number | undefined;
        end_year_num?: number | undefined;
        end_period_num?: number | undefined;
        external_code?: string | null | undefined;
        def_tax_code?: string | null | undefined;
    }>;
    AddGeneralLedgerAccountRequest: z.ZodObject<{
        acct_code: z.ZodString;
        desc_text: z.ZodString;
        start_year_num: z.ZodNumber;
        start_period_num: z.ZodNumber;
        end_year_num: z.ZodNumber;
        end_period_num: z.ZodNumber;
        group_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        external_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        type_ind: z.ZodString;
        def_tax_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        desc_text: string;
        type_ind: string;
        acct_code: string;
        start_year_num: number;
        start_period_num: number;
        end_year_num: number;
        end_period_num: number;
        group_code?: string | null | undefined;
        external_code?: string | null | undefined;
        def_tax_code?: string | null | undefined;
    }, {
        desc_text: string;
        type_ind: string;
        acct_code: string;
        start_year_num: number;
        start_period_num: number;
        end_year_num: number;
        end_period_num: number;
        group_code?: string | null | undefined;
        external_code?: string | null | undefined;
        def_tax_code?: string | null | undefined;
    }>;
    UpdateGeneralLedgerAccountRequest: z.ZodObject<{
        acct_code: z.ZodString;
        desc_text: z.ZodString;
        start_year_num: z.ZodNumber;
        start_period_num: z.ZodNumber;
        end_year_num: z.ZodNumber;
        end_period_num: z.ZodNumber;
        group_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        external_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        type_ind: z.ZodString;
        def_tax_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        desc_text: string;
        type_ind: string;
        acct_code: string;
        start_year_num: number;
        start_period_num: number;
        end_year_num: number;
        end_period_num: number;
        group_code?: string | null | undefined;
        external_code?: string | null | undefined;
        def_tax_code?: string | null | undefined;
    }, {
        desc_text: string;
        type_ind: string;
        acct_code: string;
        start_year_num: number;
        start_period_num: number;
        end_year_num: number;
        end_period_num: number;
        group_code?: string | null | undefined;
        external_code?: string | null | undefined;
        def_tax_code?: string | null | undefined;
    }>;
    PeriodBudgetResponse: z.ZodObject<{
        period_num: z.ZodOptional<z.ZodNumber>;
        period_amt: z.ZodOptional<z.ZodNumber>;
        ytd_pre_close_amt: z.ZodOptional<z.ZodNumber>;
        ytd_budget: z.ZodOptional<z.ZodNumber>;
        variance: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        period_num?: number | undefined;
        period_amt?: number | undefined;
        ytd_pre_close_amt?: number | undefined;
        ytd_budget?: number | undefined;
        variance?: number | undefined;
    }, {
        period_num?: number | undefined;
        period_amt?: number | undefined;
        ytd_pre_close_amt?: number | undefined;
        ytd_budget?: number | undefined;
        variance?: number | undefined;
    }>;
    AccountBudgetResponse: z.ZodObject<{
        cmpy_code: z.ZodOptional<z.ZodString>;
        acct_code: z.ZodOptional<z.ZodString>;
        year_num: z.ZodOptional<z.ZodNumber>;
        budget_num: z.ZodOptional<z.ZodNumber>;
        periods: z.ZodOptional<z.ZodArray<z.ZodObject<{
            period_num: z.ZodOptional<z.ZodNumber>;
            period_amt: z.ZodOptional<z.ZodNumber>;
            ytd_pre_close_amt: z.ZodOptional<z.ZodNumber>;
            ytd_budget: z.ZodOptional<z.ZodNumber>;
            variance: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            period_num?: number | undefined;
            period_amt?: number | undefined;
            ytd_pre_close_amt?: number | undefined;
            ytd_budget?: number | undefined;
            variance?: number | undefined;
        }, {
            period_num?: number | undefined;
            period_amt?: number | undefined;
            ytd_pre_close_amt?: number | undefined;
            ytd_budget?: number | undefined;
            variance?: number | undefined;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        cmpy_code?: string | undefined;
        year_num?: number | undefined;
        acct_code?: string | undefined;
        budget_num?: number | undefined;
        periods?: {
            period_num?: number | undefined;
            period_amt?: number | undefined;
            ytd_pre_close_amt?: number | undefined;
            ytd_budget?: number | undefined;
            variance?: number | undefined;
        }[] | undefined;
    }, {
        cmpy_code?: string | undefined;
        year_num?: number | undefined;
        acct_code?: string | undefined;
        budget_num?: number | undefined;
        periods?: {
            period_num?: number | undefined;
            period_amt?: number | undefined;
            ytd_pre_close_amt?: number | undefined;
            ytd_budget?: number | undefined;
            variance?: number | undefined;
        }[] | undefined;
    }>;
    PeriodBudgetRequest: z.ZodObject<{
        period_num: z.ZodNumber;
        period_amt: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        period_num: number;
        period_amt: number;
    }, {
        period_num: number;
        period_amt: number;
    }>;
    AddAccountBudgetRequest: z.ZodObject<{
        year_num: z.ZodNumber;
        budget_num: z.ZodNumber;
        periods: z.ZodOptional<z.ZodArray<z.ZodObject<{
            period_num: z.ZodNumber;
            period_amt: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            period_num: number;
            period_amt: number;
        }, {
            period_num: number;
            period_amt: number;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        year_num: number;
        budget_num: number;
        periods?: {
            period_num: number;
            period_amt: number;
        }[] | undefined;
    }, {
        year_num: number;
        budget_num: number;
        periods?: {
            period_num: number;
            period_amt: number;
        }[] | undefined;
    }>;
    BudgetPeriod: z.ZodObject<{
        period_num: z.ZodNumber;
        period_amt: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        period_num: number;
        period_amt: number;
    }, {
        period_num: number;
        period_amt: number;
    }>;
    UpdateAccountBudgetRequest: z.ZodObject<{
        year_num: z.ZodNumber;
        budget_num: z.ZodNumber;
        periods: z.ZodArray<z.ZodObject<{
            period_num: z.ZodNumber;
            period_amt: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            period_num: number;
            period_amt: number;
        }, {
            period_num: number;
            period_amt: number;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        year_num: number;
        budget_num: number;
        periods: {
            period_num: number;
            period_amt: number;
        }[];
    }, {
        year_num: number;
        budget_num: number;
        periods: {
            period_num: number;
            period_amt: number;
        }[];
    }>;
    PeriodBalanceResponse: z.ZodObject<{
        period_num: z.ZodOptional<z.ZodNumber>;
        open_amt: z.ZodOptional<z.ZodNumber>;
        debit_amt: z.ZodOptional<z.ZodNumber>;
        credit_amt: z.ZodOptional<z.ZodNumber>;
        close_amt: z.ZodOptional<z.ZodNumber>;
        pre_close_amt: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        period_num?: number | undefined;
        open_amt?: number | undefined;
        debit_amt?: number | undefined;
        credit_amt?: number | undefined;
        close_amt?: number | undefined;
        pre_close_amt?: number | undefined;
    }, {
        period_num?: number | undefined;
        open_amt?: number | undefined;
        debit_amt?: number | undefined;
        credit_amt?: number | undefined;
        close_amt?: number | undefined;
        pre_close_amt?: number | undefined;
    }>;
    AccountBalanceResponse: z.ZodObject<{
        cmpy_code: z.ZodOptional<z.ZodString>;
        acct_code: z.ZodOptional<z.ZodString>;
        year_num: z.ZodOptional<z.ZodNumber>;
        period_bals: z.ZodOptional<z.ZodArray<z.ZodObject<{
            period_num: z.ZodOptional<z.ZodNumber>;
            open_amt: z.ZodOptional<z.ZodNumber>;
            debit_amt: z.ZodOptional<z.ZodNumber>;
            credit_amt: z.ZodOptional<z.ZodNumber>;
            close_amt: z.ZodOptional<z.ZodNumber>;
            pre_close_amt: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            period_num?: number | undefined;
            open_amt?: number | undefined;
            debit_amt?: number | undefined;
            credit_amt?: number | undefined;
            close_amt?: number | undefined;
            pre_close_amt?: number | undefined;
        }, {
            period_num?: number | undefined;
            open_amt?: number | undefined;
            debit_amt?: number | undefined;
            credit_amt?: number | undefined;
            close_amt?: number | undefined;
            pre_close_amt?: number | undefined;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        cmpy_code?: string | undefined;
        year_num?: number | undefined;
        acct_code?: string | undefined;
        period_bals?: {
            period_num?: number | undefined;
            open_amt?: number | undefined;
            debit_amt?: number | undefined;
            credit_amt?: number | undefined;
            close_amt?: number | undefined;
            pre_close_amt?: number | undefined;
        }[] | undefined;
    }, {
        cmpy_code?: string | undefined;
        year_num?: number | undefined;
        acct_code?: string | undefined;
        period_bals?: {
            period_num?: number | undefined;
            open_amt?: number | undefined;
            debit_amt?: number | undefined;
            credit_amt?: number | undefined;
            close_amt?: number | undefined;
            pre_close_amt?: number | undefined;
        }[] | undefined;
    }>;
    AccountTransactionResponse: z.ZodObject<{
        cmpy_code: z.ZodOptional<z.ZodString>;
        acct_code: z.ZodOptional<z.ZodString>;
        year_num: z.ZodOptional<z.ZodNumber>;
        period_num: z.ZodOptional<z.ZodNumber>;
        jour_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        jour_num: z.ZodOptional<z.ZodNumber>;
        jour_seq_num: z.ZodOptional<z.ZodNumber>;
        analysis_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        tran_date: z.ZodOptional<z.ZodString>;
        ref_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ref_num: z.ZodOptional<z.ZodNumber>;
        desc_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        debit_amt: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        credit_amt: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, "strip", z.ZodTypeAny, {
        cmpy_code?: string | undefined;
        ref_num?: number | undefined;
        year_num?: number | undefined;
        period_num?: number | undefined;
        desc_text?: string | null | undefined;
        acct_code?: string | undefined;
        debit_amt?: number | null | undefined;
        credit_amt?: number | null | undefined;
        jour_code?: string | null | undefined;
        jour_num?: number | undefined;
        jour_seq_num?: number | undefined;
        analysis_text?: string | null | undefined;
        tran_date?: string | undefined;
        ref_text?: string | null | undefined;
    }, {
        cmpy_code?: string | undefined;
        ref_num?: number | undefined;
        year_num?: number | undefined;
        period_num?: number | undefined;
        desc_text?: string | null | undefined;
        acct_code?: string | undefined;
        debit_amt?: number | null | undefined;
        credit_amt?: number | null | undefined;
        jour_code?: string | null | undefined;
        jour_num?: number | undefined;
        jour_seq_num?: number | undefined;
        analysis_text?: string | null | undefined;
        tran_date?: string | undefined;
        ref_text?: string | null | undefined;
    }>;
    RptCodes: z.ZodObject<{
        rpt1_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        rpt2_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        rpt3_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        rpt4_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        rpt5_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        rpt6_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        rpt7_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        rpt8_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        rpt9_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        rpt10_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        rpt11_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        rpt12_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        rpt13_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        rpt14_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        rpt15_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        rpt16_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        rpt17_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        rpt18_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        rpt19_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        rpt20_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        rpt1_code?: string | null | undefined;
        rpt2_code?: string | null | undefined;
        rpt3_code?: string | null | undefined;
        rpt4_code?: string | null | undefined;
        rpt5_code?: string | null | undefined;
        rpt6_code?: string | null | undefined;
        rpt7_code?: string | null | undefined;
        rpt8_code?: string | null | undefined;
        rpt9_code?: string | null | undefined;
        rpt10_code?: string | null | undefined;
        rpt11_code?: string | null | undefined;
        rpt12_code?: string | null | undefined;
        rpt13_code?: string | null | undefined;
        rpt14_code?: string | null | undefined;
        rpt15_code?: string | null | undefined;
        rpt16_code?: string | null | undefined;
        rpt17_code?: string | null | undefined;
        rpt18_code?: string | null | undefined;
        rpt19_code?: string | null | undefined;
        rpt20_code?: string | null | undefined;
    }, {
        rpt1_code?: string | null | undefined;
        rpt2_code?: string | null | undefined;
        rpt3_code?: string | null | undefined;
        rpt4_code?: string | null | undefined;
        rpt5_code?: string | null | undefined;
        rpt6_code?: string | null | undefined;
        rpt7_code?: string | null | undefined;
        rpt8_code?: string | null | undefined;
        rpt9_code?: string | null | undefined;
        rpt10_code?: string | null | undefined;
        rpt11_code?: string | null | undefined;
        rpt12_code?: string | null | undefined;
        rpt13_code?: string | null | undefined;
        rpt14_code?: string | null | undefined;
        rpt15_code?: string | null | undefined;
        rpt16_code?: string | null | undefined;
        rpt17_code?: string | null | undefined;
        rpt18_code?: string | null | undefined;
        rpt19_code?: string | null | undefined;
        rpt20_code?: string | null | undefined;
    }>;
    AccountReportingCodesResponse: z.ZodObject<{
        cmpy_code: z.ZodOptional<z.ZodString>;
        acct_code: z.ZodOptional<z.ZodString>;
        assoc_acct_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        resp_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        resp_e_mail: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        rpt_codes: z.ZodOptional<z.ZodObject<{
            rpt1_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            rpt2_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            rpt3_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            rpt4_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            rpt5_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            rpt6_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            rpt7_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            rpt8_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            rpt9_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            rpt10_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            rpt11_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            rpt12_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            rpt13_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            rpt14_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            rpt15_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            rpt16_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            rpt17_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            rpt18_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            rpt19_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            rpt20_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            rpt1_code?: string | null | undefined;
            rpt2_code?: string | null | undefined;
            rpt3_code?: string | null | undefined;
            rpt4_code?: string | null | undefined;
            rpt5_code?: string | null | undefined;
            rpt6_code?: string | null | undefined;
            rpt7_code?: string | null | undefined;
            rpt8_code?: string | null | undefined;
            rpt9_code?: string | null | undefined;
            rpt10_code?: string | null | undefined;
            rpt11_code?: string | null | undefined;
            rpt12_code?: string | null | undefined;
            rpt13_code?: string | null | undefined;
            rpt14_code?: string | null | undefined;
            rpt15_code?: string | null | undefined;
            rpt16_code?: string | null | undefined;
            rpt17_code?: string | null | undefined;
            rpt18_code?: string | null | undefined;
            rpt19_code?: string | null | undefined;
            rpt20_code?: string | null | undefined;
        }, {
            rpt1_code?: string | null | undefined;
            rpt2_code?: string | null | undefined;
            rpt3_code?: string | null | undefined;
            rpt4_code?: string | null | undefined;
            rpt5_code?: string | null | undefined;
            rpt6_code?: string | null | undefined;
            rpt7_code?: string | null | undefined;
            rpt8_code?: string | null | undefined;
            rpt9_code?: string | null | undefined;
            rpt10_code?: string | null | undefined;
            rpt11_code?: string | null | undefined;
            rpt12_code?: string | null | undefined;
            rpt13_code?: string | null | undefined;
            rpt14_code?: string | null | undefined;
            rpt15_code?: string | null | undefined;
            rpt16_code?: string | null | undefined;
            rpt17_code?: string | null | undefined;
            rpt18_code?: string | null | undefined;
            rpt19_code?: string | null | undefined;
            rpt20_code?: string | null | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        cmpy_code?: string | undefined;
        acct_code?: string | undefined;
        assoc_acct_code?: string | null | undefined;
        resp_name?: string | null | undefined;
        resp_e_mail?: string | null | undefined;
        rpt_codes?: {
            rpt1_code?: string | null | undefined;
            rpt2_code?: string | null | undefined;
            rpt3_code?: string | null | undefined;
            rpt4_code?: string | null | undefined;
            rpt5_code?: string | null | undefined;
            rpt6_code?: string | null | undefined;
            rpt7_code?: string | null | undefined;
            rpt8_code?: string | null | undefined;
            rpt9_code?: string | null | undefined;
            rpt10_code?: string | null | undefined;
            rpt11_code?: string | null | undefined;
            rpt12_code?: string | null | undefined;
            rpt13_code?: string | null | undefined;
            rpt14_code?: string | null | undefined;
            rpt15_code?: string | null | undefined;
            rpt16_code?: string | null | undefined;
            rpt17_code?: string | null | undefined;
            rpt18_code?: string | null | undefined;
            rpt19_code?: string | null | undefined;
            rpt20_code?: string | null | undefined;
        } | undefined;
    }, {
        cmpy_code?: string | undefined;
        acct_code?: string | undefined;
        assoc_acct_code?: string | null | undefined;
        resp_name?: string | null | undefined;
        resp_e_mail?: string | null | undefined;
        rpt_codes?: {
            rpt1_code?: string | null | undefined;
            rpt2_code?: string | null | undefined;
            rpt3_code?: string | null | undefined;
            rpt4_code?: string | null | undefined;
            rpt5_code?: string | null | undefined;
            rpt6_code?: string | null | undefined;
            rpt7_code?: string | null | undefined;
            rpt8_code?: string | null | undefined;
            rpt9_code?: string | null | undefined;
            rpt10_code?: string | null | undefined;
            rpt11_code?: string | null | undefined;
            rpt12_code?: string | null | undefined;
            rpt13_code?: string | null | undefined;
            rpt14_code?: string | null | undefined;
            rpt15_code?: string | null | undefined;
            rpt16_code?: string | null | undefined;
            rpt17_code?: string | null | undefined;
            rpt18_code?: string | null | undefined;
            rpt19_code?: string | null | undefined;
            rpt20_code?: string | null | undefined;
        } | undefined;
    }>;
    RptCodes2: z.ZodObject<{
        rpt1_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        rpt2_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        rpt3_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        rpt4_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        rpt5_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        rpt6_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        rpt7_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        rpt8_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        rpt9_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        rpt10_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        rpt11_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        rpt12_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        rpt13_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        rpt14_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        rpt15_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        rpt16_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        rpt17_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        rpt18_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        rpt19_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        rpt20_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        rpt1_code?: string | null | undefined;
        rpt2_code?: string | null | undefined;
        rpt3_code?: string | null | undefined;
        rpt4_code?: string | null | undefined;
        rpt5_code?: string | null | undefined;
        rpt6_code?: string | null | undefined;
        rpt7_code?: string | null | undefined;
        rpt8_code?: string | null | undefined;
        rpt9_code?: string | null | undefined;
        rpt10_code?: string | null | undefined;
        rpt11_code?: string | null | undefined;
        rpt12_code?: string | null | undefined;
        rpt13_code?: string | null | undefined;
        rpt14_code?: string | null | undefined;
        rpt15_code?: string | null | undefined;
        rpt16_code?: string | null | undefined;
        rpt17_code?: string | null | undefined;
        rpt18_code?: string | null | undefined;
        rpt19_code?: string | null | undefined;
        rpt20_code?: string | null | undefined;
    }, {
        rpt1_code?: string | null | undefined;
        rpt2_code?: string | null | undefined;
        rpt3_code?: string | null | undefined;
        rpt4_code?: string | null | undefined;
        rpt5_code?: string | null | undefined;
        rpt6_code?: string | null | undefined;
        rpt7_code?: string | null | undefined;
        rpt8_code?: string | null | undefined;
        rpt9_code?: string | null | undefined;
        rpt10_code?: string | null | undefined;
        rpt11_code?: string | null | undefined;
        rpt12_code?: string | null | undefined;
        rpt13_code?: string | null | undefined;
        rpt14_code?: string | null | undefined;
        rpt15_code?: string | null | undefined;
        rpt16_code?: string | null | undefined;
        rpt17_code?: string | null | undefined;
        rpt18_code?: string | null | undefined;
        rpt19_code?: string | null | undefined;
        rpt20_code?: string | null | undefined;
    }>;
    UpdateAccountReportingCodesRequest: z.ZodObject<{
        assoc_acct_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        resp_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        resp_e_mail: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        rpt_codes: z.ZodOptional<z.ZodObject<{
            rpt1_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            rpt2_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            rpt3_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            rpt4_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            rpt5_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            rpt6_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            rpt7_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            rpt8_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            rpt9_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            rpt10_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            rpt11_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            rpt12_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            rpt13_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            rpt14_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            rpt15_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            rpt16_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            rpt17_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            rpt18_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            rpt19_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            rpt20_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            rpt1_code?: string | null | undefined;
            rpt2_code?: string | null | undefined;
            rpt3_code?: string | null | undefined;
            rpt4_code?: string | null | undefined;
            rpt5_code?: string | null | undefined;
            rpt6_code?: string | null | undefined;
            rpt7_code?: string | null | undefined;
            rpt8_code?: string | null | undefined;
            rpt9_code?: string | null | undefined;
            rpt10_code?: string | null | undefined;
            rpt11_code?: string | null | undefined;
            rpt12_code?: string | null | undefined;
            rpt13_code?: string | null | undefined;
            rpt14_code?: string | null | undefined;
            rpt15_code?: string | null | undefined;
            rpt16_code?: string | null | undefined;
            rpt17_code?: string | null | undefined;
            rpt18_code?: string | null | undefined;
            rpt19_code?: string | null | undefined;
            rpt20_code?: string | null | undefined;
        }, {
            rpt1_code?: string | null | undefined;
            rpt2_code?: string | null | undefined;
            rpt3_code?: string | null | undefined;
            rpt4_code?: string | null | undefined;
            rpt5_code?: string | null | undefined;
            rpt6_code?: string | null | undefined;
            rpt7_code?: string | null | undefined;
            rpt8_code?: string | null | undefined;
            rpt9_code?: string | null | undefined;
            rpt10_code?: string | null | undefined;
            rpt11_code?: string | null | undefined;
            rpt12_code?: string | null | undefined;
            rpt13_code?: string | null | undefined;
            rpt14_code?: string | null | undefined;
            rpt15_code?: string | null | undefined;
            rpt16_code?: string | null | undefined;
            rpt17_code?: string | null | undefined;
            rpt18_code?: string | null | undefined;
            rpt19_code?: string | null | undefined;
            rpt20_code?: string | null | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        assoc_acct_code?: string | null | undefined;
        resp_name?: string | null | undefined;
        resp_e_mail?: string | null | undefined;
        rpt_codes?: {
            rpt1_code?: string | null | undefined;
            rpt2_code?: string | null | undefined;
            rpt3_code?: string | null | undefined;
            rpt4_code?: string | null | undefined;
            rpt5_code?: string | null | undefined;
            rpt6_code?: string | null | undefined;
            rpt7_code?: string | null | undefined;
            rpt8_code?: string | null | undefined;
            rpt9_code?: string | null | undefined;
            rpt10_code?: string | null | undefined;
            rpt11_code?: string | null | undefined;
            rpt12_code?: string | null | undefined;
            rpt13_code?: string | null | undefined;
            rpt14_code?: string | null | undefined;
            rpt15_code?: string | null | undefined;
            rpt16_code?: string | null | undefined;
            rpt17_code?: string | null | undefined;
            rpt18_code?: string | null | undefined;
            rpt19_code?: string | null | undefined;
            rpt20_code?: string | null | undefined;
        } | undefined;
    }, {
        assoc_acct_code?: string | null | undefined;
        resp_name?: string | null | undefined;
        resp_e_mail?: string | null | undefined;
        rpt_codes?: {
            rpt1_code?: string | null | undefined;
            rpt2_code?: string | null | undefined;
            rpt3_code?: string | null | undefined;
            rpt4_code?: string | null | undefined;
            rpt5_code?: string | null | undefined;
            rpt6_code?: string | null | undefined;
            rpt7_code?: string | null | undefined;
            rpt8_code?: string | null | undefined;
            rpt9_code?: string | null | undefined;
            rpt10_code?: string | null | undefined;
            rpt11_code?: string | null | undefined;
            rpt12_code?: string | null | undefined;
            rpt13_code?: string | null | undefined;
            rpt14_code?: string | null | undefined;
            rpt15_code?: string | null | undefined;
            rpt16_code?: string | null | undefined;
            rpt17_code?: string | null | undefined;
            rpt18_code?: string | null | undefined;
            rpt19_code?: string | null | undefined;
            rpt20_code?: string | null | undefined;
        } | undefined;
    }>;
    AccountResponsibilityResponse: z.ZodObject<{
        cmpy_code: z.ZodOptional<z.ZodString>;
        acct_code: z.ZodOptional<z.ZodString>;
        user_code: z.ZodOptional<z.ZodString>;
        source_flg: z.ZodOptional<z.ZodString>;
        resp_flg: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        cmpy_code?: string | undefined;
        acct_code?: string | undefined;
        user_code?: string | undefined;
        source_flg?: string | undefined;
        resp_flg?: number | undefined;
    }, {
        cmpy_code?: string | undefined;
        acct_code?: string | undefined;
        user_code?: string | undefined;
        source_flg?: string | undefined;
        resp_flg?: number | undefined;
    }>;
    AddAccountResponsibilityRequest: z.ZodObject<{
        user_code: z.ZodOptional<z.ZodString>;
        source_flg: z.ZodOptional<z.ZodString>;
        resp_flg: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        user_code?: string | undefined;
        source_flg?: string | undefined;
        resp_flg?: number | undefined;
    }, {
        user_code?: string | undefined;
        source_flg?: string | undefined;
        resp_flg?: number | undefined;
    }>;
    UpdateAccountResponsibilityRequest: z.ZodObject<{
        user_code: z.ZodOptional<z.ZodString>;
        source_flg: z.ZodOptional<z.ZodString>;
        resp_flg: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        user_code?: string | undefined;
        source_flg?: string | undefined;
        resp_flg?: number | undefined;
    }, {
        user_code?: string | undefined;
        source_flg?: string | undefined;
        resp_flg?: number | undefined;
    }>;
    JournalTypeOptionsResponse: z.ZodObject<{
        code: z.ZodOptional<z.ZodString>;
        desc: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        gl_flag: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        code?: string | undefined;
        desc?: string | null | undefined;
        gl_flag?: boolean | undefined;
    }, {
        code?: string | undefined;
        desc?: string | null | undefined;
        gl_flag?: boolean | undefined;
    }>;
    GLAccountOptionsResponse: z.ZodObject<{
        code: z.ZodOptional<z.ZodString>;
        desc: z.ZodOptional<z.ZodString>;
        start_year: z.ZodOptional<z.ZodNumber>;
        end_year: z.ZodOptional<z.ZodNumber>;
        start_period: z.ZodOptional<z.ZodNumber>;
        end_period: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        code?: string | undefined;
        desc?: string | undefined;
        start_year?: number | undefined;
        end_year?: number | undefined;
        start_period?: number | undefined;
        end_period?: number | undefined;
    }, {
        code?: string | undefined;
        desc?: string | undefined;
        start_year?: number | undefined;
        end_year?: number | undefined;
        start_period?: number | undefined;
        end_period?: number | undefined;
    }>;
    GLLineResponse: z.ZodObject<{
        acct_code: z.ZodOptional<z.ZodString>;
        seq_num: z.ZodOptional<z.ZodNumber>;
        ref_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ref_num: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        analysis_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        desc_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        debit_amt: z.ZodOptional<z.ZodNumber>;
        credit_amt: z.ZodOptional<z.ZodNumber>;
        tax_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        tax_type: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        tax_amt: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        tax_per: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        tax_net: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        gl_acct_desc: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        warnings: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        ref_num?: number | null | undefined;
        desc_text?: string | null | undefined;
        acct_code?: string | undefined;
        debit_amt?: number | undefined;
        credit_amt?: number | undefined;
        analysis_text?: string | null | undefined;
        ref_text?: string | null | undefined;
        seq_num?: number | undefined;
        tax_code?: string | null | undefined;
        tax_type?: string | null | undefined;
        tax_amt?: number | null | undefined;
        tax_per?: number | null | undefined;
        tax_net?: number | null | undefined;
        gl_acct_desc?: string | null | undefined;
        warnings?: string[] | undefined;
    }, {
        ref_num?: number | null | undefined;
        desc_text?: string | null | undefined;
        acct_code?: string | undefined;
        debit_amt?: number | undefined;
        credit_amt?: number | undefined;
        analysis_text?: string | null | undefined;
        ref_text?: string | null | undefined;
        seq_num?: number | undefined;
        tax_code?: string | null | undefined;
        tax_type?: string | null | undefined;
        tax_amt?: number | null | undefined;
        tax_per?: number | null | undefined;
        tax_net?: number | null | undefined;
        gl_acct_desc?: string | null | undefined;
        warnings?: string[] | undefined;
    }>;
    JournalResponse: z.ZodObject<{
        cmpy_code: z.ZodOptional<z.ZodString>;
        jour_code: z.ZodOptional<z.ZodString>;
        jour_num: z.ZodOptional<z.ZodNumber>;
        jour_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        post_flag: z.ZodOptional<z.ZodBoolean>;
        year_num: z.ZodOptional<z.ZodNumber>;
        period_num: z.ZodOptional<z.ZodNumber>;
        com1_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        com2_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        control_amt: z.ZodOptional<z.ZodNumber>;
        bank_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        bank_desc: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        bank_gl_acct: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        warnings: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        gl_lines: z.ZodOptional<z.ZodArray<z.ZodObject<{
            acct_code: z.ZodOptional<z.ZodString>;
            seq_num: z.ZodOptional<z.ZodNumber>;
            ref_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ref_num: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            analysis_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            desc_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            debit_amt: z.ZodOptional<z.ZodNumber>;
            credit_amt: z.ZodOptional<z.ZodNumber>;
            tax_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            tax_type: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            tax_amt: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            tax_per: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            tax_net: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            gl_acct_desc: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            warnings: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            ref_num?: number | null | undefined;
            desc_text?: string | null | undefined;
            acct_code?: string | undefined;
            debit_amt?: number | undefined;
            credit_amt?: number | undefined;
            analysis_text?: string | null | undefined;
            ref_text?: string | null | undefined;
            seq_num?: number | undefined;
            tax_code?: string | null | undefined;
            tax_type?: string | null | undefined;
            tax_amt?: number | null | undefined;
            tax_per?: number | null | undefined;
            tax_net?: number | null | undefined;
            gl_acct_desc?: string | null | undefined;
            warnings?: string[] | undefined;
        }, {
            ref_num?: number | null | undefined;
            desc_text?: string | null | undefined;
            acct_code?: string | undefined;
            debit_amt?: number | undefined;
            credit_amt?: number | undefined;
            analysis_text?: string | null | undefined;
            ref_text?: string | null | undefined;
            seq_num?: number | undefined;
            tax_code?: string | null | undefined;
            tax_type?: string | null | undefined;
            tax_amt?: number | null | undefined;
            tax_per?: number | null | undefined;
            tax_net?: number | null | undefined;
            gl_acct_desc?: string | null | undefined;
            warnings?: string[] | undefined;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        cmpy_code?: string | undefined;
        year_num?: number | undefined;
        period_num?: number | undefined;
        jour_code?: string | undefined;
        jour_num?: number | undefined;
        warnings?: string[] | undefined;
        jour_date?: string | null | undefined;
        post_flag?: boolean | undefined;
        com1_text?: string | null | undefined;
        com2_text?: string | null | undefined;
        control_amt?: number | undefined;
        bank_code?: string | null | undefined;
        bank_desc?: string | null | undefined;
        bank_gl_acct?: string | null | undefined;
        gl_lines?: {
            ref_num?: number | null | undefined;
            desc_text?: string | null | undefined;
            acct_code?: string | undefined;
            debit_amt?: number | undefined;
            credit_amt?: number | undefined;
            analysis_text?: string | null | undefined;
            ref_text?: string | null | undefined;
            seq_num?: number | undefined;
            tax_code?: string | null | undefined;
            tax_type?: string | null | undefined;
            tax_amt?: number | null | undefined;
            tax_per?: number | null | undefined;
            tax_net?: number | null | undefined;
            gl_acct_desc?: string | null | undefined;
            warnings?: string[] | undefined;
        }[] | undefined;
    }, {
        cmpy_code?: string | undefined;
        year_num?: number | undefined;
        period_num?: number | undefined;
        jour_code?: string | undefined;
        jour_num?: number | undefined;
        warnings?: string[] | undefined;
        jour_date?: string | null | undefined;
        post_flag?: boolean | undefined;
        com1_text?: string | null | undefined;
        com2_text?: string | null | undefined;
        control_amt?: number | undefined;
        bank_code?: string | null | undefined;
        bank_desc?: string | null | undefined;
        bank_gl_acct?: string | null | undefined;
        gl_lines?: {
            ref_num?: number | null | undefined;
            desc_text?: string | null | undefined;
            acct_code?: string | undefined;
            debit_amt?: number | undefined;
            credit_amt?: number | undefined;
            analysis_text?: string | null | undefined;
            ref_text?: string | null | undefined;
            seq_num?: number | undefined;
            tax_code?: string | null | undefined;
            tax_type?: string | null | undefined;
            tax_amt?: number | null | undefined;
            tax_per?: number | null | undefined;
            tax_net?: number | null | undefined;
            gl_acct_desc?: string | null | undefined;
            warnings?: string[] | undefined;
        }[] | undefined;
    }>;
    TaxJournalLine: z.ZodObject<{
        acct_code: z.ZodString;
        ref_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        analysis_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        desc_text: z.ZodString;
        debit_amt: z.ZodNumber;
        credit_amt: z.ZodNumber;
        tax_type: z.ZodString;
        tax_code: z.ZodString;
        tax_amt: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        desc_text: string;
        acct_code: string;
        debit_amt: number;
        credit_amt: number;
        tax_code: string;
        tax_type: string;
        analysis_text?: string | null | undefined;
        ref_text?: string | null | undefined;
        tax_amt?: number | undefined;
    }, {
        desc_text: string;
        acct_code: string;
        debit_amt: number;
        credit_amt: number;
        tax_code: string;
        tax_type: string;
        analysis_text?: string | null | undefined;
        ref_text?: string | null | undefined;
        tax_amt?: number | undefined;
    }>;
    CommonTaxJournalRequest: z.ZodObject<{
        jour_date: z.ZodString;
        year_num: z.ZodNumber;
        period_num: z.ZodNumber;
        com1_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        com2_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        control_amt: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        gl_lines: z.ZodOptional<z.ZodArray<z.ZodObject<{
            acct_code: z.ZodString;
            ref_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            analysis_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            desc_text: z.ZodString;
            debit_amt: z.ZodNumber;
            credit_amt: z.ZodNumber;
            tax_type: z.ZodString;
            tax_code: z.ZodString;
            tax_amt: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            desc_text: string;
            acct_code: string;
            debit_amt: number;
            credit_amt: number;
            tax_code: string;
            tax_type: string;
            analysis_text?: string | null | undefined;
            ref_text?: string | null | undefined;
            tax_amt?: number | undefined;
        }, {
            desc_text: string;
            acct_code: string;
            debit_amt: number;
            credit_amt: number;
            tax_code: string;
            tax_type: string;
            analysis_text?: string | null | undefined;
            ref_text?: string | null | undefined;
            tax_amt?: number | undefined;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        year_num: number;
        period_num: number;
        jour_date: string;
        com1_text?: string | null | undefined;
        com2_text?: string | null | undefined;
        control_amt?: number | null | undefined;
        gl_lines?: {
            desc_text: string;
            acct_code: string;
            debit_amt: number;
            credit_amt: number;
            tax_code: string;
            tax_type: string;
            analysis_text?: string | null | undefined;
            ref_text?: string | null | undefined;
            tax_amt?: number | undefined;
        }[] | undefined;
    }, {
        year_num: number;
        period_num: number;
        jour_date: string;
        com1_text?: string | null | undefined;
        com2_text?: string | null | undefined;
        control_amt?: number | null | undefined;
        gl_lines?: {
            desc_text: string;
            acct_code: string;
            debit_amt: number;
            credit_amt: number;
            tax_code: string;
            tax_type: string;
            analysis_text?: string | null | undefined;
            ref_text?: string | null | undefined;
            tax_amt?: number | undefined;
        }[] | undefined;
    }>;
    AddTaxJournalRequest: z.ZodIntersection<z.ZodObject<{
        jour_date: z.ZodString;
        year_num: z.ZodNumber;
        period_num: z.ZodNumber;
        com1_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        com2_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        control_amt: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        gl_lines: z.ZodOptional<z.ZodArray<z.ZodObject<{
            acct_code: z.ZodString;
            ref_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            analysis_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            desc_text: z.ZodString;
            debit_amt: z.ZodNumber;
            credit_amt: z.ZodNumber;
            tax_type: z.ZodString;
            tax_code: z.ZodString;
            tax_amt: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            desc_text: string;
            acct_code: string;
            debit_amt: number;
            credit_amt: number;
            tax_code: string;
            tax_type: string;
            analysis_text?: string | null | undefined;
            ref_text?: string | null | undefined;
            tax_amt?: number | undefined;
        }, {
            desc_text: string;
            acct_code: string;
            debit_amt: number;
            credit_amt: number;
            tax_code: string;
            tax_type: string;
            analysis_text?: string | null | undefined;
            ref_text?: string | null | undefined;
            tax_amt?: number | undefined;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        year_num: number;
        period_num: number;
        jour_date: string;
        com1_text?: string | null | undefined;
        com2_text?: string | null | undefined;
        control_amt?: number | null | undefined;
        gl_lines?: {
            desc_text: string;
            acct_code: string;
            debit_amt: number;
            credit_amt: number;
            tax_code: string;
            tax_type: string;
            analysis_text?: string | null | undefined;
            ref_text?: string | null | undefined;
            tax_amt?: number | undefined;
        }[] | undefined;
    }, {
        year_num: number;
        period_num: number;
        jour_date: string;
        com1_text?: string | null | undefined;
        com2_text?: string | null | undefined;
        control_amt?: number | null | undefined;
        gl_lines?: {
            desc_text: string;
            acct_code: string;
            debit_amt: number;
            credit_amt: number;
            tax_code: string;
            tax_type: string;
            analysis_text?: string | null | undefined;
            ref_text?: string | null | undefined;
            tax_amt?: number | undefined;
        }[] | undefined;
    }>, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
    AddTaxJournalResponse: z.ZodObject<{
        cmpy_code: z.ZodOptional<z.ZodString>;
        jour_num: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        cmpy_code?: string | undefined;
        jour_num?: number | undefined;
    }, {
        cmpy_code?: string | undefined;
        jour_num?: number | undefined;
    }>;
    UpdateTaxJournalRequest: z.ZodIntersection<z.ZodObject<{
        jour_date: z.ZodString;
        year_num: z.ZodNumber;
        period_num: z.ZodNumber;
        com1_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        com2_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        control_amt: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        gl_lines: z.ZodOptional<z.ZodArray<z.ZodObject<{
            acct_code: z.ZodString;
            ref_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            analysis_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            desc_text: z.ZodString;
            debit_amt: z.ZodNumber;
            credit_amt: z.ZodNumber;
            tax_type: z.ZodString;
            tax_code: z.ZodString;
            tax_amt: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            desc_text: string;
            acct_code: string;
            debit_amt: number;
            credit_amt: number;
            tax_code: string;
            tax_type: string;
            analysis_text?: string | null | undefined;
            ref_text?: string | null | undefined;
            tax_amt?: number | undefined;
        }, {
            desc_text: string;
            acct_code: string;
            debit_amt: number;
            credit_amt: number;
            tax_code: string;
            tax_type: string;
            analysis_text?: string | null | undefined;
            ref_text?: string | null | undefined;
            tax_amt?: number | undefined;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        year_num: number;
        period_num: number;
        jour_date: string;
        com1_text?: string | null | undefined;
        com2_text?: string | null | undefined;
        control_amt?: number | null | undefined;
        gl_lines?: {
            desc_text: string;
            acct_code: string;
            debit_amt: number;
            credit_amt: number;
            tax_code: string;
            tax_type: string;
            analysis_text?: string | null | undefined;
            ref_text?: string | null | undefined;
            tax_amt?: number | undefined;
        }[] | undefined;
    }, {
        year_num: number;
        period_num: number;
        jour_date: string;
        com1_text?: string | null | undefined;
        com2_text?: string | null | undefined;
        control_amt?: number | null | undefined;
        gl_lines?: {
            desc_text: string;
            acct_code: string;
            debit_amt: number;
            credit_amt: number;
            tax_code: string;
            tax_type: string;
            analysis_text?: string | null | undefined;
            ref_text?: string | null | undefined;
            tax_amt?: number | undefined;
        }[] | undefined;
    }>, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
    StandardJournalLine: z.ZodObject<{
        acct_code: z.ZodString;
        ref_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        analysis_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        desc_text: z.ZodString;
        debit_amt: z.ZodNumber;
        credit_amt: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        desc_text: string;
        acct_code: string;
        debit_amt: number;
        credit_amt: number;
        analysis_text?: string | null | undefined;
        ref_text?: string | null | undefined;
    }, {
        desc_text: string;
        acct_code: string;
        debit_amt: number;
        credit_amt: number;
        analysis_text?: string | null | undefined;
        ref_text?: string | null | undefined;
    }>;
    CommonGeneralJournalRequest: z.ZodObject<{
        jour_code: z.ZodString;
        jour_date: z.ZodString;
        year_num: z.ZodNumber;
        period_num: z.ZodNumber;
        com1_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        com2_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        control_amt: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        gl_lines: z.ZodOptional<z.ZodArray<z.ZodObject<{
            acct_code: z.ZodString;
            ref_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            analysis_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            desc_text: z.ZodString;
            debit_amt: z.ZodNumber;
            credit_amt: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            desc_text: string;
            acct_code: string;
            debit_amt: number;
            credit_amt: number;
            analysis_text?: string | null | undefined;
            ref_text?: string | null | undefined;
        }, {
            desc_text: string;
            acct_code: string;
            debit_amt: number;
            credit_amt: number;
            analysis_text?: string | null | undefined;
            ref_text?: string | null | undefined;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        year_num: number;
        period_num: number;
        jour_code: string;
        jour_date: string;
        com1_text?: string | null | undefined;
        com2_text?: string | null | undefined;
        control_amt?: number | null | undefined;
        gl_lines?: {
            desc_text: string;
            acct_code: string;
            debit_amt: number;
            credit_amt: number;
            analysis_text?: string | null | undefined;
            ref_text?: string | null | undefined;
        }[] | undefined;
    }, {
        year_num: number;
        period_num: number;
        jour_code: string;
        jour_date: string;
        com1_text?: string | null | undefined;
        com2_text?: string | null | undefined;
        control_amt?: number | null | undefined;
        gl_lines?: {
            desc_text: string;
            acct_code: string;
            debit_amt: number;
            credit_amt: number;
            analysis_text?: string | null | undefined;
            ref_text?: string | null | undefined;
        }[] | undefined;
    }>;
    AddGeneralJournalRequest: z.ZodIntersection<z.ZodObject<{
        jour_code: z.ZodString;
        jour_date: z.ZodString;
        year_num: z.ZodNumber;
        period_num: z.ZodNumber;
        com1_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        com2_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        control_amt: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        gl_lines: z.ZodOptional<z.ZodArray<z.ZodObject<{
            acct_code: z.ZodString;
            ref_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            analysis_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            desc_text: z.ZodString;
            debit_amt: z.ZodNumber;
            credit_amt: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            desc_text: string;
            acct_code: string;
            debit_amt: number;
            credit_amt: number;
            analysis_text?: string | null | undefined;
            ref_text?: string | null | undefined;
        }, {
            desc_text: string;
            acct_code: string;
            debit_amt: number;
            credit_amt: number;
            analysis_text?: string | null | undefined;
            ref_text?: string | null | undefined;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        year_num: number;
        period_num: number;
        jour_code: string;
        jour_date: string;
        com1_text?: string | null | undefined;
        com2_text?: string | null | undefined;
        control_amt?: number | null | undefined;
        gl_lines?: {
            desc_text: string;
            acct_code: string;
            debit_amt: number;
            credit_amt: number;
            analysis_text?: string | null | undefined;
            ref_text?: string | null | undefined;
        }[] | undefined;
    }, {
        year_num: number;
        period_num: number;
        jour_code: string;
        jour_date: string;
        com1_text?: string | null | undefined;
        com2_text?: string | null | undefined;
        control_amt?: number | null | undefined;
        gl_lines?: {
            desc_text: string;
            acct_code: string;
            debit_amt: number;
            credit_amt: number;
            analysis_text?: string | null | undefined;
            ref_text?: string | null | undefined;
        }[] | undefined;
    }>, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
    AddGeneralJournalResponse: z.ZodObject<{
        cmpy_code: z.ZodOptional<z.ZodString>;
        jour_num: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        cmpy_code?: string | undefined;
        jour_num?: number | undefined;
    }, {
        cmpy_code?: string | undefined;
        jour_num?: number | undefined;
    }>;
    UpdateGeneralJournalRequest: z.ZodIntersection<z.ZodObject<{
        jour_code: z.ZodString;
        jour_date: z.ZodString;
        year_num: z.ZodNumber;
        period_num: z.ZodNumber;
        com1_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        com2_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        control_amt: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        gl_lines: z.ZodOptional<z.ZodArray<z.ZodObject<{
            acct_code: z.ZodString;
            ref_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            analysis_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            desc_text: z.ZodString;
            debit_amt: z.ZodNumber;
            credit_amt: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            desc_text: string;
            acct_code: string;
            debit_amt: number;
            credit_amt: number;
            analysis_text?: string | null | undefined;
            ref_text?: string | null | undefined;
        }, {
            desc_text: string;
            acct_code: string;
            debit_amt: number;
            credit_amt: number;
            analysis_text?: string | null | undefined;
            ref_text?: string | null | undefined;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        year_num: number;
        period_num: number;
        jour_code: string;
        jour_date: string;
        com1_text?: string | null | undefined;
        com2_text?: string | null | undefined;
        control_amt?: number | null | undefined;
        gl_lines?: {
            desc_text: string;
            acct_code: string;
            debit_amt: number;
            credit_amt: number;
            analysis_text?: string | null | undefined;
            ref_text?: string | null | undefined;
        }[] | undefined;
    }, {
        year_num: number;
        period_num: number;
        jour_code: string;
        jour_date: string;
        com1_text?: string | null | undefined;
        com2_text?: string | null | undefined;
        control_amt?: number | null | undefined;
        gl_lines?: {
            desc_text: string;
            acct_code: string;
            debit_amt: number;
            credit_amt: number;
            analysis_text?: string | null | undefined;
            ref_text?: string | null | undefined;
        }[] | undefined;
    }>, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
    EmployeeResponse: z.ZodObject<{
        add1_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        add2_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        alt_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        birth_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        cessation_type: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        city_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        cmpy_code: z.ZodOptional<z.ZodString>;
        country_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        country_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        deceased_flg: z.ZodOptional<z.ZodBoolean>;
        driv_lic_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        e_mail: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        emp_code: z.ZodOptional<z.ZodString>;
        first_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        gender: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        indig_status: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        initials: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        main_activity: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        marital_stat_flag: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        mob_phone: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        nok_add1_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        nok_add2_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        nok_city_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        nok_country_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        nok_name_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        nok_phone_h_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        nok_phone_w_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        nok_post_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        nok_relat_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        nok_state_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        other_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        phone_h_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        phone_w_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        position_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        position_title: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        post_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        preferred_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        previous_payroll_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        school_email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        sms_flg: z.ZodOptional<z.ZodBoolean>;
        start_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        state_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        status_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        surname: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        suffix: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        supervisor_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        supervisor2_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        tch_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        term_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        title: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        update_on: z.ZodOptional<z.ZodString>;
        vend_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        cmpy_code?: string | undefined;
        title?: string | null | undefined;
        gender?: string | null | undefined;
        deceased_flg?: boolean | undefined;
        first_name?: string | null | undefined;
        initials?: string | null | undefined;
        preferred_name?: string | null | undefined;
        suffix?: string | null | undefined;
        surname?: string | null | undefined;
        post_code?: string | null | undefined;
        alt_id?: string | null | undefined;
        e_mail?: string | null | undefined;
        mob_phone?: string | null | undefined;
        other_name?: string | null | undefined;
        sms_flg?: boolean | undefined;
        update_on?: string | undefined;
        emp_code?: string | undefined;
        start_date?: string | null | undefined;
        add1_text?: string | null | undefined;
        add2_text?: string | null | undefined;
        birth_date?: string | null | undefined;
        cessation_type?: string | null | undefined;
        city_text?: string | null | undefined;
        country_code?: string | null | undefined;
        country_text?: string | null | undefined;
        driv_lic_text?: string | null | undefined;
        indig_status?: string | null | undefined;
        main_activity?: string | null | undefined;
        marital_stat_flag?: string | null | undefined;
        nok_add1_text?: string | null | undefined;
        nok_add2_text?: string | null | undefined;
        nok_city_text?: string | null | undefined;
        nok_country_text?: string | null | undefined;
        nok_name_text?: string | null | undefined;
        nok_phone_h_text?: string | null | undefined;
        nok_phone_w_text?: string | null | undefined;
        nok_post_code?: string | null | undefined;
        nok_relat_text?: string | null | undefined;
        nok_state_text?: string | null | undefined;
        phone_h_text?: string | null | undefined;
        phone_w_text?: string | null | undefined;
        position_text?: string | null | undefined;
        position_title?: string | null | undefined;
        previous_payroll_id?: string | null | undefined;
        school_email?: string | null | undefined;
        state_text?: string | null | undefined;
        status_text?: string | null | undefined;
        supervisor_code?: string | null | undefined;
        supervisor2_code?: string | null | undefined;
        tch_code?: string | null | undefined;
        term_date?: string | null | undefined;
        vend_code?: string | null | undefined;
    }, {
        cmpy_code?: string | undefined;
        title?: string | null | undefined;
        gender?: string | null | undefined;
        deceased_flg?: boolean | undefined;
        first_name?: string | null | undefined;
        initials?: string | null | undefined;
        preferred_name?: string | null | undefined;
        suffix?: string | null | undefined;
        surname?: string | null | undefined;
        post_code?: string | null | undefined;
        alt_id?: string | null | undefined;
        e_mail?: string | null | undefined;
        mob_phone?: string | null | undefined;
        other_name?: string | null | undefined;
        sms_flg?: boolean | undefined;
        update_on?: string | undefined;
        emp_code?: string | undefined;
        start_date?: string | null | undefined;
        add1_text?: string | null | undefined;
        add2_text?: string | null | undefined;
        birth_date?: string | null | undefined;
        cessation_type?: string | null | undefined;
        city_text?: string | null | undefined;
        country_code?: string | null | undefined;
        country_text?: string | null | undefined;
        driv_lic_text?: string | null | undefined;
        indig_status?: string | null | undefined;
        main_activity?: string | null | undefined;
        marital_stat_flag?: string | null | undefined;
        nok_add1_text?: string | null | undefined;
        nok_add2_text?: string | null | undefined;
        nok_city_text?: string | null | undefined;
        nok_country_text?: string | null | undefined;
        nok_name_text?: string | null | undefined;
        nok_phone_h_text?: string | null | undefined;
        nok_phone_w_text?: string | null | undefined;
        nok_post_code?: string | null | undefined;
        nok_relat_text?: string | null | undefined;
        nok_state_text?: string | null | undefined;
        phone_h_text?: string | null | undefined;
        phone_w_text?: string | null | undefined;
        position_text?: string | null | undefined;
        position_title?: string | null | undefined;
        previous_payroll_id?: string | null | undefined;
        school_email?: string | null | undefined;
        state_text?: string | null | undefined;
        status_text?: string | null | undefined;
        supervisor_code?: string | null | undefined;
        supervisor2_code?: string | null | undefined;
        tch_code?: string | null | undefined;
        term_date?: string | null | undefined;
        vend_code?: string | null | undefined;
    }>;
    CommonEmployeeRequest: z.ZodObject<{
        add1_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        add2_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        alt_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        birth_date: z.ZodString;
        cessation_type: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        city_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        country_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        country_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        deceased_flg: z.ZodOptional<z.ZodBoolean>;
        driv_lic_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        e_mail: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        emp_code: z.ZodString;
        first_name: z.ZodString;
        gender: z.ZodString;
        indig_status: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        initials: z.ZodString;
        main_activity: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        marital_stat_flag: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        mob_phone: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        nok_add1_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        nok_add2_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        nok_city_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        nok_country_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        nok_name_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        nok_phone_h_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        nok_phone_w_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        nok_post_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        nok_relat_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        nok_state_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        other_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        phone_h_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        phone_w_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        position_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        position_title: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        post_code: z.ZodString;
        preferred_name: z.ZodString;
        previous_payroll_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        school_email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        sms_flg: z.ZodOptional<z.ZodBoolean>;
        start_date: z.ZodString;
        state_text: z.ZodString;
        status_text: z.ZodString;
        surname: z.ZodString;
        suffix: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        supervisor_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        supervisor2_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        term_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        title: z.ZodString;
        vend_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        title: string;
        gender: string;
        first_name: string;
        initials: string;
        preferred_name: string;
        surname: string;
        post_code: string;
        emp_code: string;
        start_date: string;
        birth_date: string;
        state_text: string;
        status_text: string;
        deceased_flg?: boolean | undefined;
        suffix?: string | null | undefined;
        alt_id?: string | null | undefined;
        e_mail?: string | null | undefined;
        mob_phone?: string | null | undefined;
        other_name?: string | null | undefined;
        sms_flg?: boolean | undefined;
        add1_text?: string | null | undefined;
        add2_text?: string | null | undefined;
        cessation_type?: string | null | undefined;
        city_text?: string | null | undefined;
        country_code?: string | null | undefined;
        country_text?: string | null | undefined;
        driv_lic_text?: string | null | undefined;
        indig_status?: string | null | undefined;
        main_activity?: string | null | undefined;
        marital_stat_flag?: string | null | undefined;
        nok_add1_text?: string | null | undefined;
        nok_add2_text?: string | null | undefined;
        nok_city_text?: string | null | undefined;
        nok_country_text?: string | null | undefined;
        nok_name_text?: string | null | undefined;
        nok_phone_h_text?: string | null | undefined;
        nok_phone_w_text?: string | null | undefined;
        nok_post_code?: string | null | undefined;
        nok_relat_text?: string | null | undefined;
        nok_state_text?: string | null | undefined;
        phone_h_text?: string | null | undefined;
        phone_w_text?: string | null | undefined;
        position_text?: string | null | undefined;
        position_title?: string | null | undefined;
        previous_payroll_id?: string | null | undefined;
        school_email?: string | null | undefined;
        supervisor_code?: string | null | undefined;
        supervisor2_code?: string | null | undefined;
        term_date?: string | null | undefined;
        vend_code?: string | null | undefined;
    }, {
        title: string;
        gender: string;
        first_name: string;
        initials: string;
        preferred_name: string;
        surname: string;
        post_code: string;
        emp_code: string;
        start_date: string;
        birth_date: string;
        state_text: string;
        status_text: string;
        deceased_flg?: boolean | undefined;
        suffix?: string | null | undefined;
        alt_id?: string | null | undefined;
        e_mail?: string | null | undefined;
        mob_phone?: string | null | undefined;
        other_name?: string | null | undefined;
        sms_flg?: boolean | undefined;
        add1_text?: string | null | undefined;
        add2_text?: string | null | undefined;
        cessation_type?: string | null | undefined;
        city_text?: string | null | undefined;
        country_code?: string | null | undefined;
        country_text?: string | null | undefined;
        driv_lic_text?: string | null | undefined;
        indig_status?: string | null | undefined;
        main_activity?: string | null | undefined;
        marital_stat_flag?: string | null | undefined;
        nok_add1_text?: string | null | undefined;
        nok_add2_text?: string | null | undefined;
        nok_city_text?: string | null | undefined;
        nok_country_text?: string | null | undefined;
        nok_name_text?: string | null | undefined;
        nok_phone_h_text?: string | null | undefined;
        nok_phone_w_text?: string | null | undefined;
        nok_post_code?: string | null | undefined;
        nok_relat_text?: string | null | undefined;
        nok_state_text?: string | null | undefined;
        phone_h_text?: string | null | undefined;
        phone_w_text?: string | null | undefined;
        position_text?: string | null | undefined;
        position_title?: string | null | undefined;
        previous_payroll_id?: string | null | undefined;
        school_email?: string | null | undefined;
        supervisor_code?: string | null | undefined;
        supervisor2_code?: string | null | undefined;
        term_date?: string | null | undefined;
        vend_code?: string | null | undefined;
    }>;
    UpdateEmployeeRequest: z.ZodIntersection<z.ZodObject<{
        add1_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        add2_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        alt_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        birth_date: z.ZodString;
        cessation_type: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        city_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        country_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        country_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        deceased_flg: z.ZodOptional<z.ZodBoolean>;
        driv_lic_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        e_mail: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        emp_code: z.ZodString;
        first_name: z.ZodString;
        gender: z.ZodString;
        indig_status: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        initials: z.ZodString;
        main_activity: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        marital_stat_flag: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        mob_phone: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        nok_add1_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        nok_add2_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        nok_city_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        nok_country_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        nok_name_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        nok_phone_h_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        nok_phone_w_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        nok_post_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        nok_relat_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        nok_state_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        other_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        phone_h_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        phone_w_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        position_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        position_title: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        post_code: z.ZodString;
        preferred_name: z.ZodString;
        previous_payroll_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        school_email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        sms_flg: z.ZodOptional<z.ZodBoolean>;
        start_date: z.ZodString;
        state_text: z.ZodString;
        status_text: z.ZodString;
        surname: z.ZodString;
        suffix: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        supervisor_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        supervisor2_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        term_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        title: z.ZodString;
        vend_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        title: string;
        gender: string;
        first_name: string;
        initials: string;
        preferred_name: string;
        surname: string;
        post_code: string;
        emp_code: string;
        start_date: string;
        birth_date: string;
        state_text: string;
        status_text: string;
        deceased_flg?: boolean | undefined;
        suffix?: string | null | undefined;
        alt_id?: string | null | undefined;
        e_mail?: string | null | undefined;
        mob_phone?: string | null | undefined;
        other_name?: string | null | undefined;
        sms_flg?: boolean | undefined;
        add1_text?: string | null | undefined;
        add2_text?: string | null | undefined;
        cessation_type?: string | null | undefined;
        city_text?: string | null | undefined;
        country_code?: string | null | undefined;
        country_text?: string | null | undefined;
        driv_lic_text?: string | null | undefined;
        indig_status?: string | null | undefined;
        main_activity?: string | null | undefined;
        marital_stat_flag?: string | null | undefined;
        nok_add1_text?: string | null | undefined;
        nok_add2_text?: string | null | undefined;
        nok_city_text?: string | null | undefined;
        nok_country_text?: string | null | undefined;
        nok_name_text?: string | null | undefined;
        nok_phone_h_text?: string | null | undefined;
        nok_phone_w_text?: string | null | undefined;
        nok_post_code?: string | null | undefined;
        nok_relat_text?: string | null | undefined;
        nok_state_text?: string | null | undefined;
        phone_h_text?: string | null | undefined;
        phone_w_text?: string | null | undefined;
        position_text?: string | null | undefined;
        position_title?: string | null | undefined;
        previous_payroll_id?: string | null | undefined;
        school_email?: string | null | undefined;
        supervisor_code?: string | null | undefined;
        supervisor2_code?: string | null | undefined;
        term_date?: string | null | undefined;
        vend_code?: string | null | undefined;
    }, {
        title: string;
        gender: string;
        first_name: string;
        initials: string;
        preferred_name: string;
        surname: string;
        post_code: string;
        emp_code: string;
        start_date: string;
        birth_date: string;
        state_text: string;
        status_text: string;
        deceased_flg?: boolean | undefined;
        suffix?: string | null | undefined;
        alt_id?: string | null | undefined;
        e_mail?: string | null | undefined;
        mob_phone?: string | null | undefined;
        other_name?: string | null | undefined;
        sms_flg?: boolean | undefined;
        add1_text?: string | null | undefined;
        add2_text?: string | null | undefined;
        cessation_type?: string | null | undefined;
        city_text?: string | null | undefined;
        country_code?: string | null | undefined;
        country_text?: string | null | undefined;
        driv_lic_text?: string | null | undefined;
        indig_status?: string | null | undefined;
        main_activity?: string | null | undefined;
        marital_stat_flag?: string | null | undefined;
        nok_add1_text?: string | null | undefined;
        nok_add2_text?: string | null | undefined;
        nok_city_text?: string | null | undefined;
        nok_country_text?: string | null | undefined;
        nok_name_text?: string | null | undefined;
        nok_phone_h_text?: string | null | undefined;
        nok_phone_w_text?: string | null | undefined;
        nok_post_code?: string | null | undefined;
        nok_relat_text?: string | null | undefined;
        nok_state_text?: string | null | undefined;
        phone_h_text?: string | null | undefined;
        phone_w_text?: string | null | undefined;
        position_text?: string | null | undefined;
        position_title?: string | null | undefined;
        previous_payroll_id?: string | null | undefined;
        school_email?: string | null | undefined;
        supervisor_code?: string | null | undefined;
        supervisor2_code?: string | null | undefined;
        term_date?: string | null | undefined;
        vend_code?: string | null | undefined;
    }>, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
    AddEmployeeRequest: z.ZodIntersection<z.ZodObject<{
        add1_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        add2_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        alt_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        birth_date: z.ZodString;
        cessation_type: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        city_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        country_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        country_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        deceased_flg: z.ZodOptional<z.ZodBoolean>;
        driv_lic_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        e_mail: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        emp_code: z.ZodString;
        first_name: z.ZodString;
        gender: z.ZodString;
        indig_status: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        initials: z.ZodString;
        main_activity: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        marital_stat_flag: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        mob_phone: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        nok_add1_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        nok_add2_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        nok_city_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        nok_country_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        nok_name_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        nok_phone_h_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        nok_phone_w_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        nok_post_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        nok_relat_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        nok_state_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        other_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        phone_h_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        phone_w_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        position_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        position_title: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        post_code: z.ZodString;
        preferred_name: z.ZodString;
        previous_payroll_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        school_email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        sms_flg: z.ZodOptional<z.ZodBoolean>;
        start_date: z.ZodString;
        state_text: z.ZodString;
        status_text: z.ZodString;
        surname: z.ZodString;
        suffix: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        supervisor_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        supervisor2_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        term_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        title: z.ZodString;
        vend_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        title: string;
        gender: string;
        first_name: string;
        initials: string;
        preferred_name: string;
        surname: string;
        post_code: string;
        emp_code: string;
        start_date: string;
        birth_date: string;
        state_text: string;
        status_text: string;
        deceased_flg?: boolean | undefined;
        suffix?: string | null | undefined;
        alt_id?: string | null | undefined;
        e_mail?: string | null | undefined;
        mob_phone?: string | null | undefined;
        other_name?: string | null | undefined;
        sms_flg?: boolean | undefined;
        add1_text?: string | null | undefined;
        add2_text?: string | null | undefined;
        cessation_type?: string | null | undefined;
        city_text?: string | null | undefined;
        country_code?: string | null | undefined;
        country_text?: string | null | undefined;
        driv_lic_text?: string | null | undefined;
        indig_status?: string | null | undefined;
        main_activity?: string | null | undefined;
        marital_stat_flag?: string | null | undefined;
        nok_add1_text?: string | null | undefined;
        nok_add2_text?: string | null | undefined;
        nok_city_text?: string | null | undefined;
        nok_country_text?: string | null | undefined;
        nok_name_text?: string | null | undefined;
        nok_phone_h_text?: string | null | undefined;
        nok_phone_w_text?: string | null | undefined;
        nok_post_code?: string | null | undefined;
        nok_relat_text?: string | null | undefined;
        nok_state_text?: string | null | undefined;
        phone_h_text?: string | null | undefined;
        phone_w_text?: string | null | undefined;
        position_text?: string | null | undefined;
        position_title?: string | null | undefined;
        previous_payroll_id?: string | null | undefined;
        school_email?: string | null | undefined;
        supervisor_code?: string | null | undefined;
        supervisor2_code?: string | null | undefined;
        term_date?: string | null | undefined;
        vend_code?: string | null | undefined;
    }, {
        title: string;
        gender: string;
        first_name: string;
        initials: string;
        preferred_name: string;
        surname: string;
        post_code: string;
        emp_code: string;
        start_date: string;
        birth_date: string;
        state_text: string;
        status_text: string;
        deceased_flg?: boolean | undefined;
        suffix?: string | null | undefined;
        alt_id?: string | null | undefined;
        e_mail?: string | null | undefined;
        mob_phone?: string | null | undefined;
        other_name?: string | null | undefined;
        sms_flg?: boolean | undefined;
        add1_text?: string | null | undefined;
        add2_text?: string | null | undefined;
        cessation_type?: string | null | undefined;
        city_text?: string | null | undefined;
        country_code?: string | null | undefined;
        country_text?: string | null | undefined;
        driv_lic_text?: string | null | undefined;
        indig_status?: string | null | undefined;
        main_activity?: string | null | undefined;
        marital_stat_flag?: string | null | undefined;
        nok_add1_text?: string | null | undefined;
        nok_add2_text?: string | null | undefined;
        nok_city_text?: string | null | undefined;
        nok_country_text?: string | null | undefined;
        nok_name_text?: string | null | undefined;
        nok_phone_h_text?: string | null | undefined;
        nok_phone_w_text?: string | null | undefined;
        nok_post_code?: string | null | undefined;
        nok_relat_text?: string | null | undefined;
        nok_state_text?: string | null | undefined;
        phone_h_text?: string | null | undefined;
        phone_w_text?: string | null | undefined;
        position_text?: string | null | undefined;
        position_title?: string | null | undefined;
        previous_payroll_id?: string | null | undefined;
        school_email?: string | null | undefined;
        supervisor_code?: string | null | undefined;
        supervisor2_code?: string | null | undefined;
        term_date?: string | null | undefined;
        vend_code?: string | null | undefined;
    }>, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
    EmployeeStandardNoteResponse: z.ZodObject<{
        cmpy_code: z.ZodOptional<z.ZodString>;
        emp_code: z.ZodOptional<z.ZodString>;
        note_cat: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        note_date: z.ZodOptional<z.ZodString>;
        note_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        note_uid: z.ZodOptional<z.ZodString>;
        has_attachment: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        cmpy_code?: string | undefined;
        note_text?: string | null | undefined;
        has_attachment?: boolean | undefined;
        note_cat?: string | null | undefined;
        note_date?: string | undefined;
        note_uid?: string | undefined;
        emp_code?: string | undefined;
    }, {
        cmpy_code?: string | undefined;
        note_text?: string | null | undefined;
        has_attachment?: boolean | undefined;
        note_cat?: string | null | undefined;
        note_date?: string | undefined;
        note_uid?: string | undefined;
        emp_code?: string | undefined;
    }>;
    CommonEmployeeStandardNoteUpdateRequest: z.ZodObject<{
        note_cat: z.ZodString;
        note_date: z.ZodString;
        note_text: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        note_text: string;
        note_cat: string;
        note_date: string;
    }, {
        note_text: string;
        note_cat: string;
        note_date: string;
    }>;
    AddEmployeeStandardNoteRequest: z.ZodIntersection<z.ZodObject<{
        note_cat: z.ZodString;
        note_date: z.ZodString;
        note_text: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        note_text: string;
        note_cat: string;
        note_date: string;
    }, {
        note_text: string;
        note_cat: string;
        note_date: string;
    }>, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
    UpdateEmployeeStandardNoteRequest: z.ZodIntersection<z.ZodObject<{
        note_cat: z.ZodString;
        note_date: z.ZodString;
        note_text: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        note_text: string;
        note_cat: string;
        note_date: string;
    }, {
        note_text: string;
        note_cat: string;
        note_date: string;
    }>, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
    EmployeeConfidentialNoteResponse: z.ZodObject<{
        cmpy_code: z.ZodOptional<z.ZodString>;
        emp_code: z.ZodOptional<z.ZodString>;
        note_cat: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        note_date: z.ZodOptional<z.ZodString>;
        note_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        note_uid: z.ZodOptional<z.ZodString>;
        has_attachment: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        cmpy_code?: string | undefined;
        note_text?: string | null | undefined;
        has_attachment?: boolean | undefined;
        note_cat?: string | null | undefined;
        note_date?: string | undefined;
        note_uid?: string | undefined;
        emp_code?: string | undefined;
    }, {
        cmpy_code?: string | undefined;
        note_text?: string | null | undefined;
        has_attachment?: boolean | undefined;
        note_cat?: string | null | undefined;
        note_date?: string | undefined;
        note_uid?: string | undefined;
        emp_code?: string | undefined;
    }>;
    CommonEmployeeConfidentialNoteUpdateRequest: z.ZodObject<{
        note_cat: z.ZodString;
        note_date: z.ZodString;
        note_text: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        note_text: string;
        note_cat: string;
        note_date: string;
    }, {
        note_text: string;
        note_cat: string;
        note_date: string;
    }>;
    AddEmployeeConfidentialNoteRequest: z.ZodIntersection<z.ZodObject<{
        note_cat: z.ZodString;
        note_date: z.ZodString;
        note_text: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        note_text: string;
        note_cat: string;
        note_date: string;
    }, {
        note_text: string;
        note_cat: string;
        note_date: string;
    }>, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
    UpdateEmployeeConfidentialNoteRequest: z.ZodIntersection<z.ZodObject<{
        note_cat: z.ZodString;
        note_date: z.ZodString;
        note_text: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        note_text: string;
        note_cat: string;
        note_date: string;
    }, {
        note_text: string;
        note_cat: string;
        note_date: string;
    }>, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
    PDActivityUDFlagResponse: z.ZodObject<{
        ud1_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud2_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud3_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud4_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud5_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        ud1_flg?: string | null | undefined;
        ud2_flg?: string | null | undefined;
        ud3_flg?: string | null | undefined;
        ud4_flg?: string | null | undefined;
        ud5_flg?: string | null | undefined;
    }, {
        ud1_flg?: string | null | undefined;
        ud2_flg?: string | null | undefined;
        ud3_flg?: string | null | undefined;
        ud4_flg?: string | null | undefined;
        ud5_flg?: string | null | undefined;
    }>;
    PDActivityUDCodeResponse: z.ZodObject<{
        ud6_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud7_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud8_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud9_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud10_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        ud6_code?: string | null | undefined;
        ud7_code?: string | null | undefined;
        ud8_code?: string | null | undefined;
        ud9_code?: string | null | undefined;
        ud10_code?: string | null | undefined;
    }, {
        ud6_code?: string | null | undefined;
        ud7_code?: string | null | undefined;
        ud8_code?: string | null | undefined;
        ud9_code?: string | null | undefined;
        ud10_code?: string | null | undefined;
    }>;
    PDActivityUDTextResponse: z.ZodObject<{
        ud11_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud12_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud13_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud14_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud15_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        ud11_text?: string | null | undefined;
        ud12_text?: string | null | undefined;
        ud13_text?: string | null | undefined;
        ud14_text?: string | null | undefined;
        ud15_text?: string | null | undefined;
    }, {
        ud11_text?: string | null | undefined;
        ud12_text?: string | null | undefined;
        ud13_text?: string | null | undefined;
        ud14_text?: string | null | undefined;
        ud15_text?: string | null | undefined;
    }>;
    PDActivityUDAttachmentResponse: z.ZodObject<{
        ud16_attachment_details: z.ZodOptional<z.ZodObject<{
            field_number: z.ZodOptional<z.ZodNumber>;
            files: z.ZodOptional<z.ZodArray<z.ZodObject<{
                file_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                file_size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                date_uploaded: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                attach_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }, {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            field_number?: number | undefined;
            files?: {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }[] | undefined;
        }, {
            field_number?: number | undefined;
            files?: {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }[] | undefined;
        }>>;
        ud17_attachment_details: z.ZodOptional<z.ZodObject<{
            field_number: z.ZodOptional<z.ZodNumber>;
            files: z.ZodOptional<z.ZodArray<z.ZodObject<{
                file_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                file_size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                date_uploaded: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                attach_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }, {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            field_number?: number | undefined;
            files?: {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }[] | undefined;
        }, {
            field_number?: number | undefined;
            files?: {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }[] | undefined;
        }>>;
        ud18_attachment_details: z.ZodOptional<z.ZodObject<{
            field_number: z.ZodOptional<z.ZodNumber>;
            files: z.ZodOptional<z.ZodArray<z.ZodObject<{
                file_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                file_size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                date_uploaded: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                attach_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }, {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            field_number?: number | undefined;
            files?: {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }[] | undefined;
        }, {
            field_number?: number | undefined;
            files?: {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }[] | undefined;
        }>>;
        ud19_attachment_details: z.ZodOptional<z.ZodObject<{
            field_number: z.ZodOptional<z.ZodNumber>;
            files: z.ZodOptional<z.ZodArray<z.ZodObject<{
                file_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                file_size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                date_uploaded: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                attach_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }, {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            field_number?: number | undefined;
            files?: {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }[] | undefined;
        }, {
            field_number?: number | undefined;
            files?: {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }[] | undefined;
        }>>;
        ud20_attachment_details: z.ZodOptional<z.ZodObject<{
            field_number: z.ZodOptional<z.ZodNumber>;
            files: z.ZodOptional<z.ZodArray<z.ZodObject<{
                file_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                file_size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                date_uploaded: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                attach_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }, {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            field_number?: number | undefined;
            files?: {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }[] | undefined;
        }, {
            field_number?: number | undefined;
            files?: {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }[] | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        ud16_attachment_details?: {
            field_number?: number | undefined;
            files?: {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }[] | undefined;
        } | undefined;
        ud17_attachment_details?: {
            field_number?: number | undefined;
            files?: {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }[] | undefined;
        } | undefined;
        ud18_attachment_details?: {
            field_number?: number | undefined;
            files?: {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }[] | undefined;
        } | undefined;
        ud19_attachment_details?: {
            field_number?: number | undefined;
            files?: {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }[] | undefined;
        } | undefined;
        ud20_attachment_details?: {
            field_number?: number | undefined;
            files?: {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }[] | undefined;
        } | undefined;
    }, {
        ud16_attachment_details?: {
            field_number?: number | undefined;
            files?: {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }[] | undefined;
        } | undefined;
        ud17_attachment_details?: {
            field_number?: number | undefined;
            files?: {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }[] | undefined;
        } | undefined;
        ud18_attachment_details?: {
            field_number?: number | undefined;
            files?: {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }[] | undefined;
        } | undefined;
        ud19_attachment_details?: {
            field_number?: number | undefined;
            files?: {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }[] | undefined;
        } | undefined;
        ud20_attachment_details?: {
            field_number?: number | undefined;
            files?: {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }[] | undefined;
        } | undefined;
    }>;
    PDUDFieldsResponse: z.ZodObject<{
        ud_flags: z.ZodOptional<z.ZodObject<{
            ud1_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud2_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud3_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud4_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud5_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            ud1_flg?: string | null | undefined;
            ud2_flg?: string | null | undefined;
            ud3_flg?: string | null | undefined;
            ud4_flg?: string | null | undefined;
            ud5_flg?: string | null | undefined;
        }, {
            ud1_flg?: string | null | undefined;
            ud2_flg?: string | null | undefined;
            ud3_flg?: string | null | undefined;
            ud4_flg?: string | null | undefined;
            ud5_flg?: string | null | undefined;
        }>>;
        ud_codes: z.ZodOptional<z.ZodObject<{
            ud6_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud7_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud8_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud9_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud10_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            ud6_code?: string | null | undefined;
            ud7_code?: string | null | undefined;
            ud8_code?: string | null | undefined;
            ud9_code?: string | null | undefined;
            ud10_code?: string | null | undefined;
        }, {
            ud6_code?: string | null | undefined;
            ud7_code?: string | null | undefined;
            ud8_code?: string | null | undefined;
            ud9_code?: string | null | undefined;
            ud10_code?: string | null | undefined;
        }>>;
        ud_text: z.ZodOptional<z.ZodObject<{
            ud11_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud12_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud13_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud14_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud15_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            ud11_text?: string | null | undefined;
            ud12_text?: string | null | undefined;
            ud13_text?: string | null | undefined;
            ud14_text?: string | null | undefined;
            ud15_text?: string | null | undefined;
        }, {
            ud11_text?: string | null | undefined;
            ud12_text?: string | null | undefined;
            ud13_text?: string | null | undefined;
            ud14_text?: string | null | undefined;
            ud15_text?: string | null | undefined;
        }>>;
        ud_attachments: z.ZodOptional<z.ZodObject<{
            ud16_attachment_details: z.ZodOptional<z.ZodObject<{
                field_number: z.ZodOptional<z.ZodNumber>;
                files: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    file_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    file_size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                    date_uploaded: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    attach_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                }, "strip", z.ZodTypeAny, {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }, {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            }, {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            }>>;
            ud17_attachment_details: z.ZodOptional<z.ZodObject<{
                field_number: z.ZodOptional<z.ZodNumber>;
                files: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    file_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    file_size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                    date_uploaded: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    attach_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                }, "strip", z.ZodTypeAny, {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }, {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            }, {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            }>>;
            ud18_attachment_details: z.ZodOptional<z.ZodObject<{
                field_number: z.ZodOptional<z.ZodNumber>;
                files: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    file_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    file_size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                    date_uploaded: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    attach_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                }, "strip", z.ZodTypeAny, {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }, {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            }, {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            }>>;
            ud19_attachment_details: z.ZodOptional<z.ZodObject<{
                field_number: z.ZodOptional<z.ZodNumber>;
                files: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    file_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    file_size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                    date_uploaded: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    attach_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                }, "strip", z.ZodTypeAny, {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }, {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            }, {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            }>>;
            ud20_attachment_details: z.ZodOptional<z.ZodObject<{
                field_number: z.ZodOptional<z.ZodNumber>;
                files: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    file_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    file_size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                    date_uploaded: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    attach_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                }, "strip", z.ZodTypeAny, {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }, {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            }, {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            ud16_attachment_details?: {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            } | undefined;
            ud17_attachment_details?: {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            } | undefined;
            ud18_attachment_details?: {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            } | undefined;
            ud19_attachment_details?: {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            } | undefined;
            ud20_attachment_details?: {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            } | undefined;
        }, {
            ud16_attachment_details?: {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            } | undefined;
            ud17_attachment_details?: {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            } | undefined;
            ud18_attachment_details?: {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            } | undefined;
            ud19_attachment_details?: {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            } | undefined;
            ud20_attachment_details?: {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            } | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        ud_flags?: {
            ud1_flg?: string | null | undefined;
            ud2_flg?: string | null | undefined;
            ud3_flg?: string | null | undefined;
            ud4_flg?: string | null | undefined;
            ud5_flg?: string | null | undefined;
        } | undefined;
        ud_codes?: {
            ud6_code?: string | null | undefined;
            ud7_code?: string | null | undefined;
            ud8_code?: string | null | undefined;
            ud9_code?: string | null | undefined;
            ud10_code?: string | null | undefined;
        } | undefined;
        ud_text?: {
            ud11_text?: string | null | undefined;
            ud12_text?: string | null | undefined;
            ud13_text?: string | null | undefined;
            ud14_text?: string | null | undefined;
            ud15_text?: string | null | undefined;
        } | undefined;
        ud_attachments?: {
            ud16_attachment_details?: {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            } | undefined;
            ud17_attachment_details?: {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            } | undefined;
            ud18_attachment_details?: {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            } | undefined;
            ud19_attachment_details?: {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            } | undefined;
            ud20_attachment_details?: {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            } | undefined;
        } | undefined;
    }, {
        ud_flags?: {
            ud1_flg?: string | null | undefined;
            ud2_flg?: string | null | undefined;
            ud3_flg?: string | null | undefined;
            ud4_flg?: string | null | undefined;
            ud5_flg?: string | null | undefined;
        } | undefined;
        ud_codes?: {
            ud6_code?: string | null | undefined;
            ud7_code?: string | null | undefined;
            ud8_code?: string | null | undefined;
            ud9_code?: string | null | undefined;
            ud10_code?: string | null | undefined;
        } | undefined;
        ud_text?: {
            ud11_text?: string | null | undefined;
            ud12_text?: string | null | undefined;
            ud13_text?: string | null | undefined;
            ud14_text?: string | null | undefined;
            ud15_text?: string | null | undefined;
        } | undefined;
        ud_attachments?: {
            ud16_attachment_details?: {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            } | undefined;
            ud17_attachment_details?: {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            } | undefined;
            ud18_attachment_details?: {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            } | undefined;
            ud19_attachment_details?: {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            } | undefined;
            ud20_attachment_details?: {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            } | undefined;
        } | undefined;
    }>;
    EmployeePDActivityResponse: z.ZodObject<{
        cmpy_code: z.ZodOptional<z.ZodString>;
        cost_amt: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        duration: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        emp_code: z.ZodOptional<z.ZodString>;
        finish_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        other_amt: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        pd_prov_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        pd_stat_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        pd_type_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        pdact_num: z.ZodOptional<z.ZodNumber>;
        pdact_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        start_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        updated_on: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud_fields: z.ZodOptional<z.ZodObject<{
            ud_flags: z.ZodOptional<z.ZodObject<{
                ud1_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud2_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud3_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud4_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud5_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                ud1_flg?: string | null | undefined;
                ud2_flg?: string | null | undefined;
                ud3_flg?: string | null | undefined;
                ud4_flg?: string | null | undefined;
                ud5_flg?: string | null | undefined;
            }, {
                ud1_flg?: string | null | undefined;
                ud2_flg?: string | null | undefined;
                ud3_flg?: string | null | undefined;
                ud4_flg?: string | null | undefined;
                ud5_flg?: string | null | undefined;
            }>>;
            ud_codes: z.ZodOptional<z.ZodObject<{
                ud6_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud7_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud8_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud9_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud10_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                ud6_code?: string | null | undefined;
                ud7_code?: string | null | undefined;
                ud8_code?: string | null | undefined;
                ud9_code?: string | null | undefined;
                ud10_code?: string | null | undefined;
            }, {
                ud6_code?: string | null | undefined;
                ud7_code?: string | null | undefined;
                ud8_code?: string | null | undefined;
                ud9_code?: string | null | undefined;
                ud10_code?: string | null | undefined;
            }>>;
            ud_text: z.ZodOptional<z.ZodObject<{
                ud11_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud12_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud13_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud14_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud15_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                ud11_text?: string | null | undefined;
                ud12_text?: string | null | undefined;
                ud13_text?: string | null | undefined;
                ud14_text?: string | null | undefined;
                ud15_text?: string | null | undefined;
            }, {
                ud11_text?: string | null | undefined;
                ud12_text?: string | null | undefined;
                ud13_text?: string | null | undefined;
                ud14_text?: string | null | undefined;
                ud15_text?: string | null | undefined;
            }>>;
            ud_attachments: z.ZodOptional<z.ZodObject<{
                ud16_attachment_details: z.ZodOptional<z.ZodObject<{
                    field_number: z.ZodOptional<z.ZodNumber>;
                    files: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        file_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                        file_size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                        date_uploaded: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                        attach_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    }, "strip", z.ZodTypeAny, {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }, {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                }, {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                }>>;
                ud17_attachment_details: z.ZodOptional<z.ZodObject<{
                    field_number: z.ZodOptional<z.ZodNumber>;
                    files: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        file_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                        file_size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                        date_uploaded: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                        attach_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    }, "strip", z.ZodTypeAny, {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }, {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                }, {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                }>>;
                ud18_attachment_details: z.ZodOptional<z.ZodObject<{
                    field_number: z.ZodOptional<z.ZodNumber>;
                    files: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        file_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                        file_size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                        date_uploaded: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                        attach_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    }, "strip", z.ZodTypeAny, {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }, {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                }, {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                }>>;
                ud19_attachment_details: z.ZodOptional<z.ZodObject<{
                    field_number: z.ZodOptional<z.ZodNumber>;
                    files: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        file_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                        file_size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                        date_uploaded: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                        attach_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    }, "strip", z.ZodTypeAny, {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }, {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                }, {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                }>>;
                ud20_attachment_details: z.ZodOptional<z.ZodObject<{
                    field_number: z.ZodOptional<z.ZodNumber>;
                    files: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        file_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                        file_size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                        date_uploaded: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                        attach_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    }, "strip", z.ZodTypeAny, {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }, {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                }, {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                }>>;
            }, "strip", z.ZodTypeAny, {
                ud16_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud17_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud18_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud19_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud20_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
            }, {
                ud16_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud17_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud18_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud19_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud20_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            ud_flags?: {
                ud1_flg?: string | null | undefined;
                ud2_flg?: string | null | undefined;
                ud3_flg?: string | null | undefined;
                ud4_flg?: string | null | undefined;
                ud5_flg?: string | null | undefined;
            } | undefined;
            ud_codes?: {
                ud6_code?: string | null | undefined;
                ud7_code?: string | null | undefined;
                ud8_code?: string | null | undefined;
                ud9_code?: string | null | undefined;
                ud10_code?: string | null | undefined;
            } | undefined;
            ud_text?: {
                ud11_text?: string | null | undefined;
                ud12_text?: string | null | undefined;
                ud13_text?: string | null | undefined;
                ud14_text?: string | null | undefined;
                ud15_text?: string | null | undefined;
            } | undefined;
            ud_attachments?: {
                ud16_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud17_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud18_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud19_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud20_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
            } | undefined;
        }, {
            ud_flags?: {
                ud1_flg?: string | null | undefined;
                ud2_flg?: string | null | undefined;
                ud3_flg?: string | null | undefined;
                ud4_flg?: string | null | undefined;
                ud5_flg?: string | null | undefined;
            } | undefined;
            ud_codes?: {
                ud6_code?: string | null | undefined;
                ud7_code?: string | null | undefined;
                ud8_code?: string | null | undefined;
                ud9_code?: string | null | undefined;
                ud10_code?: string | null | undefined;
            } | undefined;
            ud_text?: {
                ud11_text?: string | null | undefined;
                ud12_text?: string | null | undefined;
                ud13_text?: string | null | undefined;
                ud14_text?: string | null | undefined;
                ud15_text?: string | null | undefined;
            } | undefined;
            ud_attachments?: {
                ud16_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud17_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud18_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud19_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud20_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
            } | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        cmpy_code?: string | undefined;
        ud_fields?: {
            ud_flags?: {
                ud1_flg?: string | null | undefined;
                ud2_flg?: string | null | undefined;
                ud3_flg?: string | null | undefined;
                ud4_flg?: string | null | undefined;
                ud5_flg?: string | null | undefined;
            } | undefined;
            ud_codes?: {
                ud6_code?: string | null | undefined;
                ud7_code?: string | null | undefined;
                ud8_code?: string | null | undefined;
                ud9_code?: string | null | undefined;
                ud10_code?: string | null | undefined;
            } | undefined;
            ud_text?: {
                ud11_text?: string | null | undefined;
                ud12_text?: string | null | undefined;
                ud13_text?: string | null | undefined;
                ud14_text?: string | null | undefined;
                ud15_text?: string | null | undefined;
            } | undefined;
            ud_attachments?: {
                ud16_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud17_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud18_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud19_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud20_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        emp_code?: string | undefined;
        start_date?: string | null | undefined;
        cost_amt?: number | null | undefined;
        duration?: number | null | undefined;
        finish_date?: string | null | undefined;
        other_amt?: number | null | undefined;
        pd_prov_code?: string | null | undefined;
        pd_stat_code?: string | null | undefined;
        pd_type_code?: string | null | undefined;
        pdact_num?: number | undefined;
        pdact_text?: string | null | undefined;
        updated_on?: string | null | undefined;
    }, {
        cmpy_code?: string | undefined;
        ud_fields?: {
            ud_flags?: {
                ud1_flg?: string | null | undefined;
                ud2_flg?: string | null | undefined;
                ud3_flg?: string | null | undefined;
                ud4_flg?: string | null | undefined;
                ud5_flg?: string | null | undefined;
            } | undefined;
            ud_codes?: {
                ud6_code?: string | null | undefined;
                ud7_code?: string | null | undefined;
                ud8_code?: string | null | undefined;
                ud9_code?: string | null | undefined;
                ud10_code?: string | null | undefined;
            } | undefined;
            ud_text?: {
                ud11_text?: string | null | undefined;
                ud12_text?: string | null | undefined;
                ud13_text?: string | null | undefined;
                ud14_text?: string | null | undefined;
                ud15_text?: string | null | undefined;
            } | undefined;
            ud_attachments?: {
                ud16_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud17_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud18_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud19_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud20_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        emp_code?: string | undefined;
        start_date?: string | null | undefined;
        cost_amt?: number | null | undefined;
        duration?: number | null | undefined;
        finish_date?: string | null | undefined;
        other_amt?: number | null | undefined;
        pd_prov_code?: string | null | undefined;
        pd_stat_code?: string | null | undefined;
        pd_type_code?: string | null | undefined;
        pdact_num?: number | undefined;
        pdact_text?: string | null | undefined;
        updated_on?: string | null | undefined;
    }>;
    PDActivityUDFlagUpdateRequest: z.ZodObject<{
        ud1_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud2_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud3_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud4_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud5_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        ud1_flg?: string | null | undefined;
        ud2_flg?: string | null | undefined;
        ud3_flg?: string | null | undefined;
        ud4_flg?: string | null | undefined;
        ud5_flg?: string | null | undefined;
    }, {
        ud1_flg?: string | null | undefined;
        ud2_flg?: string | null | undefined;
        ud3_flg?: string | null | undefined;
        ud4_flg?: string | null | undefined;
        ud5_flg?: string | null | undefined;
    }>;
    PDActivityUDCodeUpdateRequest: z.ZodObject<{
        ud6_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud7_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud8_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud9_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud10_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        ud6_code?: string | null | undefined;
        ud7_code?: string | null | undefined;
        ud8_code?: string | null | undefined;
        ud9_code?: string | null | undefined;
        ud10_code?: string | null | undefined;
    }, {
        ud6_code?: string | null | undefined;
        ud7_code?: string | null | undefined;
        ud8_code?: string | null | undefined;
        ud9_code?: string | null | undefined;
        ud10_code?: string | null | undefined;
    }>;
    PDActivityUDTextUpdateRequest: z.ZodObject<{
        ud11_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud12_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud13_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud14_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud15_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        ud11_text?: string | null | undefined;
        ud12_text?: string | null | undefined;
        ud13_text?: string | null | undefined;
        ud14_text?: string | null | undefined;
        ud15_text?: string | null | undefined;
    }, {
        ud11_text?: string | null | undefined;
        ud12_text?: string | null | undefined;
        ud13_text?: string | null | undefined;
        ud14_text?: string | null | undefined;
        ud15_text?: string | null | undefined;
    }>;
    PDActivityUDFieldsRequest: z.ZodObject<{
        ud_flags: z.ZodOptional<z.ZodObject<{
            ud1_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud2_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud3_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud4_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud5_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            ud1_flg?: string | null | undefined;
            ud2_flg?: string | null | undefined;
            ud3_flg?: string | null | undefined;
            ud4_flg?: string | null | undefined;
            ud5_flg?: string | null | undefined;
        }, {
            ud1_flg?: string | null | undefined;
            ud2_flg?: string | null | undefined;
            ud3_flg?: string | null | undefined;
            ud4_flg?: string | null | undefined;
            ud5_flg?: string | null | undefined;
        }>>;
        ud_codes: z.ZodOptional<z.ZodObject<{
            ud6_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud7_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud8_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud9_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud10_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            ud6_code?: string | null | undefined;
            ud7_code?: string | null | undefined;
            ud8_code?: string | null | undefined;
            ud9_code?: string | null | undefined;
            ud10_code?: string | null | undefined;
        }, {
            ud6_code?: string | null | undefined;
            ud7_code?: string | null | undefined;
            ud8_code?: string | null | undefined;
            ud9_code?: string | null | undefined;
            ud10_code?: string | null | undefined;
        }>>;
        ud_text: z.ZodOptional<z.ZodObject<{
            ud11_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud12_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud13_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud14_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud15_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            ud11_text?: string | null | undefined;
            ud12_text?: string | null | undefined;
            ud13_text?: string | null | undefined;
            ud14_text?: string | null | undefined;
            ud15_text?: string | null | undefined;
        }, {
            ud11_text?: string | null | undefined;
            ud12_text?: string | null | undefined;
            ud13_text?: string | null | undefined;
            ud14_text?: string | null | undefined;
            ud15_text?: string | null | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        ud_flags?: {
            ud1_flg?: string | null | undefined;
            ud2_flg?: string | null | undefined;
            ud3_flg?: string | null | undefined;
            ud4_flg?: string | null | undefined;
            ud5_flg?: string | null | undefined;
        } | undefined;
        ud_codes?: {
            ud6_code?: string | null | undefined;
            ud7_code?: string | null | undefined;
            ud8_code?: string | null | undefined;
            ud9_code?: string | null | undefined;
            ud10_code?: string | null | undefined;
        } | undefined;
        ud_text?: {
            ud11_text?: string | null | undefined;
            ud12_text?: string | null | undefined;
            ud13_text?: string | null | undefined;
            ud14_text?: string | null | undefined;
            ud15_text?: string | null | undefined;
        } | undefined;
    }, {
        ud_flags?: {
            ud1_flg?: string | null | undefined;
            ud2_flg?: string | null | undefined;
            ud3_flg?: string | null | undefined;
            ud4_flg?: string | null | undefined;
            ud5_flg?: string | null | undefined;
        } | undefined;
        ud_codes?: {
            ud6_code?: string | null | undefined;
            ud7_code?: string | null | undefined;
            ud8_code?: string | null | undefined;
            ud9_code?: string | null | undefined;
            ud10_code?: string | null | undefined;
        } | undefined;
        ud_text?: {
            ud11_text?: string | null | undefined;
            ud12_text?: string | null | undefined;
            ud13_text?: string | null | undefined;
            ud14_text?: string | null | undefined;
            ud15_text?: string | null | undefined;
        } | undefined;
    }>;
    CommonEmployeePDActivityUpdateRequest: z.ZodObject<{
        cost_amt: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        duration: z.ZodNumber;
        finish_date: z.ZodString;
        other_amt: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        pd_prov_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        pd_stat_code: z.ZodString;
        pd_type_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        pdact_text: z.ZodString;
        start_date: z.ZodString;
        ud_fields: z.ZodOptional<z.ZodObject<{
            ud_flags: z.ZodOptional<z.ZodObject<{
                ud1_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud2_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud3_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud4_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud5_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                ud1_flg?: string | null | undefined;
                ud2_flg?: string | null | undefined;
                ud3_flg?: string | null | undefined;
                ud4_flg?: string | null | undefined;
                ud5_flg?: string | null | undefined;
            }, {
                ud1_flg?: string | null | undefined;
                ud2_flg?: string | null | undefined;
                ud3_flg?: string | null | undefined;
                ud4_flg?: string | null | undefined;
                ud5_flg?: string | null | undefined;
            }>>;
            ud_codes: z.ZodOptional<z.ZodObject<{
                ud6_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud7_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud8_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud9_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud10_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                ud6_code?: string | null | undefined;
                ud7_code?: string | null | undefined;
                ud8_code?: string | null | undefined;
                ud9_code?: string | null | undefined;
                ud10_code?: string | null | undefined;
            }, {
                ud6_code?: string | null | undefined;
                ud7_code?: string | null | undefined;
                ud8_code?: string | null | undefined;
                ud9_code?: string | null | undefined;
                ud10_code?: string | null | undefined;
            }>>;
            ud_text: z.ZodOptional<z.ZodObject<{
                ud11_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud12_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud13_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud14_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud15_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                ud11_text?: string | null | undefined;
                ud12_text?: string | null | undefined;
                ud13_text?: string | null | undefined;
                ud14_text?: string | null | undefined;
                ud15_text?: string | null | undefined;
            }, {
                ud11_text?: string | null | undefined;
                ud12_text?: string | null | undefined;
                ud13_text?: string | null | undefined;
                ud14_text?: string | null | undefined;
                ud15_text?: string | null | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            ud_flags?: {
                ud1_flg?: string | null | undefined;
                ud2_flg?: string | null | undefined;
                ud3_flg?: string | null | undefined;
                ud4_flg?: string | null | undefined;
                ud5_flg?: string | null | undefined;
            } | undefined;
            ud_codes?: {
                ud6_code?: string | null | undefined;
                ud7_code?: string | null | undefined;
                ud8_code?: string | null | undefined;
                ud9_code?: string | null | undefined;
                ud10_code?: string | null | undefined;
            } | undefined;
            ud_text?: {
                ud11_text?: string | null | undefined;
                ud12_text?: string | null | undefined;
                ud13_text?: string | null | undefined;
                ud14_text?: string | null | undefined;
                ud15_text?: string | null | undefined;
            } | undefined;
        }, {
            ud_flags?: {
                ud1_flg?: string | null | undefined;
                ud2_flg?: string | null | undefined;
                ud3_flg?: string | null | undefined;
                ud4_flg?: string | null | undefined;
                ud5_flg?: string | null | undefined;
            } | undefined;
            ud_codes?: {
                ud6_code?: string | null | undefined;
                ud7_code?: string | null | undefined;
                ud8_code?: string | null | undefined;
                ud9_code?: string | null | undefined;
                ud10_code?: string | null | undefined;
            } | undefined;
            ud_text?: {
                ud11_text?: string | null | undefined;
                ud12_text?: string | null | undefined;
                ud13_text?: string | null | undefined;
                ud14_text?: string | null | undefined;
                ud15_text?: string | null | undefined;
            } | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        start_date: string;
        duration: number;
        finish_date: string;
        pd_stat_code: string;
        pdact_text: string;
        ud_fields?: {
            ud_flags?: {
                ud1_flg?: string | null | undefined;
                ud2_flg?: string | null | undefined;
                ud3_flg?: string | null | undefined;
                ud4_flg?: string | null | undefined;
                ud5_flg?: string | null | undefined;
            } | undefined;
            ud_codes?: {
                ud6_code?: string | null | undefined;
                ud7_code?: string | null | undefined;
                ud8_code?: string | null | undefined;
                ud9_code?: string | null | undefined;
                ud10_code?: string | null | undefined;
            } | undefined;
            ud_text?: {
                ud11_text?: string | null | undefined;
                ud12_text?: string | null | undefined;
                ud13_text?: string | null | undefined;
                ud14_text?: string | null | undefined;
                ud15_text?: string | null | undefined;
            } | undefined;
        } | undefined;
        cost_amt?: number | null | undefined;
        other_amt?: number | null | undefined;
        pd_prov_code?: string | null | undefined;
        pd_type_code?: string | null | undefined;
    }, {
        start_date: string;
        duration: number;
        finish_date: string;
        pd_stat_code: string;
        pdact_text: string;
        ud_fields?: {
            ud_flags?: {
                ud1_flg?: string | null | undefined;
                ud2_flg?: string | null | undefined;
                ud3_flg?: string | null | undefined;
                ud4_flg?: string | null | undefined;
                ud5_flg?: string | null | undefined;
            } | undefined;
            ud_codes?: {
                ud6_code?: string | null | undefined;
                ud7_code?: string | null | undefined;
                ud8_code?: string | null | undefined;
                ud9_code?: string | null | undefined;
                ud10_code?: string | null | undefined;
            } | undefined;
            ud_text?: {
                ud11_text?: string | null | undefined;
                ud12_text?: string | null | undefined;
                ud13_text?: string | null | undefined;
                ud14_text?: string | null | undefined;
                ud15_text?: string | null | undefined;
            } | undefined;
        } | undefined;
        cost_amt?: number | null | undefined;
        other_amt?: number | null | undefined;
        pd_prov_code?: string | null | undefined;
        pd_type_code?: string | null | undefined;
    }>;
    AddEmployeePDActivityRequest: z.ZodIntersection<z.ZodObject<{
        cost_amt: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        duration: z.ZodNumber;
        finish_date: z.ZodString;
        other_amt: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        pd_prov_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        pd_stat_code: z.ZodString;
        pd_type_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        pdact_text: z.ZodString;
        start_date: z.ZodString;
        ud_fields: z.ZodOptional<z.ZodObject<{
            ud_flags: z.ZodOptional<z.ZodObject<{
                ud1_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud2_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud3_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud4_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud5_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                ud1_flg?: string | null | undefined;
                ud2_flg?: string | null | undefined;
                ud3_flg?: string | null | undefined;
                ud4_flg?: string | null | undefined;
                ud5_flg?: string | null | undefined;
            }, {
                ud1_flg?: string | null | undefined;
                ud2_flg?: string | null | undefined;
                ud3_flg?: string | null | undefined;
                ud4_flg?: string | null | undefined;
                ud5_flg?: string | null | undefined;
            }>>;
            ud_codes: z.ZodOptional<z.ZodObject<{
                ud6_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud7_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud8_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud9_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud10_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                ud6_code?: string | null | undefined;
                ud7_code?: string | null | undefined;
                ud8_code?: string | null | undefined;
                ud9_code?: string | null | undefined;
                ud10_code?: string | null | undefined;
            }, {
                ud6_code?: string | null | undefined;
                ud7_code?: string | null | undefined;
                ud8_code?: string | null | undefined;
                ud9_code?: string | null | undefined;
                ud10_code?: string | null | undefined;
            }>>;
            ud_text: z.ZodOptional<z.ZodObject<{
                ud11_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud12_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud13_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud14_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud15_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                ud11_text?: string | null | undefined;
                ud12_text?: string | null | undefined;
                ud13_text?: string | null | undefined;
                ud14_text?: string | null | undefined;
                ud15_text?: string | null | undefined;
            }, {
                ud11_text?: string | null | undefined;
                ud12_text?: string | null | undefined;
                ud13_text?: string | null | undefined;
                ud14_text?: string | null | undefined;
                ud15_text?: string | null | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            ud_flags?: {
                ud1_flg?: string | null | undefined;
                ud2_flg?: string | null | undefined;
                ud3_flg?: string | null | undefined;
                ud4_flg?: string | null | undefined;
                ud5_flg?: string | null | undefined;
            } | undefined;
            ud_codes?: {
                ud6_code?: string | null | undefined;
                ud7_code?: string | null | undefined;
                ud8_code?: string | null | undefined;
                ud9_code?: string | null | undefined;
                ud10_code?: string | null | undefined;
            } | undefined;
            ud_text?: {
                ud11_text?: string | null | undefined;
                ud12_text?: string | null | undefined;
                ud13_text?: string | null | undefined;
                ud14_text?: string | null | undefined;
                ud15_text?: string | null | undefined;
            } | undefined;
        }, {
            ud_flags?: {
                ud1_flg?: string | null | undefined;
                ud2_flg?: string | null | undefined;
                ud3_flg?: string | null | undefined;
                ud4_flg?: string | null | undefined;
                ud5_flg?: string | null | undefined;
            } | undefined;
            ud_codes?: {
                ud6_code?: string | null | undefined;
                ud7_code?: string | null | undefined;
                ud8_code?: string | null | undefined;
                ud9_code?: string | null | undefined;
                ud10_code?: string | null | undefined;
            } | undefined;
            ud_text?: {
                ud11_text?: string | null | undefined;
                ud12_text?: string | null | undefined;
                ud13_text?: string | null | undefined;
                ud14_text?: string | null | undefined;
                ud15_text?: string | null | undefined;
            } | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        start_date: string;
        duration: number;
        finish_date: string;
        pd_stat_code: string;
        pdact_text: string;
        ud_fields?: {
            ud_flags?: {
                ud1_flg?: string | null | undefined;
                ud2_flg?: string | null | undefined;
                ud3_flg?: string | null | undefined;
                ud4_flg?: string | null | undefined;
                ud5_flg?: string | null | undefined;
            } | undefined;
            ud_codes?: {
                ud6_code?: string | null | undefined;
                ud7_code?: string | null | undefined;
                ud8_code?: string | null | undefined;
                ud9_code?: string | null | undefined;
                ud10_code?: string | null | undefined;
            } | undefined;
            ud_text?: {
                ud11_text?: string | null | undefined;
                ud12_text?: string | null | undefined;
                ud13_text?: string | null | undefined;
                ud14_text?: string | null | undefined;
                ud15_text?: string | null | undefined;
            } | undefined;
        } | undefined;
        cost_amt?: number | null | undefined;
        other_amt?: number | null | undefined;
        pd_prov_code?: string | null | undefined;
        pd_type_code?: string | null | undefined;
    }, {
        start_date: string;
        duration: number;
        finish_date: string;
        pd_stat_code: string;
        pdact_text: string;
        ud_fields?: {
            ud_flags?: {
                ud1_flg?: string | null | undefined;
                ud2_flg?: string | null | undefined;
                ud3_flg?: string | null | undefined;
                ud4_flg?: string | null | undefined;
                ud5_flg?: string | null | undefined;
            } | undefined;
            ud_codes?: {
                ud6_code?: string | null | undefined;
                ud7_code?: string | null | undefined;
                ud8_code?: string | null | undefined;
                ud9_code?: string | null | undefined;
                ud10_code?: string | null | undefined;
            } | undefined;
            ud_text?: {
                ud11_text?: string | null | undefined;
                ud12_text?: string | null | undefined;
                ud13_text?: string | null | undefined;
                ud14_text?: string | null | undefined;
                ud15_text?: string | null | undefined;
            } | undefined;
        } | undefined;
        cost_amt?: number | null | undefined;
        other_amt?: number | null | undefined;
        pd_prov_code?: string | null | undefined;
        pd_type_code?: string | null | undefined;
    }>, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
    UpdateEmployeePDActivityRequest: z.ZodIntersection<z.ZodObject<{
        cost_amt: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        duration: z.ZodNumber;
        finish_date: z.ZodString;
        other_amt: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        pd_prov_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        pd_stat_code: z.ZodString;
        pd_type_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        pdact_text: z.ZodString;
        start_date: z.ZodString;
        ud_fields: z.ZodOptional<z.ZodObject<{
            ud_flags: z.ZodOptional<z.ZodObject<{
                ud1_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud2_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud3_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud4_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud5_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                ud1_flg?: string | null | undefined;
                ud2_flg?: string | null | undefined;
                ud3_flg?: string | null | undefined;
                ud4_flg?: string | null | undefined;
                ud5_flg?: string | null | undefined;
            }, {
                ud1_flg?: string | null | undefined;
                ud2_flg?: string | null | undefined;
                ud3_flg?: string | null | undefined;
                ud4_flg?: string | null | undefined;
                ud5_flg?: string | null | undefined;
            }>>;
            ud_codes: z.ZodOptional<z.ZodObject<{
                ud6_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud7_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud8_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud9_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud10_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                ud6_code?: string | null | undefined;
                ud7_code?: string | null | undefined;
                ud8_code?: string | null | undefined;
                ud9_code?: string | null | undefined;
                ud10_code?: string | null | undefined;
            }, {
                ud6_code?: string | null | undefined;
                ud7_code?: string | null | undefined;
                ud8_code?: string | null | undefined;
                ud9_code?: string | null | undefined;
                ud10_code?: string | null | undefined;
            }>>;
            ud_text: z.ZodOptional<z.ZodObject<{
                ud11_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud12_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud13_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud14_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud15_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                ud11_text?: string | null | undefined;
                ud12_text?: string | null | undefined;
                ud13_text?: string | null | undefined;
                ud14_text?: string | null | undefined;
                ud15_text?: string | null | undefined;
            }, {
                ud11_text?: string | null | undefined;
                ud12_text?: string | null | undefined;
                ud13_text?: string | null | undefined;
                ud14_text?: string | null | undefined;
                ud15_text?: string | null | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            ud_flags?: {
                ud1_flg?: string | null | undefined;
                ud2_flg?: string | null | undefined;
                ud3_flg?: string | null | undefined;
                ud4_flg?: string | null | undefined;
                ud5_flg?: string | null | undefined;
            } | undefined;
            ud_codes?: {
                ud6_code?: string | null | undefined;
                ud7_code?: string | null | undefined;
                ud8_code?: string | null | undefined;
                ud9_code?: string | null | undefined;
                ud10_code?: string | null | undefined;
            } | undefined;
            ud_text?: {
                ud11_text?: string | null | undefined;
                ud12_text?: string | null | undefined;
                ud13_text?: string | null | undefined;
                ud14_text?: string | null | undefined;
                ud15_text?: string | null | undefined;
            } | undefined;
        }, {
            ud_flags?: {
                ud1_flg?: string | null | undefined;
                ud2_flg?: string | null | undefined;
                ud3_flg?: string | null | undefined;
                ud4_flg?: string | null | undefined;
                ud5_flg?: string | null | undefined;
            } | undefined;
            ud_codes?: {
                ud6_code?: string | null | undefined;
                ud7_code?: string | null | undefined;
                ud8_code?: string | null | undefined;
                ud9_code?: string | null | undefined;
                ud10_code?: string | null | undefined;
            } | undefined;
            ud_text?: {
                ud11_text?: string | null | undefined;
                ud12_text?: string | null | undefined;
                ud13_text?: string | null | undefined;
                ud14_text?: string | null | undefined;
                ud15_text?: string | null | undefined;
            } | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        start_date: string;
        duration: number;
        finish_date: string;
        pd_stat_code: string;
        pdact_text: string;
        ud_fields?: {
            ud_flags?: {
                ud1_flg?: string | null | undefined;
                ud2_flg?: string | null | undefined;
                ud3_flg?: string | null | undefined;
                ud4_flg?: string | null | undefined;
                ud5_flg?: string | null | undefined;
            } | undefined;
            ud_codes?: {
                ud6_code?: string | null | undefined;
                ud7_code?: string | null | undefined;
                ud8_code?: string | null | undefined;
                ud9_code?: string | null | undefined;
                ud10_code?: string | null | undefined;
            } | undefined;
            ud_text?: {
                ud11_text?: string | null | undefined;
                ud12_text?: string | null | undefined;
                ud13_text?: string | null | undefined;
                ud14_text?: string | null | undefined;
                ud15_text?: string | null | undefined;
            } | undefined;
        } | undefined;
        cost_amt?: number | null | undefined;
        other_amt?: number | null | undefined;
        pd_prov_code?: string | null | undefined;
        pd_type_code?: string | null | undefined;
    }, {
        start_date: string;
        duration: number;
        finish_date: string;
        pd_stat_code: string;
        pdact_text: string;
        ud_fields?: {
            ud_flags?: {
                ud1_flg?: string | null | undefined;
                ud2_flg?: string | null | undefined;
                ud3_flg?: string | null | undefined;
                ud4_flg?: string | null | undefined;
                ud5_flg?: string | null | undefined;
            } | undefined;
            ud_codes?: {
                ud6_code?: string | null | undefined;
                ud7_code?: string | null | undefined;
                ud8_code?: string | null | undefined;
                ud9_code?: string | null | undefined;
                ud10_code?: string | null | undefined;
            } | undefined;
            ud_text?: {
                ud11_text?: string | null | undefined;
                ud12_text?: string | null | undefined;
                ud13_text?: string | null | undefined;
                ud14_text?: string | null | undefined;
                ud15_text?: string | null | undefined;
            } | undefined;
        } | undefined;
        cost_amt?: number | null | undefined;
        other_amt?: number | null | undefined;
        pd_prov_code?: string | null | undefined;
        pd_type_code?: string | null | undefined;
    }>, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
    UDFieldOptionsResponse: z.ZodObject<{
        ud_fields: z.ZodOptional<z.ZodObject<{
            ud_flags: z.ZodOptional<z.ZodArray<z.ZodObject<{
                field_name: z.ZodOptional<z.ZodString>;
                field_desc: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                sort_order: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                field_name?: string | undefined;
                field_desc?: string | null | undefined;
                sort_order?: number | undefined;
            }, {
                field_name?: string | undefined;
                field_desc?: string | null | undefined;
                sort_order?: number | undefined;
            }>, "many">>;
            ud_codes: z.ZodOptional<z.ZodArray<z.ZodIntersection<z.ZodObject<{
                field_name: z.ZodOptional<z.ZodString>;
                field_desc: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                sort_order: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                field_name?: string | undefined;
                field_desc?: string | null | undefined;
                sort_order?: number | undefined;
            }, {
                field_name?: string | undefined;
                field_desc?: string | null | undefined;
                sort_order?: number | undefined;
            }>, z.ZodObject<{
                reference_values: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    ud_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    ud_desc: z.ZodOptional<z.ZodString>;
                    sort_order: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    sort_order?: number | undefined;
                    ud_code?: string | null | undefined;
                    ud_desc?: string | undefined;
                }, {
                    sort_order?: number | undefined;
                    ud_code?: string | null | undefined;
                    ud_desc?: string | undefined;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                reference_values?: {
                    sort_order?: number | undefined;
                    ud_code?: string | null | undefined;
                    ud_desc?: string | undefined;
                }[] | undefined;
            }, {
                reference_values?: {
                    sort_order?: number | undefined;
                    ud_code?: string | null | undefined;
                    ud_desc?: string | undefined;
                }[] | undefined;
            }>>, "many">>;
            ud_text: z.ZodOptional<z.ZodArray<z.ZodObject<{
                field_name: z.ZodOptional<z.ZodString>;
                field_desc: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                sort_order: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                field_name?: string | undefined;
                field_desc?: string | null | undefined;
                sort_order?: number | undefined;
            }, {
                field_name?: string | undefined;
                field_desc?: string | null | undefined;
                sort_order?: number | undefined;
            }>, "many">>;
            ud_dates: z.ZodOptional<z.ZodArray<z.ZodObject<{
                field_name: z.ZodOptional<z.ZodString>;
                field_desc: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                sort_order: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                field_name?: string | undefined;
                field_desc?: string | null | undefined;
                sort_order?: number | undefined;
            }, {
                field_name?: string | undefined;
                field_desc?: string | null | undefined;
                sort_order?: number | undefined;
            }>, "many">>;
            ud_attachments: z.ZodOptional<z.ZodArray<z.ZodIntersection<z.ZodObject<{
                field_name: z.ZodOptional<z.ZodString>;
                field_desc: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                sort_order: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                field_name?: string | undefined;
                field_desc?: string | null | undefined;
                sort_order?: number | undefined;
            }, {
                field_name?: string | undefined;
                field_desc?: string | null | undefined;
                sort_order?: number | undefined;
            }>, z.ZodObject<{
                field_number: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                field_number?: number | undefined;
            }, {
                field_number?: number | undefined;
            }>>, "many">>;
        }, "strip", z.ZodTypeAny, {
            ud_flags?: {
                field_name?: string | undefined;
                field_desc?: string | null | undefined;
                sort_order?: number | undefined;
            }[] | undefined;
            ud_codes?: ({
                field_name?: string | undefined;
                field_desc?: string | null | undefined;
                sort_order?: number | undefined;
            } & {
                reference_values?: {
                    sort_order?: number | undefined;
                    ud_code?: string | null | undefined;
                    ud_desc?: string | undefined;
                }[] | undefined;
            })[] | undefined;
            ud_text?: {
                field_name?: string | undefined;
                field_desc?: string | null | undefined;
                sort_order?: number | undefined;
            }[] | undefined;
            ud_dates?: {
                field_name?: string | undefined;
                field_desc?: string | null | undefined;
                sort_order?: number | undefined;
            }[] | undefined;
            ud_attachments?: ({
                field_name?: string | undefined;
                field_desc?: string | null | undefined;
                sort_order?: number | undefined;
            } & {
                field_number?: number | undefined;
            })[] | undefined;
        }, {
            ud_flags?: {
                field_name?: string | undefined;
                field_desc?: string | null | undefined;
                sort_order?: number | undefined;
            }[] | undefined;
            ud_codes?: ({
                field_name?: string | undefined;
                field_desc?: string | null | undefined;
                sort_order?: number | undefined;
            } & {
                reference_values?: {
                    sort_order?: number | undefined;
                    ud_code?: string | null | undefined;
                    ud_desc?: string | undefined;
                }[] | undefined;
            })[] | undefined;
            ud_text?: {
                field_name?: string | undefined;
                field_desc?: string | null | undefined;
                sort_order?: number | undefined;
            }[] | undefined;
            ud_dates?: {
                field_name?: string | undefined;
                field_desc?: string | null | undefined;
                sort_order?: number | undefined;
            }[] | undefined;
            ud_attachments?: ({
                field_name?: string | undefined;
                field_desc?: string | null | undefined;
                sort_order?: number | undefined;
            } & {
                field_number?: number | undefined;
            })[] | undefined;
        }>>;
        cmpy_code: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        cmpy_code?: string | undefined;
        ud_fields?: {
            ud_flags?: {
                field_name?: string | undefined;
                field_desc?: string | null | undefined;
                sort_order?: number | undefined;
            }[] | undefined;
            ud_codes?: ({
                field_name?: string | undefined;
                field_desc?: string | null | undefined;
                sort_order?: number | undefined;
            } & {
                reference_values?: {
                    sort_order?: number | undefined;
                    ud_code?: string | null | undefined;
                    ud_desc?: string | undefined;
                }[] | undefined;
            })[] | undefined;
            ud_text?: {
                field_name?: string | undefined;
                field_desc?: string | null | undefined;
                sort_order?: number | undefined;
            }[] | undefined;
            ud_dates?: {
                field_name?: string | undefined;
                field_desc?: string | null | undefined;
                sort_order?: number | undefined;
            }[] | undefined;
            ud_attachments?: ({
                field_name?: string | undefined;
                field_desc?: string | null | undefined;
                sort_order?: number | undefined;
            } & {
                field_number?: number | undefined;
            })[] | undefined;
        } | undefined;
    }, {
        cmpy_code?: string | undefined;
        ud_fields?: {
            ud_flags?: {
                field_name?: string | undefined;
                field_desc?: string | null | undefined;
                sort_order?: number | undefined;
            }[] | undefined;
            ud_codes?: ({
                field_name?: string | undefined;
                field_desc?: string | null | undefined;
                sort_order?: number | undefined;
            } & {
                reference_values?: {
                    sort_order?: number | undefined;
                    ud_code?: string | null | undefined;
                    ud_desc?: string | undefined;
                }[] | undefined;
            })[] | undefined;
            ud_text?: {
                field_name?: string | undefined;
                field_desc?: string | null | undefined;
                sort_order?: number | undefined;
            }[] | undefined;
            ud_dates?: {
                field_name?: string | undefined;
                field_desc?: string | null | undefined;
                sort_order?: number | undefined;
            }[] | undefined;
            ud_attachments?: ({
                field_name?: string | undefined;
                field_desc?: string | null | undefined;
                sort_order?: number | undefined;
            } & {
                field_number?: number | undefined;
            })[] | undefined;
        } | undefined;
    }>;
    EmployeePhotoChange: z.ZodObject<{
        emp_code: z.ZodOptional<z.ZodString>;
        photo_update_on: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        photo_update_on?: string | undefined;
        emp_code?: string | undefined;
    }, {
        photo_update_on?: string | undefined;
        emp_code?: string | undefined;
    }>;
    EmployeePhotoChangesResponse: z.ZodObject<{
        cmpy_code: z.ZodOptional<z.ZodString>;
        change_key: z.ZodOptional<z.ZodString>;
        changes: z.ZodOptional<z.ZodArray<z.ZodObject<{
            emp_code: z.ZodOptional<z.ZodString>;
            photo_update_on: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            photo_update_on?: string | undefined;
            emp_code?: string | undefined;
        }, {
            photo_update_on?: string | undefined;
            emp_code?: string | undefined;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        cmpy_code?: string | undefined;
        change_key?: string | undefined;
        changes?: {
            photo_update_on?: string | undefined;
            emp_code?: string | undefined;
        }[] | undefined;
    }, {
        cmpy_code?: string | undefined;
        change_key?: string | undefined;
        changes?: {
            photo_update_on?: string | undefined;
            emp_code?: string | undefined;
        }[] | undefined;
    }>;
    EmployeeQualificationResponse: z.ZodObject<{
        cmpy_code: z.ZodOptional<z.ZodString>;
        emp_code: z.ZodOptional<z.ZodString>;
        inst_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        qual_cat: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        qual_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        qual_uid: z.ZodOptional<z.ZodString>;
        reminder_flg: z.ZodOptional<z.ZodBoolean>;
        valid_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        has_attachment: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        cmpy_code?: string | undefined;
        has_attachment?: boolean | undefined;
        emp_code?: string | undefined;
        inst_code?: string | null | undefined;
        qual_cat?: string | null | undefined;
        qual_text?: string | null | undefined;
        qual_uid?: string | undefined;
        reminder_flg?: boolean | undefined;
        valid_date?: string | null | undefined;
    }, {
        cmpy_code?: string | undefined;
        has_attachment?: boolean | undefined;
        emp_code?: string | undefined;
        inst_code?: string | null | undefined;
        qual_cat?: string | null | undefined;
        qual_text?: string | null | undefined;
        qual_uid?: string | undefined;
        reminder_flg?: boolean | undefined;
        valid_date?: string | null | undefined;
    }>;
    CommonEmployeeQualificationUpdateRequest: z.ZodObject<{
        inst_code: z.ZodString;
        qual_cat: z.ZodString;
        qual_text: z.ZodString;
        reminder_flg: z.ZodBoolean;
        valid_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        inst_code: string;
        qual_cat: string;
        qual_text: string;
        reminder_flg: boolean;
        valid_date?: string | null | undefined;
    }, {
        inst_code: string;
        qual_cat: string;
        qual_text: string;
        reminder_flg: boolean;
        valid_date?: string | null | undefined;
    }>;
    AddEmployeeQualificationRequest: z.ZodIntersection<z.ZodObject<{
        inst_code: z.ZodString;
        qual_cat: z.ZodString;
        qual_text: z.ZodString;
        reminder_flg: z.ZodBoolean;
        valid_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        inst_code: string;
        qual_cat: string;
        qual_text: string;
        reminder_flg: boolean;
        valid_date?: string | null | undefined;
    }, {
        inst_code: string;
        qual_cat: string;
        qual_text: string;
        reminder_flg: boolean;
        valid_date?: string | null | undefined;
    }>, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
    UpdateEmployeeQualificationRequest: z.ZodIntersection<z.ZodObject<{
        inst_code: z.ZodString;
        qual_cat: z.ZodString;
        qual_text: z.ZodString;
        reminder_flg: z.ZodBoolean;
        valid_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        inst_code: string;
        qual_cat: string;
        qual_text: string;
        reminder_flg: boolean;
        valid_date?: string | null | undefined;
    }, {
        inst_code: string;
        qual_cat: string;
        qual_text: string;
        reminder_flg: boolean;
        valid_date?: string | null | undefined;
    }>, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
    UDAreaFlagResponse: z.ZodObject<{
        ud1_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud2_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud3_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud4_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud5_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud6_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud7_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud8_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud9_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud10_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        ud1_flg?: string | null | undefined;
        ud2_flg?: string | null | undefined;
        ud3_flg?: string | null | undefined;
        ud4_flg?: string | null | undefined;
        ud5_flg?: string | null | undefined;
        ud6_flg?: string | null | undefined;
        ud7_flg?: string | null | undefined;
        ud8_flg?: string | null | undefined;
        ud9_flg?: string | null | undefined;
        ud10_flg?: string | null | undefined;
    }, {
        ud1_flg?: string | null | undefined;
        ud2_flg?: string | null | undefined;
        ud3_flg?: string | null | undefined;
        ud4_flg?: string | null | undefined;
        ud5_flg?: string | null | undefined;
        ud6_flg?: string | null | undefined;
        ud7_flg?: string | null | undefined;
        ud8_flg?: string | null | undefined;
        ud9_flg?: string | null | undefined;
        ud10_flg?: string | null | undefined;
    }>;
    UDAreaCodeResponse: z.ZodObject<{
        ud11_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud12_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud13_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud14_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud15_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud16_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud17_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud18_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud19_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud20_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        ud11_code?: string | null | undefined;
        ud12_code?: string | null | undefined;
        ud13_code?: string | null | undefined;
        ud14_code?: string | null | undefined;
        ud15_code?: string | null | undefined;
        ud16_code?: string | null | undefined;
        ud17_code?: string | null | undefined;
        ud18_code?: string | null | undefined;
        ud19_code?: string | null | undefined;
        ud20_code?: string | null | undefined;
    }, {
        ud11_code?: string | null | undefined;
        ud12_code?: string | null | undefined;
        ud13_code?: string | null | undefined;
        ud14_code?: string | null | undefined;
        ud15_code?: string | null | undefined;
        ud16_code?: string | null | undefined;
        ud17_code?: string | null | undefined;
        ud18_code?: string | null | undefined;
        ud19_code?: string | null | undefined;
        ud20_code?: string | null | undefined;
    }>;
    UDAreaTextResponse: z.ZodObject<{
        ud21_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud22_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud23_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud24_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud25_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud26_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud27_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud28_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud29_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud30_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        ud21_text?: string | null | undefined;
        ud22_text?: string | null | undefined;
        ud23_text?: string | null | undefined;
        ud24_text?: string | null | undefined;
        ud25_text?: string | null | undefined;
        ud26_text?: string | null | undefined;
        ud27_text?: string | null | undefined;
        ud28_text?: string | null | undefined;
        ud29_text?: string | null | undefined;
        ud30_text?: string | null | undefined;
    }, {
        ud21_text?: string | null | undefined;
        ud22_text?: string | null | undefined;
        ud23_text?: string | null | undefined;
        ud24_text?: string | null | undefined;
        ud25_text?: string | null | undefined;
        ud26_text?: string | null | undefined;
        ud27_text?: string | null | undefined;
        ud28_text?: string | null | undefined;
        ud29_text?: string | null | undefined;
        ud30_text?: string | null | undefined;
    }>;
    UDAreaDateResponse: z.ZodObject<{
        ud31_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud32_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud33_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud34_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud35_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud36_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud37_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud38_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud39_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud40_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        ud31_date?: string | null | undefined;
        ud32_date?: string | null | undefined;
        ud33_date?: string | null | undefined;
        ud34_date?: string | null | undefined;
        ud35_date?: string | null | undefined;
        ud36_date?: string | null | undefined;
        ud37_date?: string | null | undefined;
        ud38_date?: string | null | undefined;
        ud39_date?: string | null | undefined;
        ud40_date?: string | null | undefined;
    }, {
        ud31_date?: string | null | undefined;
        ud32_date?: string | null | undefined;
        ud33_date?: string | null | undefined;
        ud34_date?: string | null | undefined;
        ud35_date?: string | null | undefined;
        ud36_date?: string | null | undefined;
        ud37_date?: string | null | undefined;
        ud38_date?: string | null | undefined;
        ud39_date?: string | null | undefined;
        ud40_date?: string | null | undefined;
    }>;
    UDAreaAttachmentResponse: z.ZodObject<{
        ud41_attachment_details: z.ZodOptional<z.ZodObject<{
            field_number: z.ZodOptional<z.ZodNumber>;
            files: z.ZodOptional<z.ZodArray<z.ZodObject<{
                file_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                file_size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                date_uploaded: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                attach_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }, {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            field_number?: number | undefined;
            files?: {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }[] | undefined;
        }, {
            field_number?: number | undefined;
            files?: {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }[] | undefined;
        }>>;
        ud42_attachment_details: z.ZodOptional<z.ZodObject<{
            field_number: z.ZodOptional<z.ZodNumber>;
            files: z.ZodOptional<z.ZodArray<z.ZodObject<{
                file_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                file_size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                date_uploaded: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                attach_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }, {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            field_number?: number | undefined;
            files?: {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }[] | undefined;
        }, {
            field_number?: number | undefined;
            files?: {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }[] | undefined;
        }>>;
        ud43_attachment_details: z.ZodOptional<z.ZodObject<{
            field_number: z.ZodOptional<z.ZodNumber>;
            files: z.ZodOptional<z.ZodArray<z.ZodObject<{
                file_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                file_size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                date_uploaded: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                attach_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }, {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            field_number?: number | undefined;
            files?: {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }[] | undefined;
        }, {
            field_number?: number | undefined;
            files?: {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }[] | undefined;
        }>>;
        ud44_attachment_details: z.ZodOptional<z.ZodObject<{
            field_number: z.ZodOptional<z.ZodNumber>;
            files: z.ZodOptional<z.ZodArray<z.ZodObject<{
                file_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                file_size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                date_uploaded: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                attach_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }, {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            field_number?: number | undefined;
            files?: {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }[] | undefined;
        }, {
            field_number?: number | undefined;
            files?: {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }[] | undefined;
        }>>;
        ud45_attachment_details: z.ZodOptional<z.ZodObject<{
            field_number: z.ZodOptional<z.ZodNumber>;
            files: z.ZodOptional<z.ZodArray<z.ZodObject<{
                file_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                file_size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                date_uploaded: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                attach_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }, {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            field_number?: number | undefined;
            files?: {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }[] | undefined;
        }, {
            field_number?: number | undefined;
            files?: {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }[] | undefined;
        }>>;
        ud46_attachment_details: z.ZodOptional<z.ZodObject<{
            field_number: z.ZodOptional<z.ZodNumber>;
            files: z.ZodOptional<z.ZodArray<z.ZodObject<{
                file_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                file_size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                date_uploaded: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                attach_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }, {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            field_number?: number | undefined;
            files?: {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }[] | undefined;
        }, {
            field_number?: number | undefined;
            files?: {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }[] | undefined;
        }>>;
        ud47_attachment_details: z.ZodOptional<z.ZodObject<{
            field_number: z.ZodOptional<z.ZodNumber>;
            files: z.ZodOptional<z.ZodArray<z.ZodObject<{
                file_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                file_size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                date_uploaded: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                attach_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }, {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            field_number?: number | undefined;
            files?: {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }[] | undefined;
        }, {
            field_number?: number | undefined;
            files?: {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }[] | undefined;
        }>>;
        ud48_attachment_details: z.ZodOptional<z.ZodObject<{
            field_number: z.ZodOptional<z.ZodNumber>;
            files: z.ZodOptional<z.ZodArray<z.ZodObject<{
                file_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                file_size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                date_uploaded: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                attach_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }, {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            field_number?: number | undefined;
            files?: {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }[] | undefined;
        }, {
            field_number?: number | undefined;
            files?: {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }[] | undefined;
        }>>;
        ud49_attachment_details: z.ZodOptional<z.ZodObject<{
            field_number: z.ZodOptional<z.ZodNumber>;
            files: z.ZodOptional<z.ZodArray<z.ZodObject<{
                file_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                file_size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                date_uploaded: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                attach_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }, {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            field_number?: number | undefined;
            files?: {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }[] | undefined;
        }, {
            field_number?: number | undefined;
            files?: {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }[] | undefined;
        }>>;
        ud50_attachment_details: z.ZodOptional<z.ZodObject<{
            field_number: z.ZodOptional<z.ZodNumber>;
            files: z.ZodOptional<z.ZodArray<z.ZodObject<{
                file_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                file_size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                date_uploaded: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                attach_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }, {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            field_number?: number | undefined;
            files?: {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }[] | undefined;
        }, {
            field_number?: number | undefined;
            files?: {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }[] | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        ud41_attachment_details?: {
            field_number?: number | undefined;
            files?: {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }[] | undefined;
        } | undefined;
        ud42_attachment_details?: {
            field_number?: number | undefined;
            files?: {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }[] | undefined;
        } | undefined;
        ud43_attachment_details?: {
            field_number?: number | undefined;
            files?: {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }[] | undefined;
        } | undefined;
        ud44_attachment_details?: {
            field_number?: number | undefined;
            files?: {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }[] | undefined;
        } | undefined;
        ud45_attachment_details?: {
            field_number?: number | undefined;
            files?: {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }[] | undefined;
        } | undefined;
        ud46_attachment_details?: {
            field_number?: number | undefined;
            files?: {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }[] | undefined;
        } | undefined;
        ud47_attachment_details?: {
            field_number?: number | undefined;
            files?: {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }[] | undefined;
        } | undefined;
        ud48_attachment_details?: {
            field_number?: number | undefined;
            files?: {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }[] | undefined;
        } | undefined;
        ud49_attachment_details?: {
            field_number?: number | undefined;
            files?: {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }[] | undefined;
        } | undefined;
        ud50_attachment_details?: {
            field_number?: number | undefined;
            files?: {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }[] | undefined;
        } | undefined;
    }, {
        ud41_attachment_details?: {
            field_number?: number | undefined;
            files?: {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }[] | undefined;
        } | undefined;
        ud42_attachment_details?: {
            field_number?: number | undefined;
            files?: {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }[] | undefined;
        } | undefined;
        ud43_attachment_details?: {
            field_number?: number | undefined;
            files?: {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }[] | undefined;
        } | undefined;
        ud44_attachment_details?: {
            field_number?: number | undefined;
            files?: {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }[] | undefined;
        } | undefined;
        ud45_attachment_details?: {
            field_number?: number | undefined;
            files?: {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }[] | undefined;
        } | undefined;
        ud46_attachment_details?: {
            field_number?: number | undefined;
            files?: {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }[] | undefined;
        } | undefined;
        ud47_attachment_details?: {
            field_number?: number | undefined;
            files?: {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }[] | undefined;
        } | undefined;
        ud48_attachment_details?: {
            field_number?: number | undefined;
            files?: {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }[] | undefined;
        } | undefined;
        ud49_attachment_details?: {
            field_number?: number | undefined;
            files?: {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }[] | undefined;
        } | undefined;
        ud50_attachment_details?: {
            field_number?: number | undefined;
            files?: {
                file_name?: string | null | undefined;
                file_size?: number | null | undefined;
                date_uploaded?: string | null | undefined;
                attach_id?: string | null | undefined;
            }[] | undefined;
        } | undefined;
    }>;
    UDAreaFieldsResponse: z.ZodObject<{
        ud_flags: z.ZodOptional<z.ZodObject<{
            ud1_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud2_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud3_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud4_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud5_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud6_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud7_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud8_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud9_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud10_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            ud1_flg?: string | null | undefined;
            ud2_flg?: string | null | undefined;
            ud3_flg?: string | null | undefined;
            ud4_flg?: string | null | undefined;
            ud5_flg?: string | null | undefined;
            ud6_flg?: string | null | undefined;
            ud7_flg?: string | null | undefined;
            ud8_flg?: string | null | undefined;
            ud9_flg?: string | null | undefined;
            ud10_flg?: string | null | undefined;
        }, {
            ud1_flg?: string | null | undefined;
            ud2_flg?: string | null | undefined;
            ud3_flg?: string | null | undefined;
            ud4_flg?: string | null | undefined;
            ud5_flg?: string | null | undefined;
            ud6_flg?: string | null | undefined;
            ud7_flg?: string | null | undefined;
            ud8_flg?: string | null | undefined;
            ud9_flg?: string | null | undefined;
            ud10_flg?: string | null | undefined;
        }>>;
        ud_codes: z.ZodOptional<z.ZodObject<{
            ud11_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud12_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud13_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud14_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud15_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud16_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud17_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud18_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud19_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud20_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            ud11_code?: string | null | undefined;
            ud12_code?: string | null | undefined;
            ud13_code?: string | null | undefined;
            ud14_code?: string | null | undefined;
            ud15_code?: string | null | undefined;
            ud16_code?: string | null | undefined;
            ud17_code?: string | null | undefined;
            ud18_code?: string | null | undefined;
            ud19_code?: string | null | undefined;
            ud20_code?: string | null | undefined;
        }, {
            ud11_code?: string | null | undefined;
            ud12_code?: string | null | undefined;
            ud13_code?: string | null | undefined;
            ud14_code?: string | null | undefined;
            ud15_code?: string | null | undefined;
            ud16_code?: string | null | undefined;
            ud17_code?: string | null | undefined;
            ud18_code?: string | null | undefined;
            ud19_code?: string | null | undefined;
            ud20_code?: string | null | undefined;
        }>>;
        ud_text: z.ZodOptional<z.ZodObject<{
            ud21_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud22_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud23_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud24_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud25_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud26_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud27_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud28_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud29_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud30_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            ud21_text?: string | null | undefined;
            ud22_text?: string | null | undefined;
            ud23_text?: string | null | undefined;
            ud24_text?: string | null | undefined;
            ud25_text?: string | null | undefined;
            ud26_text?: string | null | undefined;
            ud27_text?: string | null | undefined;
            ud28_text?: string | null | undefined;
            ud29_text?: string | null | undefined;
            ud30_text?: string | null | undefined;
        }, {
            ud21_text?: string | null | undefined;
            ud22_text?: string | null | undefined;
            ud23_text?: string | null | undefined;
            ud24_text?: string | null | undefined;
            ud25_text?: string | null | undefined;
            ud26_text?: string | null | undefined;
            ud27_text?: string | null | undefined;
            ud28_text?: string | null | undefined;
            ud29_text?: string | null | undefined;
            ud30_text?: string | null | undefined;
        }>>;
        ud_dates: z.ZodOptional<z.ZodObject<{
            ud31_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud32_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud33_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud34_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud35_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud36_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud37_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud38_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud39_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud40_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            ud31_date?: string | null | undefined;
            ud32_date?: string | null | undefined;
            ud33_date?: string | null | undefined;
            ud34_date?: string | null | undefined;
            ud35_date?: string | null | undefined;
            ud36_date?: string | null | undefined;
            ud37_date?: string | null | undefined;
            ud38_date?: string | null | undefined;
            ud39_date?: string | null | undefined;
            ud40_date?: string | null | undefined;
        }, {
            ud31_date?: string | null | undefined;
            ud32_date?: string | null | undefined;
            ud33_date?: string | null | undefined;
            ud34_date?: string | null | undefined;
            ud35_date?: string | null | undefined;
            ud36_date?: string | null | undefined;
            ud37_date?: string | null | undefined;
            ud38_date?: string | null | undefined;
            ud39_date?: string | null | undefined;
            ud40_date?: string | null | undefined;
        }>>;
        ud_attachments: z.ZodOptional<z.ZodObject<{
            ud41_attachment_details: z.ZodOptional<z.ZodObject<{
                field_number: z.ZodOptional<z.ZodNumber>;
                files: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    file_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    file_size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                    date_uploaded: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    attach_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                }, "strip", z.ZodTypeAny, {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }, {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            }, {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            }>>;
            ud42_attachment_details: z.ZodOptional<z.ZodObject<{
                field_number: z.ZodOptional<z.ZodNumber>;
                files: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    file_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    file_size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                    date_uploaded: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    attach_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                }, "strip", z.ZodTypeAny, {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }, {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            }, {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            }>>;
            ud43_attachment_details: z.ZodOptional<z.ZodObject<{
                field_number: z.ZodOptional<z.ZodNumber>;
                files: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    file_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    file_size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                    date_uploaded: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    attach_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                }, "strip", z.ZodTypeAny, {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }, {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            }, {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            }>>;
            ud44_attachment_details: z.ZodOptional<z.ZodObject<{
                field_number: z.ZodOptional<z.ZodNumber>;
                files: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    file_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    file_size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                    date_uploaded: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    attach_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                }, "strip", z.ZodTypeAny, {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }, {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            }, {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            }>>;
            ud45_attachment_details: z.ZodOptional<z.ZodObject<{
                field_number: z.ZodOptional<z.ZodNumber>;
                files: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    file_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    file_size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                    date_uploaded: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    attach_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                }, "strip", z.ZodTypeAny, {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }, {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            }, {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            }>>;
            ud46_attachment_details: z.ZodOptional<z.ZodObject<{
                field_number: z.ZodOptional<z.ZodNumber>;
                files: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    file_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    file_size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                    date_uploaded: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    attach_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                }, "strip", z.ZodTypeAny, {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }, {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            }, {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            }>>;
            ud47_attachment_details: z.ZodOptional<z.ZodObject<{
                field_number: z.ZodOptional<z.ZodNumber>;
                files: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    file_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    file_size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                    date_uploaded: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    attach_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                }, "strip", z.ZodTypeAny, {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }, {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            }, {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            }>>;
            ud48_attachment_details: z.ZodOptional<z.ZodObject<{
                field_number: z.ZodOptional<z.ZodNumber>;
                files: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    file_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    file_size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                    date_uploaded: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    attach_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                }, "strip", z.ZodTypeAny, {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }, {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            }, {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            }>>;
            ud49_attachment_details: z.ZodOptional<z.ZodObject<{
                field_number: z.ZodOptional<z.ZodNumber>;
                files: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    file_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    file_size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                    date_uploaded: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    attach_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                }, "strip", z.ZodTypeAny, {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }, {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            }, {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            }>>;
            ud50_attachment_details: z.ZodOptional<z.ZodObject<{
                field_number: z.ZodOptional<z.ZodNumber>;
                files: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    file_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    file_size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                    date_uploaded: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    attach_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                }, "strip", z.ZodTypeAny, {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }, {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            }, {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            ud41_attachment_details?: {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            } | undefined;
            ud42_attachment_details?: {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            } | undefined;
            ud43_attachment_details?: {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            } | undefined;
            ud44_attachment_details?: {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            } | undefined;
            ud45_attachment_details?: {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            } | undefined;
            ud46_attachment_details?: {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            } | undefined;
            ud47_attachment_details?: {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            } | undefined;
            ud48_attachment_details?: {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            } | undefined;
            ud49_attachment_details?: {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            } | undefined;
            ud50_attachment_details?: {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            } | undefined;
        }, {
            ud41_attachment_details?: {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            } | undefined;
            ud42_attachment_details?: {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            } | undefined;
            ud43_attachment_details?: {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            } | undefined;
            ud44_attachment_details?: {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            } | undefined;
            ud45_attachment_details?: {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            } | undefined;
            ud46_attachment_details?: {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            } | undefined;
            ud47_attachment_details?: {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            } | undefined;
            ud48_attachment_details?: {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            } | undefined;
            ud49_attachment_details?: {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            } | undefined;
            ud50_attachment_details?: {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            } | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        ud_flags?: {
            ud1_flg?: string | null | undefined;
            ud2_flg?: string | null | undefined;
            ud3_flg?: string | null | undefined;
            ud4_flg?: string | null | undefined;
            ud5_flg?: string | null | undefined;
            ud6_flg?: string | null | undefined;
            ud7_flg?: string | null | undefined;
            ud8_flg?: string | null | undefined;
            ud9_flg?: string | null | undefined;
            ud10_flg?: string | null | undefined;
        } | undefined;
        ud_codes?: {
            ud11_code?: string | null | undefined;
            ud12_code?: string | null | undefined;
            ud13_code?: string | null | undefined;
            ud14_code?: string | null | undefined;
            ud15_code?: string | null | undefined;
            ud16_code?: string | null | undefined;
            ud17_code?: string | null | undefined;
            ud18_code?: string | null | undefined;
            ud19_code?: string | null | undefined;
            ud20_code?: string | null | undefined;
        } | undefined;
        ud_text?: {
            ud21_text?: string | null | undefined;
            ud22_text?: string | null | undefined;
            ud23_text?: string | null | undefined;
            ud24_text?: string | null | undefined;
            ud25_text?: string | null | undefined;
            ud26_text?: string | null | undefined;
            ud27_text?: string | null | undefined;
            ud28_text?: string | null | undefined;
            ud29_text?: string | null | undefined;
            ud30_text?: string | null | undefined;
        } | undefined;
        ud_dates?: {
            ud31_date?: string | null | undefined;
            ud32_date?: string | null | undefined;
            ud33_date?: string | null | undefined;
            ud34_date?: string | null | undefined;
            ud35_date?: string | null | undefined;
            ud36_date?: string | null | undefined;
            ud37_date?: string | null | undefined;
            ud38_date?: string | null | undefined;
            ud39_date?: string | null | undefined;
            ud40_date?: string | null | undefined;
        } | undefined;
        ud_attachments?: {
            ud41_attachment_details?: {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            } | undefined;
            ud42_attachment_details?: {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            } | undefined;
            ud43_attachment_details?: {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            } | undefined;
            ud44_attachment_details?: {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            } | undefined;
            ud45_attachment_details?: {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            } | undefined;
            ud46_attachment_details?: {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            } | undefined;
            ud47_attachment_details?: {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            } | undefined;
            ud48_attachment_details?: {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            } | undefined;
            ud49_attachment_details?: {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            } | undefined;
            ud50_attachment_details?: {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            } | undefined;
        } | undefined;
    }, {
        ud_flags?: {
            ud1_flg?: string | null | undefined;
            ud2_flg?: string | null | undefined;
            ud3_flg?: string | null | undefined;
            ud4_flg?: string | null | undefined;
            ud5_flg?: string | null | undefined;
            ud6_flg?: string | null | undefined;
            ud7_flg?: string | null | undefined;
            ud8_flg?: string | null | undefined;
            ud9_flg?: string | null | undefined;
            ud10_flg?: string | null | undefined;
        } | undefined;
        ud_codes?: {
            ud11_code?: string | null | undefined;
            ud12_code?: string | null | undefined;
            ud13_code?: string | null | undefined;
            ud14_code?: string | null | undefined;
            ud15_code?: string | null | undefined;
            ud16_code?: string | null | undefined;
            ud17_code?: string | null | undefined;
            ud18_code?: string | null | undefined;
            ud19_code?: string | null | undefined;
            ud20_code?: string | null | undefined;
        } | undefined;
        ud_text?: {
            ud21_text?: string | null | undefined;
            ud22_text?: string | null | undefined;
            ud23_text?: string | null | undefined;
            ud24_text?: string | null | undefined;
            ud25_text?: string | null | undefined;
            ud26_text?: string | null | undefined;
            ud27_text?: string | null | undefined;
            ud28_text?: string | null | undefined;
            ud29_text?: string | null | undefined;
            ud30_text?: string | null | undefined;
        } | undefined;
        ud_dates?: {
            ud31_date?: string | null | undefined;
            ud32_date?: string | null | undefined;
            ud33_date?: string | null | undefined;
            ud34_date?: string | null | undefined;
            ud35_date?: string | null | undefined;
            ud36_date?: string | null | undefined;
            ud37_date?: string | null | undefined;
            ud38_date?: string | null | undefined;
            ud39_date?: string | null | undefined;
            ud40_date?: string | null | undefined;
        } | undefined;
        ud_attachments?: {
            ud41_attachment_details?: {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            } | undefined;
            ud42_attachment_details?: {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            } | undefined;
            ud43_attachment_details?: {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            } | undefined;
            ud44_attachment_details?: {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            } | undefined;
            ud45_attachment_details?: {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            } | undefined;
            ud46_attachment_details?: {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            } | undefined;
            ud47_attachment_details?: {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            } | undefined;
            ud48_attachment_details?: {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            } | undefined;
            ud49_attachment_details?: {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            } | undefined;
            ud50_attachment_details?: {
                field_number?: number | undefined;
                files?: {
                    file_name?: string | null | undefined;
                    file_size?: number | null | undefined;
                    date_uploaded?: string | null | undefined;
                    attach_id?: string | null | undefined;
                }[] | undefined;
            } | undefined;
        } | undefined;
    }>;
    EmployeeUDAreaResponse: z.ZodObject<{
        cmpy_code: z.ZodOptional<z.ZodString>;
        area_code: z.ZodOptional<z.ZodString>;
        emp_code: z.ZodOptional<z.ZodString>;
        update_on: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud_fields: z.ZodOptional<z.ZodObject<{
            ud_flags: z.ZodOptional<z.ZodObject<{
                ud1_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud2_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud3_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud4_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud5_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud6_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud7_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud8_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud9_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud10_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                ud1_flg?: string | null | undefined;
                ud2_flg?: string | null | undefined;
                ud3_flg?: string | null | undefined;
                ud4_flg?: string | null | undefined;
                ud5_flg?: string | null | undefined;
                ud6_flg?: string | null | undefined;
                ud7_flg?: string | null | undefined;
                ud8_flg?: string | null | undefined;
                ud9_flg?: string | null | undefined;
                ud10_flg?: string | null | undefined;
            }, {
                ud1_flg?: string | null | undefined;
                ud2_flg?: string | null | undefined;
                ud3_flg?: string | null | undefined;
                ud4_flg?: string | null | undefined;
                ud5_flg?: string | null | undefined;
                ud6_flg?: string | null | undefined;
                ud7_flg?: string | null | undefined;
                ud8_flg?: string | null | undefined;
                ud9_flg?: string | null | undefined;
                ud10_flg?: string | null | undefined;
            }>>;
            ud_codes: z.ZodOptional<z.ZodObject<{
                ud11_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud12_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud13_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud14_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud15_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud16_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud17_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud18_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud19_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud20_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                ud11_code?: string | null | undefined;
                ud12_code?: string | null | undefined;
                ud13_code?: string | null | undefined;
                ud14_code?: string | null | undefined;
                ud15_code?: string | null | undefined;
                ud16_code?: string | null | undefined;
                ud17_code?: string | null | undefined;
                ud18_code?: string | null | undefined;
                ud19_code?: string | null | undefined;
                ud20_code?: string | null | undefined;
            }, {
                ud11_code?: string | null | undefined;
                ud12_code?: string | null | undefined;
                ud13_code?: string | null | undefined;
                ud14_code?: string | null | undefined;
                ud15_code?: string | null | undefined;
                ud16_code?: string | null | undefined;
                ud17_code?: string | null | undefined;
                ud18_code?: string | null | undefined;
                ud19_code?: string | null | undefined;
                ud20_code?: string | null | undefined;
            }>>;
            ud_text: z.ZodOptional<z.ZodObject<{
                ud21_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud22_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud23_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud24_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud25_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud26_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud27_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud28_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud29_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud30_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                ud21_text?: string | null | undefined;
                ud22_text?: string | null | undefined;
                ud23_text?: string | null | undefined;
                ud24_text?: string | null | undefined;
                ud25_text?: string | null | undefined;
                ud26_text?: string | null | undefined;
                ud27_text?: string | null | undefined;
                ud28_text?: string | null | undefined;
                ud29_text?: string | null | undefined;
                ud30_text?: string | null | undefined;
            }, {
                ud21_text?: string | null | undefined;
                ud22_text?: string | null | undefined;
                ud23_text?: string | null | undefined;
                ud24_text?: string | null | undefined;
                ud25_text?: string | null | undefined;
                ud26_text?: string | null | undefined;
                ud27_text?: string | null | undefined;
                ud28_text?: string | null | undefined;
                ud29_text?: string | null | undefined;
                ud30_text?: string | null | undefined;
            }>>;
            ud_dates: z.ZodOptional<z.ZodObject<{
                ud31_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud32_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud33_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud34_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud35_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud36_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud37_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud38_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud39_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud40_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                ud31_date?: string | null | undefined;
                ud32_date?: string | null | undefined;
                ud33_date?: string | null | undefined;
                ud34_date?: string | null | undefined;
                ud35_date?: string | null | undefined;
                ud36_date?: string | null | undefined;
                ud37_date?: string | null | undefined;
                ud38_date?: string | null | undefined;
                ud39_date?: string | null | undefined;
                ud40_date?: string | null | undefined;
            }, {
                ud31_date?: string | null | undefined;
                ud32_date?: string | null | undefined;
                ud33_date?: string | null | undefined;
                ud34_date?: string | null | undefined;
                ud35_date?: string | null | undefined;
                ud36_date?: string | null | undefined;
                ud37_date?: string | null | undefined;
                ud38_date?: string | null | undefined;
                ud39_date?: string | null | undefined;
                ud40_date?: string | null | undefined;
            }>>;
            ud_attachments: z.ZodOptional<z.ZodObject<{
                ud41_attachment_details: z.ZodOptional<z.ZodObject<{
                    field_number: z.ZodOptional<z.ZodNumber>;
                    files: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        file_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                        file_size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                        date_uploaded: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                        attach_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    }, "strip", z.ZodTypeAny, {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }, {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                }, {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                }>>;
                ud42_attachment_details: z.ZodOptional<z.ZodObject<{
                    field_number: z.ZodOptional<z.ZodNumber>;
                    files: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        file_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                        file_size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                        date_uploaded: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                        attach_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    }, "strip", z.ZodTypeAny, {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }, {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                }, {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                }>>;
                ud43_attachment_details: z.ZodOptional<z.ZodObject<{
                    field_number: z.ZodOptional<z.ZodNumber>;
                    files: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        file_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                        file_size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                        date_uploaded: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                        attach_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    }, "strip", z.ZodTypeAny, {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }, {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                }, {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                }>>;
                ud44_attachment_details: z.ZodOptional<z.ZodObject<{
                    field_number: z.ZodOptional<z.ZodNumber>;
                    files: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        file_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                        file_size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                        date_uploaded: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                        attach_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    }, "strip", z.ZodTypeAny, {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }, {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                }, {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                }>>;
                ud45_attachment_details: z.ZodOptional<z.ZodObject<{
                    field_number: z.ZodOptional<z.ZodNumber>;
                    files: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        file_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                        file_size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                        date_uploaded: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                        attach_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    }, "strip", z.ZodTypeAny, {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }, {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                }, {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                }>>;
                ud46_attachment_details: z.ZodOptional<z.ZodObject<{
                    field_number: z.ZodOptional<z.ZodNumber>;
                    files: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        file_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                        file_size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                        date_uploaded: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                        attach_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    }, "strip", z.ZodTypeAny, {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }, {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                }, {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                }>>;
                ud47_attachment_details: z.ZodOptional<z.ZodObject<{
                    field_number: z.ZodOptional<z.ZodNumber>;
                    files: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        file_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                        file_size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                        date_uploaded: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                        attach_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    }, "strip", z.ZodTypeAny, {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }, {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                }, {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                }>>;
                ud48_attachment_details: z.ZodOptional<z.ZodObject<{
                    field_number: z.ZodOptional<z.ZodNumber>;
                    files: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        file_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                        file_size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                        date_uploaded: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                        attach_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    }, "strip", z.ZodTypeAny, {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }, {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                }, {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                }>>;
                ud49_attachment_details: z.ZodOptional<z.ZodObject<{
                    field_number: z.ZodOptional<z.ZodNumber>;
                    files: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        file_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                        file_size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                        date_uploaded: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                        attach_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    }, "strip", z.ZodTypeAny, {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }, {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                }, {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                }>>;
                ud50_attachment_details: z.ZodOptional<z.ZodObject<{
                    field_number: z.ZodOptional<z.ZodNumber>;
                    files: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        file_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                        file_size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                        date_uploaded: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                        attach_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    }, "strip", z.ZodTypeAny, {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }, {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                }, {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                }>>;
            }, "strip", z.ZodTypeAny, {
                ud41_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud42_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud43_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud44_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud45_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud46_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud47_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud48_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud49_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud50_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
            }, {
                ud41_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud42_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud43_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud44_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud45_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud46_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud47_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud48_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud49_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud50_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            ud_flags?: {
                ud1_flg?: string | null | undefined;
                ud2_flg?: string | null | undefined;
                ud3_flg?: string | null | undefined;
                ud4_flg?: string | null | undefined;
                ud5_flg?: string | null | undefined;
                ud6_flg?: string | null | undefined;
                ud7_flg?: string | null | undefined;
                ud8_flg?: string | null | undefined;
                ud9_flg?: string | null | undefined;
                ud10_flg?: string | null | undefined;
            } | undefined;
            ud_codes?: {
                ud11_code?: string | null | undefined;
                ud12_code?: string | null | undefined;
                ud13_code?: string | null | undefined;
                ud14_code?: string | null | undefined;
                ud15_code?: string | null | undefined;
                ud16_code?: string | null | undefined;
                ud17_code?: string | null | undefined;
                ud18_code?: string | null | undefined;
                ud19_code?: string | null | undefined;
                ud20_code?: string | null | undefined;
            } | undefined;
            ud_text?: {
                ud21_text?: string | null | undefined;
                ud22_text?: string | null | undefined;
                ud23_text?: string | null | undefined;
                ud24_text?: string | null | undefined;
                ud25_text?: string | null | undefined;
                ud26_text?: string | null | undefined;
                ud27_text?: string | null | undefined;
                ud28_text?: string | null | undefined;
                ud29_text?: string | null | undefined;
                ud30_text?: string | null | undefined;
            } | undefined;
            ud_dates?: {
                ud31_date?: string | null | undefined;
                ud32_date?: string | null | undefined;
                ud33_date?: string | null | undefined;
                ud34_date?: string | null | undefined;
                ud35_date?: string | null | undefined;
                ud36_date?: string | null | undefined;
                ud37_date?: string | null | undefined;
                ud38_date?: string | null | undefined;
                ud39_date?: string | null | undefined;
                ud40_date?: string | null | undefined;
            } | undefined;
            ud_attachments?: {
                ud41_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud42_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud43_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud44_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud45_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud46_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud47_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud48_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud49_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud50_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
            } | undefined;
        }, {
            ud_flags?: {
                ud1_flg?: string | null | undefined;
                ud2_flg?: string | null | undefined;
                ud3_flg?: string | null | undefined;
                ud4_flg?: string | null | undefined;
                ud5_flg?: string | null | undefined;
                ud6_flg?: string | null | undefined;
                ud7_flg?: string | null | undefined;
                ud8_flg?: string | null | undefined;
                ud9_flg?: string | null | undefined;
                ud10_flg?: string | null | undefined;
            } | undefined;
            ud_codes?: {
                ud11_code?: string | null | undefined;
                ud12_code?: string | null | undefined;
                ud13_code?: string | null | undefined;
                ud14_code?: string | null | undefined;
                ud15_code?: string | null | undefined;
                ud16_code?: string | null | undefined;
                ud17_code?: string | null | undefined;
                ud18_code?: string | null | undefined;
                ud19_code?: string | null | undefined;
                ud20_code?: string | null | undefined;
            } | undefined;
            ud_text?: {
                ud21_text?: string | null | undefined;
                ud22_text?: string | null | undefined;
                ud23_text?: string | null | undefined;
                ud24_text?: string | null | undefined;
                ud25_text?: string | null | undefined;
                ud26_text?: string | null | undefined;
                ud27_text?: string | null | undefined;
                ud28_text?: string | null | undefined;
                ud29_text?: string | null | undefined;
                ud30_text?: string | null | undefined;
            } | undefined;
            ud_dates?: {
                ud31_date?: string | null | undefined;
                ud32_date?: string | null | undefined;
                ud33_date?: string | null | undefined;
                ud34_date?: string | null | undefined;
                ud35_date?: string | null | undefined;
                ud36_date?: string | null | undefined;
                ud37_date?: string | null | undefined;
                ud38_date?: string | null | undefined;
                ud39_date?: string | null | undefined;
                ud40_date?: string | null | undefined;
            } | undefined;
            ud_attachments?: {
                ud41_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud42_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud43_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud44_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud45_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud46_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud47_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud48_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud49_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud50_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
            } | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        cmpy_code?: string | undefined;
        update_on?: string | null | undefined;
        area_code?: string | undefined;
        ud_fields?: {
            ud_flags?: {
                ud1_flg?: string | null | undefined;
                ud2_flg?: string | null | undefined;
                ud3_flg?: string | null | undefined;
                ud4_flg?: string | null | undefined;
                ud5_flg?: string | null | undefined;
                ud6_flg?: string | null | undefined;
                ud7_flg?: string | null | undefined;
                ud8_flg?: string | null | undefined;
                ud9_flg?: string | null | undefined;
                ud10_flg?: string | null | undefined;
            } | undefined;
            ud_codes?: {
                ud11_code?: string | null | undefined;
                ud12_code?: string | null | undefined;
                ud13_code?: string | null | undefined;
                ud14_code?: string | null | undefined;
                ud15_code?: string | null | undefined;
                ud16_code?: string | null | undefined;
                ud17_code?: string | null | undefined;
                ud18_code?: string | null | undefined;
                ud19_code?: string | null | undefined;
                ud20_code?: string | null | undefined;
            } | undefined;
            ud_text?: {
                ud21_text?: string | null | undefined;
                ud22_text?: string | null | undefined;
                ud23_text?: string | null | undefined;
                ud24_text?: string | null | undefined;
                ud25_text?: string | null | undefined;
                ud26_text?: string | null | undefined;
                ud27_text?: string | null | undefined;
                ud28_text?: string | null | undefined;
                ud29_text?: string | null | undefined;
                ud30_text?: string | null | undefined;
            } | undefined;
            ud_dates?: {
                ud31_date?: string | null | undefined;
                ud32_date?: string | null | undefined;
                ud33_date?: string | null | undefined;
                ud34_date?: string | null | undefined;
                ud35_date?: string | null | undefined;
                ud36_date?: string | null | undefined;
                ud37_date?: string | null | undefined;
                ud38_date?: string | null | undefined;
                ud39_date?: string | null | undefined;
                ud40_date?: string | null | undefined;
            } | undefined;
            ud_attachments?: {
                ud41_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud42_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud43_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud44_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud45_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud46_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud47_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud48_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud49_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud50_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        emp_code?: string | undefined;
    }, {
        cmpy_code?: string | undefined;
        update_on?: string | null | undefined;
        area_code?: string | undefined;
        ud_fields?: {
            ud_flags?: {
                ud1_flg?: string | null | undefined;
                ud2_flg?: string | null | undefined;
                ud3_flg?: string | null | undefined;
                ud4_flg?: string | null | undefined;
                ud5_flg?: string | null | undefined;
                ud6_flg?: string | null | undefined;
                ud7_flg?: string | null | undefined;
                ud8_flg?: string | null | undefined;
                ud9_flg?: string | null | undefined;
                ud10_flg?: string | null | undefined;
            } | undefined;
            ud_codes?: {
                ud11_code?: string | null | undefined;
                ud12_code?: string | null | undefined;
                ud13_code?: string | null | undefined;
                ud14_code?: string | null | undefined;
                ud15_code?: string | null | undefined;
                ud16_code?: string | null | undefined;
                ud17_code?: string | null | undefined;
                ud18_code?: string | null | undefined;
                ud19_code?: string | null | undefined;
                ud20_code?: string | null | undefined;
            } | undefined;
            ud_text?: {
                ud21_text?: string | null | undefined;
                ud22_text?: string | null | undefined;
                ud23_text?: string | null | undefined;
                ud24_text?: string | null | undefined;
                ud25_text?: string | null | undefined;
                ud26_text?: string | null | undefined;
                ud27_text?: string | null | undefined;
                ud28_text?: string | null | undefined;
                ud29_text?: string | null | undefined;
                ud30_text?: string | null | undefined;
            } | undefined;
            ud_dates?: {
                ud31_date?: string | null | undefined;
                ud32_date?: string | null | undefined;
                ud33_date?: string | null | undefined;
                ud34_date?: string | null | undefined;
                ud35_date?: string | null | undefined;
                ud36_date?: string | null | undefined;
                ud37_date?: string | null | undefined;
                ud38_date?: string | null | undefined;
                ud39_date?: string | null | undefined;
                ud40_date?: string | null | undefined;
            } | undefined;
            ud_attachments?: {
                ud41_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud42_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud43_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud44_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud45_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud46_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud47_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud48_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud49_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
                ud50_attachment_details?: {
                    field_number?: number | undefined;
                    files?: {
                        file_name?: string | null | undefined;
                        file_size?: number | null | undefined;
                        date_uploaded?: string | null | undefined;
                        attach_id?: string | null | undefined;
                    }[] | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        emp_code?: string | undefined;
    }>;
    UDAreaFlagRequest: z.ZodObject<{
        ud1_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud2_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud3_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud4_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud5_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud6_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud7_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud8_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud9_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud10_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        ud1_flg?: string | null | undefined;
        ud2_flg?: string | null | undefined;
        ud3_flg?: string | null | undefined;
        ud4_flg?: string | null | undefined;
        ud5_flg?: string | null | undefined;
        ud6_flg?: string | null | undefined;
        ud7_flg?: string | null | undefined;
        ud8_flg?: string | null | undefined;
        ud9_flg?: string | null | undefined;
        ud10_flg?: string | null | undefined;
    }, {
        ud1_flg?: string | null | undefined;
        ud2_flg?: string | null | undefined;
        ud3_flg?: string | null | undefined;
        ud4_flg?: string | null | undefined;
        ud5_flg?: string | null | undefined;
        ud6_flg?: string | null | undefined;
        ud7_flg?: string | null | undefined;
        ud8_flg?: string | null | undefined;
        ud9_flg?: string | null | undefined;
        ud10_flg?: string | null | undefined;
    }>;
    UDAreaCodeRequest: z.ZodObject<{
        ud11_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud12_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud13_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud14_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud15_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud16_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud17_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud18_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud19_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud20_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        ud11_code?: string | null | undefined;
        ud12_code?: string | null | undefined;
        ud13_code?: string | null | undefined;
        ud14_code?: string | null | undefined;
        ud15_code?: string | null | undefined;
        ud16_code?: string | null | undefined;
        ud17_code?: string | null | undefined;
        ud18_code?: string | null | undefined;
        ud19_code?: string | null | undefined;
        ud20_code?: string | null | undefined;
    }, {
        ud11_code?: string | null | undefined;
        ud12_code?: string | null | undefined;
        ud13_code?: string | null | undefined;
        ud14_code?: string | null | undefined;
        ud15_code?: string | null | undefined;
        ud16_code?: string | null | undefined;
        ud17_code?: string | null | undefined;
        ud18_code?: string | null | undefined;
        ud19_code?: string | null | undefined;
        ud20_code?: string | null | undefined;
    }>;
    UDAreaTextRequest: z.ZodObject<{
        ud21_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud22_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud23_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud24_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud25_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud26_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud27_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud28_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud29_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud30_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        ud21_text?: string | null | undefined;
        ud22_text?: string | null | undefined;
        ud23_text?: string | null | undefined;
        ud24_text?: string | null | undefined;
        ud25_text?: string | null | undefined;
        ud26_text?: string | null | undefined;
        ud27_text?: string | null | undefined;
        ud28_text?: string | null | undefined;
        ud29_text?: string | null | undefined;
        ud30_text?: string | null | undefined;
    }, {
        ud21_text?: string | null | undefined;
        ud22_text?: string | null | undefined;
        ud23_text?: string | null | undefined;
        ud24_text?: string | null | undefined;
        ud25_text?: string | null | undefined;
        ud26_text?: string | null | undefined;
        ud27_text?: string | null | undefined;
        ud28_text?: string | null | undefined;
        ud29_text?: string | null | undefined;
        ud30_text?: string | null | undefined;
    }>;
    UDAreaDateRequest: z.ZodObject<{
        ud31_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud32_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud33_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud34_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud35_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud36_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud37_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud38_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud39_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ud40_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        ud31_date?: string | null | undefined;
        ud32_date?: string | null | undefined;
        ud33_date?: string | null | undefined;
        ud34_date?: string | null | undefined;
        ud35_date?: string | null | undefined;
        ud36_date?: string | null | undefined;
        ud37_date?: string | null | undefined;
        ud38_date?: string | null | undefined;
        ud39_date?: string | null | undefined;
        ud40_date?: string | null | undefined;
    }, {
        ud31_date?: string | null | undefined;
        ud32_date?: string | null | undefined;
        ud33_date?: string | null | undefined;
        ud34_date?: string | null | undefined;
        ud35_date?: string | null | undefined;
        ud36_date?: string | null | undefined;
        ud37_date?: string | null | undefined;
        ud38_date?: string | null | undefined;
        ud39_date?: string | null | undefined;
        ud40_date?: string | null | undefined;
    }>;
    UDAreaFieldsRequest: z.ZodObject<{
        ud_flags: z.ZodOptional<z.ZodObject<{
            ud1_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud2_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud3_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud4_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud5_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud6_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud7_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud8_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud9_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud10_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            ud1_flg?: string | null | undefined;
            ud2_flg?: string | null | undefined;
            ud3_flg?: string | null | undefined;
            ud4_flg?: string | null | undefined;
            ud5_flg?: string | null | undefined;
            ud6_flg?: string | null | undefined;
            ud7_flg?: string | null | undefined;
            ud8_flg?: string | null | undefined;
            ud9_flg?: string | null | undefined;
            ud10_flg?: string | null | undefined;
        }, {
            ud1_flg?: string | null | undefined;
            ud2_flg?: string | null | undefined;
            ud3_flg?: string | null | undefined;
            ud4_flg?: string | null | undefined;
            ud5_flg?: string | null | undefined;
            ud6_flg?: string | null | undefined;
            ud7_flg?: string | null | undefined;
            ud8_flg?: string | null | undefined;
            ud9_flg?: string | null | undefined;
            ud10_flg?: string | null | undefined;
        }>>;
        ud_codes: z.ZodOptional<z.ZodObject<{
            ud11_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud12_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud13_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud14_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud15_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud16_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud17_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud18_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud19_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud20_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            ud11_code?: string | null | undefined;
            ud12_code?: string | null | undefined;
            ud13_code?: string | null | undefined;
            ud14_code?: string | null | undefined;
            ud15_code?: string | null | undefined;
            ud16_code?: string | null | undefined;
            ud17_code?: string | null | undefined;
            ud18_code?: string | null | undefined;
            ud19_code?: string | null | undefined;
            ud20_code?: string | null | undefined;
        }, {
            ud11_code?: string | null | undefined;
            ud12_code?: string | null | undefined;
            ud13_code?: string | null | undefined;
            ud14_code?: string | null | undefined;
            ud15_code?: string | null | undefined;
            ud16_code?: string | null | undefined;
            ud17_code?: string | null | undefined;
            ud18_code?: string | null | undefined;
            ud19_code?: string | null | undefined;
            ud20_code?: string | null | undefined;
        }>>;
        ud_text: z.ZodOptional<z.ZodObject<{
            ud21_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud22_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud23_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud24_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud25_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud26_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud27_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud28_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud29_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud30_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            ud21_text?: string | null | undefined;
            ud22_text?: string | null | undefined;
            ud23_text?: string | null | undefined;
            ud24_text?: string | null | undefined;
            ud25_text?: string | null | undefined;
            ud26_text?: string | null | undefined;
            ud27_text?: string | null | undefined;
            ud28_text?: string | null | undefined;
            ud29_text?: string | null | undefined;
            ud30_text?: string | null | undefined;
        }, {
            ud21_text?: string | null | undefined;
            ud22_text?: string | null | undefined;
            ud23_text?: string | null | undefined;
            ud24_text?: string | null | undefined;
            ud25_text?: string | null | undefined;
            ud26_text?: string | null | undefined;
            ud27_text?: string | null | undefined;
            ud28_text?: string | null | undefined;
            ud29_text?: string | null | undefined;
            ud30_text?: string | null | undefined;
        }>>;
        ud_dates: z.ZodOptional<z.ZodObject<{
            ud31_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud32_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud33_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud34_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud35_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud36_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud37_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud38_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud39_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ud40_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            ud31_date?: string | null | undefined;
            ud32_date?: string | null | undefined;
            ud33_date?: string | null | undefined;
            ud34_date?: string | null | undefined;
            ud35_date?: string | null | undefined;
            ud36_date?: string | null | undefined;
            ud37_date?: string | null | undefined;
            ud38_date?: string | null | undefined;
            ud39_date?: string | null | undefined;
            ud40_date?: string | null | undefined;
        }, {
            ud31_date?: string | null | undefined;
            ud32_date?: string | null | undefined;
            ud33_date?: string | null | undefined;
            ud34_date?: string | null | undefined;
            ud35_date?: string | null | undefined;
            ud36_date?: string | null | undefined;
            ud37_date?: string | null | undefined;
            ud38_date?: string | null | undefined;
            ud39_date?: string | null | undefined;
            ud40_date?: string | null | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        ud_flags?: {
            ud1_flg?: string | null | undefined;
            ud2_flg?: string | null | undefined;
            ud3_flg?: string | null | undefined;
            ud4_flg?: string | null | undefined;
            ud5_flg?: string | null | undefined;
            ud6_flg?: string | null | undefined;
            ud7_flg?: string | null | undefined;
            ud8_flg?: string | null | undefined;
            ud9_flg?: string | null | undefined;
            ud10_flg?: string | null | undefined;
        } | undefined;
        ud_codes?: {
            ud11_code?: string | null | undefined;
            ud12_code?: string | null | undefined;
            ud13_code?: string | null | undefined;
            ud14_code?: string | null | undefined;
            ud15_code?: string | null | undefined;
            ud16_code?: string | null | undefined;
            ud17_code?: string | null | undefined;
            ud18_code?: string | null | undefined;
            ud19_code?: string | null | undefined;
            ud20_code?: string | null | undefined;
        } | undefined;
        ud_text?: {
            ud21_text?: string | null | undefined;
            ud22_text?: string | null | undefined;
            ud23_text?: string | null | undefined;
            ud24_text?: string | null | undefined;
            ud25_text?: string | null | undefined;
            ud26_text?: string | null | undefined;
            ud27_text?: string | null | undefined;
            ud28_text?: string | null | undefined;
            ud29_text?: string | null | undefined;
            ud30_text?: string | null | undefined;
        } | undefined;
        ud_dates?: {
            ud31_date?: string | null | undefined;
            ud32_date?: string | null | undefined;
            ud33_date?: string | null | undefined;
            ud34_date?: string | null | undefined;
            ud35_date?: string | null | undefined;
            ud36_date?: string | null | undefined;
            ud37_date?: string | null | undefined;
            ud38_date?: string | null | undefined;
            ud39_date?: string | null | undefined;
            ud40_date?: string | null | undefined;
        } | undefined;
    }, {
        ud_flags?: {
            ud1_flg?: string | null | undefined;
            ud2_flg?: string | null | undefined;
            ud3_flg?: string | null | undefined;
            ud4_flg?: string | null | undefined;
            ud5_flg?: string | null | undefined;
            ud6_flg?: string | null | undefined;
            ud7_flg?: string | null | undefined;
            ud8_flg?: string | null | undefined;
            ud9_flg?: string | null | undefined;
            ud10_flg?: string | null | undefined;
        } | undefined;
        ud_codes?: {
            ud11_code?: string | null | undefined;
            ud12_code?: string | null | undefined;
            ud13_code?: string | null | undefined;
            ud14_code?: string | null | undefined;
            ud15_code?: string | null | undefined;
            ud16_code?: string | null | undefined;
            ud17_code?: string | null | undefined;
            ud18_code?: string | null | undefined;
            ud19_code?: string | null | undefined;
            ud20_code?: string | null | undefined;
        } | undefined;
        ud_text?: {
            ud21_text?: string | null | undefined;
            ud22_text?: string | null | undefined;
            ud23_text?: string | null | undefined;
            ud24_text?: string | null | undefined;
            ud25_text?: string | null | undefined;
            ud26_text?: string | null | undefined;
            ud27_text?: string | null | undefined;
            ud28_text?: string | null | undefined;
            ud29_text?: string | null | undefined;
            ud30_text?: string | null | undefined;
        } | undefined;
        ud_dates?: {
            ud31_date?: string | null | undefined;
            ud32_date?: string | null | undefined;
            ud33_date?: string | null | undefined;
            ud34_date?: string | null | undefined;
            ud35_date?: string | null | undefined;
            ud36_date?: string | null | undefined;
            ud37_date?: string | null | undefined;
            ud38_date?: string | null | undefined;
            ud39_date?: string | null | undefined;
            ud40_date?: string | null | undefined;
        } | undefined;
    }>;
    CommonEmployeeUDAreaUpdateRequest: z.ZodObject<{
        ud_fields: z.ZodOptional<z.ZodObject<{
            ud_flags: z.ZodOptional<z.ZodObject<{
                ud1_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud2_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud3_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud4_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud5_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud6_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud7_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud8_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud9_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud10_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                ud1_flg?: string | null | undefined;
                ud2_flg?: string | null | undefined;
                ud3_flg?: string | null | undefined;
                ud4_flg?: string | null | undefined;
                ud5_flg?: string | null | undefined;
                ud6_flg?: string | null | undefined;
                ud7_flg?: string | null | undefined;
                ud8_flg?: string | null | undefined;
                ud9_flg?: string | null | undefined;
                ud10_flg?: string | null | undefined;
            }, {
                ud1_flg?: string | null | undefined;
                ud2_flg?: string | null | undefined;
                ud3_flg?: string | null | undefined;
                ud4_flg?: string | null | undefined;
                ud5_flg?: string | null | undefined;
                ud6_flg?: string | null | undefined;
                ud7_flg?: string | null | undefined;
                ud8_flg?: string | null | undefined;
                ud9_flg?: string | null | undefined;
                ud10_flg?: string | null | undefined;
            }>>;
            ud_codes: z.ZodOptional<z.ZodObject<{
                ud11_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud12_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud13_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud14_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud15_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud16_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud17_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud18_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud19_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud20_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                ud11_code?: string | null | undefined;
                ud12_code?: string | null | undefined;
                ud13_code?: string | null | undefined;
                ud14_code?: string | null | undefined;
                ud15_code?: string | null | undefined;
                ud16_code?: string | null | undefined;
                ud17_code?: string | null | undefined;
                ud18_code?: string | null | undefined;
                ud19_code?: string | null | undefined;
                ud20_code?: string | null | undefined;
            }, {
                ud11_code?: string | null | undefined;
                ud12_code?: string | null | undefined;
                ud13_code?: string | null | undefined;
                ud14_code?: string | null | undefined;
                ud15_code?: string | null | undefined;
                ud16_code?: string | null | undefined;
                ud17_code?: string | null | undefined;
                ud18_code?: string | null | undefined;
                ud19_code?: string | null | undefined;
                ud20_code?: string | null | undefined;
            }>>;
            ud_text: z.ZodOptional<z.ZodObject<{
                ud21_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud22_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud23_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud24_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud25_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud26_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud27_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud28_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud29_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud30_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                ud21_text?: string | null | undefined;
                ud22_text?: string | null | undefined;
                ud23_text?: string | null | undefined;
                ud24_text?: string | null | undefined;
                ud25_text?: string | null | undefined;
                ud26_text?: string | null | undefined;
                ud27_text?: string | null | undefined;
                ud28_text?: string | null | undefined;
                ud29_text?: string | null | undefined;
                ud30_text?: string | null | undefined;
            }, {
                ud21_text?: string | null | undefined;
                ud22_text?: string | null | undefined;
                ud23_text?: string | null | undefined;
                ud24_text?: string | null | undefined;
                ud25_text?: string | null | undefined;
                ud26_text?: string | null | undefined;
                ud27_text?: string | null | undefined;
                ud28_text?: string | null | undefined;
                ud29_text?: string | null | undefined;
                ud30_text?: string | null | undefined;
            }>>;
            ud_dates: z.ZodOptional<z.ZodObject<{
                ud31_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud32_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud33_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud34_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud35_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud36_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud37_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud38_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud39_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud40_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                ud31_date?: string | null | undefined;
                ud32_date?: string | null | undefined;
                ud33_date?: string | null | undefined;
                ud34_date?: string | null | undefined;
                ud35_date?: string | null | undefined;
                ud36_date?: string | null | undefined;
                ud37_date?: string | null | undefined;
                ud38_date?: string | null | undefined;
                ud39_date?: string | null | undefined;
                ud40_date?: string | null | undefined;
            }, {
                ud31_date?: string | null | undefined;
                ud32_date?: string | null | undefined;
                ud33_date?: string | null | undefined;
                ud34_date?: string | null | undefined;
                ud35_date?: string | null | undefined;
                ud36_date?: string | null | undefined;
                ud37_date?: string | null | undefined;
                ud38_date?: string | null | undefined;
                ud39_date?: string | null | undefined;
                ud40_date?: string | null | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            ud_flags?: {
                ud1_flg?: string | null | undefined;
                ud2_flg?: string | null | undefined;
                ud3_flg?: string | null | undefined;
                ud4_flg?: string | null | undefined;
                ud5_flg?: string | null | undefined;
                ud6_flg?: string | null | undefined;
                ud7_flg?: string | null | undefined;
                ud8_flg?: string | null | undefined;
                ud9_flg?: string | null | undefined;
                ud10_flg?: string | null | undefined;
            } | undefined;
            ud_codes?: {
                ud11_code?: string | null | undefined;
                ud12_code?: string | null | undefined;
                ud13_code?: string | null | undefined;
                ud14_code?: string | null | undefined;
                ud15_code?: string | null | undefined;
                ud16_code?: string | null | undefined;
                ud17_code?: string | null | undefined;
                ud18_code?: string | null | undefined;
                ud19_code?: string | null | undefined;
                ud20_code?: string | null | undefined;
            } | undefined;
            ud_text?: {
                ud21_text?: string | null | undefined;
                ud22_text?: string | null | undefined;
                ud23_text?: string | null | undefined;
                ud24_text?: string | null | undefined;
                ud25_text?: string | null | undefined;
                ud26_text?: string | null | undefined;
                ud27_text?: string | null | undefined;
                ud28_text?: string | null | undefined;
                ud29_text?: string | null | undefined;
                ud30_text?: string | null | undefined;
            } | undefined;
            ud_dates?: {
                ud31_date?: string | null | undefined;
                ud32_date?: string | null | undefined;
                ud33_date?: string | null | undefined;
                ud34_date?: string | null | undefined;
                ud35_date?: string | null | undefined;
                ud36_date?: string | null | undefined;
                ud37_date?: string | null | undefined;
                ud38_date?: string | null | undefined;
                ud39_date?: string | null | undefined;
                ud40_date?: string | null | undefined;
            } | undefined;
        }, {
            ud_flags?: {
                ud1_flg?: string | null | undefined;
                ud2_flg?: string | null | undefined;
                ud3_flg?: string | null | undefined;
                ud4_flg?: string | null | undefined;
                ud5_flg?: string | null | undefined;
                ud6_flg?: string | null | undefined;
                ud7_flg?: string | null | undefined;
                ud8_flg?: string | null | undefined;
                ud9_flg?: string | null | undefined;
                ud10_flg?: string | null | undefined;
            } | undefined;
            ud_codes?: {
                ud11_code?: string | null | undefined;
                ud12_code?: string | null | undefined;
                ud13_code?: string | null | undefined;
                ud14_code?: string | null | undefined;
                ud15_code?: string | null | undefined;
                ud16_code?: string | null | undefined;
                ud17_code?: string | null | undefined;
                ud18_code?: string | null | undefined;
                ud19_code?: string | null | undefined;
                ud20_code?: string | null | undefined;
            } | undefined;
            ud_text?: {
                ud21_text?: string | null | undefined;
                ud22_text?: string | null | undefined;
                ud23_text?: string | null | undefined;
                ud24_text?: string | null | undefined;
                ud25_text?: string | null | undefined;
                ud26_text?: string | null | undefined;
                ud27_text?: string | null | undefined;
                ud28_text?: string | null | undefined;
                ud29_text?: string | null | undefined;
                ud30_text?: string | null | undefined;
            } | undefined;
            ud_dates?: {
                ud31_date?: string | null | undefined;
                ud32_date?: string | null | undefined;
                ud33_date?: string | null | undefined;
                ud34_date?: string | null | undefined;
                ud35_date?: string | null | undefined;
                ud36_date?: string | null | undefined;
                ud37_date?: string | null | undefined;
                ud38_date?: string | null | undefined;
                ud39_date?: string | null | undefined;
                ud40_date?: string | null | undefined;
            } | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        ud_fields?: {
            ud_flags?: {
                ud1_flg?: string | null | undefined;
                ud2_flg?: string | null | undefined;
                ud3_flg?: string | null | undefined;
                ud4_flg?: string | null | undefined;
                ud5_flg?: string | null | undefined;
                ud6_flg?: string | null | undefined;
                ud7_flg?: string | null | undefined;
                ud8_flg?: string | null | undefined;
                ud9_flg?: string | null | undefined;
                ud10_flg?: string | null | undefined;
            } | undefined;
            ud_codes?: {
                ud11_code?: string | null | undefined;
                ud12_code?: string | null | undefined;
                ud13_code?: string | null | undefined;
                ud14_code?: string | null | undefined;
                ud15_code?: string | null | undefined;
                ud16_code?: string | null | undefined;
                ud17_code?: string | null | undefined;
                ud18_code?: string | null | undefined;
                ud19_code?: string | null | undefined;
                ud20_code?: string | null | undefined;
            } | undefined;
            ud_text?: {
                ud21_text?: string | null | undefined;
                ud22_text?: string | null | undefined;
                ud23_text?: string | null | undefined;
                ud24_text?: string | null | undefined;
                ud25_text?: string | null | undefined;
                ud26_text?: string | null | undefined;
                ud27_text?: string | null | undefined;
                ud28_text?: string | null | undefined;
                ud29_text?: string | null | undefined;
                ud30_text?: string | null | undefined;
            } | undefined;
            ud_dates?: {
                ud31_date?: string | null | undefined;
                ud32_date?: string | null | undefined;
                ud33_date?: string | null | undefined;
                ud34_date?: string | null | undefined;
                ud35_date?: string | null | undefined;
                ud36_date?: string | null | undefined;
                ud37_date?: string | null | undefined;
                ud38_date?: string | null | undefined;
                ud39_date?: string | null | undefined;
                ud40_date?: string | null | undefined;
            } | undefined;
        } | undefined;
    }, {
        ud_fields?: {
            ud_flags?: {
                ud1_flg?: string | null | undefined;
                ud2_flg?: string | null | undefined;
                ud3_flg?: string | null | undefined;
                ud4_flg?: string | null | undefined;
                ud5_flg?: string | null | undefined;
                ud6_flg?: string | null | undefined;
                ud7_flg?: string | null | undefined;
                ud8_flg?: string | null | undefined;
                ud9_flg?: string | null | undefined;
                ud10_flg?: string | null | undefined;
            } | undefined;
            ud_codes?: {
                ud11_code?: string | null | undefined;
                ud12_code?: string | null | undefined;
                ud13_code?: string | null | undefined;
                ud14_code?: string | null | undefined;
                ud15_code?: string | null | undefined;
                ud16_code?: string | null | undefined;
                ud17_code?: string | null | undefined;
                ud18_code?: string | null | undefined;
                ud19_code?: string | null | undefined;
                ud20_code?: string | null | undefined;
            } | undefined;
            ud_text?: {
                ud21_text?: string | null | undefined;
                ud22_text?: string | null | undefined;
                ud23_text?: string | null | undefined;
                ud24_text?: string | null | undefined;
                ud25_text?: string | null | undefined;
                ud26_text?: string | null | undefined;
                ud27_text?: string | null | undefined;
                ud28_text?: string | null | undefined;
                ud29_text?: string | null | undefined;
                ud30_text?: string | null | undefined;
            } | undefined;
            ud_dates?: {
                ud31_date?: string | null | undefined;
                ud32_date?: string | null | undefined;
                ud33_date?: string | null | undefined;
                ud34_date?: string | null | undefined;
                ud35_date?: string | null | undefined;
                ud36_date?: string | null | undefined;
                ud37_date?: string | null | undefined;
                ud38_date?: string | null | undefined;
                ud39_date?: string | null | undefined;
                ud40_date?: string | null | undefined;
            } | undefined;
        } | undefined;
    }>;
    AddEmployeeUDAreaRequest: z.ZodIntersection<z.ZodObject<{
        ud_fields: z.ZodOptional<z.ZodObject<{
            ud_flags: z.ZodOptional<z.ZodObject<{
                ud1_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud2_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud3_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud4_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud5_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud6_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud7_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud8_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud9_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud10_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                ud1_flg?: string | null | undefined;
                ud2_flg?: string | null | undefined;
                ud3_flg?: string | null | undefined;
                ud4_flg?: string | null | undefined;
                ud5_flg?: string | null | undefined;
                ud6_flg?: string | null | undefined;
                ud7_flg?: string | null | undefined;
                ud8_flg?: string | null | undefined;
                ud9_flg?: string | null | undefined;
                ud10_flg?: string | null | undefined;
            }, {
                ud1_flg?: string | null | undefined;
                ud2_flg?: string | null | undefined;
                ud3_flg?: string | null | undefined;
                ud4_flg?: string | null | undefined;
                ud5_flg?: string | null | undefined;
                ud6_flg?: string | null | undefined;
                ud7_flg?: string | null | undefined;
                ud8_flg?: string | null | undefined;
                ud9_flg?: string | null | undefined;
                ud10_flg?: string | null | undefined;
            }>>;
            ud_codes: z.ZodOptional<z.ZodObject<{
                ud11_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud12_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud13_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud14_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud15_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud16_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud17_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud18_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud19_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud20_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                ud11_code?: string | null | undefined;
                ud12_code?: string | null | undefined;
                ud13_code?: string | null | undefined;
                ud14_code?: string | null | undefined;
                ud15_code?: string | null | undefined;
                ud16_code?: string | null | undefined;
                ud17_code?: string | null | undefined;
                ud18_code?: string | null | undefined;
                ud19_code?: string | null | undefined;
                ud20_code?: string | null | undefined;
            }, {
                ud11_code?: string | null | undefined;
                ud12_code?: string | null | undefined;
                ud13_code?: string | null | undefined;
                ud14_code?: string | null | undefined;
                ud15_code?: string | null | undefined;
                ud16_code?: string | null | undefined;
                ud17_code?: string | null | undefined;
                ud18_code?: string | null | undefined;
                ud19_code?: string | null | undefined;
                ud20_code?: string | null | undefined;
            }>>;
            ud_text: z.ZodOptional<z.ZodObject<{
                ud21_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud22_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud23_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud24_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud25_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud26_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud27_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud28_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud29_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud30_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                ud21_text?: string | null | undefined;
                ud22_text?: string | null | undefined;
                ud23_text?: string | null | undefined;
                ud24_text?: string | null | undefined;
                ud25_text?: string | null | undefined;
                ud26_text?: string | null | undefined;
                ud27_text?: string | null | undefined;
                ud28_text?: string | null | undefined;
                ud29_text?: string | null | undefined;
                ud30_text?: string | null | undefined;
            }, {
                ud21_text?: string | null | undefined;
                ud22_text?: string | null | undefined;
                ud23_text?: string | null | undefined;
                ud24_text?: string | null | undefined;
                ud25_text?: string | null | undefined;
                ud26_text?: string | null | undefined;
                ud27_text?: string | null | undefined;
                ud28_text?: string | null | undefined;
                ud29_text?: string | null | undefined;
                ud30_text?: string | null | undefined;
            }>>;
            ud_dates: z.ZodOptional<z.ZodObject<{
                ud31_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud32_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud33_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud34_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud35_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud36_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud37_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud38_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud39_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud40_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                ud31_date?: string | null | undefined;
                ud32_date?: string | null | undefined;
                ud33_date?: string | null | undefined;
                ud34_date?: string | null | undefined;
                ud35_date?: string | null | undefined;
                ud36_date?: string | null | undefined;
                ud37_date?: string | null | undefined;
                ud38_date?: string | null | undefined;
                ud39_date?: string | null | undefined;
                ud40_date?: string | null | undefined;
            }, {
                ud31_date?: string | null | undefined;
                ud32_date?: string | null | undefined;
                ud33_date?: string | null | undefined;
                ud34_date?: string | null | undefined;
                ud35_date?: string | null | undefined;
                ud36_date?: string | null | undefined;
                ud37_date?: string | null | undefined;
                ud38_date?: string | null | undefined;
                ud39_date?: string | null | undefined;
                ud40_date?: string | null | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            ud_flags?: {
                ud1_flg?: string | null | undefined;
                ud2_flg?: string | null | undefined;
                ud3_flg?: string | null | undefined;
                ud4_flg?: string | null | undefined;
                ud5_flg?: string | null | undefined;
                ud6_flg?: string | null | undefined;
                ud7_flg?: string | null | undefined;
                ud8_flg?: string | null | undefined;
                ud9_flg?: string | null | undefined;
                ud10_flg?: string | null | undefined;
            } | undefined;
            ud_codes?: {
                ud11_code?: string | null | undefined;
                ud12_code?: string | null | undefined;
                ud13_code?: string | null | undefined;
                ud14_code?: string | null | undefined;
                ud15_code?: string | null | undefined;
                ud16_code?: string | null | undefined;
                ud17_code?: string | null | undefined;
                ud18_code?: string | null | undefined;
                ud19_code?: string | null | undefined;
                ud20_code?: string | null | undefined;
            } | undefined;
            ud_text?: {
                ud21_text?: string | null | undefined;
                ud22_text?: string | null | undefined;
                ud23_text?: string | null | undefined;
                ud24_text?: string | null | undefined;
                ud25_text?: string | null | undefined;
                ud26_text?: string | null | undefined;
                ud27_text?: string | null | undefined;
                ud28_text?: string | null | undefined;
                ud29_text?: string | null | undefined;
                ud30_text?: string | null | undefined;
            } | undefined;
            ud_dates?: {
                ud31_date?: string | null | undefined;
                ud32_date?: string | null | undefined;
                ud33_date?: string | null | undefined;
                ud34_date?: string | null | undefined;
                ud35_date?: string | null | undefined;
                ud36_date?: string | null | undefined;
                ud37_date?: string | null | undefined;
                ud38_date?: string | null | undefined;
                ud39_date?: string | null | undefined;
                ud40_date?: string | null | undefined;
            } | undefined;
        }, {
            ud_flags?: {
                ud1_flg?: string | null | undefined;
                ud2_flg?: string | null | undefined;
                ud3_flg?: string | null | undefined;
                ud4_flg?: string | null | undefined;
                ud5_flg?: string | null | undefined;
                ud6_flg?: string | null | undefined;
                ud7_flg?: string | null | undefined;
                ud8_flg?: string | null | undefined;
                ud9_flg?: string | null | undefined;
                ud10_flg?: string | null | undefined;
            } | undefined;
            ud_codes?: {
                ud11_code?: string | null | undefined;
                ud12_code?: string | null | undefined;
                ud13_code?: string | null | undefined;
                ud14_code?: string | null | undefined;
                ud15_code?: string | null | undefined;
                ud16_code?: string | null | undefined;
                ud17_code?: string | null | undefined;
                ud18_code?: string | null | undefined;
                ud19_code?: string | null | undefined;
                ud20_code?: string | null | undefined;
            } | undefined;
            ud_text?: {
                ud21_text?: string | null | undefined;
                ud22_text?: string | null | undefined;
                ud23_text?: string | null | undefined;
                ud24_text?: string | null | undefined;
                ud25_text?: string | null | undefined;
                ud26_text?: string | null | undefined;
                ud27_text?: string | null | undefined;
                ud28_text?: string | null | undefined;
                ud29_text?: string | null | undefined;
                ud30_text?: string | null | undefined;
            } | undefined;
            ud_dates?: {
                ud31_date?: string | null | undefined;
                ud32_date?: string | null | undefined;
                ud33_date?: string | null | undefined;
                ud34_date?: string | null | undefined;
                ud35_date?: string | null | undefined;
                ud36_date?: string | null | undefined;
                ud37_date?: string | null | undefined;
                ud38_date?: string | null | undefined;
                ud39_date?: string | null | undefined;
                ud40_date?: string | null | undefined;
            } | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        ud_fields?: {
            ud_flags?: {
                ud1_flg?: string | null | undefined;
                ud2_flg?: string | null | undefined;
                ud3_flg?: string | null | undefined;
                ud4_flg?: string | null | undefined;
                ud5_flg?: string | null | undefined;
                ud6_flg?: string | null | undefined;
                ud7_flg?: string | null | undefined;
                ud8_flg?: string | null | undefined;
                ud9_flg?: string | null | undefined;
                ud10_flg?: string | null | undefined;
            } | undefined;
            ud_codes?: {
                ud11_code?: string | null | undefined;
                ud12_code?: string | null | undefined;
                ud13_code?: string | null | undefined;
                ud14_code?: string | null | undefined;
                ud15_code?: string | null | undefined;
                ud16_code?: string | null | undefined;
                ud17_code?: string | null | undefined;
                ud18_code?: string | null | undefined;
                ud19_code?: string | null | undefined;
                ud20_code?: string | null | undefined;
            } | undefined;
            ud_text?: {
                ud21_text?: string | null | undefined;
                ud22_text?: string | null | undefined;
                ud23_text?: string | null | undefined;
                ud24_text?: string | null | undefined;
                ud25_text?: string | null | undefined;
                ud26_text?: string | null | undefined;
                ud27_text?: string | null | undefined;
                ud28_text?: string | null | undefined;
                ud29_text?: string | null | undefined;
                ud30_text?: string | null | undefined;
            } | undefined;
            ud_dates?: {
                ud31_date?: string | null | undefined;
                ud32_date?: string | null | undefined;
                ud33_date?: string | null | undefined;
                ud34_date?: string | null | undefined;
                ud35_date?: string | null | undefined;
                ud36_date?: string | null | undefined;
                ud37_date?: string | null | undefined;
                ud38_date?: string | null | undefined;
                ud39_date?: string | null | undefined;
                ud40_date?: string | null | undefined;
            } | undefined;
        } | undefined;
    }, {
        ud_fields?: {
            ud_flags?: {
                ud1_flg?: string | null | undefined;
                ud2_flg?: string | null | undefined;
                ud3_flg?: string | null | undefined;
                ud4_flg?: string | null | undefined;
                ud5_flg?: string | null | undefined;
                ud6_flg?: string | null | undefined;
                ud7_flg?: string | null | undefined;
                ud8_flg?: string | null | undefined;
                ud9_flg?: string | null | undefined;
                ud10_flg?: string | null | undefined;
            } | undefined;
            ud_codes?: {
                ud11_code?: string | null | undefined;
                ud12_code?: string | null | undefined;
                ud13_code?: string | null | undefined;
                ud14_code?: string | null | undefined;
                ud15_code?: string | null | undefined;
                ud16_code?: string | null | undefined;
                ud17_code?: string | null | undefined;
                ud18_code?: string | null | undefined;
                ud19_code?: string | null | undefined;
                ud20_code?: string | null | undefined;
            } | undefined;
            ud_text?: {
                ud21_text?: string | null | undefined;
                ud22_text?: string | null | undefined;
                ud23_text?: string | null | undefined;
                ud24_text?: string | null | undefined;
                ud25_text?: string | null | undefined;
                ud26_text?: string | null | undefined;
                ud27_text?: string | null | undefined;
                ud28_text?: string | null | undefined;
                ud29_text?: string | null | undefined;
                ud30_text?: string | null | undefined;
            } | undefined;
            ud_dates?: {
                ud31_date?: string | null | undefined;
                ud32_date?: string | null | undefined;
                ud33_date?: string | null | undefined;
                ud34_date?: string | null | undefined;
                ud35_date?: string | null | undefined;
                ud36_date?: string | null | undefined;
                ud37_date?: string | null | undefined;
                ud38_date?: string | null | undefined;
                ud39_date?: string | null | undefined;
                ud40_date?: string | null | undefined;
            } | undefined;
        } | undefined;
    }>, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
    UpdateEmployeeUDAreaRequest: z.ZodIntersection<z.ZodObject<{
        ud_fields: z.ZodOptional<z.ZodObject<{
            ud_flags: z.ZodOptional<z.ZodObject<{
                ud1_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud2_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud3_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud4_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud5_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud6_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud7_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud8_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud9_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud10_flg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                ud1_flg?: string | null | undefined;
                ud2_flg?: string | null | undefined;
                ud3_flg?: string | null | undefined;
                ud4_flg?: string | null | undefined;
                ud5_flg?: string | null | undefined;
                ud6_flg?: string | null | undefined;
                ud7_flg?: string | null | undefined;
                ud8_flg?: string | null | undefined;
                ud9_flg?: string | null | undefined;
                ud10_flg?: string | null | undefined;
            }, {
                ud1_flg?: string | null | undefined;
                ud2_flg?: string | null | undefined;
                ud3_flg?: string | null | undefined;
                ud4_flg?: string | null | undefined;
                ud5_flg?: string | null | undefined;
                ud6_flg?: string | null | undefined;
                ud7_flg?: string | null | undefined;
                ud8_flg?: string | null | undefined;
                ud9_flg?: string | null | undefined;
                ud10_flg?: string | null | undefined;
            }>>;
            ud_codes: z.ZodOptional<z.ZodObject<{
                ud11_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud12_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud13_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud14_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud15_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud16_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud17_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud18_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud19_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud20_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                ud11_code?: string | null | undefined;
                ud12_code?: string | null | undefined;
                ud13_code?: string | null | undefined;
                ud14_code?: string | null | undefined;
                ud15_code?: string | null | undefined;
                ud16_code?: string | null | undefined;
                ud17_code?: string | null | undefined;
                ud18_code?: string | null | undefined;
                ud19_code?: string | null | undefined;
                ud20_code?: string | null | undefined;
            }, {
                ud11_code?: string | null | undefined;
                ud12_code?: string | null | undefined;
                ud13_code?: string | null | undefined;
                ud14_code?: string | null | undefined;
                ud15_code?: string | null | undefined;
                ud16_code?: string | null | undefined;
                ud17_code?: string | null | undefined;
                ud18_code?: string | null | undefined;
                ud19_code?: string | null | undefined;
                ud20_code?: string | null | undefined;
            }>>;
            ud_text: z.ZodOptional<z.ZodObject<{
                ud21_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud22_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud23_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud24_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud25_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud26_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud27_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud28_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud29_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud30_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                ud21_text?: string | null | undefined;
                ud22_text?: string | null | undefined;
                ud23_text?: string | null | undefined;
                ud24_text?: string | null | undefined;
                ud25_text?: string | null | undefined;
                ud26_text?: string | null | undefined;
                ud27_text?: string | null | undefined;
                ud28_text?: string | null | undefined;
                ud29_text?: string | null | undefined;
                ud30_text?: string | null | undefined;
            }, {
                ud21_text?: string | null | undefined;
                ud22_text?: string | null | undefined;
                ud23_text?: string | null | undefined;
                ud24_text?: string | null | undefined;
                ud25_text?: string | null | undefined;
                ud26_text?: string | null | undefined;
                ud27_text?: string | null | undefined;
                ud28_text?: string | null | undefined;
                ud29_text?: string | null | undefined;
                ud30_text?: string | null | undefined;
            }>>;
            ud_dates: z.ZodOptional<z.ZodObject<{
                ud31_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud32_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud33_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud34_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud35_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud36_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud37_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud38_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud39_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ud40_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                ud31_date?: string | null | undefined;
                ud32_date?: string | null | undefined;
                ud33_date?: string | null | undefined;
                ud34_date?: string | null | undefined;
                ud35_date?: string | null | undefined;
                ud36_date?: string | null | undefined;
                ud37_date?: string | null | undefined;
                ud38_date?: string | null | undefined;
                ud39_date?: string | null | undefined;
                ud40_date?: string | null | undefined;
            }, {
                ud31_date?: string | null | undefined;
                ud32_date?: string | null | undefined;
                ud33_date?: string | null | undefined;
                ud34_date?: string | null | undefined;
                ud35_date?: string | null | undefined;
                ud36_date?: string | null | undefined;
                ud37_date?: string | null | undefined;
                ud38_date?: string | null | undefined;
                ud39_date?: string | null | undefined;
                ud40_date?: string | null | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            ud_flags?: {
                ud1_flg?: string | null | undefined;
                ud2_flg?: string | null | undefined;
                ud3_flg?: string | null | undefined;
                ud4_flg?: string | null | undefined;
                ud5_flg?: string | null | undefined;
                ud6_flg?: string | null | undefined;
                ud7_flg?: string | null | undefined;
                ud8_flg?: string | null | undefined;
                ud9_flg?: string | null | undefined;
                ud10_flg?: string | null | undefined;
            } | undefined;
            ud_codes?: {
                ud11_code?: string | null | undefined;
                ud12_code?: string | null | undefined;
                ud13_code?: string | null | undefined;
                ud14_code?: string | null | undefined;
                ud15_code?: string | null | undefined;
                ud16_code?: string | null | undefined;
                ud17_code?: string | null | undefined;
                ud18_code?: string | null | undefined;
                ud19_code?: string | null | undefined;
                ud20_code?: string | null | undefined;
            } | undefined;
            ud_text?: {
                ud21_text?: string | null | undefined;
                ud22_text?: string | null | undefined;
                ud23_text?: string | null | undefined;
                ud24_text?: string | null | undefined;
                ud25_text?: string | null | undefined;
                ud26_text?: string | null | undefined;
                ud27_text?: string | null | undefined;
                ud28_text?: string | null | undefined;
                ud29_text?: string | null | undefined;
                ud30_text?: string | null | undefined;
            } | undefined;
            ud_dates?: {
                ud31_date?: string | null | undefined;
                ud32_date?: string | null | undefined;
                ud33_date?: string | null | undefined;
                ud34_date?: string | null | undefined;
                ud35_date?: string | null | undefined;
                ud36_date?: string | null | undefined;
                ud37_date?: string | null | undefined;
                ud38_date?: string | null | undefined;
                ud39_date?: string | null | undefined;
                ud40_date?: string | null | undefined;
            } | undefined;
        }, {
            ud_flags?: {
                ud1_flg?: string | null | undefined;
                ud2_flg?: string | null | undefined;
                ud3_flg?: string | null | undefined;
                ud4_flg?: string | null | undefined;
                ud5_flg?: string | null | undefined;
                ud6_flg?: string | null | undefined;
                ud7_flg?: string | null | undefined;
                ud8_flg?: string | null | undefined;
                ud9_flg?: string | null | undefined;
                ud10_flg?: string | null | undefined;
            } | undefined;
            ud_codes?: {
                ud11_code?: string | null | undefined;
                ud12_code?: string | null | undefined;
                ud13_code?: string | null | undefined;
                ud14_code?: string | null | undefined;
                ud15_code?: string | null | undefined;
                ud16_code?: string | null | undefined;
                ud17_code?: string | null | undefined;
                ud18_code?: string | null | undefined;
                ud19_code?: string | null | undefined;
                ud20_code?: string | null | undefined;
            } | undefined;
            ud_text?: {
                ud21_text?: string | null | undefined;
                ud22_text?: string | null | undefined;
                ud23_text?: string | null | undefined;
                ud24_text?: string | null | undefined;
                ud25_text?: string | null | undefined;
                ud26_text?: string | null | undefined;
                ud27_text?: string | null | undefined;
                ud28_text?: string | null | undefined;
                ud29_text?: string | null | undefined;
                ud30_text?: string | null | undefined;
            } | undefined;
            ud_dates?: {
                ud31_date?: string | null | undefined;
                ud32_date?: string | null | undefined;
                ud33_date?: string | null | undefined;
                ud34_date?: string | null | undefined;
                ud35_date?: string | null | undefined;
                ud36_date?: string | null | undefined;
                ud37_date?: string | null | undefined;
                ud38_date?: string | null | undefined;
                ud39_date?: string | null | undefined;
                ud40_date?: string | null | undefined;
            } | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        ud_fields?: {
            ud_flags?: {
                ud1_flg?: string | null | undefined;
                ud2_flg?: string | null | undefined;
                ud3_flg?: string | null | undefined;
                ud4_flg?: string | null | undefined;
                ud5_flg?: string | null | undefined;
                ud6_flg?: string | null | undefined;
                ud7_flg?: string | null | undefined;
                ud8_flg?: string | null | undefined;
                ud9_flg?: string | null | undefined;
                ud10_flg?: string | null | undefined;
            } | undefined;
            ud_codes?: {
                ud11_code?: string | null | undefined;
                ud12_code?: string | null | undefined;
                ud13_code?: string | null | undefined;
                ud14_code?: string | null | undefined;
                ud15_code?: string | null | undefined;
                ud16_code?: string | null | undefined;
                ud17_code?: string | null | undefined;
                ud18_code?: string | null | undefined;
                ud19_code?: string | null | undefined;
                ud20_code?: string | null | undefined;
            } | undefined;
            ud_text?: {
                ud21_text?: string | null | undefined;
                ud22_text?: string | null | undefined;
                ud23_text?: string | null | undefined;
                ud24_text?: string | null | undefined;
                ud25_text?: string | null | undefined;
                ud26_text?: string | null | undefined;
                ud27_text?: string | null | undefined;
                ud28_text?: string | null | undefined;
                ud29_text?: string | null | undefined;
                ud30_text?: string | null | undefined;
            } | undefined;
            ud_dates?: {
                ud31_date?: string | null | undefined;
                ud32_date?: string | null | undefined;
                ud33_date?: string | null | undefined;
                ud34_date?: string | null | undefined;
                ud35_date?: string | null | undefined;
                ud36_date?: string | null | undefined;
                ud37_date?: string | null | undefined;
                ud38_date?: string | null | undefined;
                ud39_date?: string | null | undefined;
                ud40_date?: string | null | undefined;
            } | undefined;
        } | undefined;
    }, {
        ud_fields?: {
            ud_flags?: {
                ud1_flg?: string | null | undefined;
                ud2_flg?: string | null | undefined;
                ud3_flg?: string | null | undefined;
                ud4_flg?: string | null | undefined;
                ud5_flg?: string | null | undefined;
                ud6_flg?: string | null | undefined;
                ud7_flg?: string | null | undefined;
                ud8_flg?: string | null | undefined;
                ud9_flg?: string | null | undefined;
                ud10_flg?: string | null | undefined;
            } | undefined;
            ud_codes?: {
                ud11_code?: string | null | undefined;
                ud12_code?: string | null | undefined;
                ud13_code?: string | null | undefined;
                ud14_code?: string | null | undefined;
                ud15_code?: string | null | undefined;
                ud16_code?: string | null | undefined;
                ud17_code?: string | null | undefined;
                ud18_code?: string | null | undefined;
                ud19_code?: string | null | undefined;
                ud20_code?: string | null | undefined;
            } | undefined;
            ud_text?: {
                ud21_text?: string | null | undefined;
                ud22_text?: string | null | undefined;
                ud23_text?: string | null | undefined;
                ud24_text?: string | null | undefined;
                ud25_text?: string | null | undefined;
                ud26_text?: string | null | undefined;
                ud27_text?: string | null | undefined;
                ud28_text?: string | null | undefined;
                ud29_text?: string | null | undefined;
                ud30_text?: string | null | undefined;
            } | undefined;
            ud_dates?: {
                ud31_date?: string | null | undefined;
                ud32_date?: string | null | undefined;
                ud33_date?: string | null | undefined;
                ud34_date?: string | null | undefined;
                ud35_date?: string | null | undefined;
                ud36_date?: string | null | undefined;
                ud37_date?: string | null | undefined;
                ud38_date?: string | null | undefined;
                ud39_date?: string | null | undefined;
                ud40_date?: string | null | undefined;
            } | undefined;
        } | undefined;
    }>, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
    ValidationResponse: z.ZodObject<{
        valid_result: z.ZodOptional<z.ZodString>;
        min_val: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        max_val: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, "strip", z.ZodTypeAny, {
        valid_result?: string | undefined;
        min_val?: number | null | undefined;
        max_val?: number | null | undefined;
    }, {
        valid_result?: string | undefined;
        min_val?: number | null | undefined;
        max_val?: number | null | undefined;
    }>;
    AssessmentMethodResponse: z.ZodObject<{
        ass_code: z.ZodOptional<z.ZodString>;
        ass_type: z.ZodOptional<z.ZodString>;
        ass_range: z.ZodOptional<z.ZodString>;
        desc_text: z.ZodOptional<z.ZodString>;
        val_type: z.ZodOptional<z.ZodString>;
        validations: z.ZodOptional<z.ZodArray<z.ZodObject<{
            valid_result: z.ZodOptional<z.ZodString>;
            min_val: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            max_val: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        }, "strip", z.ZodTypeAny, {
            valid_result?: string | undefined;
            min_val?: number | null | undefined;
            max_val?: number | null | undefined;
        }, {
            valid_result?: string | undefined;
            min_val?: number | null | undefined;
            max_val?: number | null | undefined;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        desc_text?: string | undefined;
        ass_code?: string | undefined;
        ass_type?: string | undefined;
        ass_range?: string | undefined;
        val_type?: string | undefined;
        validations?: {
            valid_result?: string | undefined;
            min_val?: number | null | undefined;
            max_val?: number | null | undefined;
        }[] | undefined;
    }, {
        desc_text?: string | undefined;
        ass_code?: string | undefined;
        ass_type?: string | undefined;
        ass_range?: string | undefined;
        val_type?: string | undefined;
        validations?: {
            valid_result?: string | undefined;
            min_val?: number | null | undefined;
            max_val?: number | null | undefined;
        }[] | undefined;
    }>;
    AssessmentCriteriaResponse: z.ZodObject<{
        obj_code: z.ZodOptional<z.ZodString>;
        obj_desc: z.ZodOptional<z.ZodString>;
        max_val: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        assessment_method: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            ass_code: z.ZodOptional<z.ZodString>;
            ass_type: z.ZodOptional<z.ZodString>;
            ass_range: z.ZodOptional<z.ZodString>;
            desc_text: z.ZodOptional<z.ZodString>;
            val_type: z.ZodOptional<z.ZodString>;
            validations: z.ZodOptional<z.ZodArray<z.ZodObject<{
                valid_result: z.ZodOptional<z.ZodString>;
                min_val: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                max_val: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            }, "strip", z.ZodTypeAny, {
                valid_result?: string | undefined;
                min_val?: number | null | undefined;
                max_val?: number | null | undefined;
            }, {
                valid_result?: string | undefined;
                min_val?: number | null | undefined;
                max_val?: number | null | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            desc_text?: string | undefined;
            ass_code?: string | undefined;
            ass_type?: string | undefined;
            ass_range?: string | undefined;
            val_type?: string | undefined;
            validations?: {
                valid_result?: string | undefined;
                min_val?: number | null | undefined;
                max_val?: number | null | undefined;
            }[] | undefined;
        }, {
            desc_text?: string | undefined;
            ass_code?: string | undefined;
            ass_type?: string | undefined;
            ass_range?: string | undefined;
            val_type?: string | undefined;
            validations?: {
                valid_result?: string | undefined;
                min_val?: number | null | undefined;
                max_val?: number | null | undefined;
            }[] | undefined;
        }>>>;
    }, "strip", z.ZodTypeAny, {
        max_val?: number | null | undefined;
        obj_code?: string | undefined;
        obj_desc?: string | undefined;
        assessment_method?: {
            desc_text?: string | undefined;
            ass_code?: string | undefined;
            ass_type?: string | undefined;
            ass_range?: string | undefined;
            val_type?: string | undefined;
            validations?: {
                valid_result?: string | undefined;
                min_val?: number | null | undefined;
                max_val?: number | null | undefined;
            }[] | undefined;
        } | null | undefined;
    }, {
        max_val?: number | null | undefined;
        obj_code?: string | undefined;
        obj_desc?: string | undefined;
        assessment_method?: {
            desc_text?: string | undefined;
            ass_code?: string | undefined;
            ass_type?: string | undefined;
            ass_range?: string | undefined;
            val_type?: string | undefined;
            validations?: {
                valid_result?: string | undefined;
                min_val?: number | null | undefined;
                max_val?: number | null | undefined;
            }[] | undefined;
        } | null | undefined;
    }>;
    ActivityResponse: z.ZodObject<{
        cmpy_code: z.ZodOptional<z.ZodString>;
        activity_id: z.ZodOptional<z.ZodNumber>;
        year: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        period: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        sub_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        year_grp: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        activity_name: z.ZodOptional<z.ZodString>;
        topic_id: z.ZodOptional<z.ZodNumber>;
        topic_name: z.ZodOptional<z.ZodString>;
        assessment_criteria: z.ZodOptional<z.ZodArray<z.ZodObject<{
            obj_code: z.ZodOptional<z.ZodString>;
            obj_desc: z.ZodOptional<z.ZodString>;
            max_val: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            assessment_method: z.ZodOptional<z.ZodNullable<z.ZodObject<{
                ass_code: z.ZodOptional<z.ZodString>;
                ass_type: z.ZodOptional<z.ZodString>;
                ass_range: z.ZodOptional<z.ZodString>;
                desc_text: z.ZodOptional<z.ZodString>;
                val_type: z.ZodOptional<z.ZodString>;
                validations: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    valid_result: z.ZodOptional<z.ZodString>;
                    min_val: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                    max_val: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                }, "strip", z.ZodTypeAny, {
                    valid_result?: string | undefined;
                    min_val?: number | null | undefined;
                    max_val?: number | null | undefined;
                }, {
                    valid_result?: string | undefined;
                    min_val?: number | null | undefined;
                    max_val?: number | null | undefined;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                desc_text?: string | undefined;
                ass_code?: string | undefined;
                ass_type?: string | undefined;
                ass_range?: string | undefined;
                val_type?: string | undefined;
                validations?: {
                    valid_result?: string | undefined;
                    min_val?: number | null | undefined;
                    max_val?: number | null | undefined;
                }[] | undefined;
            }, {
                desc_text?: string | undefined;
                ass_code?: string | undefined;
                ass_type?: string | undefined;
                ass_range?: string | undefined;
                val_type?: string | undefined;
                validations?: {
                    valid_result?: string | undefined;
                    min_val?: number | null | undefined;
                    max_val?: number | null | undefined;
                }[] | undefined;
            }>>>;
        }, "strip", z.ZodTypeAny, {
            max_val?: number | null | undefined;
            obj_code?: string | undefined;
            obj_desc?: string | undefined;
            assessment_method?: {
                desc_text?: string | undefined;
                ass_code?: string | undefined;
                ass_type?: string | undefined;
                ass_range?: string | undefined;
                val_type?: string | undefined;
                validations?: {
                    valid_result?: string | undefined;
                    min_val?: number | null | undefined;
                    max_val?: number | null | undefined;
                }[] | undefined;
            } | null | undefined;
        }, {
            max_val?: number | null | undefined;
            obj_code?: string | undefined;
            obj_desc?: string | undefined;
            assessment_method?: {
                desc_text?: string | undefined;
                ass_code?: string | undefined;
                ass_type?: string | undefined;
                ass_range?: string | undefined;
                val_type?: string | undefined;
                validations?: {
                    valid_result?: string | undefined;
                    min_val?: number | null | undefined;
                    max_val?: number | null | undefined;
                }[] | undefined;
            } | null | undefined;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        cmpy_code?: string | undefined;
        year_grp?: number | null | undefined;
        activity_id?: number | undefined;
        year?: string | null | undefined;
        period?: string | null | undefined;
        sub_code?: string | null | undefined;
        activity_name?: string | undefined;
        topic_id?: number | undefined;
        topic_name?: string | undefined;
        assessment_criteria?: {
            max_val?: number | null | undefined;
            obj_code?: string | undefined;
            obj_desc?: string | undefined;
            assessment_method?: {
                desc_text?: string | undefined;
                ass_code?: string | undefined;
                ass_type?: string | undefined;
                ass_range?: string | undefined;
                val_type?: string | undefined;
                validations?: {
                    valid_result?: string | undefined;
                    min_val?: number | null | undefined;
                    max_val?: number | null | undefined;
                }[] | undefined;
            } | null | undefined;
        }[] | undefined;
    }, {
        cmpy_code?: string | undefined;
        year_grp?: number | null | undefined;
        activity_id?: number | undefined;
        year?: string | null | undefined;
        period?: string | null | undefined;
        sub_code?: string | null | undefined;
        activity_name?: string | undefined;
        topic_id?: number | undefined;
        topic_name?: string | undefined;
        assessment_criteria?: {
            max_val?: number | null | undefined;
            obj_code?: string | undefined;
            obj_desc?: string | undefined;
            assessment_method?: {
                desc_text?: string | undefined;
                ass_code?: string | undefined;
                ass_type?: string | undefined;
                ass_range?: string | undefined;
                val_type?: string | undefined;
                validations?: {
                    valid_result?: string | undefined;
                    min_val?: number | null | undefined;
                    max_val?: number | null | undefined;
                }[] | undefined;
            } | null | undefined;
        }[] | undefined;
    }>;
    ActivityStudentResponse: z.ZodObject<{
        cmpy_code: z.ZodOptional<z.ZodString>;
        activity_id: z.ZodOptional<z.ZodNumber>;
        stud_code: z.ZodOptional<z.ZodString>;
        class_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        year_grp: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, "strip", z.ZodTypeAny, {
        cmpy_code?: string | undefined;
        stud_code?: string | undefined;
        year_grp?: number | null | undefined;
        activity_id?: number | undefined;
        class_code?: string | null | undefined;
    }, {
        cmpy_code?: string | undefined;
        stud_code?: string | undefined;
        year_grp?: number | null | undefined;
        activity_id?: number | undefined;
        class_code?: string | null | undefined;
    }>;
    ObjectiveResult: z.ZodObject<{
        obj_code: z.ZodOptional<z.ZodString>;
        stud_result: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        obj_code?: string | undefined;
        stud_result?: string | null | undefined;
    }, {
        obj_code?: string | undefined;
        stud_result?: string | null | undefined;
    }>;
    ActivityStudentResultsResponse: z.ZodObject<{
        cmpy_code: z.ZodOptional<z.ZodString>;
        activity_id: z.ZodOptional<z.ZodNumber>;
        stud_code: z.ZodOptional<z.ZodString>;
        objective_results: z.ZodOptional<z.ZodArray<z.ZodObject<{
            obj_code: z.ZodOptional<z.ZodString>;
            stud_result: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            obj_code?: string | undefined;
            stud_result?: string | null | undefined;
        }, {
            obj_code?: string | undefined;
            stud_result?: string | null | undefined;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        cmpy_code?: string | undefined;
        stud_code?: string | undefined;
        activity_id?: number | undefined;
        objective_results?: {
            obj_code?: string | undefined;
            stud_result?: string | null | undefined;
        }[] | undefined;
    }, {
        cmpy_code?: string | undefined;
        stud_code?: string | undefined;
        activity_id?: number | undefined;
        objective_results?: {
            obj_code?: string | undefined;
            stud_result?: string | null | undefined;
        }[] | undefined;
    }>;
    ObjectiveResult2: z.ZodObject<{
        obj_code: z.ZodString;
        stud_result: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        obj_code: string;
        stud_result: string;
    }, {
        obj_code: string;
        stud_result: string;
    }>;
    UpdateActivityStudentResultsRequest: z.ZodObject<{
        objective_results: z.ZodOptional<z.ZodArray<z.ZodObject<{
            obj_code: z.ZodString;
            stud_result: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            obj_code: string;
            stud_result: string;
        }, {
            obj_code: string;
            stud_result: string;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        objective_results?: {
            obj_code: string;
            stud_result: string;
        }[] | undefined;
    }, {
        objective_results?: {
            obj_code: string;
            stud_result: string;
        }[] | undefined;
    }>;
};
//# sourceMappingURL=generated.d.ts.map