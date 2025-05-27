"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import "./jobs/jobsPanel.scss";

import {
  FaBold,
  FaItalic,
  FaUnderline,
  FaListOl,
  FaListUl,
  FaHeading,
} from "react-icons/fa";
import { useState } from "react";

interface TiptapProps {
  content?: string;
  onChange?: (html: string) => void;
}

const Tiptap = ({ content = "<p>Hello World!</p>", onChange }: TiptapProps) => {
  const [headingLevel, setHeadingLevel] = useState<number | null>(null);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({ heading: { levels: [1, 2, 3, 4, 5, 6] } }),
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
      attributes: {
        class:
          "prose prose-sm sm:prose-base lg:prose-lg xl:prose-2xl focus:outline-none min-h-[250px]",
      },
    },
  });

  if (!editor) return null;

  const handleBold = () => {
    if (editor.isActive("bold")) {
      editor.chain().focus().unsetBold().run();
    } else {
      editor.chain().focus().setBold().run();
    }
  };

  const handleItalic = () => {
    if (editor.isActive("italic")) {
      editor.chain().focus().unsetItalic().run();
    } else {
      editor.chain().focus().setItalic().run();
    }
  };

  const handleUnderline = () => {
    if (editor.isActive("underline")) {
      editor.chain().focus().unsetUnderline().run();
    } else {
      editor.chain().focus().setUnderline().run();
    }
  };

  const handleBulletList = () => {
    editor?.chain().focus().toggleBulletList().run();
  };

  const handleOrderedList = () => {
    editor?.chain().focus().toggleOrderedList().run();
  };

  const handleInvisible = () => {
    editor?.chain().focus().run();
  };

  const handleHeadingChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    const level = value ? parseInt(value, 10) : null;

    setHeadingLevel(level);

    if (level === null || isNaN(level)) {
      editor.chain().focus().setParagraph().run();
    } else {
      editor
        .chain()
        .focus()
        .toggleHeading({ level: level as 1 | 2 | 3 | 4 | 5 | 6 })
        .run();
    }
  };

  return (
    <div className="flex flex-col w-full">
      <div className="inline-flex gap-[10px] py-[4px] ">
        <button
          type="button"
          onClick={handleInvisible}
          className="absolute opacity-0 w-0 h-0 overflow-hidden pointer-events-none  "
          aria-hidden="true"
          tabIndex={-1}
        />

        <div className="flex items-center gap-[10px]">
          <FaHeading />
          <select
            value={headingLevel ?? ""}
            onChange={handleHeadingChange}
            className="p-1 rounded border text-sm bg-white text-black cursor-pointer"
          >
            <option value="">Normal</option>
            {[1, 2, 3, 4, 5, 6].map((level) => (
              <option key={level} value={level}>
                H{level}
              </option>
            ))}
          </select>
        </div>
        <button
          type="button"
          onClick={handleBold}
          className={`p-[2px] rounded hover:bg-gray-200 transition 
               border-[2px] border-[#444444]  
  
            ${editor.isActive("bold") ? "text-white bg-[#bfc7d1]" : ""}`}
        >
          <FaBold />
        </button>
        <button
          type="button"
          onClick={handleItalic}
          className={`p-[2px] rounded hover:bg-gray-200 transition 
               border-[2px] border-[#444444]  ${
                 editor.isActive("italic") ? "bg-[#bfc7d1] text-white" : ""
               }`}
        >
          <FaItalic />
        </button>
        <button
          type="button"
          onClick={handleUnderline}
          className={`p-[2px] rounded hover:bg-gray-200 transition 
               border-[2px] border-[#444444] ${
                 editor.isActive("underline") ? "bg-[#bfc7d1]  text-white" : ""
               }`}
        >
          <FaUnderline />
        </button>
        <button
          type="button"
          onClick={handleBulletList}
          className={`p-[2px] rounded hover:bg-gray-200 transition 
               border-[2px] border-[#444444]  ${
                 editor.isActive("bulletList") ? "bg-[#bfc7d1]  text-white" : ""
               }`}
        >
          <FaListUl />
        </button>
        <button
          type="button"
          onClick={handleOrderedList}
          className={`p-[2px] rounded hover:bg-gray-200 transition 
               border-[2px] border-[#444444]  ${
                 editor.isActive("orderedList")
                   ? "bg-[#bfc7d1]  text-white"
                   : ""
               }`}
        >
          <FaListOl />
        </button>
      </div>

      <EditorContent
        editor={editor}
        className="border rounded-lg p-2 list-disc list-inside jobslist tiptap"
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
