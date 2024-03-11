//Global styling component

import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root {
--color-lapis-lazuli: #336699;
--color-dark-sky-blue: #86bbd8;
--color-charcoal: #2F4858;
--color-granny-smith-apple: #9ee493;
--color-nyanza: #DAF7DC
--page-horizontal-padding: 20px;
--heading-font-family: 'Teko', sans-serif;
--max-content-width: 1200px;
}

html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        vertical-align: baseline;
        box-sizing: border-box;
    }

    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }

h1, h2, h3, label, button {
    color: var(--color-lapis-lazuli);
    font-family: var(--heading-font-family);
}
p, li, blockquote, input, div {
    color: var(--color-charcoal);
    font-family: var(--heading-font-family);
}

a {
    color: #9ee493;
    padding: 2%;
  font-size: 20px;
  margin-right: 30px;
  text-decoration: none;
}

body {
    padding-bottom: 150px;
}
`;
