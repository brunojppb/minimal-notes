import React from 'react';
import NoteEditor from "./NoteEditor";
import styled from "styled-components";

const NotebookNoteWrapper = styled('div')`
  &:not(:first-child) {
    border-top-width: 1px;
  }
`;

const NotebookNotesSection = styled('section')`
  width: 320px;
`;

export default function NotebookDetailPage() {
  return (
    <div className="flex flex-row h-screen">
      <NotebookNotesSection className="pt-4 bg-gray-100 relative flex flex-col">
        <header className="px-2 pb-4 border-b">
          <h3 className="font-bold text-md text-black">
            <i className="cil-book mr-2"/> Motorcycle Adventures
          </h3>
          <span className="block font-light text-xs text-gray-600 mt-4">5 entries</span>
        </header>
        <div className="flex-1 flex overflow-hidden">
          <div className="flex-1 overflow-y-scroll">
            {[1, 2, 3, 4, 5, 6, 7].map(i => {
              return (
                <NotebookNoteWrapper key={i} className="p-2 rounded hover:bg-gray-200 cursor-pointer">
                  <h2 className="text-sm font-semibold text-gray-800">Driving across Austria</h2>
                  <p className="mt-4 text-gray-600 text-sm">
                    It was a long journey driving through Tyrol and stopping...
                  </p>
                  <span className="block mt-4 text-xs text-gray-500">2 hours ago</span>
                </NotebookNoteWrapper>
              )
            })}
          </div>
        </div>
      </NotebookNotesSection>
      <NoteEditor/>
    </div>
  )
}