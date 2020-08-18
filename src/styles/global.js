import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

:root {
  --lightBackground: #D8D8D8;
  --darkBackground: #17171a;
  --lightTextColor: #252527;
  --darkTextColor: #fff;
  --lightTitleBackground: #f2f2f2;
  --darkTitleBackground: #252527;

  --tableRowDarkOdd: #57585c;
  --tableRowLightOdd: #CCC;

  --tableRowDarkEven: #3f4042;
  --tableRowLightEven: #fff;
}

*:focus {
  outline: 0;
}

html, body, #root {
  height: 100%;
}

body {
  -webkit-font-smoothing: antialiased;

}

body, input, button {
  font: 16px 'Roboto Slab', serif
}

a {
  text-decoration: none
}

ul {
  list-style: none;
}

h1, h2, h3, h4, h5, h6, strong {
  font-weight: 500;
}

button {
   cursor: pointer;

}
`;
