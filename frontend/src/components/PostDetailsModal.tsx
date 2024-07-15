import React, { useContext, useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  IconButton,
  Modal,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { PostContext } from "../context/PostContext";
import axios from "axios";

interface PostDetailsModalProps {
  postId: number;
  onClose: () => void;
}

const PostDetailsModal: React.FC<PostDetailsModalProps> = ({
  postId,
  onClose,
}) => {
  const { posts, addComment } = useContext(PostContext);
  const post = posts.find((post) => post.id === postId);
  const [comment, setComment] = useState("");

  useEffect(() => {
    const fetchComments = async () => {
      if (post) {
        const response = await axios.get(`/api/comments?postId=${post.id}`);
        post.comments = response.data;
      }
    };
    fetchComments();
  }, [post]);

  if (!post) return null;

  const handleAddComment = () => {
    addComment(postId, comment);
    setComment("");
  };

  return (
    <Modal open={true} onClose={onClose}>
      <Box sx={{ ...modalStyle, width: 400 }}>
        <IconButton onClick={onClose} sx={{ float: "right" }}>
          <CloseIcon />
        </IconButton>
        <Card>
          <CardContent>
            <Typography variant="h5" component="div" sx={{ color: post.color }}>
              {post.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {post.description}
            </Typography>
            <Box>
              {post.comments.map((comment, index) => (
                <Typography key={index} variant="body2" color="text.secondary">
                  {comment}
                </Typography>
              ))}
            </Box>
            <TextField
              fullWidth
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Add a comment"
              variant="outlined"
              size="small"
            />
            <Button
              onClick={handleAddComment}
              variant="contained"
              sx={{ mt: 1 }}
            >
              Comment
            </Button>
          </CardContent>
        </Card>
      </Box>
    </Modal>
  );
};

const modalStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default PostDetailsModal;
