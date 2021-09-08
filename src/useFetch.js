import React, { useState, useEffect } from "react";
import paginate from "./utils";

function useFetch(url) {
  const [loading, setLoading] = useState(true);
  const [profiles, setProfiles] = useState(null);

  const getProfiles = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data) {
        setProfiles(data);
        paginate(data);
      } else {
        setProfiles([]);
      }
      setLoading(false);
    } catch (error) {
      setProfiles([]);
      console.log(error);
    }
  };

  useEffect(() => {
    getProfiles();
  }, [url]);
  return { loading, profiles };
}

export default useFetch;
