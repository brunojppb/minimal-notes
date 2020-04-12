import React from 'react';
import Editor from "../common/Editor";

export default function NotebookDetailPage() {
  return (
    <div className="flex flex-row h-screen">
      <section className="pt-4 bg-gray-100 relative flex flex-col" style={{width: 337}}>
        <header className="px-2">
          <h3 className="font-bold text-md text-blue-900">
            <i className="cil-book mr-2"/> Motorcycle Adventures
          </h3>
          <span className="block font-light text-xs text-gray-600 mt-4">5 entries</span>
        </header>
        <div className="pt-4 flex-1 flex overflow-hidden">
          <div className="flex-1 overflow-y-scroll">
            {[1, 2, 3, 4, 5, 6, 7].map(i => {
              return (
                <div key={i} className="p-2 border-t rounded hover:bg-gray-200 cursor-pointer">
                  <h2 className="text-sm font-semibold text-gray-800">Driving across Austria</h2>
                  <p className="mt-4 text-gray-600 text-sm">
                    It was a long journey driving through Tyrol and stopping across the whole country...
                  </p>
                  <span className="block mt-4 text-xs text-gray-500">2 hours ago</span>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      <div className="py-4 px-2">
        <Editor/>
      </div>
    </div>
  )
}