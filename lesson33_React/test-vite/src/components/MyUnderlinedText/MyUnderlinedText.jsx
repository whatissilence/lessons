import './MyUnderlinedText.css';
function MyUnderlinedText({ children }) {

  console.log(children)

  return <span className='my-underlined-text'>
    { children }
  </span>;
}

export default MyUnderlinedText;