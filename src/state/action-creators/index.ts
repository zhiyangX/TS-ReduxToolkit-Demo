import {
	searchRepositories,
	searchRepositoriesSuccess,
	searchRepositoriesError,
} from "../reducers/repositoriesSlice";
import { AppDispatch } from "../store";
import axios from "axios";

export const searchR = (term: string) => {
	return async (dispatch: AppDispatch) => {
		dispatch(searchRepositories());
		try {
			const { data } = await axios.get(
				"https://registry.npmjs.org/-/v1/search",
				{
					params: {
						text: term,
					},
				}
			);
			const names = data.objects.map((result: any) => {
				return result.package.name;
			});
			dispatch(searchRepositoriesSuccess(names));
		} catch (err) {
			dispatch(searchRepositoriesError(err.message));
		}
	};
};
