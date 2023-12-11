

function CategoryForm({ handleSubmit, value, setValue }) {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className="bg-slate-100 p-2 rounded font-semibold text-black outline-none ml-10 mt-2"
          type="text"
          placeholder="Enter New Category..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="bg-blue-300 hover:bg-blue-400 hover:text-white rounded w-20 h-10 font-semibold ml-2" type="submit">Add</button>
      </form>
    </>
  );
}

export default CategoryForm;
