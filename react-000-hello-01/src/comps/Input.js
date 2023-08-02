import { useState } from "react";
/**
 * @returns HTML tag를 생성하는 코드
 * HTML tag 를 생성하는 코드를  return 하는 함수를 react 에서는 component 라고 한다
 *
 *
 */

const Input = () => {
  // const nation = "";
  // const setNation = ()
  const [nation, setNation] = useState("");
  const [nations, setNations] = useState(["우리나라", "대한민국"]);

  // nations 배열의 개수만큼 <div>{item}</div> 를 생성하는 코드
  // 생성된 tag list 를 nationList 에 담기
  const nationList = nations.map((item) => {
    return <div>{item}</div>;
  });

  const inputChangeHandler = (e) => {
    setNation(e.target.value);
  };

  /**
   * setNations([...nations, nation])
   * nations 배열을 전개하여 새로운 배열을 하나 만들고,
   * 새로 생성된 배열에 nation 문자열을 추가하고, 새로 생성된 배열을 setNations() 함수를 통하여
   * 기존의 nations 배열과 "교체하라"
   */
  return (
    <div>
      <input value={nation} onChange={inputChangeHandler} />
      <button onClick={(e) => setNations([...nations, nation])}>추가</button>
      <div>{nationList}</div>
    </div>
  );
};
export default Input;
