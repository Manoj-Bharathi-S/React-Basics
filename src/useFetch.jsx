import { useEffect, useState } from "react";

// Implementing a custom Hook
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw Error("Could not fetch the data");
          }
          console.log(response);
          return response.json();
        })
        .then((data) => {
          setData(data);
        })
        .catch((error) => {
          console.log(error);
          if (error.message.includes("Failed")) {
            setError("Server Can't be reached at the moment");
          } else {
            setError(error.message);
          }
        });
    }, 2000);
  }, []);
  return [data,error]
};

export default useFetch;
