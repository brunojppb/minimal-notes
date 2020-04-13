import React, {useEffect, createRef} from "react";
import styled from "styled-components";
import "trix";
import "trix/dist/trix.css";
import useLocalStorage from "../../hooks/useLocalStorage";

const Wrapper = styled("div")`

  trix-toolbar {
    width: 100%;
    max-width: 700px;
    margin-top: 1rem;
    .trix-button-group {
      border: none;
      .trix-button {
        border: none;
         &.trix-active {
          background: #e2e8f0;
         }
      }
      .trix-button--icon::before {
        opacity: 1;
      }
      .trix-button--icon:disabled::before {
        opacity: 0.125;
      }
    }
  }

  trix-editor {
    width: 100%;
    height: 100%;
    display: block;
    border: none;
    overflow-y: scroll;
    flex: 1 1;
    h1 {
      font-size: 2rem;
      font-weight: bold;
    }
  }

`;

function Editor() {
  const trixRef = createRef<HTMLInputElement>();
  const [content, setContent] = useLocalStorage("content");

  /** Load initial data from local store. only triggered on the first render */
  useEffect(() => {
    const current: any | null = trixRef.current;
    if (current && content) {
      const {editor} = current;
      let finalContent = content;
      if (typeof content === "string") {
        finalContent = JSON.parse(content);
      }
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
    <Wrapper className="overflow-hidden relative flex flex-1">
      <div className="flex-1 flex flex-col">
        {/*
        // @ts-ignore */}
        <trix-toolbar id="trix-toolbar"/>
        <div className="flex-1 overflow-y-scroll relative">
          <input type="hidden" id="trix"/>
          {/*
        // @ts-ignore */}
          <trix-editor
            input="trix"
            placeholder="Start your notes here"
            id="trix-editor"
            toolbar="trix-toolbar"
            ref={trixRef}
          />
        </div>
      </div>
    </Wrapper>
  );
}

export default Editor;