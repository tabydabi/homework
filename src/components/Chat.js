import { Button, Container, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Context } from "..";
import { Grid } from "@mui/material";
import firebase from 'firebase/compat/app';
import { useCollectionData } from "react-firebase-hooks/firestore";
import Loader from "./Loader";

const Chat = () => {
  const { auth } = useContext(Context);
  const [user, firestore] = useAuthState(auth);
  const [value, setValue] = useState("");
  const [message, loading] = useCollectionData(ы)

  const sendMessage = async () => {
      console.log(value);
  }

  if(loading){
      return <Loader/>
  }

  return (
    <Container>
      <Grid
        container
        justifyItems={"center"}
        style={{ height: window.innerHeight - 50, marginTop: 20 }}
      >
        <div
          style={{
            width: "80%",
            height: "70vh",
            border: "1px solid gray",
            overflowY: "auto",
          }}
        ></div>
        <Grid
          container
          direction={"column"}
          alignItems={"flex-end"}
          style={{ width: "80%" }}
        >
          <TextField fullWidth 
                     maxRows={2} 
                     variant={"outlined"}
                     value ={value}
                     onChange={e => setValue(e.target.value)}
                     />

         
          <Button onClick={sendMessage} variant={"outlined"}>Send</Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Chat;
