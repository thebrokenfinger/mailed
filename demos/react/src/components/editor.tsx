import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@mailed/starter-kit";
import { Toolbar } from "./toolbar";

export function Editor() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: `
    <h3>Welcome to App!</h3><p></p><div data-height="xl" style="width:100%; height:64px;" data-mailed-component="spacer" class="spacer" contenteditable="false" draggable="true"></div><p>Hey <span data-type="variable" class="py-1 px-2 bg-slate-100 border border-blue-300 rounded-md" data-id="username" contenteditable="false">username</span>,</p><p>Thank you so much for joining the waitlist. We are more than excited to welcome you to the [product name] community.</p><p>Stay tuned. And where just an email away if you have any questions. We'd be more than happy to answer your questions.</p><p><br class="ProseMirror-trailingBreak"></p><p>Cheers,<br>James, <em>creator of [product name]</em></p><hr contenteditable="false"><small class="text-slate-500 footer" data-mailed-component="footer">You are receiving this email because you joined the waitlist for [product name].</small><small class="text-slate-500 footer" data-mailed-component="footer">© 2023 [Product name]<br>[address]</small><small class="text-slate-500 footer" data-mailed-component="footer"><a target="_blank" rel="noopener noreferrer nofollow" href="https://goo.gl">Unsubscribe from emails</a></small><p><br class="ProseMirror-trailingBreak"></p>
    `,
  });

  if (!editor) {
    return <span>Loading...</span>;
  }

  return (
    <div style={{ margin: "0 auto", width: "640px" }}>
      <Toolbar editor={editor} />
      <EditorContent
        editor={editor}
        style={{
          maxWidth: "600px",
          marginBlock: "16px",
          padding: "0 8px",
          borderTop: "2px solid #ccc",
          borderBottom: "2px solid #ccc",
          outline: "none",
        }}
      />
    </div>
  );
}
