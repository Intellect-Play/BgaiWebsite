"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";

import {
  FaBold,
  FaItalic,
  FaUnderline,
  FaListOl,
  FaListUl,
} from "react-icons/fa";

interface TiptapProps {
  content?: string;
  onChange?: (html: string) => void;
}

const Tiptap = ({ content = "<p>Hello World!</p>", onChange }: TiptapProps) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: false, // artık heading yok
      }),
      Underline,
    ],
    content,
    onUpdate({ editor }) {
      const html = editor.getHTML();
      if (onChange) {
        onChange(html);
      }
    },
    editorProps: {
      handleDOMEvents: {
        mousedown: () => true,
      },
      attributes: {
        class:
          "prose prose-sm sm:prose-base lg:prose-lg xl:prose-2xl focus:outline-none min-h-[250px]",
      },
    },
  });

  if (!editor) return null;

  return (
    <div className="flex flex-col w-full">
      <div className="flex justif-center items-center my-[1rem] gap-[15px] mb-[1rem] flex-wrap">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`p-2 ${editor.isActive("bold") ? "bg-gray-300" : ""}`}
        >
          <FaBold />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`p-2 ${editor.isActive("italic") ? "bg-gray-300" : ""}`}
        >
          <FaItalic />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={`p-2 ${editor.isActive("underline") ? "bg-gray-300" : ""}`}
        >
          <FaUnderline />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`p-2 ${
            editor.isActive("bulletList") ? "bg-gray-300" : ""
          }`}
        >
          <FaListUl />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`p-2 ${
            editor.isActive("orderedList") ? "bg-gray-300" : ""
          }`}
        >
          <FaListOl />
        </button>
      </div>

      <EditorContent
        editor={editor}
        className="border rounded-lg p-2 list-disc list-inside"
        style={{
          userSelect: "text",
          WebkitUserSelect: "text",
          MozUserSelect: "text",
          msUserSelect: "text",
        }}
      />
    </div>
  );
};

export default Tiptap;
