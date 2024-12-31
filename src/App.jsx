import React from 'react'
import DynamicForm from './DynamicForm/DynamicForm.jsx'
import Counter from './Counter/Counter.jsx'
import ThemeToggler from './ThemeToggler/ThemeToggler.jsx'
import NestedStateList from './NestedStateList/NestedStateList.jsx'

const App = () => {
  return (
   <><DynamicForm />
   <Counter/>
   <ThemeToggler/>
   <NestedStateList/>
  </>
  )
}

export default App