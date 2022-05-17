import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
  TableIndex,
} from 'typeorm';
import { UserRoles } from '../../modules/user/enums/user.enum';

export class init1652771925575 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // create users table
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'SERIAL',
            isPrimary: true,
          },
          {
            name: 'email',
            type: 'character varying',
            isUnique: true,
            isNullable: false,
          },
          {
            name: 'phone',
            type: 'character varying',
            isUnique: true,
            isNullable: false,
          },
          {
            name: 'employer',
            type: 'character varying',
            isNullable: false,
          },
          {
            name: 'snils',
            type: 'character varying',
            isNullable: false,
          },
          {
            name: 'role',
            type: 'enum',
            isPrimary: false,
            enum: [UserRoles.ADMIN, UserRoles.MEMBER],
            enumName: 'e_user_role',
            default: `'${UserRoles.MEMBER}'`,
          },
          {
            name: 'created_at',
            type: 'TIMESTAMPTZ',
            isNullable: false,
            default: 'NOW()',
          },
          {
            name: 'updated_at',
            type: 'TIMESTAMPTZ',
            isNullable: false,
            default: 'NOW()',
          },
          {
            name: 'last_login_at',
            type: 'TIMESTAMPTZ',
            isNullable: true,
          },
        ],
      }),
      true,
    );
    // create refresh_tokens table
    await queryRunner.createTable(
      new Table({
        name: 'refresh_tokens',
        columns: [
          {
            name: 'id',
            type: 'SERIAL',
            isPrimary: true,
          },
          {
            name: 'user_id',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'token',
            type: 'character varying',
            isNullable: false,
          },
          {
            name: 'created_at',
            type: 'TIMESTAMPTZ',
            isNullable: false,
            default: 'NOW()',
          },
          {
            name: 'updated_at',
            type: 'TIMESTAMPTZ',
            isNullable: false,
            default: 'NOW()',
          },
          {
            name: 'last_used_at',
            type: 'TIMESTAMPTZ',
            isNullable: true,
          },
        ],
      }),
      true,
    );
    // create access_tokens table
    await queryRunner.createTable(
      new Table({
        name: 'access_tokens',
        columns: [
          {
            name: 'id',
            type: 'SERIAL',
            isPrimary: true,
          },
          {
            name: 'refresh_token_id',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'token',
            type: 'character varying',
            isNullable: false,
          },
          {
            name: 'created_at',
            type: 'TIMESTAMPTZ',
            isNullable: false,
            default: 'NOW()',
          },
          {
            name: 'updated_at',
            type: 'TIMESTAMPTZ',
            isNullable: false,
            default: 'NOW()',
          },
          {
            name: 'last_used_at',
            type: 'TIMESTAMPTZ',
            isNullable: true,
          },
        ],
      }),
      true,
    );
    // create many-to-one relation (refresh_tokens to user)
    await queryRunner.createForeignKey(
      'refresh_tokens',
      new TableForeignKey({
        columnNames: ['user_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'CASCADE',
      }),
    );
    // create many-to-one relation (access_tokens to refresh token)
    await queryRunner.createForeignKey(
      'access_tokens',
      new TableForeignKey({
        columnNames: ['refresh_token_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'refresh_tokens',
        onDelete: 'CASCADE',
      }),
    );
    // create indexes
    await queryRunner.createIndex(
      'refresh_tokens',
      new TableIndex({
        name: 'IDX_REFRESH_TOKEN',
        columnNames: ['token'],
      }),
    );
    await queryRunner.createIndex(
      'access_tokens',
      new TableIndex({
        name: 'IDX_ACCESS_TOKEN',
        columnNames: ['token'],
      }),
    );
    await queryRunner.createIndex(
      'users',
      new TableIndex({
        name: 'IDX_USER_PHONE',
        columnNames: ['phone'],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
