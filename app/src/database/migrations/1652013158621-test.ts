import { MigrationInterface, QueryRunner } from 'typeorm';

export class test1652013158621 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" character varying NOT NULL,"role" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
