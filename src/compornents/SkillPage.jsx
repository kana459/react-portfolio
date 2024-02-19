import React from 'react'

const SkillPage = () => {
  return (
    <section id='skill'>
      <h2>Skill</h2>
      <dl className='skillList'>
        <div className="skillData">
          <dt>開発</dt>
          <dd className='re-font'>HTML5 / SCSS / JavaScript / jQuery /
          PHP / Gulp / FTP</dd>
        </div>

        <div className="skillData">
          <dt>ツール</dt>
          <dd className='re-font'>Adobe XD / Figma /Illustrator /Lightroom / Photoshop / WordPress</dd>
        </div>

        <div className="skillData">
          <dt>資格</dt>
          <dd className='re-font'>AWS Cloud Practitioner</dd>
        </div>
      </dl>
    </section>
  )
}

export default SkillPage
