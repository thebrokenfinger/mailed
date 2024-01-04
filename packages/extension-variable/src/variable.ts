import Mention from "@tiptap/extension-mention";
import { SuggestionOptions } from "@tiptap/suggestion";
import { Node as ProseMirrorNode } from "@tiptap/pm/model";

export type VariableOptions = {
  HTMLAttributes: Record<string, any>;
  renderLabel: (props: {
    options: VariableOptions;
    node: ProseMirrorNode;
  }) => string;
  suggestion: Omit<SuggestionOptions, "editor">;
};

export const Variable = Mention.extend<VariableOptions>({
  name: "variable",

  addAttributes() {
    return {
      ...this.parent?.(),
      "component-name": {
        default: this.name,
        renderHTML: (attributes) => ({
          "data-component-name": attributes["component-name"],
        }),
      },
    };
  },
});
