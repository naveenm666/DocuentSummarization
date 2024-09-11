declare module '@ai-sdk/openai' {
    export class OpenAI {
      generate(params: { prompt: string; max_tokens: number; }): Promise<{ choices: { text: string }[] }>;
    }
  }
  