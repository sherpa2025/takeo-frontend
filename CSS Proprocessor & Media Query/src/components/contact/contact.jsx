import style from "../../styles/contact.module.scss"  // using css module

function Contact() {
  return <div className={style.container}><strong>Nima Sherpa</strong>
  
  <ul className="info">
          <li><a href='https://github.com/sherpa2025?tab=repositories'>Github: Sherpa2025</a></li>
          <li><a href='https://www.linkedin.com/in/nimadsherpa1712/'>LinkedIn</a></li>
        </ul>
  
  </div>
}

export default Contact