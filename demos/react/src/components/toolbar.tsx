import { Button, Flex } from "@radix-ui/themes";
import type { Editor } from "@tiptap/core";

export const Toolbar: React.FC<{ editor: Editor }> = ({ editor }) => {
  return (
    <Flex gap="3">
      <Button onClick={() => editor.chain().focus().toggleBold().run()}>
        Bold
      </Button>
      <Button onClick={() => editor.chain().focus().toggleItalic().run()}>
        Italic
      </Button>
      <Button onClick={() => editor.chain().focus().toggleStrike().run()}>
        Strike
      </Button>
      <Button
        onClick={() =>
          editor
            .chain()
            .focus()
            .setImage({ src: "https://source.unsplash.com/random/600x320" })
            .run()
        }
      >
        Image
      </Button>
      <Button
        onClick={() =>
          editor.chain().focus().setLink({ href: "https://example.com" }).run()
        }
      >
        Link
      </Button>
      <Button
        onClick={() => editor.chain().focus().setHeading({ level: 1 }).run()}
      >
        H1
      </Button>
      <Button
        onClick={() => editor.chain().focus().setHeading({ level: 2 }).run()}
      >
        H2
      </Button>
      <Button onClick={() => editor.chain().focus().setParagraph().run()}>
        Paragraph
      </Button>
    </Flex>
  );
};
