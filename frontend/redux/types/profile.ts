export type ProfileState = {
  id: number | null;
  data: Profile | null;
  loading: boolean;
  error: {
    statusCode: number | null;
    messages: string[];
    fields: Record<string, string | undefined>;
  };
};

export type Profile = {
  email: string,
  fname: string,
  lname: string,
  oname: string,
  birth_date: Date,
  birth_place: string,
  passport_series: string,
  passport_number: string,
  passport_issued_by: string,
  passport_issued_date: Date,
  checking_account: string,
  correspondent_account: string,
  bank_name: string,
  bik: string,
  client_inn: string,
  client_kpp: string,
  recipient: string,
  company_name: string,
  position: string,
  salary: number
}