import './FreeleapsOtherPages.css'
import l1 from '../assets/freeleaps/otherpages/l1.png'
import l2 from '../assets/freeleaps/otherpages/l2.png'
import l3 from '../assets/freeleaps/otherpages/l3.png'
import l4 from '../assets/freeleaps/otherpages/l4.png'
import l5 from '../assets/freeleaps/otherpages/l5.png'
import r1 from '../assets/freeleaps/otherpages/r1.png'
import r2 from '../assets/freeleaps/otherpages/r2.png'
import r3 from '../assets/freeleaps/otherpages/r3.png'

const LEFT = [l1, l2, l3, l4, l5]
const RIGHT = [r1, r2, r3]

export default function OtherPages() {
  return (
    <div className="op-inner">
      <div className="fl-font-head">
        <h2 className="fl-font-title">Display On<br />Other Pages</h2>
        <span className="fl-font-tag">Consistent / Efficient</span>
      </div>

      <div className="op-grid">
        <div className="op-col">
          {LEFT.map((src, i) => (
            <figure className="op-shot" key={i}><img src={src} alt="" loading="lazy" /></figure>
          ))}
        </div>
        <div className="op-col">
          {RIGHT.map((src, i) => (
            <figure className="op-shot" key={i}><img src={src} alt="" loading="lazy" /></figure>
          ))}
        </div>
      </div>

      <p className="op-caption">Only display some pages</p>
    </div>
  )
}
