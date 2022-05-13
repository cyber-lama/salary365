import { ValidationError } from '@nestjs/common/interfaces/external/validation-error.interface';

type IFormatErrors = Record<string, any>;

export const formatErrorsHelper = (
  errors: ValidationError[],
): IFormatErrors => {
  return errors.reduce((acc, err) => {
    acc[err.property] = Object.values(err.constraints);
    return acc;
  }, {});
};
