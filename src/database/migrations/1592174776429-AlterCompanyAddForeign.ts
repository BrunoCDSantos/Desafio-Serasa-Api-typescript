import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export default class AlterCompanyAddForeign1592174776429
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      'accounts',
      new TableForeignKey({
        name: 'addForeign',
        columnNames: ['id_company'],
        referencedColumnNames: ['id'],
        referencedTableName: 'companys',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('id_company', 'addForeign');
  }
}
