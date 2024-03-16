import { useSearchParams } from "react-router-dom";

export const useSetSearchParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const updateSearchParams = ({ key, value }) => {
    value ? searchParams.set(key, value) : searchParams.delete(key);
    setSearchParams(searchParams);
  };

  return { updateSearchParams, searchParams, setSearchParams };
};
