"use client";

import { MDXEditorMethods } from "@mdxeditor/editor";
import dynamic from "next/dynamic";
import { Suspense, useState } from "react";
import { useRef } from "react";

const EditorComp = dynamic(() => import("@/components/Mdx/Mdx"), { ssr: false });

export default function AdminPage() {
  const [markdown, setMarkdown] = useState("");

  const ref = useRef<MDXEditorMethods>(null);

  return (
    <>
      <div style={{ border: "1px solid white" }} className="overflow-auto text-white">
        <button onClick={() => ref.current?.setMarkdown("new markdown")}>Set new markdown</button>
        <button onClick={() => console.log(ref.current?.getMarkdown())}>Get markdown</button>
        <Suspense fallback={null}>
          <EditorComp markdown={markdown} editorRef={ref} setMarkdown={setMarkdown} />
        </Suspense>
      </div>
    </>
  );
}
