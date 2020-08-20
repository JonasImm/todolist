import { useState, useEffect } from "react";
import { getTodos } from "../api/todos";

function useAsync(asyncFunction) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(false);
        setData(null);
        const todos = await getTodos();
        setData(todos);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [asyncFunction]);

  return { data, loading, error };
}

export default useAsync;
