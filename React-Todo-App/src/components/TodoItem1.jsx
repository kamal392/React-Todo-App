function TodoItem1() {
  //  declare variables
  let todoName = "Buy Html course";
  let todoDate = "10/16/2024";

  return (
    // add bootstrap grid
    <div class="container">
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
export default TodoItem1;
