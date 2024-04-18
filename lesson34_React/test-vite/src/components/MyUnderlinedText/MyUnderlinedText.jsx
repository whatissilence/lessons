import './MyUnderlinedText.css';
function MyUnderlinedText({ children }) {
  return <span className='my-underlined-text'>
    { children }
  </span>;
}

export default MyUnderlinedText;