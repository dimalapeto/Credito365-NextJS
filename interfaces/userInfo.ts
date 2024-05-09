export interface UserInfo {
  id?: number;
  username?: string;
  state?: string;
  created_at?: Date;
  updated_at?: Date;
  registration_step?: number | null;
  moratorium_till?: Date | null;
  is_user_matched?: boolean;
  is_id_card_image_required_to_resolve_match?: boolean;
  is_registration_complete?: boolean;
  first_name?: string | null;
  last_name?: string | null;
  phone_number?: string | null;
  is_data_processing_consent_given?: boolean | null;
  curp?: string | null;
  gender?: string | null;
  birthday?: any;
  email?: string | null;
  education?: string | null;
  main_source_of_income?: 'part-time job' | 'help of relatives' | 'social payments' | 'no income' | null;
  monthly_income?: number | null;
  marital_status?: string | null;
  native_language?: string | null;
  number_of_children?: 'none' | 'one' | 'two' | 'three or more' | null;
  has_external_loan?: boolean | null;
  external_loan_monthly_payments?: number | null;
  loan_purpose?: 'Business' | 'Consumption' | 'Education' | 'Medical' | 'Other' | null;
  facebook_id?: string | null;
  facebook_email?: string | null;
  facebook_first_name?: string | null;
  facebook_last_name?: string | null;
  residence_postal_code?: string | null;
  residence_region?: string | null;
  residence_municipality?: string | null;
  residence_city?: string | null;
  residence_colony?: string | null;
  residence_street?: string | null;
  residence_external_house?: string | null;
  residence_internal_house?: string | null;
  residence_flat?: string | null;
  residence_type?: string | null;
  residence_duration?:
    | string
    | 'up to three month'
    | 'from 3 to 6 months'
    | 'from 6 to 12 months'
    | 'more then a year'
    | null;
  employment_type?: string | null;
  employment_industry?: string | null;
  employment_position?: string | null;
  employment_duration?: number | null;
  employment_company_name?: string | null;
  employment_company_phone_number?: string | null;
  employment_social_security_number?: string | null;
  contact_name?: string | null;
  contact_relationship?: string | null;
  contact_phone_number?: string | null;
  second_phone_number?: string | null;
  bank_account_number?: string | null;
  card_number?: string | null;
  payment_type?: string | null;
  is_in_black_list?: boolean;
  uploaded_files?: string[];
  wamm_chat_uri?: string;
  number_of_closed_loans?: number;
  enabled_transitions?: string[];
  credit_bureau_confirmation_sent_at?: string | null;
  credit_bureau_confirmed_at?: string | null;
  stp_number?: string;
}

export type SnakeToCamelReturnType = UserInfo[keyof UserInfo];

export interface PersonalInfoErrors {
  propertyPath: SnakeToCamelReturnType;
  message: string;
  code: any;
}
