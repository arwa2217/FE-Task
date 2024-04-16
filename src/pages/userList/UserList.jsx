import React, { useEffect, useState } from 'react'
import styles from "./userList.module.scss"
import Loader from "../../components/loader/Loader"
import Search from '../../components/search/Search'
import UserCard from '../../components/user-card/UserCard'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers } from '../../redux/slices/userList/UserListSlice'
const UserList = () => {
  const dispatch = useDispatch();
  const {isLoading, userList} = useSelector((state) => state.userDetails)
  console.log("userList??>>",userList)
   const [searchResults, setSearchResults] = useState([]);
  console.log(searchResults)
  
  useEffect(() => {
    dispatch(getAllUsers())
  }, [])
  
  const handleSearch = (item) => {
    setSearchResults(item)
    console.log('Searching for:', item);
  }
  return (
    <>
     {isLoading === true ? <Loader/> : ''}
      <div className={styles.mainContainer}>
        <div className={styles.searchcontainer}>
          <Search placeholder="Search..." onSearch={handleSearch} />
        </div>
                 <UserCard />
          
      </div>
      </>
  )
}

export default UserList
