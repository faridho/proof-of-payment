import { createSlice } from "@reduxjs/toolkit"
import { FilesEntitas, ActionEntitas } from "../entitas/index"


const options = {
    name: "proof",
    initialState: Array<FilesEntitas>,
    reducers: {
        addProof(state: Array<FilesEntitas>, action: ActionEntitas) {
            return [...state, action.payload]
        },
        removeProof(state: Array<FilesEntitas>, action: ActionEntitas) {
            return state.filter((item: FilesEntitas) => item.uuid !== action.payload.uuid)
        }
    }
}

export const proofSlice = createSlice(options)
export const selectProof = (state: any) => state.proof
export const { addProof, removeProof } = proofSlice.actions
export default proofSlice.reducer