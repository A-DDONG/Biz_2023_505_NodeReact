import moment from "moment";
import uuid from "react-uuid";

export const TodoData = () => ({
  id: "",
  title: "",
  content: "",
  image: "",
  date: moment().format("YYYY-MM-DD"), // 각각의 날짜
  time: moment().format("HH:mm:ss"), // 각각의 시간
});

export default TodoData;
