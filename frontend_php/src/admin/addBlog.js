const AddBlog = () => {
  return (
    <div className="blog-section">
      <h1>Blog</h1>
      <p>Fill out the form to add a new research, news, or event </p>
      <form
        action="/backend_php/functions/fetchFormAddBlogEntry.php"
        method="POST"
      >
        <input type="date" name="date" placeholder="When" />
        <input
          type="text"
          name="category"
          placeholder="Category (research, news, or event)"
        />
        <input type="text" name="title" placeholder="Title" />
        <input type="text" name="author" placeholder="author" />
        <textarea type="text" name="text" placeholder="Text" rows="10">
          {" "}
        </textarea>
        <input type="file" name="image" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddBlog;
