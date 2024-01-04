import { Node, mergeAttributes, nodeInputRule } from "@tiptap/core";

export interface LogoOptions {
  inline: boolean;
  allowBase64: boolean;
  HTMLAttributes: Record<string, any>;
  sizes: Record<string, string>;
  defaultSize: string;
}

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    logo: {
      setLogo: (options: { src: string; alt?: string }) => ReturnType;
      setLogoAlignment: (alignment: string) => ReturnType;
      setLogoSize: (size: string) => ReturnType;
      resetLogoAlignment: () => ReturnType;
    };
  }
}

export const sizes = {
  sm: "32px",
  md: "40px",
  lg: "56px",
};
export const defaultSize = "md";

export const inputRegex =
  /(?:^|\s)(!\[(.+|:?)]\((\S+)(?:(?:\s+)["'](\S+)["'])?\))$/;

export const Logo = Node.create<LogoOptions>({
  name: "logo",

  addOptions() {
    return {
      inline: false,
      allowBase64: false,
      HTMLAttributes: {},
      sizes,
      defaultSize,
    };
  },

  inline() {
    return this.options.inline;
  },

  group() {
    return this.options.inline ? "inline" : "block";
  },

  draggable: true,

  addAttributes() {
    return {
      src: {
        default: null,
      },
      alt: {
        default: "",
      },
      size: {
        default: this.options.defaultSize,
        parseHTML: (element) => {
          const size =
            element.getAttribute("data-size") || this.options.defaultSize;

          return size;
        },
        renderHTML: (attributes) => {
          return {
            "data-size": attributes.size,
            style: `height: ${this.options.sizes[attributes.size]}`,
          };
        },
      },
      alignment: {
        default: "left",
        parseHTML: (element) => {
          const align = element.getAttribute("data-alignment") || "left";

          return align;
        },
        renderHTML: (attributes) => {
          return {
            "data-alignment": attributes.alignment,
            style: `position:relative; margin-top:0; margin-right:auto; margin-left:${
              attributes.alignment === "center" ? "auto" : "0"
            };`,
          };
        },
      },
      "component-name": {
        parseHTML: (element) => {
          const component =
            element.getAttribute("data-component-name") || this.name;

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
        tag: this.options.allowBase64
          ? `img[src][data-component-name='${this.name}']`
          : `img[src][data-component-name="${this.name}"]:not([src^="data:"])`,
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      "img",
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes),
    ];
  },

  addCommands() {
    return {
      setLogo:
        (options) =>
        ({ commands }) => {
          return commands.insertContent({
            type: this.name,
            attrs: options,
          });
        },

      setLogoAlignment:
        (alignment: string) =>
        ({ commands }) => {
          return commands.updateAttributes(this.type, { alignment });
        },

      setLogoSize:
        (size: string) =>
        ({ commands }) => {
          return commands.updateAttributes(this.type, { size });
        },

      resetLogoAlignment:
        () =>
        ({ commands }) => {
          return commands.updateAttributes(this.type, { alignment: "left" });
        },
    };
  },

  addInputRules() {
    return [
      nodeInputRule({
        find: inputRegex,
        type: this.type,
        getAttributes: (match) => {
          const [, , alt, src] = match;

          return { src, alt };
        },
      }),
    ];
  },
});
