import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { UserRoles } from '../../modules/user/enums/user.enum';

export class test1652013158621 implements MigrationInterface {
  private usersTable = new Table({
    name: 'users',
    columns: [
      {
        name: 'id',
        type: 'SERIAL',
        isPrimary: true,
      },
      {
        name: 'name',
        type: 'character varying',
        isNullable: false,
      },
      {
        name: 'email',
        type: 'character varying',
        isNullable: false,
      },
      {
        name: 'password',
        type: 'character varying',
        isNullable: false,
      },
      {
        name: 'role',
        type: 'enum',
        isPrimary: true,
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
    ],
  });
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.usersTable, true);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.usersTable);
  }
}
