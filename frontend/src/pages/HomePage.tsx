import React, { useContext, useState } from "react";
import { Container, Button, Box, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import PostCard from "../components/PostCard";
import CreatePostModal from "../components/CreatePostModal";
import { PostContext } from "../context/PostContext";

const HomePage: React.FC = () => {
  const { posts } = useContext(PostContext);
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography variant="h4">Home Page</Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleModalOpen}
        >
          Create Post
        </Button>
      </Box>
      {posts.map((post) => (
        <PostCard
          key={post.id}
          id={post.id}
          title={post.title}
          description={post.description}
          comments={post.comments}
          color={post.color}
        />
      ))}
      <CreatePostModal open={modalOpen} onClose={handleModalClose} />
    </Container>
  );
};

export default HomePage;
