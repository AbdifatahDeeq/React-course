import { useState } from "react";

const Post = () => {
  const [newPost, setNewPost] = useState("");
  const [image, setImage] = useState(null);
  const [posts, setPosts] = useState([]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  const addPost = () => {
    if (newPost.trim() === "" && !image) return;

    const newObj = {
      id: Date.now(),
      text: newPost,
      image: image,
    };

    setPosts([...posts, newObj]);
    setNewPost("");
    setImage(null);
  };

  return (
    <div
      style={{
        textAlign: "center",
        border: "4px solid grey",
        borderRadius: "12px",
        padding: "20px",
        maxWidth: "600px",
        margin: "40px auto",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h1>Post Your Idea 💡</h1>

      <textarea
        onChange={(e) => setNewPost(e.target.value)}
        value={newPost}
        rows="4"
        cols="50"
        placeholder="Share your thoughts..."
        style={{
          padding: "10px",
          fontSize: "16px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          resize: "none",
          width: "80%",
        }}
      />

      <div style={{ marginTop: "10px" }}>
        <input type="file" accept="image/*" onChange={handleImageChange} />
      </div>

      {image && (
        <div style={{ marginTop: "10px" }}>
          <img
            src={image}
            alt="Preview"
            style={{
              width: "150px",
              height: "150px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
        </div>
      )}

      <button
        onClick={addPost}
        style={{
          marginTop: "15px",
          padding: "8px 16px",
          fontSize: "16px",
          borderRadius: "6px",
          border: "none",
          backgroundColor: "#007bff",
          color: "white",
          cursor: "pointer",
        }}
      >
        Add
      </button>

      <h3 style={{ marginTop: "20px" }}>Posts</h3>

      <div style={{ textAlign: "left", width: "80%", margin: "0 auto" }}>
        {posts.length === 0 ? (
          <p style={{ color: "#999" }}>No posts yet. Write something!</p>
        ) : (
          posts.map((p) => (
            <div
              key={p.id}
              style={{
                backgroundColor: "grey",
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "10px",
                marginBottom: "10px",
                color: "white"
              }}
            >
              <p>{p.text}</p>
              {p.image && (
                <img
                  src={p.image}
                  alt="Post"
                  style={{
                    width: "100%",
                    borderRadius: "8px",
                    marginTop: "10px",
                  }}
                />
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Post;
