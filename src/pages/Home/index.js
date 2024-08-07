function Home() {


    
    return <>
    <h1>List Classrooms</h1>
    <div className="container mt-5">
      <h1 className="text-center mb-4">Class Rooms</h1>
      <button
        style={{ border: "none", float: "right", marginBottom: 10 }}
        className="btn btn-primary"
      >
        <a
          style={{ textDecoration: "none", color: "white", float: "right" }}
          href=""
        >
          + Create
        </a>{" "}
      </button>
      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Number</th>
            <th>Action</th>
            {/* Add more columns as needed */}
          </tr>
        </thead>
        <tbody>
          <tr >
            <td  />
            <td />
            <td  />
            <td>
              <a
                
                className="btn btn-primary btn-sm"
              >
                Edit
              </a>
              <a
                
                className="btn btn-danger btn-sm"
              >
                Delete
              </a>
            </td>
            {/* Add more data as needed */}
          </tr>
        </tbody>
      </table>
    </div>
  </>
  ;
}

export default Home;
