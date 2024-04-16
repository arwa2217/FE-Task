import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from "../../pages/login/Login"
import MainLayout from '../../components/mainLayout/MainLayout'
import UserList from "../../pages/userList/UserList"
import BookmarkedUserList from "../../pages/bookmarkedUserList/BookmarkedUserList"
const RootRoutes = () => {
  return (
    <>
       <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route
        path="/*"
        element={
            <MainLayout>
              <Routes>
                <Route
                  path="user-list"
                  element={<UserList />}
                ></Route>
                <Route
                  path="bookmarked-user"
                  element={<BookmarkedUserList />}
                ></Route>
              </Routes>
            </MainLayout>
          
        }
      ></Route>
    </Routes>
    </>
  )
}

export default RootRoutes
