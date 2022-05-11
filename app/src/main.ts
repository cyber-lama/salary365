import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { BadRequestException, ValidationPipe } from '@nestjs/common';
import { ValidationError } from '@nestjs/common/interfaces/external/validation-error.interface';
import {formatErrorsHelper} from "./common/helpers/formatErrors.helper";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  // We'll start by binding ValidationPipe at the application level,
  // thus ensuring all endpoints are protected from receiving incorrect data.
  app.useGlobalPipes(
    new ValidationPipe({
      exceptionFactory: (errors: ValidationError[]) => {
        return new BadRequestException(formatErrorsHelper(errors));
      },
    }),
  );
  // swagger
  const config = new DocumentBuilder()
    .setTitle('Salary365 manager API')
    .setDescription('Salary365 manager API description')
    .setVersion('1.0')
    .addBearerAuth(
      { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
      'access-token',
    )
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api', app, document);
  // start listen and serve port from env
  await app.listen(process.env.APP_PORT);
}
bootstrap()
  .then()
  .catch((error) => console.error(error));
