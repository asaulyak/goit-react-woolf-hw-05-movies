import { useSearchParams } from 'react-router-dom';

export const SearchBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = async event => {
    event.preventDefault();

    const query = event.target.elements.query.value;

    setSearchParams({ query });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="query"
        defaultValue={searchParams.get('query')}
      />
      <button type="submit">search</button>
    </form>
  );
};
