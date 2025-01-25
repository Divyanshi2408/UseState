import React from 'react'
import DynamicForm from './DynamicForm/DynamicForm.jsx'
import Counter from './Counter/Counter.jsx'
import ThemeToggler from './ThemeToggler/ThemeToggler.jsx'
import NestedStateList from './NestedStateList/NestedStateList.jsx'
import CascadingDropdowns from './CascadingDropdowns/CascadingDropdowns.jsx'
import Spreadsheet from './Spreadsheet/Spreadsheet.jsx'
import MultiStepForm from './MultiStepForm/MultiStepForm.jsx'
import FileExplorer from './FileExplorer/FileExplorer.jsx'
import DataTable from './DataTable/DataTable.jsx'
import Carousel from './Carousel/Carousel.jsx'
import TaskManager from './TaskManager/TaskManager.jsx'
import MultiLevelForm from './MultiLevelForm/MultiLevelForm.jsx'

const App = () => {
  return (
   <><DynamicForm />
   <Counter/>
   <ThemeToggler/>
   <NestedStateList/>
   <CascadingDropdowns/>
   <Spreadsheet/>
   <MultiStepForm/>
   <FileExplorer/>
   <DataTable/>
   <Carousel/>
   <TaskManager/>
   <MultiLevelForm/>
  </>
  )
}

export default App