// 부모 Comp 에서 전달받은 값의 개수가 제한적일때는 함수의 매개변수에서 즉시 구조분해가 가능하다
const ArithInput = ({ nums, setNums }) => {
  //   const onChangeNum1Handler = (e) => {};
  //   const onChangeNum2Handler = (e) => {};
  const onChangeHandler = (e) => {
    // const value = e.target.value;
    // const name = e.target.name;
    const { name, value } = e.target;
    setNums({ ...nums, [name]: value });
  };

  return (
    <div className="input">
      <div>
        <label>숫자1</label>
        <input
          name="num1"
          placeholder="num1"
          value={nums.num1}
          onChange={onChangeHandler}
        />
      </div>
      <div>
        <label>숫자2</label>
        <input
          name="num2"
          placeholder="num2"
          value={nums.num2}
          onChange={onChangeHandler}
        />
      </div>
    </div>
  );
};
export default ArithInput;
