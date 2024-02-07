import { Extension, Node, Mark } from "@tiptap/core";
import { Blockquote, BlockquoteOptions } from "@mailed/extension-blockquote";
import { Bold, BoldOptions } from "@mailed/extension-bold";
import { BulletList, BulletListOptions } from "@mailed/extension-bullet-list";
import { Document } from "@mailed/extension-document";
import { Dropcursor, DropcursorOptions } from "@mailed/extension-dropcursor";
import { Footer, FooterOptions } from "@mailed/extension-footer";
import { Gapcursor } from "@mailed/extension-gapcursor";
import { HardBreak, HardBreakOptions } from "@mailed/extension-hard-break";
import { Heading, HeadingOptions } from "@mailed/extension-heading";
import { History, HistoryOptions } from "@mailed/extension-history";
import {
  HorizontalRule,
  HorizontalRuleOptions,
} from "@mailed/extension-horizontal-rule";
import { Image, ImageOptions } from "@mailed/extension-image";
import { Italic, ItalicOptions } from "@mailed/extension-italic";
import { Link, LinkOptions } from "@mailed/extension-link";
import { ListItem, ListItemOptions } from "@mailed/extension-list-item";
import {
  OrderedList,
  OrderedListOptions,
} from "@mailed/extension-ordered-list";
import { Paragraph, ParagraphOptions } from "@mailed/extension-paragraph";
import { Placeholder, PlaceholderOptions } from "@mailed/extension-placeholder";
import { Strike, StrikeOptions } from "@mailed/extension-strike";
import { Text } from "@mailed/extension-text";
import { TextAlign, TextAlignOptions } from "@mailed/extension-text-align";
import { Underline, UnderlineOptions } from "@mailed/extension-underline";

export interface StarterKitOptions {
  blockquote: Partial<BlockquoteOptions> | false;
  bold: Partial<BoldOptions> | false;
  bulletList: Partial<BulletListOptions> | false;
  document: false;
  dropcursor: Partial<DropcursorOptions> | false;
  footer: Partial<FooterOptions> | false;
  gapcursor: false;
  hardBreak: Partial<HardBreakOptions> | false;
  heading: Partial<HeadingOptions> | false;
  history: Partial<HistoryOptions> | false;
  horizontalRule: Partial<HorizontalRuleOptions> | false;
  image: Partial<ImageOptions> | false;
  italic: Partial<ItalicOptions> | false;
  link: Partial<LinkOptions> | false;
  listItem: Partial<ListItemOptions> | false;
  orderedList: Partial<OrderedListOptions> | false;
  paragraph: Partial<ParagraphOptions> | false;
  placeholder: Partial<PlaceholderOptions> | false;
  strike: Partial<StrikeOptions> | false;
  text: false;
  textAlign: Partial<TextAlignOptions> | false;
  underline: Partial<UnderlineOptions> | false;
}

type AnyExtension = Extension | Node | Mark;
type Extensions = AnyExtension[];

export const StarterKit = Extension.create<StarterKitOptions>({
  name: "starterKit",

  addExtensions() {
    const extensions: Extensions = [];

    if (this.options.blockquote !== false) {
      extensions.push(Blockquote.configure(this.options?.blockquote));
    }

    if (this.options.bold !== false) {
      extensions.push(Bold.configure(this.options?.bold));
    }

    if (this.options.bulletList !== false) {
      extensions.push(BulletList.configure(this.options?.bulletList));
    }

    if (this.options.document !== false) {
      extensions.push(Document.configure(this.options?.document));
    }

    if (this.options.dropcursor !== false) {
      extensions.push(Dropcursor.configure(this.options?.dropcursor));
    }

    if (this.options.footer !== false) {
      extensions.push(Footer.configure(this.options?.footer));
    }

    if (this.options.gapcursor !== false) {
      extensions.push(Gapcursor.configure(this.options?.gapcursor));
    }

    if (this.options.hardBreak !== false) {
      extensions.push(HardBreak.configure(this.options?.hardBreak));
    }

    if (this.options.heading !== false) {
      extensions.push(Heading.configure(this.options?.heading));
    }

    if (this.options.history !== false) {
      extensions.push(History.configure(this.options?.history));
    }

    if (this.options.horizontalRule !== false) {
      extensions.push(HorizontalRule.configure(this.options?.horizontalRule));
    }

    if (this.options.image !== false) {
      extensions.push(Image.configure(this.options?.image));
    }

    if (this.options.italic !== false) {
      extensions.push(Italic.configure(this.options?.italic));
    }

    if (this.options.link !== false) {
      extensions.push(Link.configure(this.options?.link));
    }

    if (this.options.listItem !== false) {
      extensions.push(ListItem.configure(this.options?.listItem));
    }

    if (this.options.orderedList !== false) {
      extensions.push(OrderedList.configure(this.options?.orderedList));
    }

    if (this.options.paragraph !== false) {
      extensions.push(Paragraph.configure(this.options?.paragraph));
    }

    if (this.options.placeholder !== false) {
      extensions.push(Placeholder.configure(this.options?.placeholder));
    }

    if (this.options.strike !== false) {
      extensions.push(Strike.configure(this.options?.strike));
    }

    if (this.options.text !== false) {
      extensions.push(Text.configure(this.options?.text));
    }

    if (this.options.textAlign !== false) {
      extensions.push(TextAlign.configure(this.options?.textAlign));
    }

    if (this.options.underline !== false) {
      extensions.push(Underline.configure(this.options?.underline));
    }

    return extensions;
  },
});

export default StarterKit;
