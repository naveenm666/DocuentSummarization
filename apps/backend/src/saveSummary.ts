// import { AppDataSource } from './dataSource';
// import { DocumentSummarization } from './entities/Summary'; // Define your Summary entity

// export async function saveSummary(summaryText: string) {
//   const dataSource = await AppDataSource.initialize();
//   const summaryRepository = dataSource.getRepository(DocumentSummarization);

//   const summary = new DocumentSummarization();
//   summary.text = summaryText;

//   await summaryRepository.save(summary);
// }


// apps/backend/src/saveSummary.ts

import { AppDataSource } from './dataSource'; // Adjust import path
import { DocumentSummarization } from './entities/Summary'; // Adjust import path

export async function saveSummary(summary: string): Promise<void> {
  const summaryRepo = AppDataSource.getRepository(DocumentSummarization);
  const newSummary = new DocumentSummarization();
  newSummary.text = summary;
  
  await summaryRepo.save(newSummary);
}
