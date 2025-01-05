"use client";

import {
  BlockTypeSelect,
  BoldItalicUnderlineToggles,
  CodeToggle,
  CreateLink,
  InsertCodeBlock,
  InsertImage,
  InsertSandpack,
  InsertTable,
  MDXEditor,
  MDXEditorMethods,
  UndoRedo,
  headingsPlugin,
  imagePlugin,
  listsPlugin,
  markdownShortcutPlugin,
  quotePlugin,
  thematicBreakPlugin,
  toolbarPlugin,
} from "@mdxeditor/editor";
import { Dispatch, FC, SetStateAction } from "react";
import "@mdxeditor/editor/style.css";

interface EditorProps {
  markdown: string;
  editorRef?: React.MutableRefObject<MDXEditorMethods | null>;
  setMarkdown: Dispatch<SetStateAction<string>>;
}

/**
 * Extend this Component further with the necessary plugins or props you need.
 * proxying the ref is necessary. Next.js dynamically imported components don't support refs.
 */
const Editor: FC<EditorProps> = ({ markdown, editorRef, setMarkdown }) => {
  async function imageUploadHandler(image: File) {
    const formData = new FormData();
    formData.append("image", image);

    console.log("form data is ", formData);
    // send the file to your server and return
    // the URL of the uploaded image in the response
    const response = await fetch("/uploads/new", {
      method: "POST",
      body: formData,
    });
    const json = (await response.json()) as { url: string };
    return json.url;
  }

  return (
    <MDXEditor
      onChange={(e) => {
        console.log(e);
        setMarkdown(e);
      }}
      ref={editorRef}
      markdown={markdown}
      className="dark-theme dark-editor"
      plugins={[
        headingsPlugin(),
        listsPlugin(),
        quotePlugin(),
        imagePlugin({ imageUploadHandler }),
        thematicBreakPlugin(),
        markdownShortcutPlugin(),
        toolbarPlugin({
          toolbarClassName: "Admin-toolbar",
          toolbarContents: () => (
            <>
              {" "}
              <UndoRedo />
              <BlockTypeSelect />
              <BoldItalicUnderlineToggles />
              <CodeToggle />
              <CreateLink />
              <InsertCodeBlock />
              <InsertImage />
              <InsertSandpack />
              <InsertTable />
            </>
          ),
        }),
      ]}
    />
  );
};

export default Editor;
