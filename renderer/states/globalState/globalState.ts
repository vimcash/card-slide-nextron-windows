import { createSlice } from "@reduxjs/toolkit"
import { AppState } from "../../data/store/types"
import actions from "./actions"

const pjson = require('../../../package.json');

const initialState = {
  currPage: 'home',
  version: pjson.version
}

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: actions
})

export const selectCurrPage = (state: AppState) => state.global.currPage
export const selectVersion = (state: AppState) => state.global.version

export const { setCurrPage } = globalSlice.actions

export default globalSlice.reducer