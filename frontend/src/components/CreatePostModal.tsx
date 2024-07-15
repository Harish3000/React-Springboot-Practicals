import React, { useContext, useState } from "react";
import {
  Box,
  TextField,
  Button,
  Modal,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { PostContext } from "../context/PostContext";

interface CreatePostModalProps {
  open: boolean;
  onClose: () => void;
}

const CreatePostModal: React.FC<CreatePostModalProps> = ({ open, onClose }) => {
  const { addPost } = useContext(PostContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("blue");

  const handlePublish = () => {
    addPost(title, description, color);
    setTitle("");
    setDescription("");
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{ ...modalStyle, width: 400 }}>
        <TextField
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          variant="outlined"
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          variant="outlined"
          multiline
          rows={4}
          sx={{ mb: 2 }}
        />
        <RadioGroup
          row
          value={color}
          onChange={(e) => setColor(e.target.value)}
        >
          <FormControlLabel value="blue" control={<Radio />} label="Blue" />
          <FormControlLabel value="yellow" control={<Radio />} label="Yellow" />
          <FormControlLabel value="red" control={<Radio />} label="Red" />
        </RadioGroup>
        <Button onClick={handlePublish} variant="contained" fullWidth>
          Publish
        </Button>
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

export default CreatePostModal;
