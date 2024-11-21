import { useEffect, useState } from "react";
import axios from "axios";
import { FetchState } from "../interfaces/IFetchState";

export function useFetch<T>(url: string) {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setState({
          data: response.data,
          isLoading: false,
          error: null,
        });
      })
      .catch((error) => {
        setState({
          data: null,
          isLoading: false,
          error: error.message,
        });
      });
  }, [url]);

  return state;
}
