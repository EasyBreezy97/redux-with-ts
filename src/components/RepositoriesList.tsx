import { FormEvent, useState } from "react";
import { useActions } from "../hooks/useActions";

const RepositoriesList: React.FC = () => {
    const [term, setTerm] = useState("");
    const { searchRepositories } = useActions();

    const onSubmit = (event: FormEvent) => {
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