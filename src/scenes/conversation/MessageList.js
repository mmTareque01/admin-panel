import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  Divider,
  ListItemButton,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { AiOutlineSearch } from "react-icons/ai";

function MessageList({ chatUser, chatUserCode }) {
  const navigate = useNavigate();
  const [conversation, setConversation] = React.useState([]);
  const { userStatus, userId } = useParams();
  const { error, setError } = React.useState();
  const [activeUsers, setActiveUsers] = React.useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [fetchActive, setFetchActive] = useState(false);

  return (
    <>
      <TextField
        fullWidth
        size="small"
        sx={{ p: 2 }}
        //  onChange={handleInputChange}
        placeholder="Search Conversations"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton edge="end">
                <AiOutlineSearch />
              </IconButton>
            </InputAdornment>
          ),
        }}
        variant="outlined"
      />
      <Divider />
    </>
  );
}

export default React.memo(MessageList);
