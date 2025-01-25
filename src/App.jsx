import React from 'react'
import DynamicForm from './DynamicForm/DynamicForm.jsx'
import Counter from './Counter/Counter.jsx'
import ThemeToggler from './ThemeToggler/ThemeToggler.jsx'
import NestedStateList from './NestedStateList/NestedStateList.jsx'
import CascadingDropdowns from './CascadingDropdowns/CascadingDropdowns.jsx'
import Spreadsheet from './Spreadsheet/Spreadsheet.jsx'
import MultiStepForm from './MultiStepForm/MultiStepForm.jsx'
import FileExplorer from './FileExplorer/FileExplorer.jsx'

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
  </>
  )
}

export default App