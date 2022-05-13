export type FinanceState = {
  balance: BalanceState,
  withdrawal: WithdrawalState
}

export type BalanceState = {
  data: Balance | null;
  loading: boolean;
  error: {
    statusCode: number | null;
    messages: string[];
    fields: Record<string, string | undefined>;
  };
};

export type WithdrawalState = {
  data: Withdrawal | null;
  loading: boolean;
  error: {
    statusCode: number | null;
    messages: string[];
    fields: Record<string, string | undefined>;
  };
};

export type Balance = {
  from: Date,
  till: Date,
  average_day_salary: string,
  worked_days_count: number,
  amount_total_debet: string,
  amount_total_credit: string,
  balance: string,
  operations_history: {
    transaction_id: string,
    payment_method: string,
    amount: string,
    executed: Date,
    created: Date,
    commission: string
  }[ ],
  message_boxes: {
    type: number,
    title: string,
    description: string
  }[],
  num_days_in_debt: number,
  working_days: number,
  limit_coefficient: string,
  max_withdrawal_amount: string,
  salary: string,
  details: {
    title: string,
    value: string
  }[]
}

export type Withdrawal = {
  max_amount: number,
  min_amount: number,
  sum1: string,
  sum2: string,
  sum3: string,
  sum4: string,
  sum5: number,
  commision_text: string,
  commission_error_text: string
}