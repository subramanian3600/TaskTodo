import styled from "styled-components";

export const Navbar = styled.div`
  margin: 0px;
  width: 100%;
  height: 80px;
  background-color: #fafafa;
`;

export const Appbg = styled.div`
  margin: 0px;
  width: 100%;
  height: 100vh;
  background-color: #252525;
`;

export const Title = styled.div`
  float: left;
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@600;700;800&display=swap");

  font-family: "Poppins", sans-serif;
  letter-spacing: 1px;
  font-style: normal;
  font-weight: 800;
  font-size: 30px;
  line-height: 75px;
  margin: 0 20px;
  color: #000000;
`;
export const Account = styled.div`
  margin: 0;
  float: right;
  width: 350px;
  height: 80px;
  display: flex;
  flex-direction: row;
`;

export const AccountName = styled.h3`
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-size: 30px;
  margin: 20px 0;
`;

export const TaskDisplayBox = styled.div`
  width: 500px;
  height: 500px;
  border-radius: 10px;
  overflow: auto;
  background-color: #cacaca;
  margin: 20px auto;
  scroll-behavior: smooth;
  .TaskDisplayBox::-webkit-scrollbar {
    width: 5px;
  }
`;

export const SubTitle = styled.h3`
  margin: 20px 0;
  text-align: center;
  font-size: 30px;
  font-family: "Poppins", sans-serif;
`;
export const ArrowButton = styled.button`
  width: 40px;
  height: 40px;
  background-color: #fff;
  border-radius: 20px;
  outline: none;
  border: 1px transparent;
  margin: 20px 0;
`;
export const TaskInputBox = styled.div`
  border-radius: 8px;
  padding: 0px 10px;
  background-color: #252525;
  width: 290px;
  height: 50px;
  margin: 0 auto;
  display: block;
`;
export const TaskInput = styled.input`
  font-size: 20px;
  width: 250px;
  border-radius: 5px;
  height: 30px;
  outline: none;
  border: 1px transparent;
  background-color: #252525;
  color: #fafafa;
  margin: 5px 0;
`;

export const TaskForm = styled.form``;

export const ClearButton = styled.button`
  margin: 5px 0;
  width: 30px;
  height: 30px;
  outline: none;
  border: none;
  font-size: 30px;
  background-color: transparent;
  color: #fafafa;
`;

export const SubmitButton = styled.button`
  display: none;
`;

export const TaskLists = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
`;

export const TaskItem = styled.div`
  margin: 8px auto;
  width: 400px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

export const TaskCheckButton = styled.button`
  border: 1px black;
  outline: none;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: #000000;
`;

export const DelButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  width: 30px;
  height: 40px;
`;

export const Task = styled.div`
  width: 300px;
  height: 80px;
  display: flex;
  flex-direction: column;
`;

export const TaskName = styled.h3`
  margin: 5px 10px;
  font-size: 20px;
  color: #252525;
`;

export const TaskProgress = styled.h3`
  margin: 5px 10px;
  font-size: 15px;
  color: #252525;
`;

export const EmptyTaskList = styled.div`
  text-align: center;
  padding: 20px;
  width: 400px;
  height: 200px;
  background-color: #252525;
  margin: 10px auto;
  color: #fafafa;
`;
