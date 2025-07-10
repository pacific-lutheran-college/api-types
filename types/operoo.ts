export interface OperooGroup {
  id: number;
  parent_id: number;
  name: string;
  color: string;
  created_at: string;
  updated_at: string;
  responds_to_tags: any[];
  integration_group_id: any;
  archived: boolean;
  type: string;
  links: Links;
  organization_id: number;
  child_groups: any[];
  organization: Organization;
  parent_group: any;
}

export interface Links {
  members: string;
  group_carers: string;
  child_groups: string;
}

export interface Organization {
  id: number;
  name: string;
  product_type: string;
  organization_type: string;
  created_at: string;
  updated_at: string;
  member_type: string;
  plural_member_type: string;
  parent_organization_id: any;
  type: string;
  links: Orglinks;
  integration_type: string;
  integration_group_id: string;
  country: string;
  timezone: string;
  admin_name: string;
  admin_email: string;
  additional_settings: AdditionalSettings;
  child_organizations: any[];
}

export interface Orglinks {
  members: string;
  groups: string;
  photos: string;
  group_carers: string;
  child_groups: string;
  eforms: string;
  incidents: string;
  messages: string;
  staff_members: string;
  staff_groups: string;
  staff_photos: string;
  staff_child_groups: string;
  staff_eforms: string;
  staff_incidents: string;
  staff_messages: string;
}

export interface AdditionalSettings {
  profile_nomenclature: string;
  carer_nomenclature: string;
  require_question_swimming_ability: boolean;
  require_question_are_you_pregnant: boolean;
  asthma_action_plan_requirement_level: number;
  anaphylaxis_action_plan_requirement_level: number;
  no_of_emergency_contacts_for_profile: number;
  require_question_allowed_paracetamol: boolean;
  require_question_medicare_details: boolean;
  require_question_object_to_transfusions: boolean;
  require_question_ambulance_cover: boolean;
  require_question_community_service_card: boolean;
  require_question_private_health_insurance_details: boolean;
  require_nhs_details: boolean;
  require_medical_contact: boolean;
  require_philippines_pag_ibig: boolean;
  require_philippines_phil_health: boolean;
  org_structure: string;
  require_questions_eye_equipment: boolean;
  require_question_blood_type: boolean;
  require_question_last_tetanus: boolean;
  medical_profile_type: string;
  currency: string;
  sync_version: any;
  sync_version_url: any;
  campus_code: any;
  reporting_level: number;
  sync_contact: any;
  sync_medical_details: boolean;
}

export interface GroupMember {
  id: number;
  integration_member_id: any;
  first_name: string;
  last_name: string;
  full_name: string;
  created_at: string;
  updated_at: string;
  email: string;
  request_email: string;
  request_mobile_number: any;
  notification_only_email: string;
  mobile_number: string;
  contacts: any[];
  tags: any[];
  user_request_id: string;
  custom_payment_link: any;
  integration_id: any;
  avatar_url: string;
  profile_id: number;
  student_record_id: any;
  profile: Profile;
  student_record: any;
}

export interface Profile {
  id: number;
  first_name: string;
  last_name: string;
  prefered_first_name: string;
  full_name: string;
  created_at: string;
  updated_at: string;
  email: string;
  gender: string;
  home_phone: string;
  work_phone: string;
  mobile_phone: string;
  street: string;
  city: string;
  state: string;
  country: string;
  zip: string;
  blood_group: any;
  swimming_ability: any;
  objects_to_transfusions: any;
  birth_day: number;
  birth_month: number;
  birth_year: number;
  wears_glasses: any;
  wears_contacts: any;
  paracetamol_allowed: boolean;
  has_ambulance_cover: any;
  ambulance_cover_details: any;
  has_private_cover: boolean;
  private_cover_details: string;
  has_medicare_cover: boolean;
  medicare_cover_details: string;
  last_tetanus_immunisation: any;
  consented_at: string;
  relationship_name_of_owner: string;
  consented_by_name: string;
  last_confirmed_time: any;
  medicare_expiry: string;
  medicare_position_number: number;
  medicare_attachment_updated_at: any;
  medicare_attachment_file_size: any;
  medicare_attachment_url: string;
  has_community_services_card: any;
  is_pregnant: any;
  has_philippines_pag_ibig: any;
  philippines_pag_ibig_details: any;
  has_philippines_phil_health: any;
  philippines_phil_health_details: any;
  has_philippines_sss: any;
  philippines_sss_details: any;
  has_nhs_number: any;
  nhs_number: any;
  image_original_url: string;
  image_thumbnail_url: string;
  medical_contacts: MedicalContact[];
  emergency_contacts: EmergencyContact[];
  safety_alerts: SafetyAlert[];
  profile_notes: any[];
  integration_member_id: any;
}

export interface MedicalContact {
  id: number;
  email: any;
  mobile_phone: string;
  home_phone: any;
  work_phone: string;
  type: string;
  name: string;
  position: number;
  address: string;
  created_at: string;
  updated_at: string;
}

export interface EmergencyContact {
  id: number;
  email: string;
  mobile_phone: string;
  home_phone?: string;
  work_phone?: string;
  type: string;
  name: string;
  position: number;
  address: any;
  created_at: string;
  updated_at: string;
}

export interface SafetyAlert {
  id: number;
  created_at: string;
  updated_at: string;
  name: string;
  risk_level: string;
  medication_required: boolean;
  medication: string;
  description: string;
  attachment_url: string;
  attachment_name: any;
  attachment_content_type: any;
  attachment_size: any;
  epipen_expiry: any;
  require_epipen: any;
}

export interface EForm {
  id: number;
  name: string;
  description_html: string;
  color: string;
  members_count: number;
  shared_profiles_count: number;
  response_count: number;
  created_at: string;
  updated_at: string;
  response_by_date: any;
  start_time: any;
  end_time: any;
  responds_to_tags: any[];
  mandatory: boolean;
  available: boolean;
  active_submissions_count: number;
  status: string;
  type: string;
  links: EFormLinks;
  archived: boolean;
  archived_date: any;
  enabled: boolean;
  auto_archive_after_date: any;
  notify_emails_on_submission: any[];
  is_template: boolean;
  timezone: string;
  country: string;
  enquiry_contact_type: string;
  email_reply_to: any;
  send_email_to_uniq_parent: any;
  audience_type: string;
  special_case_tag: any;
  add_to_profile: boolean;
  group_carer_can_sms: boolean;
  organization: Organization;
  assigned_group_carers: any[];
  owner: Owner;
  categories: any[];
}

export interface EFormLinks {
  members: string;
  group_carers: string;
  responses: string;
}

export interface Owner {
  id: number;
  first_name: string;
  last_name: string;
}

export interface EformResponses {
  id: number;
  member_id: number;
  member_url: string;
  member: Member;
  eform_elements_url: string;
  status: string;
  responded_by_email: string;
  responded_by_name: string;
  responded_by_mobile_number: string;
  responded_date: string;
  reminder_email_last_sent: string;
  declined_reason: any;
  archived: boolean;
  approvals: any[];
  eform_element_responses: EformElementResponse[];
}

export interface Member {
  integration_member_id: string;
}

export interface EformElementResponse {
  id: number;
  response: Response;
  eform_element_id: number;
  created_at: string;
  updated_at: string;
  stripe_id: any;
}

export interface Response {
  value: string;
  signature: string;
}
