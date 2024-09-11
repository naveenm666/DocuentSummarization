declare module 'langchain' {
    export function pdfLoader(filePath: string): Promise<string>;
    export function docxLoader(filePath: string): Promise<string>;
  }