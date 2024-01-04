import { HardBreak as TiptapHardBreak } from "@tiptap/extension-hard-break";

export interface HardBreakOptions {
  keepMarks: boolean;
  HTMLAttributes: Record<string, any>;
}

export const HardBreak = TiptapHardBreak.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      "component-name": {
        default: "hardBreak",
        renderHTML: (attributes) => ({
          "data-component-name": attributes["component-name"],
        }),
      },
    };
  },
});

export default HardBreak;
