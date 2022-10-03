import React from 'react';
import './skills.css';
import Frontend from './Frontend';
import Backend from './Backend';

const Skills = () => {
  return (
    <section className="skills__section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>
        <p className="skills__description">since 코딩 공부를 시작, 대학교에서는 자바와 c#를 주로 사용하여 프로젝트를 개발하였고,
        최근 회사에서는 c#(winforms)과 mssql, WMS(Xcode), Windows Server등을 사용하여 ERP를 개발하였다.
        최근에는 web develop에 관심이 생겨 html css js에 관하여 지속적으로 공부하고 있음.
        </p>
      <div className="skills__container container grid">
        <Frontend />
        <Backend />
      </div>
    </section>
  )
}

export default Skills