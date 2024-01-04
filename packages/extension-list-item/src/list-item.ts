import { ListItem as TiptapListItem } from "@tiptap/extension-list-item";

export interface ListItemOptions {
  HTMLAttributes: Record<string, unknown>;
}

export const ListItem = TiptapListItem.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      "component-name": {
        default: "listItem",
        renderHTML: (attributes) => ({
          "data-component-name": attributes["component-name"],
        }),
      },
    };
  },
});

export default ListItem;
