import React, { useState } from 'react';
import axios from 'axios';
import StudentsList from './components/StudentsList'

const App = () => {
  return <StudentsList />;

  // const [data, setData] = useState(null);
  // const onClick = async () => {
  //   try {
  //     const response = await axios.get(
  //       'https://www.hatchways.io/api/assessment/students',
  //     );
  //     setData(response.data);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  // return (
  //   <div>
  //     <div>
  //       <button onClick={onClick}>불러오기</button>
  //     </div>
  //     {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} />}
  //   </div>
  // );
};

export default App;