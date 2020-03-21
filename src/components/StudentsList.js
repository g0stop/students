import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import StudentsItem from './StudentsItem';
import axios from 'axios';


const StudentsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const StudentsList = () => {
  const [students, setStudents] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // async를 사용하는 함수 따로 선언
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          'https://www.hatchways.io/api/assessment/students',
        );
        setStudents(response.data.students);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  // 대기중
  if (loading) {
    return <StudentsListBlock>Loading...</StudentsListBlock>;
  }
  // 아직 students 값이 설정되지 않았을때
  if (!students) {
    return null;
  }

  // students 값이 유효할때
  return (
    <StudentsListBlock>
      {students.map(student => (
        <StudentsItem key={student.id} student={student} />
      ))}
    </StudentsListBlock>
  );
};

export default StudentsList;