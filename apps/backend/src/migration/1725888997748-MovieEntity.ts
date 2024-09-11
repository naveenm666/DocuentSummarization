import { MigrationInterface, QueryRunner } from "typeorm";

export class MovieEntity1725888997748 implements MigrationInterface {
    name = 'MovieEntity1725888997748'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "movie" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "title" varchar NOT NULL, "releaseDate" date NOT NULL, "genre" varchar NOT NULL, "description" text, "poster" text)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "movie"`);
    }

}
