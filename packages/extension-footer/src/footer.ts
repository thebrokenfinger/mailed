import { mergeAttributes, Node } from "@tiptap/core";

export interface FooterOptions {
  HTMLAttributes: Record<string, any>;
}

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    footer: {
      /**
       * Toggle a footer
       */
      setFooter: () => ReturnType;
    };
  }
}

export const Footer = Node.create<FooterOptions>({
  name: "footer",

  addOptions() {
    return {
      HTMLAttributes: {},
    };
  },

  group: "block",

  content: "inline*",

  addAttributes() {
    return {
      "component-name": {
        default: this.name,
        renderHTML: (attributes) => ({
          "data-component-name": attributes["component-name"],
        }),
      },
    };
  },

  parseHTML() {
    return [{ tag: "small" }];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      "small",
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes),
      0,
    ];
  },

  addCommands() {
    return {
      setFooter:
        () =>
        ({ commands }) => {
          return commands.setNode(this.name);
        },
    };
  },
});
