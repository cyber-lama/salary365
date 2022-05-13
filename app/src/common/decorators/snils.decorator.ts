import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
} from 'class-validator';

export const IsSnils = (validationOptions?: ValidationOptions) => {
  return (object: any, propertyName: string) => {
    registerDecorator({
      name: 'IsSnils',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      options: validationOptions,
      validator: {
        validate(snils: unknown) {
          console.log(snils);

          // check type of value
          if (typeof snils === 'number') {
            snils = snils.toString();
          } else if (typeof snils !== 'string') {
            snils = '';
          }

          if (!(snils as string).length) return false;

          if (/[^0-9]/.test(String(snils))) return false;

          let sum = 0;
          for (let i = 0; i < 9; i++) {
            sum += parseInt(snils[i]) * (9 - i);
          }
          let checkDigit = 0;
          if (sum < 100) {
            checkDigit = sum;
          } else if (sum > 101) {
            checkDigit = parseInt(String(sum % 101));
            if (checkDigit === 100) {
              checkDigit = 0;
            }
          }
          return checkDigit === parseInt((snils as string).slice(-2));
        },
      },
    });
  };
};
