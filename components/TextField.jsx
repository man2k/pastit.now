"use client";
import { useState, useCallback } from "react";

import { Editor, Transforms } from "slate";
import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import Leaf from "./Leaf";
import DefaultElement from "./DefaultElement";
import CodeElement from "./CodeElement";

const initialValue = [
  {
    type: "paragraph",
    children: [{ text: "A line of text in a paragraph." }],
  },
];

const TextField = () => {
  const [editor] = useState(() => withReact(createEditor()));

  const renderElement = useCallback((props) => {
    switch (props.element.type) {
      case "code":
        return <CodeElement {...props} />;
      default:
        return <DefaultElement {...props} />;
    }
  }, []);

  return (
    <Slate editor={editor} initialValue={initialValue}>
      <Editable
        renderElement={renderElement}
        onKeyDown={(event) => {
          if (event.key === "`" && event.ctrlKey) {
            event.preventDefault();
            // Determine whether any of the currently selected blocks are code blocks.
            const [match] = Editor.nodes(editor, {
              match: (n) => n.type === "code",
            });
            // Toggle the block type depending on whether there's already a match.
            Transforms.setNodes(
              editor,
              { type: match ? "paragraph" : "code" },
              {
                match: (n) => Element.isElement(n) && Editor.isBlock(editor, n),
              }
            );
          }
        }}
      />
    </Slate>
  );
};

export default TextField;
