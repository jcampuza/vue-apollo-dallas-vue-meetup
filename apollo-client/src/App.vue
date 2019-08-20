<template>
  <div id="app">
    <nav id="nav">
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
        <li>
          <router-link to="/rockets">Rockets</router-link>
        </li>
        <li>
          <router-link to="/counter">Counter</router-link>
        </li>
      </ul>
    </nav>
    <router-view />
  </div>
</template>

<style lang="scss">
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
} /* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
body {
  font-size: 16px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background-color: #fefefe;
  color: #212121;
  margin: 0;
  padding: 0;
  min-height: 100vh;
}
button {
  border: none;
  height: 2rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.22);
  border-radius: 2px;
  padding: 0 1rem;
  min-width: 4rem;
}
h1 {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.page {
  max-width: 900px;
  margin: 0 auto;
  padding-top: 1rem;
}

nav {
  padding: 1rem;
  background-color: rebeccapurple;

  ul {
    display: flex;
  }

  li:not(:last-child) {
    margin-right: 1rem;
  }

  a {
    color: #fff;
    text-decoration: none;
    opacity: 0.7;

    &:hover {
      opacity: 1;
      text-decoration: underline;
    }

    &.router-link-exact-active {
      opacity: 1;
    }
  }
}

.list {
  margin: 0 auto;
  margin: 1rem auto;
}

.card-list-item {
  background-color: #eeeeee;
  box-shadow: 0 1px 4px 1px rgba(0, 0, 0, 0.17);
  padding: 1rem;
  border-radius: 2px;

  & + & {
    margin-top: 1rem;
  }

  & > * + * {
    margin-top: 1rem;
  }
}
</style>
