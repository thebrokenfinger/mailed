import { History as TiptapHistory } from "@tiptap/extension-history";

export interface HistoryOptions {
  depth: number;
  newGroupDelay: number;
}

export const History = TiptapHistory;

export default History;
