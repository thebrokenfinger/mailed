import { OrderedList as TiptapOrderedList } from "@tiptap/extension-ordered-list";

export interface OrderedListOptions {
  itemTypeName: string;
  HTMLAttributes: Record<string, any>;
  keepMarks: boolean;
  keepAttributes: boolean;
}

export const OrderedList = TiptapOrderedList.extend<OrderedListOptions>({
  addAttributes() {
    return {
      ...this.parent?.(),
      "component-name": {
        default: "orderedList",
        renderHTML: (attributes) => ({
          "data-component-name": attributes["component-name"],
        }),
      },
    };
  },
});
