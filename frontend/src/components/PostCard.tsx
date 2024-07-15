import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface PostCardProps {
  id: number;
  title: string;
  description: string;
  comments: string[];
  color: string;
}

const PostCard: React.FC<PostCardProps> = ({
  id,
  title,
  description,
  comments,
  color,
}) => {
  const navigate = useNavigate();

  return (
    <Card
      sx={{ margin: "10px", borderRadius: "10px" }}
      onClick={() => navigate(`/details/${id}`)}
    >
      <CardContent>
        <Typography variant="h5" component="div" sx={{ color }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Box>
          {comments.map((comment, index) => (
            <Typography key={index} variant="body2" color="text.secondary">
              {comment}
            </Typography>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default PostCard;
