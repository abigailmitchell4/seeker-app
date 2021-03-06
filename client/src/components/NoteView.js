import React, { useState } from 'react'

const NoteView = () => {
  const [note, setNote] = useState({})
  // render all notes

  const renderNote = () => {
    return (
      notes.map((note) => (
        <>
          {editForm ?
            <form>
              <textarea>
                {note.body}
              </textarea>
              <button type='submit'>Save</button>
            </form>
            :
            <div>
              <p>
                {note.body}
              </p>
            </div>
          }

          <button onClick={() => handleRemove(note.id)}>
            Delete
          </button>
          <button onClick={() => toggleEditForm()}>
            Edit
          </button>
          <br />
        </>
      ))
    )
  }

  return (
    { renderNote() }
  )
}

export default NoteView