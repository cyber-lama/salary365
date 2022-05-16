import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
  TableIndex,
} from 'typeorm';
import { UserRoles } from '../../modules/user/enums/user.enum';

export class test1652013158621 implements MigrationInterface {
  // tables --------------------
  private usersTable = new Table({
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
  });
  private refreshToken = new Table({
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
  });
  private accessToken = new Table({
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
  });
  // foreignKey --------------------
  private RTtoUsersForeignKey = new TableForeignKey({
    columnNames: ['user_id'],
    referencedColumnNames: ['id'],
    referencedTableName: 'users',
    onDelete: 'CASCADE',
  });
  private ATtoRTForeignKey = new TableForeignKey({
    columnNames: ['refresh_token_id'],
    referencedColumnNames: ['id'],
    referencedTableName: 'refresh_tokens',
    onDelete: 'CASCADE',
  });
  // index --------------------
  private RTIndex = new TableIndex({
    name: 'IDX_REFRESH_TOKEN',
    columnNames: ['token'],
  });
  private ATIndex = new TableIndex({
    name: 'IDX_ACCESS_TOKEN',
    columnNames: ['token'],
  });
  private UserPhoneIndex = new TableIndex({
    name: 'IDX_USER_PHONE',
    columnNames: ['phone'],
  });
  // query --------------------
  public async up(queryRunner: QueryRunner): Promise<void> {
    // create tables
    await queryRunner.createTable(this.usersTable, true);
    await queryRunner.createTable(this.refreshToken, true);
    await queryRunner.createTable(this.accessToken, true);
    // create foreign keys
    await queryRunner.createForeignKey(
      'refresh_tokens',
      this.RTtoUsersForeignKey,
    );
    await queryRunner.createForeignKey('access_tokens', this.ATtoRTForeignKey);
    // create indexes
    await queryRunner.createIndex('refresh_tokens', this.RTIndex);
    await queryRunner.createIndex('access_tokens', this.ATIndex);
    await queryRunner.createIndex('users', this.UserPhoneIndex);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.usersTable);
  }
}
