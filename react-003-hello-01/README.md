# React 의 state 와 일반 변수의 관계

- state 의 값이 변화되면 state 값을 표현하는 Component 들이 다시 Rendering 된다. 꼭 데이터를 표현하는 곳만 Rendering 되는 것이 아니고
  데이터를 표현하는 부분이 포함된 Component 가 Rendering 된다.
- 일반 변수는 Rendering 이 되기전에 생성된 경우는 화면에 표현할 수 있느나, Rendering 이 된 후(mount 된 후)에는 일반 변수의 값이
  변경되어도 화면에는 변화된 값을 보여줄 수 없다. 단, console.log()를 통해서는 변화된 값을 볼 수 있다.
- 실시간으로 변수의 값을 화면에 보여주려면 반드시 state 로 선언되어야 한다.

- state 변수는 변수의 변화된 값을 화면에 실시간으로 보여주는 목적이 있다.
