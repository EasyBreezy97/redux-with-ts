import { FormEvent, useState } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const RepositoriesList: React.FC = () => {
    const [term, setTerm] = useState("");
    const { searchRepositories } = useActions();

    const { data, error, loading } = useTypedSelector(
        (state) => state.repositories,
    );

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        searchRepositories(term);
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    value={term}
                    type="text"
                    onChange={(e) => setTerm(e.target.value)}
                />
                <button>Search</button>
            </form>
        </div>
    );
};

export default RepositoriesList;
