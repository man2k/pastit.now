"use client";

import React, { useState, useRef, useEffect } from "react";
import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File
import dynamic from "next/dynamic";
import plugins from "suneditor/src/plugins";
// import { buttonList } from "suneditor-react";

const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});

const TextField = () => {
  const [content, setContent] = useState("");
  const editorRef = useRef(null);

  useEffect(() => {
    if (editorRef.current) {
      // Access the SunEditor instance and activate all plugins
      const editor = editorRef.current.editor;
      editor.getCore().plugins.forEach((plugin) => {
        editor.addPlugin(plugin);
      });
    }
  }, []);

  // const handleChange = (value) => {
  //   // console.log(value);
  //   setContent(value);
  // };

  return (
    <SunEditor
      ref={editorRef}
      defaultValue={content}
      setContents={content}
      onChange={setContent}
      lang="en"
      height="50vh"
      width="auto"
      placeholder="PASTIT HERE..."
      plugins={Object.keys(plugins)}
      setOptions={{
        code: "en",
        mode: "balloon-always",
        defaultStyle: "background: red",
        buttonList: [
          // Default
          ["undo", "redo"],
          ["font", "fontSize", "formatBlock"],
          ["paragraphStyle", "blockquote"],
          ["bold", "underline", "italic", "strike", "subscript", "superscript"],
          ["fontColor", "hiliteColor", "textStyle"],
          ["removeFormat"],
          ["outdent", "indent"],
          ["align", "horizontalRule", "list", "lineHeight"],
          ["table", "link", "image", "video", "audio"],
          // ["imageGallery"],
          ["fullScreen", "showBlocks", "codeView"],
          ["preview", "print"],
          ["save", "template"],
          ["-left", "#fix", "dir_ltr", "dir_rtl"],
          // (min-width:992px)
          [
            "%992",
            [
              ["undo", "redo"],
              [
                ":p-More Paragraph-default.more_paragraph",
                "font",
                "fontSize",
                "formatBlock",
                "paragraphStyle",
                "blockquote",
              ],
              ["bold", "underline", "italic", "strike"],
              [
                ":t-More Text-default.more_text",
                "subscript",
                "superscript",
                "fontColor",
                "hiliteColor",
                "textStyle",
              ],
              ["removeFormat"],
              ["outdent", "indent"],
              ["align", "horizontalRule", "list", "lineHeight"],
              ["-right", "dir"],
              [
                "-right",
                ":i-More Misc-default.more_vertical",
                "fullScreen",
                "showBlocks",
                "codeView",
                "preview",
                "print",
                "save",
                "template",
              ],
              [
                "-right",
                ":r-More Rich-default.more_plus",
                "table",
                "link",
                "image",
                "video",
                "audio",
                "math",
                "imageGallery",
              ],
            ],
          ],
          // (min-width:768px)
          [
            "%768",
            [
              ["undo", "redo"],
              [
                ":p-More Paragraph-default.more_paragraph",
                "font",
                "fontSize",
                "formatBlock",
                "paragraphStyle",
                "blockquote",
              ],
              [
                ":t-More Text-default.more_text",
                "bold",
                "underline",
                "italic",
                "strike",
                "subscript",
                "superscript",
                "fontColor",
                "hiliteColor",
                "textStyle",
                "removeFormat",
              ],
              [
                ":e-More Line-default.more_horizontal",
                "outdent",
                "indent",
                "align",
                "horizontalRule",
                "list",
                "lineHeight",
              ],
              [
                ":r-More Rich-default.more_plus",
                "table",
                "link",
                "image",
                "video",
                "audio",
                "math",
                "imageGallery",
              ],
              ["-right", "dir"],
              [
                "-right",
                ":i-More Misc-default.more_vertical",
                "fullScreen",
                "showBlocks",
                "codeView",
                "preview",
                "print",
                "save",
                "template",
              ],
            ],
          ],
        ],
        plugins: plugins,
      }}
      setDefaultStyle="font-family: cursive; font-size:16px;"
      // disable={loading}
      // handleImageUploadBefore={handleImageUploadBefore}
      // onImageUpload={handleImageUpload}
      setAllPlugins={true}
    />
  );
};
export default TextField;
