import React, {
  createContext,
  useState,
  useEffect,
  ReactNode,
  FC,
} from "react";
import axios from "axios";

interface Post {
  id: number;
  title: string;
  description: string;
  comments: string[];
  color: string;
}

interface PostContextType {
  posts: Post[];
  addPost: (title: string, description: string, color: string) => void;
  addComment: (postId: number, comment: string) => void;
}

export const PostContext = createContext<PostContextType | undefined>(
  undefined
);

export const PostProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get("/posts");
      setPosts(response.data);
    };
    fetchPosts();
  }, []);

  const addPost = async (title: string, description: string, color: string) => {
    const response = await axios.post("/api/posts", {
      title,
      description,
      color,
    });
    setPosts([...posts, response.data]);
  };

  const addComment = async (postId: number, comment: string) => {
    await axios.post("/api/comments", { postId, description: comment });
    const response = await axios.get(`/api/posts/${postId}`);
    setPosts(
      posts.map((post) =>
        post.id === postId
          ? { ...post, comments: response.data.comments }
          : post
      )
    );
  };

  return (
    <PostContext.Provider value={{ posts, addPost, addComment }}>
      {children}
    </PostContext.Provider>
  );
};
