import {
  Button,
  ListItem,
  Avatar,
  ListItemText,
  Grid,
  List,
  ListItemSecondaryAction,
  ListItemAvatar,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import FolderIcon from "@material-ui/icons/Folder";
import IconButton from "@material-ui/core/IconButton";
import React from "react";
import { db } from "../firebase";
import { useAuth } from "../contexts/AuthContext";
import "../App.css";

function Tasksitem({ task, inprogress, id, username }) {
  const { currentUser } = useAuth();
  function toggleinprogress() {
    db.collection("tasks").doc(id).update({
      inprogress: !inprogress,
    });
  }
  function deleteTask() {
    db.collection("tasks").doc(id).delete();
  }
  return (
    <>
      {currentUser.uid === username && (
        <div style={{ display: "flex" }}>
          <Grid item xs={12} md={15}>
            <div>
              <List>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar style={{ "background-color": "blue" }}>
                      <Button
                        onClick={toggleinprogress}
                        style={{
                          width: "30px",
                          height: "30px",
                          padding: "10px",
                          'color':'white',
                        }}
                      >
                        {inprogress ? "✓" : "x"}
                      </Button>
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={task}
                    secondary={inprogress ? "in progress" : "completed"}
                  />
                  <ListItemSecondaryAction>
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      color="secondary"
                      onClick={deleteTask}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              </List>
            </div>
          </Grid>
        </div>
      )}
    </>
  );
}
export default Tasksitem;
