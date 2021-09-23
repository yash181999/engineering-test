import React, { createContext, useState, useContext, Dispatch } from "react"

const AppContext = createContext({
  sortBy: "first_name",
  sortType: "asc",
  searchText: "",
  rollStateArr: [{}],
  filterBy: "all",
  setFilterBy: {} as Dispatch<any>,
  setSearchText: {} as Dispatch<any>,
  setSortBy: {} as Dispatch<any>,
  setSortType: {} as Dispatch<any>,
  setRollStateArr: {} as Dispatch<any>,
})

const AppStateProvider: React.FC = ({ children }) => {
  const [sortBy, setSortBy] = useState<string>("first_name")
  const [sortType, setSortType] = useState<string>("asc")
  const [searchText, setSearchText] = useState<any>("")
  const [rollStateArr, setRollStateArr] = useState([{}])
  const [filterBy, setFilterBy] = useState<any>("all")
  return (
    <AppContext.Provider value={{ searchText, setSearchText, sortBy, setSortBy, sortType, setSortType, filterBy, setFilterBy, rollStateArr, setRollStateArr }}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppState = () => {
  const context = useContext(AppContext)
  return context
}

export { AppContext, AppStateProvider }
