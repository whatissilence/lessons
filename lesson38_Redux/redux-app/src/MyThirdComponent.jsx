import {useSelector} from "react-redux";

export default function MyThirdComponent() {
  const user = useSelector(state => state.userSlice.user); // slice name and state

  return <pre>
    {JSON.stringify(user, null, 2)}
  </pre>
}