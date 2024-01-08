import { Document as TiptapDocument } from "@tiptap/extension-document";

export * from "@tiptap/extension-document";

export const VERSION = "0.0.5";

export const Document = TiptapDocument.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      version: {
        default: VERSION,
        renderHTML: (attributes) => {
          return {
            "data-version": attributes.version,
          };
        },
      },
    };
  },
});

export default Document;
