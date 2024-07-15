import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import PostDetailsModal from "../components/PostDetailsModal";

const DetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const postId = parseInt(id, 10);

  return <PostDetailsModal postId={postId} onClose={() => navigate("/")} />;
};

export default DetailsPage;
