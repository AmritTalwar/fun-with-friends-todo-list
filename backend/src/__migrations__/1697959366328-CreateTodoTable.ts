import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTodoTable1697959366328 implements MigrationInterface {
    name = 'CreateTodoTable1697959366328'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "todo" (
                "id" SERIAL NOT NULL,
                "title" character varying NOT NULL,
                "description" character varying NOT NULL,
                "dueDate" character varying,
                CONSTRAINT "PK_d429b7114371f6a35c5cb4776a7" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "query-result-cache" (
                "id" SERIAL NOT NULL,
                "identifier" character varying,
                "time" bigint NOT NULL,
                "duration" integer NOT NULL,
                "query" text NOT NULL,
                "result" text NOT NULL,
                CONSTRAINT "PK_6a98f758d8bfd010e7e10ffd3d3" PRIMARY KEY ("id")
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE "query-result-cache"
        `);
        await queryRunner.query(`
            DROP TABLE "todo"
        `);
    }

}
