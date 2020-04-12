import React, {useEffect, createRef} from "react";
import styled from "styled-components";
import "trix";
import "trix/dist/trix.css";
import useLocalStorage from "../../hooks/useLocalStorage";

const Wrapper = styled("div")`

  trix-editor {
    width: 100%;
    display: block;
    border: none;
    
    h1 {
      font-size: 2rem;
      font-weight: bold;
    }
  }

  trix-toolbar {
    width: 100%;
    max-width: 700px;
  }
`;

function Editor() {
  const trixRef = createRef<HTMLInputElement>();
  const [content, setContent] = useLocalStorage("content");

  /** Load initial data from local store. only triggered on the first render */
  useEffect(() => {
    console.log('mounted. load content...');
    const current: any | null = trixRef.current;
    if (current && content) {
      const {editor} = current;
      console.log('content mount: ', content);
      let finalContent = content;
      if (typeof content === "string") {
        finalContent = JSON.parse(content);
      }
      console.log('editor load');
      editor.loadJSON(finalContent);
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const current: any | null = trixRef.current;
    if (current) {
      const {editor} = current;
      const trixChange = () => {
        console.log('editor changed');
        const editorState = JSON.stringify(editor);
        setContent(editorState);
      };
      current.addEventListener("trix-change", trixChange);
      return () => {
        current.removeEventListener("trix-change", trixChange);
      };
    }
  }, [trixRef, setContent]);

  return (
    <Wrapper>
      <h1>Editor</h1>
      <input type="hidden" id="trix"/>
      {/* 
        // @ts-ignore */}
      <trix-editor
        input="trix"
        placeholder="Start your notes here"
        id="trix-editor"
        ref={trixRef}
      />
    </Wrapper>
  );
}

export default Editor;
