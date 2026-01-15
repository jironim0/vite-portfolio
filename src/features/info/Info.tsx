import s from './Info.module.scss'
import { FaGithub, FaTelegram, FaInstagram, FaVk } from "react-icons/fa";

export function Info(){
  return (
    <div className={s.infoContainer} id='info'>
        <div className={s.infoTitle}>LET'S CONNECT</div>
        <div className={s.infoDescription}>В настоящее время рассматриваю новые возможности во фронтенд-разработке. Открыт для полной, частичной занятости или фриланс-работы.</div>
        <div className={s.linkGroup}>
            <a href='https://github.com/jironim0' target='_blank' rel='noopener noreferrer'><FaGithub size={44} color={'var(--primary)'}/></a>
            <a href='https://vk.com/nadirrr' target='_blank' rel='noopener noreferrer'><FaVk size={44} color={'var(--primary)'}/></a>
            <a href='https://t.me/eazyscript' target='_blank' rel='noopener noreferrer'><FaTelegram size={44} color={'var(--primary)'}/></a>
            <a href='https://github.com/jironim0' target='_blank' rel='noopener noreferrer'><FaInstagram size={44} color={'var(--primary)'}/></a>
        </div>
        <div className={s.copirait}>
            <span>© 2026 Nadir Garipov</span>
        </div>
    </div>
  )
}
