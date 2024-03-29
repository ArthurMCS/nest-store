import { MigrationInterface, QueryRunner } from 'typeorm';

export class RemoveUsuarioIdDeProdutoEntity1704472096818
  implements MigrationInterface
{
  name = 'RemoveUsuarioIdDeProdutoEntity1704472096818';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "produtos" DROP COLUMN "usuario_id"`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "produtos" ADD "usuario_id" character varying(100)`,
    );
  }
}
