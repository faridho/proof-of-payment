import { configureStore } from "@reduxjs/toolkit"
import proofReducer from "./slices"

export default configureStore({
    reducer: {
        proof: proofReducer
    }
})