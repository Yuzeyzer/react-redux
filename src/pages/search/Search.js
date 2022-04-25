import React from 'react'
import { useLocation } from 'react-router-dom'
import RecipeList from '../../components/RecipeList/RecipeList';
import { useFetch } from '../../hooks/useFetch';
import './style.css'

const Search = () => {
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get('q');

  const url = `http://localhost:3001/recipes?q=${query}`;

  const { data, isPending, error } = useFetch(url);

  return (
    <div>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  )
}

export default Search