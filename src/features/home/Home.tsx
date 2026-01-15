import s from "./Home.module.scss";
import myImage from "@/assets/avatar-hero.jpg";
import { RxExternalLink } from "react-icons/rx";
import { FaGithub, FaTelegram } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { TitleLitter } from "@/common/components/TitleLitter/TitleLitter";

export function Home() {
  const handleExtraLink = () => {
    window.open("https://t.me/eazyscript", "_blank");
  };

  return (
    <div className={s.homeContainer} id="home">
      <div className={s.homeContainer__wrapper}>
        <div className={s.homeTextArea}>
          <div className={s.homeHead}>
            <div className={s.headTitleGreeting}>
              {"Hi I'am".split('').map((el, index) => {
                return (
                  <TitleLitter index={index} key={index}>{el}</TitleLitter>
                )
              })}
            </div>

            Frontend Developer
          </div>
          <div className={s.homeDesc}>
            Молодой специалист, люблю созидать и выполнять задачи<br/>
            использую react/next для решения любых проектов
          </div>
        </div>
        <div className={s.homeLinkGroup}>
          <button className={s.homeButtonMe} onClick={handleExtraLink}>
            <div className={s.buttonMe}>
              <span>CONTACT ME</span>
              <div className={s.buttonMeCirkl}>
                {window.screen.width > 768 ? <GoDotFill /> : <RxExternalLink size={22} color="white" />}
              </div>
            </div>
          </button>
          <button className={s.homeButton} onClick={() => window.open("https://github.com/jironim0", "_blank")}>
            <FaGithub size={22} color="var(--primary)" />
          </button>
          <button className={s.homeButton} onClick={() => window.open("https://t.me/eazyscript", "_blank")}>
            <FaTelegram size={22} color="var(--primary)" />
          </button>
        </div>
      </div>

      <div className={s.homeAvatar}>
        <img className={s.homeMyAvatar} src={myImage} alt="avatar" />
      </div>
    </div>
  );
}
