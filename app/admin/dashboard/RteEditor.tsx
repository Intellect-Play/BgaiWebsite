"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  content?: string; // initial HTML
  onChange?: (html: string) => void;
  placeholder?: string;
  className?: string; // extra wrapper classes
};

export default function RteEditor({
  content = "<p>Hello World!</p>",
  onChange,
  placeholder = "Metni buraya yaz...",
  className = "",
}: Props) {
  const editorRef = useRef<HTMLDivElement | null>(null);

  // UI states (bold/italic/underline/list)
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [isUl, setIsUl] = useState(false);
  const [isOl, setIsOl] = useState(false);

  // initial content / external updates
  useEffect(() => {
    const el = editorRef.current;
    if (!el) return;
    if (document.activeElement !== el) {
      el.innerHTML = content || "<p><br/></p>";
    }
  }, [content]);

  // emit HTML out
  const emitChange = () => {
    const html = editorRef.current?.innerHTML ?? "";
    onChange?.(html);
    refreshCommandStates();
  };

  // execCommand wrapper
  const exec = (command: string, value?: string) => {
    editorRef.current?.focus();
    document.execCommand(command, false, value);
    emitChange();
  };

  const toggleBold = () => exec("bold");
  const toggleItalic = () => exec("italic");
  const toggleUnderline = () => exec("underline");
  const toggleUl = () => exec("insertUnorderedList");
  const toggleOl = () => exec("insertOrderedList");

  // font-size wrap (larger/smaller)
  const wrapSelectionWithSpan = (style: string) => {
    const editor = editorRef.current;
    if (!editor) return;

    const sel = window.getSelection();
    if (!sel || sel.rangeCount === 0) return;

    const range = sel.getRangeAt(0);
    if (!editor.contains(range.commonAncestorContainer)) return;

    if (range.collapsed) {
      const span = document.createElement("span");
      span.setAttribute("style", `font-size: ${style};`);
      span.appendChild(document.createTextNode("\u200B"));
      range.insertNode(span);
      sel.removeAllRanges();
      const newRange = document.createRange();
      newRange.setStart(span.firstChild as Text, 1);
      newRange.setEnd(span.firstChild as Text, 1);
      sel.addRange(newRange);
      emitChange();
      return;
    }

    const contents = range.extractContents();
    const span = document.createElement("span");
    span.setAttribute("style", `font-size: ${style};`);
    span.appendChild(contents);
    range.insertNode(span);

    sel.removeAllRanges();
    const after = document.createRange();
    after.selectNodeContents(span);
    after.collapse(false);
    sel.addRange(after);

    emitChange();
  };

  const increaseFont = () => wrapSelectionWithSpan("larger");
  const decreaseFont = () => wrapSelectionWithSpan("smaller");

  // queryCommandState -> UI
  const refreshCommandStates = () => {
    try {
      setIsBold(document.queryCommandState("bold"));
      setIsItalic(document.queryCommandState("italic"));
      setIsUnderline(document.queryCommandState("underline"));
      setIsUl(document.queryCommandState("insertUnorderedList"));
      setIsOl(document.queryCommandState("insertOrderedList"));
    } catch {
      /* noop */
    }
  };

  useEffect(() => {
    const handler = () => refreshCommandStates();
    document.addEventListener("selectionchange", handler);
    return () => document.removeEventListener("selectionchange", handler);
  }, []);

  // paste as plain text
  const onPaste = (e: React.ClipboardEvent<HTMLDivElement>) => {
    e.preventDefault();
    const text = e.clipboardData.getData("text/plain");
    if (document.queryCommandSupported("insertText")) {
      document.execCommand("insertText", false, text);
    } else {
      document.execCommand("paste", false, text);
    }
    emitChange();
  };

  // shift+enter -> line break
  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" && e.shiftKey) {
      e.preventDefault();
      exec("insertLineBreak");
    }
  };

  return (
    <div className={`rte ${className}`}>
      {/* Toolbar */}
      <div className="rte-toolbar" role="toolbar" aria-label="Editor toolbar">
        <button
          type="button"
          onClick={increaseFont}
          className="rte-btn"
          title="Yazı boyutunu büyüt (A+)"
          aria-label="Increase font size"
        >
          <span className="rte-btn-label">A+</span>
        </button>
        <button
          type="button"
          onClick={decreaseFont}
          className="rte-btn"
          title="Yazı boyutunu küçült (A−)"
          aria-label="Decrease font size"
        >
          <span className="rte-btn-label">A−</span>
        </button>

        <div className="rte-sep" />

        <button
          type="button"
          onClick={toggleBold}
          className="rte-btn"
          title="Kalın"
          aria-pressed={isBold}
          aria-label="Bold"
        >
          <strong className="rte-btn-label">B</strong>
        </button>
        <button
          type="button"
          onClick={toggleItalic}
          className="rte-btn"
          title="İtalik"
          aria-pressed={isItalic}
          aria-label="Italic"
        >
          <em className="rte-btn-label">I</em>
        </button>
        <button
          type="button"
          onClick={toggleUnderline}
          className="rte-btn"
          title="Altı çizili"
          aria-pressed={isUnderline}
          aria-label="Underline"
        >
          <span className="rte-btn-label rte-underline">U</span>
        </button>

        <div className="rte-sep" />

        <button
          type="button"
          onClick={toggleUl}
          className="rte-btn"
          title="Madde işaretli liste"
          aria-pressed={isUl}
          aria-label="Bulleted list"
        >
          <span className="rte-btn-label">• •</span>
        </button>
        <button
          type="button"
          onClick={toggleOl}
          className="rte-btn"
          title="Numaralı liste"
          aria-pressed={isOl}
          aria-label="Numbered list"
        >
          <span className="rte-btn-label">1.</span>
        </button>
      </div>

      {/* Editor */}
      <div
        ref={editorRef}
        className="rte-editor"
        contentEditable
        role="textbox"
        aria-multiline
        suppressContentEditableWarning
        onInput={emitChange}
        onBlur={emitChange}
        onPaste={onPaste}
        onKeyDown={onKeyDown}
        data-placeholder={placeholder}
        style={{
          outline: "none",
          whiteSpace: "pre-wrap",
          wordBreak: "break-word",
        }}
      />

      {/* Styles (frameworks'e bağımsız, şık butonlar) */}
      <style jsx>{`
        .rte {
          --rte-border: #dfe3ea;
          --rte-bg: #f7f8fb;
          --rte-btn-bg: #ffffff;
          --rte-btn-text: #0f172a;
          --rte-btn-hover: #f1f3f7;
          --rte-btn-active-bg: #eef2ff;
          --rte-btn-active-ring: rgba(99, 102, 241, 0.18);
          --rte-editor-bg: #ffffff;
          --rte-placeholder: #9aa0a6;
        }
        @media (prefers-color-scheme: dark) {
          .rte {
            --rte-border: #2a2e35;
            --rte-bg: #0e1116;
            --rte-btn-bg: #111418;
            --rte-btn-text: #e5e7eb;
            --rte-btn-hover: #171b21;
            --rte-btn-active-bg: #1b2232;
            --rte-btn-active-ring: rgba(99, 102, 241, 0.28);
            --rte-editor-bg: #fff;
            --rte-placeholder: #8a9099;
          }
        }

        .rte-toolbar {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 8px;
          padding: 8px;
          margin: 0 0 8px 0;
          background: var(--rte-bg);
          border: 1px solid var(--rte-border);
          border-radius: 12px;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
        }
        .rte-sep {
          width: 1px;
          height: 24px;
          background: var(--rte-border);
          margin: 0 2px;
        }

        .rte-btn {
          appearance: none;
          border: 1px solid var(--rte-border);
          background: var(--rte-btn-bg);
          color: var(--rte-btn-text);
          border-radius: 10px;
          height: 36px;
          padding: 0 12px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          line-height: 1;
          transition: background 0.12s ease, border-color 0.12s ease,
            box-shadow 0.12s ease, transform 0.02s ease;
          box-shadow: 0 1px 0 rgba(0, 0, 0, 0.03);
          user-select: none;
        }
        .rte-btn:hover {
          background: var(--rte-btn-hover);
        }
        .rte-btn:active {
          transform: translateY(1px);
        }
        .rte-btn[aria-pressed="true"] {
          background: var(--rte-btn-active-bg);
          box-shadow: 0 0 0 2px var(--rte-btn-active-ring) inset;
        }
        .rte-btn-label {
          display: inline-block;
          transform: translateY(-0.5px);
        }
        .rte-underline {
          text-decoration: underline;
        }

        .rte-editor {
          border: 1px solid var(--rte-border);
          border-radius: 12px;
          padding: 12px;
          min-height: 240px;
          background: var(--rte-editor-bg);
        }

        [contenteditable][data-placeholder]:empty:before {
          content: attr(data-placeholder);
          color: var(--rte-placeholder);
          opacity: 0.6;
          pointer-events: none;
        }
      `}</style>
    </div>
  );
}
