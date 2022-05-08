import { ValidationError } from '@nestjs/common/interfaces/external/validation-error.interface';

export const formatErrorsHelper = (errors: ValidationError[]) =>
  errors.map((item) => ({ [item.property]: Object.values(item.constraints) }));
