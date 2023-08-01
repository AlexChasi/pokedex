import { createSlice } from '@reduxjs/toolkit'

const initialState = (() => {
  const userFromStorage = localStorage.getItem('user')
  return userFromStorage || null
})()

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      const username = action.payload
      localStorage.setItem('user', username)
      return username
    },
    removeUser: (state, action) => {
      localStorage.removeItem('user')
      return null
    }
  }
})

export default userSlice.reducer
export const { setUser, removeUser } = userSlice.actions
