
enum USER_TYPE {
  admin = 'admin',
  user = 'user',
  guest = 'guest'
}

type Person = {
  name: string,
  id: number,
  type: USER_TYPE
}

const user : Person = {
  name: 'Oleksii',
  id: 112,
  type: USER_TYPE.admin
}


function getValue(user: Person) : undefined | string {
  if(user.type === USER_TYPE.admin) {
    console.log('Ви адмін');
  }

  let role = 'admin';

  if (role === USER_TYPE.admin) {

  }

  if (user.id) {
    return user.name;
  }

  return undefined;
}

console.log(getValue(user));


export function setupCounter(element: HTMLButtonElement) {
  let counter = 0
  const setCounter = (count: number) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}
