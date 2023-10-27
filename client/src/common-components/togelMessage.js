export const TogelErrorMessage = (message) => {
  return (
    <div>
      <div
        class="alert alert-warning alert-dismissible fade show"
        style={{ width: "40%", right: 0, position: "absolute" }}
      >
        <strong>Warning!</strong> There was a problem with your network
        connection.
        <button type="button" class="btn-close"></button>
      </div>
    </div>
  );
};
