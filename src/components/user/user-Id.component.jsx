import { useState } from "react";
import { useParams } from "react-router-dom";

import UseFetch from "./useFetch";
import { UserIdConatiner, ActionButton } from "./user-id.styles";

const UserId = () => {
  const { userId } = useParams();
  const [page, setPage] = useState(1);
  const { loading, error, data } = UseFetch(
    `https://randomuser.me/api/?page=${page}&results=10&seed=abc`
  );

  console.log({ loading, error, data });

  const pages = 10;

  if (loading) return <h1>Loading...</h1>;

  if (!loading && error) return <h1>Error...</h1>;

  return (
    <UserIdConatiner>
      <h1>{userId.toLocaleUpperCase()}</h1>
      {data?.results.map((each, index) => {
        const name = `${each.name.title} ${each.name.first} ${each.name.last}`;
        return (
          <li key={name.toLowerCase().replaceAll(" ", "")}>{`${
            index + 1
          }.${name}`}</li>
        );
      })}
      {
        <ActionButton
          disabled={page <= 1}
          onClick={() => setPage((prev) => prev - 1)}
        >
          prev
        </ActionButton>
      }
      <p className="pagination">
        Pages: {page} of {pages}
      </p>
      {
        <ActionButton
          disabled={page >= pages}
          aria-disabled={page >= pages}
          onClick={() => setPage((prev) => prev + 1)}
        >
          next
        </ActionButton>
      }
      {Array.from({ length: pages }, (index) => index + 1).map((each) => (
        <button key={each} onClick={() => setPage(each)}>{each}</button>
      ))}
    </UserIdConatiner>
  );
};

export default UserId;
