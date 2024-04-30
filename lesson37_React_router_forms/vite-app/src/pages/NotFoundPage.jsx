import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return <>
    <h2>404 How did you get here?</h2>
    <Link className='aaaa' to='/' >Home link</Link><br />
    <a href='/' >Home a tag - Not recommended!</a>
  </>
}