import { Component } from 'react';

class UsersLoader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      isFetching: false,
      error: null,
      currentPage: 1,
    };
  }

  loadUsers = () => {
    const { currentPage } = this.state;
    this.setState({ isFetching: true });
    fetch(`https://randomuser.me/api/?results=5&seed=pe2022${currentPage}`)
      .then((response) => response.json())
      .then((data) => this.setState({ users: data.results }))
      .catch((e) => this.setState({ error: e }))
      .finally(() => this.setState({ isFetching: false }));
  };

  componentDidMount() {
    this.loadUsers();
  }

  componentDidUpdate(prevProps, prevState) {
    const { currentPage } = this.state;
    if (currentPage !== prevState.currentPage) {
      this.loadUsers();
    }
  }

  nextPage = () => {
    const { currentPage } = this.state;
    this.setState({
      currentPage: currentPage + 1,
    });
  };

  previousPage = () => {
    const { currentPage } = this.state;
    this.setState({
      currentPage: currentPage > 1 ? currentPage - 1 : currentPage,
    });
  };

  render() {
    const { users, isFetching, error } = this.state;

    return (
      <>
        <button onClick={this.previousPage}>{'<'}</button>
        <button onClick={this.nextPage}>{'>'}</button>
        {error && <div>Error!!!</div>}
        {isFetching && <div>Loading, pleade wait!</div>}
        {!error && !isFetching && (
          <ul>
            {users.map((u) => (
              <li key={u.id}>{JSON.stringify(u)}</li>
            ))}
          </ul>
        )}
      </>
    );
  }
}

export default UsersLoader;
