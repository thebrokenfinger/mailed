import { Dropcursor as TiptapDropcursor } from "@tiptap/extension-dropcursor";

export interface DropcursorOptions {
  color: string | undefined;
  width: number | undefined;
  class: string | undefined;
}

export const Dropcursor = TiptapDropcursor;

export default Dropcursor;
