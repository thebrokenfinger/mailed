import { Node, mergeAttributes, NodeViewRenderer } from "@tiptap/core";
import { ReactNodeViewRenderer } from "@tiptap/react";

export type ButtonProps = {
  alignment: "left" | "center";
  variant: "filled" | "outline";
  borderRadius: "sharp" | "smooth" | "round";
  buttonColor: string;
  defaultButtonColor: string;
  textColor: string;
  defaultTextColor: string;
};

export type ButtonOptions = {
  HTMLAttributes: Record<string, any>;
  nodeViewRenderer: typeof ReactNodeViewRenderer | NodeViewRenderer;
} & ButtonProps;

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    button: {
      setButton: () => ReturnType;
      setButtonAttributes: (attributes: Partial<ButtonOptions>) => ReturnType;
    };
  }
}

export const Button = Node.create<ButtonOptions>({
  name: "button",

  group: "block",
  selectable: true,
  draggable: true,

  addAttributes() {
    return {
      text: {
        default: "Button",
        parseHTML: (element) => element.getAttribute("data-text"),
        renderHTML(attributes) {
          return {
            "data-text": attributes.text,
          };
        },
      },
      url: {
        default: "",
        parseHTML: (element) => element.getAttribute("data-url"),
        renderHTML: (attributes) => {
          return {
            "data-url": attributes.url,
          };
        },
      },
      alignment: {
        default: "left",
        parseHTML: (element) => element.getAttribute("data-alignment"),
        renderHTML: (attributes) => {
          return {
            "data-alignment": attributes.alignment,
          };
        },
      },
      variant: {
        default: "filled",
        parseHTML: (element) => element.getAttribute("data-variant"),
        renderHTML: (attributes) => {
          return {
            "data-variant": attributes.variant,
          };
        },
      },
      borderRadius: {
        default: "smooth",
        parseHTML: (element) => element.getAttribute("data-border-radius"),
        renderHTML: (attributes) => {
          return {
            "data-border-radius": attributes.borderRadius,
          };
        },
      },
      buttonColor: {
        default: this.options.buttonColor,
        parseHTML: (element) => element.getAttribute("data-button-color"),
        renderHTML: (attributes) => {
          return {
            "data-button-color": attributes.buttonColor,
          };
        },
      },
      textColor: {
        default: this.options.textColor,
        parseHTML: (element) => element.getAttribute("data-text-color"),
        renderHTML: (attributes) => {
          return {
            "data-text-color": attributes.textColor,
          };
        },
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: `a[data-component-name="${this.name}"]`,
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      "a",
      mergeAttributes(
        {
          "data-component-name": this.name,
        },
        HTMLAttributes
      ),
    ];
  },

  addNodeView() {
    return this.options.nodeViewRenderer;
  },

  addCommands() {
    return {
      setButton:
        () =>
        ({ commands }) => {
          return commands.insertContent({
            type: this.name,
          });
        },
      setButtonAttributes:
        (attributes: Partial<ButtonOptions>) =>
        ({ commands }) => {
          return commands.updateAttributes(this.type, attributes);
        },
    };
  },
});
