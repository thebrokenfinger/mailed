import { Node as ProsemirrorNode } from "@tiptap/pm/model";
import TiptapPlaceholder from "@tiptap/extension-placeholder";
import { Editor } from "@tiptap/core";

export interface PlaceholderOptions {
  emptyEditorClass: string;
  emptyNodeClass: string;
  placeholder:
    | ((PlaceholderProps: {
        editor: Editor;
        node: ProsemirrorNode;
        pos: number;
        hasAnchor: boolean;
      }) => string)
    | string;
  showOnlyWhenEditable: boolean;
  showOnlyCurrent: boolean;
  includeChildren: boolean;
}

export const Placeholder = TiptapPlaceholder;

export default Placeholder;
