function TodoItem2() {
  //  declare variables
  let todoName = "Buy javascript course";
  let todoDate = "10/17/2024";

  return (
    // add bootstrap grid
    <div class="container">
      {/* kg-row class to align rows  */}
      <div class="row kg-row">
        <div class="col-6">{todoName}</div>
        <div class="col-4">{todoDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger kg-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem2;
