import React, { useEffect, useState } from 'react';

const UsersLoaderH = () => {
  const [users, setUsers] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setIsError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const loadUsers = () => {
    setIsFetching(true);
    fetch(`https://randomuser.me/api/?results=5&seed=pe2022${currentPage}`)
      .then((response) => response.json())
      .then((data) => setUsers((users) => data.results))
      .catch((e) => setIsError(e))
      .finally(() => setIsFetching(false));
  };
  useEffect(() => {
    loadUsers();
    // if (currentPage !== currentPage) {
    //   this.loadUsers();
    // }
  }, [currentPage]);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const previousPage = () => {
    setCurrentPage(currentPage > 1 ? currentPage - 1 : currentPage);
  };

  return (
    <>
      <button onClick={previousPage}>{'<'}</button>
      <button onClick={nextPage}>{'>'}</button>
      {error && <div>Error!!!</div>}
      {isFetching && <div>Loading, please wait!</div>}
      {!error && !isFetching && (
        <ul>
          {users.map((u) => (
            <li key={u.id}>{JSON.stringify(u)}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default UsersLoaderH;
