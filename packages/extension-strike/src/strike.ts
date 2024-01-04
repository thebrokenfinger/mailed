import { Strike as TiptapStrike } from "@tiptap/extension-strike";

export interface StrikeOptions {
  HTMLAttributes: Record<string, unknown>;
}

export const Strike = TiptapStrike;

export default Strike;
