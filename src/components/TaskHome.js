import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import {
  Button,
  AppBar,
  Typography,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
} from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import "../App.css";
import { db } from "../firebase";
import firebase from "firebase";
import Tasksitem from "./Tasksitem.jsx";
import "firebase/auth";
import { useAuth } from "../contexts/AuthContext";

function TaskHome() {
  const [error, setError] = useState();
  const { currentUser, signout } = useAuth();

  async function handlelogout() {
    setError("");
    try {
      await signout();
    } catch {
      setError("failed to log out");
    }
  }

  const [tasks, setTasks] = useState([]);
  const [taskInput, settaskInput] = useState("");

  useEffect(() => {
    getTask();
  }, []);

  function getTask() {
    db.collection("tasks").onSnapshot(function (querysnapshot) {
      setTasks(
        querysnapshot.docs.map((doc) => ({
          id: doc.id,
          task: doc.data().task,
          inprogress: doc.data().inprogress,
          username: doc.data().username,
        }))
      );
    });
  }
  function addTask(e) {
    e.preventDefault();
    db.collection("tasks").add({
      inprogress: true,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      task: taskInput,
      username: currentUser.uid,
    });
  }
  function clearTextField(e){
    e.preventDefault();
  }

  return (
    <div className="App">
      <AppBar position="static" style={{ "background-color": "#132c33" }}>
        <Toolbar>
          <Typography variant="h6">Task ToDo</Typography>
        </Toolbar>
        <div className="iconbutton">
          <IconButton color="inherit" onClick={handlelogout}>
            <ExitToAppIcon />
            &nbsp;Logout
          </IconButton>
        </div>
      </AppBar>
      <div className="displayname">
        <h1>
          Welcome Back <b>{currentUser.displayName}</b> !
        </h1>{" "}
      </div>

      {error && <p>{error}</p>}
      <h2>Your Tasks</h2>

      <div className="tasks_list">
        <form noValidate autoComplete="off">
          <div className="tasks_textfield">
            <TextField
              id="filled-primary"
              label="Enter Your Task"
              onChange={(e) => {
                settaskInput(e.target.value);
              }}
              variant="filled"
            />
            <button className="tasks_textfield_button" onclick={clearTextField} type="reset">clear</button>
          </div>
          <Button style={{ display: "none" }} type="submit" onClick={addTask}>
            Default
          </Button>
        </form>
        {tasks.map((task, id) => (
          <Tasksitem
            key={id}
            username={task.username}
            task={task.task}
            inprogress={task.inprogress}
            id={task.id}
          />
        ))}
      </div>
    </div>
  );
}

export default TaskHome;
