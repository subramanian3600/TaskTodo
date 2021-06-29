import React, { useEffect, useState } from "react";
import "../App.css";
import { db } from "../firebase";
import firebase from "firebase";
import Tasksitem from "./Tasksitem.jsx";
import "firebase/auth";
import { useAuth } from "../contexts/AuthContext";

import {
  EmptyTaskList,
  TaskLists,
  SubmitButton,
  TaskForm,
  Navbar,
  Appbg,
  Title,
  Account,
  AccountName,
  ArrowButton,
  TaskDisplayBox,
  SubTitle,
  TaskInput,
  TaskInputBox,
  ClearButton,
} from "./Styles";

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
  function clearTextField(e) {
    e.preventDefault();
  }

  return (
    <Appbg>
      <Navbar>
        <Title>TaskToDo</Title>
        <Account>
          <AccountName>{currentUser.displayName}</AccountName>
          <ArrowButton onClick={handlelogout}>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.92 0.48168L13.92 7.83168L7.35 13.5917L0.81 7.83168L0.81 0.48168L7.35 6.24168L13.92 0.48168Z"
                fill="black"
              />
            </svg>
          </ArrowButton>
        </Account>
      </Navbar>
      <TaskDisplayBox>
        <SubTitle>My Tasks</SubTitle>
        <TaskForm>
          <TaskInputBox>
            <TaskInput
              type="text"
              onChange={(e) => {
                settaskInput(e.target.value);
              }}
            />
            <SubmitButton type="submit" onClick={addTask}></SubmitButton>
            <ClearButton type="reset">
              <svg
                width="30"
                height="30"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 3.33333C10.8333 3.33333 3.33333 10.8333 3.33333 20C3.33333 29.1667 10.8333 36.6667 20 36.6667C29.1667 36.6667 36.6667 29.1667 36.6667 20C36.6667 10.8333 29.1667 3.33333 20 3.33333ZM26.1667 23.8333C26.8333 24.5 26.8333 25.5 26.1667 26.1667C25.5 26.8333 24.5 26.8333 23.8333 26.1667L20 22.3333L16.1667 26.1667C15.5 26.8333 14.5 26.8333 13.8333 26.1667C13.1667 25.5 13.1667 24.5 13.8333 23.8333L17.6667 20L13.8333 16.1667C13.1667 15.5 13.1667 14.5 13.8333 13.8333C14.5 13.1667 15.5 13.1667 16.1667 13.8333L20 17.6667L23.8333 13.8333C24.5 13.1667 25.5 13.1667 26.1667 13.8333C26.8333 14.5 26.8333 15.5 26.1667 16.1667L22.3333 20L26.1667 23.8333Z"
                  fill="#FAFAFA"
                />
              </svg>
            </ClearButton>
          </TaskInputBox>
        </TaskForm>
        {tasks.length > 0 ? (
          <TaskLists>
            {tasks.map((task, id) => (
              <Tasksitem
                key={id}
                username={task.username}
                task={task.task}
                inprogress={task.inprogress}
                id={task.id}
              />
            ))}
          </TaskLists>
        ) : (
          <EmptyTaskList>Nothing</EmptyTaskList>
        )}
      </TaskDisplayBox>
    </Appbg>
  );
}

export default TaskHome;
