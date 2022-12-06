

export default function NoteSideBar() {

  return (
    <>
      <div className="w-2/6 border-r-2 border-r-gray-200 border-b-2 h-90v">
        <div className="flex justify-between p-4">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-2xl lg:text-3xl m-0">Notes</h1>

          <button className="text-teal-600 font-bold">Add</button>
        </div>
        <div className="app-sidebar-notes">
          <div className="p-4 cursor-pointer hover:bg-gray-200 focus:bg-teal-300">
            <div className="flex justify-between">
              <strong>TITLE</strong>
              <button className="text-orange-700 font-bold">Delete</button>
            </div>
            <p className="font-bold">Note preview</p>

            <small className="font-light block">last modified [date]</small>
          </div>
        </div>

      </div>
    </>
  )
}