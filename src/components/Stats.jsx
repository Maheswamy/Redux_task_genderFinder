import React from "react";
import {  PieChart } from 'react-chartkick'
import 'chartkick/chart.js'
import { useSelector } from "react-redux";

const Stats = () => {
  const users = useSelector((state) => state.users.data);
  const objectGender = users.reduce((pv, cv) => {
    if (pv[cv.gender]) {
      pv[cv.gender] += 1;
    } else {
      pv[cv.gender] = 1;
    }
    return pv;
  }, {});
  const data = Object.entries(objectGender);
  console.log(objectGender, data);

  return (
    <div>
      <h4>Chart</h4>
      <PieChart data={data} />
    </div>
  );
};

export default Stats;
