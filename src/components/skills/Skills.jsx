import React from 'react';
import './skills.css';
import Frontend from './Frontend';
import Backend from './Backend';
import SkillsTag from './SkillsTag';
import { TagCloud } from 'react-tagcloud';
// import { Link } from 'react-router'
import Game from '../../components/sudoku/games/Game'

const Skills = () => {
  const data = [
    { value: 'JavaScript', count: 38 },
    { value: 'React', count: 30 },
    { value: 'Nodejs', count: 28 },
    { value: 'Express.js', count: 25 },
    { value: 'HTML5', count: 33 },
    { value: 'MongoDB', count: 18 },
    { value: 'CSS3', count: 20 },
  ]

  const SimpleCloud = () => (
    <TagCloud
      minSize={12}
      maxSize={35}
      radius={100}
      // maxSpeed = {'normal'}
      // initSpeed = {'normal'}
      // direction = {135}
      keep={true}
      tags={data}
      onClick={tag => alert(`'${tag.value}' was selected!`)}
    />
  )

  //   const myTags = [
  //     'JavaScript', 'CSS', 'HTML',
  //     'Angualr', 'VueJS', 'React',
  //     'Python', 'Go', 'Chrome',
  //     'Edge', 'Firefox', 'Safari',
  // ];
  // var tagCloud = TagCloud('.content', myTags,{
  //   // radius in px
  //   radius: 100,
  //   // animation speed
  //   // slow, normal, fast
  //   maxSpeed: 'normal',
  //   initSpeed: 'normal',
  //   // 0 = top
  //   // 90 = left
  //   // 135 = right-bottom
  //   direction: 135,

  //   // interact with cursor move on mouse out
  //   keep: true

  // });

  return (
    <section className="skills section" id="skills">

      <div data-aos="fade-down">
        <h2 className="section__title">Skills</h2>
        <ul>
          {/* <li><Link to="/react">React</Link></li>ß */}
        </ul><span className="section__subtitle">My technical level</span>
        <span>
        </span>
        <p className="skills__description">since 코딩 공부를 시작, 대학교에서는 자바와 c#를 주로 사용하여 프로젝트를 개발하였고,
          최근 회사에서는 c#(winforms)과 mssql, WMS(Xcode), Windows Server등을 사용하여 ERP를 개발하였다.
          최근에는 web develop에 관심이 생겨 html css js에 관하여 지속적으로 공부하고 있음.
        </p>
        <div className="skills__container container grid">
          {/* <SimpleCloud></SimpleCloud> */}
          {/* <SkillsTag/> */}

          {/* <div class = 'content'></div> */}
          <Frontend />
          <Backend />
        </div>
      </div>
    </section>
  )
}

export default Skills