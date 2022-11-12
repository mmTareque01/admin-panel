import React, { useContext, useEffect, useState } from "react";
import { Box, Grid, Paper, Typography, useMediaQuery } from "@mui/material";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { styled } from "@mui/material/styles";

import MessageList from "./MessageList";
//import { MessageContainer } from "./MessageView";

const ChatPage = () => {
  const matchesSm = useMediaQuery("(max-width:900px)");
  const [chatUser, setChatUser] = useState({});
  const [chatUserCode, setChatUserCode] = useState("");

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={3.5}>
          <Paper component={Box} height="85vh" overflow="hidden">
            <Typography pt={2} pl={2} fontWeight="bold">
              Messages
            </Typography>

            <MessageContainer sx={{ overflow: "scroll", height: "100%" }}>
              <MessageList chatUser={chatUser} chatUserCode={chatUserCode} />
            </MessageContainer>
          </Paper>
        </Grid>
        <Grid item xs={7}>
          <Paper component={Box} height="85vh" overflow="hidden">
            <Typography pt={2} pl={2} fontWeight="bold">
              Messages
            </Typography>

            <MessageContainer sx={{ overflow: "scroll", height: "100%" }}>
              <MessageList chatUser={chatUser} chatUserCode={chatUserCode} />
            </MessageContainer>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

const MessageContainer = styled(Box)({
  "&::-webkit-scrollbar": {
    width: 5,
  },
  "&::-webkit-scrollbar-track": {
    boxShadow: `inset 0 0 6px rgba(0, 0, 0, 0.3)`,
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "lightgrey",
    outline: `1px solid slategrey`,
  },
});

export default ChatPage;
