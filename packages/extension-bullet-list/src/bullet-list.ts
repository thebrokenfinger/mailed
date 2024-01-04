import { BulletList as TiptapBulletList } from "@tiptap/extension-bullet-list";

export interface BulletListOptions {
  itemTypeName: string;
  HTMLAttributes: Record<string, any>;
  keepMarks: boolean;
  keepAttributes: boolean;
}

export const BulletList = TiptapBulletList.extend<BulletListOptions>({
  addAttributes() {
    return {
      ...this.parent?.(),
      "component-name": {
        default: "bulletList",
        renderHTML: (attributes) => ({
          "data-component-name": attributes["component-name"],
        }),
      },
    };
  },
});
