import { Blockquote as TiptapBlockquote } from "@tiptap/extension-blockquote";

export interface BlockquoteOptions {
  HTMLAttributes: Record<string, any>;
}

export const Blockquote = TiptapBlockquote.extend<BlockquoteOptions>({
  addAttributes() {
    return {
      ...this.parent?.(),
      "component-name": {
        default: "blockquote",
        renderHTML: (attributes) => ({
          "data-component-name": attributes["component-name"],
        }),
      },
    };
  },
});
