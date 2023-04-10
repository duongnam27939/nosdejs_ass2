import { useState } from 'react'
import { Route, Routes } from "react-router-dom"
import User from './components/layout/use'
import HomePages from './pages/homePages'
import About from './components/about'
import Signin from './components/signin'
import Signup from './components/signup'
import AdminLayout from './components/layout/admin'
import Administrator from './pages/Administrator'
import AddProducts from './pages/add'
import Updatable from './pages/updata'
import AdminCategory from './pages/category/admin'
import AddCategory from './pages/category/add'
import UpdataCategory from './pages/category/updata'

function App() {


  return (
    <Routes>
      <Route path="/" element={<User />}>
        <Route index element={<HomePages />} />
        <Route path="About/:id" element={<About/>} />
      </Route>
      <Route path="/signin" element={<Signin/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path='/admin'element={<AdminLayout/>}> 
        <Route index element={<Administrator/>} />
      </Route>
      <Route path="/add" element={<AddProducts/>} />
      <Route path='/updata/:id' element={<Updatable/>} />
      <Route path='/admincategory' element={<AdminCategory/>} />
      <Route path='/addcategory' element={<AddCategory/>} />
      <Route path='/updatacategory/:id' element={<UpdataCategory/>} />
    </Routes>
  )
}

export default App
