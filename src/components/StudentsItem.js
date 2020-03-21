import React, { useState } from 'react';
import styled from 'styled-components';

const StudentsItemBlock = styled.div`
  display: flex;
 
  .thumnail {
    margin-right: 1rem;
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: scale-down;
    }
  }
  .contents {
    h2 {
      margin: 0;
      a {
        color: black;
      }
    }
    b {
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5rem;
      white-space: normal;
    }
  }
  & + & {
    margin-top: 3rem;
  }
`;
const StudentsItem = ({ student }) => {
  const { pic, firstName, lastName, email, company, skill, grades } = student;

  const getAverage = numbers => {
    if (numbers.length === 0) {
      return 0;
    } else {
      let sum = 0;
      for (let i = 0; i < numbers.length; i++) {
        console.log(i);
        sum = sum + numbers[i];
        console.log(sum);
        return sum / numbers.length;
      }
    }
  }
  const [list,] = useState(grades);

  console.log(list);

  return (
    <StudentsItemBlock>
      {pic && (
        <div className="thumnail">
          <img src={pic} alt="thumbnail" />
        </div>
      )}
      <div className="contents">
        <h2>
          {firstName + ' ' + lastName}<br />
          Email: {email}<br />
          Company: {company}<br />
          Skill:{skill}<br />
          Average:{getAverage(list)}<br />
        </h2>
      </div>
    </StudentsItemBlock>
  );
};

export default StudentsItem;