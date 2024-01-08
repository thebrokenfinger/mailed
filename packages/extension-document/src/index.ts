import { Document as TiptapDocument } from "@tiptap/extension-document";
import pkg from "../package.json";

export * from "@tiptap/extension-document";

export const VERSION = pkg.version;

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
