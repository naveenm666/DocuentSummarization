// apps/backend/src/db/entities/Summary.ts

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class DocumentSummarization {
  @PrimaryGeneratedColumn()
  id!: number; // Auto-incrementing primary key

  @Column('text')
  text!: string; // Column to store the summarized text
}
