import React from "react";
import styleStatis from "./Statistics.module.css";
import PropTypes from 'prop-types'


export default function Statistic  ({ title, stats} ){
  return (
<section className={styleStatis.statistics} >
<h2 className={styleStatis.title}>{title}</h2>
<ul className={styleStatis.statlist }>
{stats.map(stat => (
          <li
            className={styleStatis.item}
            style={{
              backgroundColor: getRandomHexColor(),
            }}
            key={stat.id}
          >
            <span className={styleStatis.label}>{stat.label}</span>
            <span className={styleStatis.percentage}>{stat.percentage}%</span>
          </li>
        ))}
</ul>
</section>
  )
}
function getRandomHexColor() {
  let bgColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  return bgColor;
}

Statistic.protoTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.string.isRequired,
    })
  ).isRequired,
};