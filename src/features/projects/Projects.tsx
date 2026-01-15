import { Slider } from '@/common/components/slider/Slider'
import s from './Projects.module.scss'


export function Projects(){
  return (
    <div className={s.projectsContainer} id='projects'>
        <div className={s.projectsHeader}>
          <span className={s.headTitle}>FEATURED PROJECTS</span> <br />
            Каждый проект представляет уникальную задачу, которую я решал - <br/>
            от концепции и дизайна до реализации и развертывания.
        </div>
        <Slider />
    </div>
  )
}
