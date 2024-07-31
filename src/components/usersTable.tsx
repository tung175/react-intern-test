import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { fetchAllUsers } from "../redux/user/user.slide";
import "./usersTable.scss";
import ReactPaginate, { ReactPaginateProps } from "react-paginate";
// import { fetchAllUser } from "../services/userService";
import { ISearchEvent, IUser } from "../interfaces/users.type";
import _ from "lodash";
import { debounce } from "lodash";

const UsersTable = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.user.isLoading);
  const isError = useAppSelector((state) => state.user.isError);
  const results = useAppSelector((state) => state.user.results);

  // const listUser = results?.results  || [];
  const [listUser, setListUser] = useState<IUser[]>([]);
  // const [totalPages, setTotalPages] = useState<number>(0);

  const [sortBy, setSortBy] = useState("asc");
  const [sortField, setSortField] = useState("id");

  // const getUsers = async (page: number): Promise<void> => {
  //   const res: IListUsers = await fetchAllUser(page);
  //   if (res && res.results) {
  //     // setListUser(res.results);
  //     setTotalPages(res.info.page);
  //   }
  //   console.log("res", res);
  // };

  useEffect(() => {
    if (results) {
      const cloneResults = _.cloneDeep(results?.results);
      // results the list of users from the `results` property and set it to `listUser`
      setListUser(cloneResults);
    }
  }, [results]);

  useEffect(() => {
    // getUsers(totalPages);
    dispatch(fetchAllUsers(1));
  }, [dispatch]);

  const handlePageClick: ReactPaginateProps["onPageChange"] = (event) => {
    // getUsers(+event.selected + 1);
    const page = +event.selected + 1;
    dispatch(fetchAllUsers(page));
  };

  const handleSort = (sortBy: string, sortField: string) => {
    setSortBy(sortBy);
    setSortField(sortField);
    console.log(sortBy);
    console.log(sortField);

    let cloneListUser = _.cloneDeep(listUser);
    cloneListUser = _.orderBy(cloneListUser, [sortField], [sortBy]);
    console.log(2222, cloneListUser.name.username);

    setListUser(cloneListUser);
  };

  const handleSearch = debounce((event: ISearchEvent) => {
    const term = event.target.value;
    if (term) {
      let cloneListUser = _.cloneDeep(listUser);
      cloneListUser = cloneListUser.filter((item: IUser) => {
        console.log(item);

        return item.email.includes(term);
      });
      setListUser(cloneListUser);
    } else {
      fetchAllUsers(1);
    }
  }, 300);

  console.log(11111, listUser);

  return (
    <>
      <div className="table-container">
        <div className="col-12 col-sm-4 my-3">
          <input
            className="form-control"
            placeholder="Search user by email..."
            // value={keyword}
            onChange={(event) => handleSearch(event)}
          />
        </div>
        <table>
          <thead>
            <tr>
              <th>
                <div className="sort-header">
                  <span>ID</span>
                  <span>
                    <i
                      className="fa-solid fa-arrow-up"
                      onClick={() => handleSort("desc", "id")}
                    ></i>
                    <i
                      className="fa-solid fa-arrow-down"
                      onClick={() => handleSort("asc", "id")}
                    ></i>
                  </span>
                </div>
              </th>
              <th>
                <div className="sort-header">
                  <span>Full Name</span>
                  <span>
                    <i
                      className="fa-solid fa-arrow-up"
                      onClick={() => handleSort("desc", "full_name")}
                    ></i>
                    <i
                      className="fa-solid fa-arrow-down"
                      onClick={() => handleSort("asc", "full_name")}
                    ></i>
                  </span>
                </div>
              </th>
              <th>
                <div className="sort-header">
                  <span>Username</span>
                  <span>
                    <i
                      className="fa-solid fa-arrow-up"
                      onClick={() => handleSort("desc", "username")}
                    ></i>
                    <i
                      className="fa-solid fa-arrow-down"
                      onClick={() => handleSort("asc", "username")}
                    ></i>
                  </span>
                </div>
              </th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {isError === true ? (
              <tr>
                <td className="status" colSpan={4}>
                  Something went wrong
                </td>
              </tr>
            ) : (
              <>
                {" "}
                {isLoading === true ? (
                  <tr>
                    <td className="status" colSpan={4}>
                      Loading ...
                    </td>
                  </tr>
                ) : (
                  <>
                    {listUser &&
                      listUser.length > 0 &&
                      listUser?.map((user: IUser, index: any) => {
                        return (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{`${user.name.title} ${user.name.first} ${user.name.last}`}</td>
                            <td>{user.login.username}</td>
                            <td>
                              <img
                                src={user.picture.thumbnail}
                                alt="User Thumbnail"
                              ></img>
                            </td>
                          </tr>
                        );
                      })}
                  </>
                )}{" "}
              </>
            )}
          </tbody>
        </table>
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={10}
          previousLabel="< previous"
          // renderOnZeroPageCount={null}
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          disabledClassName="disabled"
          // forcePage={page}
        />
      </div>
    </>
  );
};

export default UsersTable;
