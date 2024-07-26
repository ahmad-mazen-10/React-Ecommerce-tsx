import { createSlice } from "@reduxjs/toolkit";
import actGetProductsByCatPrefix from "./act/actGetProductsByCatPrefix";
import { TLoading } from "@/types/shared";
import { TProduct } from "@/types/product";

interface ICategoriesState {
  records: TProduct[];
  loading: TLoading;
  error: string | null;
}
// type TCategoriesState{
//     records: { id: number, title: string, prefix: string, img: string }[];
//     loading: 'idle' | 'pending' | 'succeeded' | 'failed';
//     error: string | null;
// }

const initialState: ICategoriesState = {
  records: [],
    loading: 'idle',
    error: null,
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
    productCleanUp: (state) => { state.records = []; }
  },
    
    extraReducers: (builder) => {
        builder.addCase(actGetProductsByCatPrefix.pending, (state) => {
            state.loading = 'pending';
            state.error = null;
        });
        builder.addCase(actGetProductsByCatPrefix.fulfilled, (state,action) => {
            state.loading = "succeeded";
            state.records = action.payload;
        });
        builder.addCase(actGetProductsByCatPrefix.rejected, (state, action) => {
          state.loading = "failed";

          //gard
          if (action.payload && typeof action.payload === "string") {
            state.error = action.payload;
          }

          //casting
          // state.error = action.payload as string;
        });
    },

})

export const { productCleanUp } = productsSlice.actions;
export default productsSlice.reducer;
export { actGetProductsByCatPrefix };
