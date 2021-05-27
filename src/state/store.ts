import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import repositoriesSlice from "./reducers/repositoriesSlice";

const store = configureStore({ reducer: { repositories: repositoriesSlice } });

export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
