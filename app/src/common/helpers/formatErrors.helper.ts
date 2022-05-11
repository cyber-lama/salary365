import { ValidationError } from '@nestjs/common/interfaces/external/validation-error.interface';

type IErrorMessage = Record<string, any>;

export const formatErrorsHelper = (
  errors: ValidationError[],
): IErrorMessage[] => {
  return errors.map((item): IErrorMessage => {
    const { property, constraints, children } = item;
    const result: IErrorMessage = {};

    if (constraints) {
      result[property] = Object.values(constraints);
    }

    if (Array.isArray(children) && children.length > 0) {
      result[property] = formatErrorsHelper(children);
    }

    return result;
  });
};
