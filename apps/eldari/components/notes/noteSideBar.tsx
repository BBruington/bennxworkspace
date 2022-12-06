

export default function NoteSideBar() {

  return (
    <>
      <div className="w-30% h-100vh border-r-gray-200">
        <div className="flex space-between">
          <h1>Notes</h1>

          <button>Add</button>
        </div>
        <div className="app-sidebar-notes">
          <div className="app-sidebar-note">
            <div className="sidebar-note-title">
              <strong>TITLE</strong>
              <button>Delete</button>
            </div>
            <p>Note preview</p>

            <small className="note-meta">last modified [date]</small>
          </div>
        </div>

      </div>
    </>
  )
}