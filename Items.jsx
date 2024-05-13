function Items({ list1, handleonDeleteItem }) {
  // let handleDeleteItem = (index) => {
  //   console.log(`Item deleted at index ${index}`);
  // };

  const itemMap = list1.map((i, index) => {
    return (
      <div className="itemflex" key={index}>
        <input type="checkbox" />
        <p> {i}</p>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => handleonDeleteItem(index)}
        >
          Delete
        </button>
      </div>
    );
  });
  return <div>{itemMap}</div>;
}

export default Items;
