import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const useAuthorData = () => {
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadAuthorsData = async () => {
      try {
        setLoading(true);
        const res = await fetch("/author_info.json");
        if (!res.ok) {
          throw new Error("Fail to Authors data fetch!");
        }
        const data = await res.json();
        const authorsData = data.authors;
        setAuthors(authorsData);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    loadAuthorsData();
  }, []);

  return { authors, loading };
};

useAuthorData.propTypes = {};

export default useAuthorData;

