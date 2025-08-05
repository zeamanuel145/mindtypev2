import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const SinglePost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`/api/posts/${id}`);
        console.log("Post received:", res.data);
        setPost(res.data);
      } catch (err) {
        console.error("Failed to load post:", err);
        setError("Failed to load post");
      }
    };

    fetchPost();
  }, [id]);

  if (error) return <p className="text-red-500 text-center mt-8">{error}</p>;
  if (!post) return <p className="text-gray-500 text-center mt-8">Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 bg-white shadow-md rounded-lg">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">{post.title}</h2>
      <p className="text-gray-700 mb-6 whitespace-pre-line">{post.content}</p>

      <div className="mb-6 text-sm text-gray-500">
        <span>By: {post.author?.username || "Unknown Author"}</span> •{' '}
        <span>{new Date(post.createdAt).toLocaleString()}</span> •{' '}
        <span>{post.views} views</span>
      </div>

      <h3 className="text-xl font-semibold mb-2 text-gray-800">💬 Comments</h3>

      {post.comments.length === 0 ? (
        <p className="text-gray-500">No comments yet.</p>
      ) : (
        <ul className="space-y-4">
          {post.comments.map((comment) => (
            <li key={comment._id} className="bg-gray-100 p-3 rounded-md shadow-sm">
              <p className="text-sm text-gray-600">
                <strong>{comment.author?.username || "Anonymous"}:</strong>
              </p>
              <p className="text-gray-800">{comment.content}</p>
              <span className="text-xs text-gray-500">
                {new Date(comment.createdAt).toLocaleString()}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SinglePost;
