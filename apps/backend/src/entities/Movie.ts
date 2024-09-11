import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column({ type: 'date' }) // Specify type for Date columns
  releaseDate!: Date;

  @Column()
  genre!: string;

  @Column("text", { nullable: true })
  description?: string;

  @Column("text", { nullable: true })
  poster?: string; // Added poster property
}
