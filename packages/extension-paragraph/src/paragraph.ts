import { Paragraph as TiptapParagraph } from "@tiptap/extension-paragraph";

export interface ParagraphOptions {
  HTMLAttributes: Record<string, unknown>;
}

export const Paragraph = TiptapParagraph.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      "component-name": {
        default: "paragraph",
        renderHTML: (attributes) => ({
          "data-component-name": attributes["component-name"],
        }),
      },
    };
  },
});

export default Paragraph;
