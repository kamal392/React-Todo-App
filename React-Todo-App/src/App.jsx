function App() {
  return (
    <center className="todo-container">
      <h1>To Do App </h1>
      {/* add bootstrap grid component */}
      {/* row 1 starts */}
      <div class="container text-center">
        <div class="row">
          <div class="col-6">
            <input type="text" placeholder="Enter Todo here" />
          </div>
          <div class="col-4">
            <input type="date" />
          </div>
          <div class="col-2">
            <button type="button" class="btn btn-success">
              Add
            </button>
          </div>
        </div>
        {/* row 1 ends */}
        {/* row 2 starts */}
        <div class="row">
          <div class="col-6">By milk</div>
          <div class="col-4">10/15/2024</div>
          <div class="col-2">
            <button type="button" class="btn btn-danger">
              Delete
            </button>
          </div>
          {/* row 2 ends  */}
        </div>
        {/* row 3 starts */}
        <div class="row">
          <div class="col-6">By soda</div>
          <div class="col-4">10/15/2024</div>
          <div class="col-2">
            <button type="button" class="btn btn-danger">
              Delete
            </button>
          </div>
          {/* row 3 ends  */}
        </div>
      </div>
    </center>
  );
}
export default App;
