const BBsItem = ({ item, seq }) => {
  return (
    <tr>
      <td>{seq + 1}</td>
      <td>{item.bSubject}</td>
      <td>{item.bDate}</td>
      <td>{item.bWriter}</td>
      <td>0</td>
    </tr>
  );
};
export default BBsItem;
