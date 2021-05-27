import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RepositoriesState {
	loading: boolean;
	error: string | null;
	data: string[];
}
const initialState: RepositoriesState = {
	loading: false,
	error: null,
	data: [],
};

const repositoriesSlice = createSlice({
	name: "repositories",
	initialState,
	reducers: {
		searchRepositories: (state) => {
			state.loading = true;
			state.error = null;
			state.data = [];
		},
		searchRepositoriesSuccess: (state, action: PayloadAction<string[]>) => {
			state.loading = false;
			state.error = null;
			state.data = action.payload;
		},
		searchRepositoriesError: (state, action: PayloadAction<string>) => {
			state.loading = false;
			state.error = action.payload;
			state.data = [];
		},
	},
});

export default repositoriesSlice.reducer;
export const {
	searchRepositories,
	searchRepositoriesSuccess,
	searchRepositoriesError,
} = repositoriesSlice.actions;
