import { Node, mergeAttributes } from "@tiptap/core";

export interface SpacerOptions {
  HTMLAttributes: Record<string, any>;
  spacings: Record<string, string | number>;
  defaultSpacing: string;
}

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    spacer: {
      setSpacer: () => ReturnType;
      setSpacerValue: (spacing: string) => ReturnType;
    };
  }
}

export const spacings = {
  sm: "8px",
  md: "16px",
  lg: "32px",
  xl: "64px",
};
export const defaultSpacing = "md";

export const Spacer = Node.create<SpacerOptions>({
  name: "spacer",

  group: "block",

  draggable: true,

  addOptions() {
    return {
      HTMLAttributes: {},
      spacings,
      defaultSpacing,
    };
  },

  addAttributes() {
    return {
      spacing: {
        default: this.options.defaultSpacing,
        parseHTML: (element) => {
          const spacing =
            element.getAttribute("data-spacing") || this.options.defaultSpacing;

          return spacing;
        },
        renderHTML: (attributes) => {
          return {
            "data-spacing": attributes.spacing,
            style: `width:100%; height:${
              this.options.spacings[attributes.spacing]
            };`,
          };
        },
      },

      "component-name": {
        default: this.name,
        parseHTML: (element) => {
          const component = element.getAttribute("data-component-name");

          return component;
        },
        renderHTML: () => {
          return {
            "data-component-name": this.name,
          };
        },
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: "div[data-component-name='spacer']",
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      "div",
      mergeAttributes(HTMLAttributes, {
        class: "spacer",
      }),
    ];
  },

  addCommands() {
    return {
      setSpacer:
        () =>
        ({ commands }) => {
          return commands.insertContent({
            type: this.name,
          });
        },

      setSpacerValue:
        (spacing: string) =>
        ({ commands }) => {
          return commands.updateAttributes(this.type, {
            spacing,
          });
        },
    };
  },
});
