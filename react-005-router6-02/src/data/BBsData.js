import moment from "moment";
import uuid from "react-uuid";

export const BBsDto = {
  id: "",
  bSubject: "",
  bDate: moment().format("YYYY[-]MM[-]DD"),
  bWriter: "",
  bContent: "",
};

export const BBsList = [BBsDto, BBsDto, BBsDto];
