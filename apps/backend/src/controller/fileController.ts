import { Request, Response } from 'express';
import multer from 'multer';
import { OpenAI } from '@ai-sdk/openai'; // Ensure correct import
import { z } from 'zod';
import { saveSummary } from '../saveSummary'; // Adjust path if needed

// Define a custom type for Request with file property
interface MulterRequest extends Request {
  file?: Express.Multer.File;
}

// Dummy loaders (replace with actual implementations)
async function pdfLoader(filePath: string): Promise<string> {
  return 'Extracted text from PDF';
}

async function docxLoader(filePath: string): Promise<string> {
  return 'Extracted text from DOCX';
}

const upload = multer({ dest: 'uploads/' });

// Define a schema for summarization input
const summarizationSchema = z.object({
  text: z.string().min(1, "Text must not be empty"),
});

export const uploadFile = [
  upload.single('file'),
  async (req: MulterRequest, res: Response) => {
    if (!req.file) {
      return res.status(400).send('No file uploaded.');
    }

    try {
      let text = '';
      if (req.file.mimetype === 'application/pdf') {
        text = await pdfLoader(req.file.path);
      } else if (req.file.mimetype === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
        text = await docxLoader(req.file.path);
      } else {
        return res.status(400).send('Unsupported file type.');
      }

      // Summarize using OpenAI SDK
      const openAI = new OpenAI();

      // Assuming the correct method is `generateText` or similar
      const summaryResponse = await openAI.generateText({
        model: 'text-davinci-003', // Replace with the correct model
        prompt: `Summarize the following text: ${text}`,
        max_tokens: 100,
      });

      const summary = summaryResponse.choices[0]?.text || '';

      // Validate summary with zod
      summarizationSchema.parse({ text: summary });

      // Save summary to SQLite database
      await saveSummary(summary);

      res.json({ summary });
    } catch (error) {
      console.error(error);
      res.status(500).send('Error processing file.');
    }
  }
];
