/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface ClassWithProps {
  title: string;
}

class Component<T> {
  constructor (public props:T) {

  }
}

class Page extends Component<ClassWithProps> {
  pageInfo () {
    console.log(this.props.title);
  }
}

export {};