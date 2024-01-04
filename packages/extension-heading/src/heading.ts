import { Heading as TiptapHeading } from "@tiptap/extension-heading";

export interface HeadingOptions {
  HTMLAttributes: Record<string, unknown>;
}

export const Heading = TiptapHeading.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      "component-name": {
        default: "heading",
        renderHTML: (attributes) => ({
          "data-component-name": attributes["component-name"],
        }),
      },
    };
  },
});

export default Heading;
