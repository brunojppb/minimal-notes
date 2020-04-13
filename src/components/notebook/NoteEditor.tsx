import React from 'react';
import Editor from "./Editor";

export default function NoteEditor() {

  return(
    <div className="pt-4 px-2 relative flex flex-col">
      <input placeholder="Give it a title" className="px-2 py-1 text-black text-black text-2xl font-bold focus:outline-none focus:shadow-outline rounded w-full"/>
      <Editor/>
    </div>
  );

}