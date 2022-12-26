import {EditorView} from "prosemirror-view"
import {EditorState} from "prosemirror-state"
import {schema, defaultMarkdownParser, defaultMarkdownSerializer} from "prosemirror-markdown"
import {exampleSetup} from "prosemirror-example-setup"
import {React, useEffect} from "react"

export default function Editor(){
// Code
useEffect(() =>{
  class ProseMirrorView {
    constructor(target, content) {
      this.view = new EditorView(target, {
        state: EditorState.create({
          doc: defaultMarkdownParser.parse(content),
          plugins: exampleSetup({schema})
        })
      })
    }

    get content() {
      return defaultMarkdownSerializer.serialize(this.view.state.doc)
    }
    focus() { this.view.focus() }
    destroy() { this.view.destroy() }
  }

  let place = document.getElementById("editor")
  let view = new ProseMirrorView(place, document.getElementById("content").value)
 function print(){
    console.log(view.content)
  }
})

// HTML
  return (
    <div  className="w-full h-screen ease-in duration-300">
      <div id="editor" className="flex w-full h-full" onChange={print()}/>
      <textarea id="content" display="none" >
        This is a comment written in [Markdown](http://commonmark.org). *You* may know the syntax for inserting a link, but does your whole audience?

        So you can give people the **choice** to use a more familiar, discoverable interface.
      </textarea>
    </div>
  );
}
