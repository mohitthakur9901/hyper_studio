
import { Link } from 'react-router-dom'
import { socail_links } from '../data/links'
function SocialLinks() {
  return (
    <div className='flex'>
  {
    socail_links.map((item) => (
        <Link to={item.link} key={item.id} className='text-xl p-3 hover:text-white hover:bg-black rounded-full transition ease-in-out'>
            {item.icon}
        </Link>
    ))
  }
    </div>
  )
}

export default SocialLinks