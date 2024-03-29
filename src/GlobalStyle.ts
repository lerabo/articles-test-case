import { createGlobalStyle } from 'styled-components';

export const WHITE_COLOR = '#ffffff';
export const LIGHT_GREY_COLOR = '#eaeaea';
export const DARK_GREY_COLOR = '#363636';

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
}
body,
html {
  height: 100%;
}
img,
picture,
svg {
  max-width: 100%;
  height: auto;
}
input,
button,
textarea,
select {
  font: inherit;
}
p,
h1,
h2,
h3,
h4,
h5,
h6 {
	font-family: 'Montserrat', sans-serif;
  overflow-wrap: break-word;
  padding: 0;
  margin: 0;
}
ul,
ol {
  list-style: none;
}
a {
  text-decoration: none;
  color: inherit;
}
button {
    border: none;
  background-color: transparent;   
  cursor: pointer;
}
`;

export default GlobalStyle;
