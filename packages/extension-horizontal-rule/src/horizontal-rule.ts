import { HorizontalRule as TiptapHorizontalRule } from "@tiptap/extension-horizontal-rule";

export interface HorizontalRuleOptions {
  HTMLAttributes: Record<string, unknown>;
}

export const HorizontalRule = TiptapHorizontalRule.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      "component-name": {
        default: "horizontalRule",
        renderHTML: (attributes) => ({
          "data-component-name": attributes["component-name"],
        }),
      },
    };
  },
});

export default HorizontalRule;
