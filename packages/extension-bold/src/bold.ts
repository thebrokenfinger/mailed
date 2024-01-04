import { Bold as TiptapBold } from "@tiptap/extension-bold";

export interface BoldOptions {
  HTMLAttributes: Record<string, unknown>;
}

export const Bold = TiptapBold;

export default Bold;
