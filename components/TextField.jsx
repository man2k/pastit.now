"use client";

import React, { useState, useRef, useEffect } from "react";
import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File
import dynamic from "next/dynamic";
import plugins from "suneditor/src/plugins";
import axios from "axios";

const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});

const TextField = () => {
  const [content, setContent] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(content);
    axios
      .post("api/messages", {
        message: content,
      })
      .then(function (response) {
        console.log(response);
        window.alert("Uploaded");
      })
      .catch(function (error) {
        console.log(error);
      });
    // await prisma.Message.create({
    //   data: {
    //     message: content,
    //   },
    // });
  };
  return (
    <div className="flex flex-col justify-center items-center w-full p-10">
      <div className="w-full">
        <SunEditor
          defaultValue={content}
          setContents={content}
          onChange={(e) => {
            // console.log(e);
            setContent(e);
          }}
          lang="en"
          height="50vh"
          width="auto"
          placeholder="PASTIT HERE..."
          plugins={Object.keys(plugins)}
          setOptions={{
            code: "en",
            mode: "balloon-always",
            // defaultStyle: "background: red",
            buttonList: [
              // Default
              ["undo", "redo"],
              ["font", "fontSize", "formatBlock"],
              ["paragraphStyle", "blockquote"],
              [
                "bold",
                "underline",
                "italic",
                "strike",
                "subscript",
                "superscript",
              ],
              ["fontColor", "hiliteColor", "textStyle"],
              ["removeFormat"],
              ["outdent", "indent"],
              ["align", "horizontalRule", "list", "lineHeight"],
              ["table", "link", "image", "video", "audio"],
              // ["imageGallery"],
              ["fullScreen", "showBlocks", "codeView"],
              ["preview", "print"],
              ["save", "template"],
              // ["-left", "#fix", "dir_ltr", "dir_rtl"],
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
                    // "math",
                    // "imageGallery",
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
                    // "math",
                    // "imageGallery",
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
          setAllPlugins={true}
        />
      </div>

      <div>
        <button
          className="border-1 border-black bg-red-300 rounded-lg w-24 mt-3"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};
export default TextField;
