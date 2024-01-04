import { TextAlign as TiptapTextAlign } from "@tiptap/extension-text-align";

export interface TextAlignOptions {
  types: string[];
  alignments: string[];
  defaultAlignment: string;
}

export const TextAlign = TiptapTextAlign;

export default TextAlign;
