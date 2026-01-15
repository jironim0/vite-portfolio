import s from './About.module.scss'


export function About(){

  const handlePdfLink = () => {
    alert('Ссылка ведет на pdf файл')
    window.open('/public/resume.pdf', '_blank')
  }

  return (
    <div className={s.aboutContainer} id='about'>
        <span className={s.aboutMe}>Frontend-разработчик с фокусом на React/Next.js и full-stack подходах. Имею практический опыт создания full-stack приложений с использованием современных стеков. Понимаю принципы feature-sliced архитектуры. </span>
        <div className={s.aboutLink} onClick={handlePdfLink}>More about me</div>
    </div>
  )
}
