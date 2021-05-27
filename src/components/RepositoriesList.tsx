import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../state/store";
import { searchR } from "../state/action-creators/index";

const RepositoriesList: React.FC = () => {
	const [term, setTerm] = useState("");
	const { data, error, loading } = useAppSelector(
		(state) => state.repositories
	);
	const dispatch = useAppDispatch();
	const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		dispatch(searchR(term));
	};
	return (
		<div>
			<form onSubmit={onSubmit}>
				<input value={term} onChange={(e) => setTerm(e.target.value)} />
				<button>Search</button>
			</form>
			{error && <h3>{error}</h3>}
			{loading && <h3>Loading...</h3>}
			{!error && !loading && data.map((name) => <div key={name}>{name}</div>)}
		</div>
	);
};
export default RepositoriesList;
