import { createGlobalStyle, css } from 'styled-components'
import Fonts from '@Styles/Fonts'

export const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
}

export const breakpoints = {
  mobileS: `screen and (min-width: ${size.mobileS})`,
  mobileM: `screen and (min-width: ${size.mobileM})`,
  mobileL: `screen and (min-width: ${size.mobileL})`,
  tablet: `screen and (min-width: ${size.tablet})`,
  laptop: `screen and (min-width: ${size.laptop})`,
  laptopL: `screen and (min-width: ${size.laptopL})`,
  desktop: `screen and (min-width: ${size.desktop})`,
  desktopL: `screen and (min-width: ${size.desktop})`,
}

const lightValues = css`
  --color-1: #000000;
  --color-2: #282a3a;
  --color-3: #735f32;
  --color-4: #c69749;
  --color-5: #282a3a33;
  --color-6: #f8f4ea66;

  --color-7: #579bb1;
  --color-8: #e1d7c666;
  --color-9: #ece8dd;
  --color-10: #f8f4ea;
  --color-11: #ece8dd66;

  --color-25: #000000;
  --color-26: #282a3a;
  --color-27: #1e3f66;
  --color-28: #2e5984;
  --color-29: #528aae;
  --color-30: #73a5c6;
  --color-31: #91bad6;
  --color-32: #bcd2e8;

  --body-dark-color-gradient: var(--color-6);
  --body-light-color-gradient: var(--color-7);
  --body-default-text-color: var(--color-9);

  --card-body-bg-color: var(--color-5);
  --card-title-text-color: var(--color-9);
  --card-category-text-color: var(--color-9);
  --card-footer-bg-color: var(--color-5);

  --vote-button-stroke-color: var(--color-9);
  --vote-button-stroke-color-hover: var(--color-9);
  --vote-button-bg-color-hover: var(--color-5);
  --vote-result-text-color: var(--color-9);

  --delete-btn-fill-color: var(--color-9);
  --delete-btn-border-color: var(--color-11);
  --delete-btn-fill-color-hover: var(--color-9);
  --delete-btn-border-color-hover: var(--color-9);

  --category-selector-bg-color: var(--color-6);
  --category-filter-btn-bg-color: var(--color-10);
  --category-filter-btn-text-color: var(--color-27);
  --category-filter-btn-bg-color-selected: var(--color-27);
  --category-filter-btn-text-color-selected: var(--color-10);

  --pagination-bg-color: var(--color-6);

  --items-per-page-label-text-color: var(--color-10);
  --items-per-page-btn-bg-color: var(--color-10);
  --items-per-page-btn-text-color: var(--color-27);
  --items-per-page-btn-bg-color-selected: var(--color-27);
  --items-per-page-btn-text-color-selected: var(--color-10);

  --pagination-button-bg-color: var(--color-9);
  --pagination-button-fill-color: var(--color-27);
`

const darkValues = css`
  --color-1: #579bb1;
  --color-2: #e1d7c6;
  --color-3: #ece8dd;
  --color-4: #f8f4ea;
  --color-5: #f8f4ea66;
  --color-6: #f8f4eacc;

  --color-7: #000000;
  --color-8: #282a3a;
  --color-9: #735f32;
  --color-10: #c69749;

  --color-24: #f8f4ea99;
  --color-25: #bcd2e8;
  --color-26: #91bad6;
  --color-27: #73a5c6;
  --color-28: #528aae;
  --color-29: #2e5984;
  --color-30: #1e3f66;
  --color-31: #282a3a;
  --color-32: #000000;

  --body-dark-color-gradient: var(--color-8);
  --body-light-color-gradient: var(--color-27);
  --body-default-text-color: var(--color-9);

  --card-body-bg-color: var(--color-5);
  --card-title-text-color: var(--color-8);
  --card-category-text-color: var(--color-9);
  --card-footer-bg-color: var(--color-5);

  --vote-button-stroke-color: var(--color-8);
  --vote-button-stroke-color-hover: var(--color-8);
  --vote-button-bg-color-hover: var(--color-5);
  --vote-result-text-color: var(--color-8);

  --delete-btn-fill-color: var(--color-4);
  --delete-btn-border-color: var(--color-5);
  --delete-btn-fill-color-hover: var(--color-4);
  --delete-btn-border-color-hover: var(--color-4);

  --category-selector-bg-color: var(--color-6);
  --category-filter-btn-bg-color: var(--color-27);
  --category-filter-btn-text-color: var(--color-6);
  --category-filter-btn-bg-color-selected: var(--color-8);
  --category-filter-btn-text-color-selected: var(--color-6);

  --pagination-bg-color: var(--color-24);

  --items-per-page-label-text-color: var(--color-8);
  --items-per-page-btn-bg-color: var(--color-27);
  --items-per-page-btn-text-color: var(--color-6);
  --items-per-page-btn-bg-color-selected: var(--color-8);
  --items-per-page-btn-text-color-selected: var(--color-6);

  --pagination-button-bg-color: var(--color-27);
  --pagination-button-fill-color: var(--color-6);
`

const common = css`
  ${Fonts};

  --padding-1: 4px;
  --padding-2: 8px;
  --padding-3: 16px;
  --padding-4: 32px;

  --spacing-1: 4px;
  --spacing-2: 8px;
  --spacing-3: 16px;
  --spacing-4: 32px;

  --border-radius-1: 4px;
  --border-radius-2: 8px;
  --border-radius-3: 16px;
  --border-radius-4: 32px;

  --font-size-1: 12px;
  --font-size-2: 14px;
  --font-size-3: 16px;
  --font-size-4: 18px;
  --font-size-5: 20px;
  --font-size-6: 24px;
  --font-size-7: 28px;
  --font-size-8: 32px;

  --small-icon-size: 24px;
  --medium-icon-size: 32px;

  --inter-font-family: 'Inter', serif;
`

export default createGlobalStyle`
  :root {
    ${common};

    ${lightValues};

    @media(prefers-color-scheme: dark) {
      ${darkValues}
    }
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    max-width: 100vw;
    height: 100vh;
    overflow-x: hidden;
  }

  body {
    font-family: var(--inter-font-family);
    color: var(--body-default-text-color);
    background: linear-gradient(
      to bottom,
      transparent,
      var(--body-dark-color-gradient)
    )
    var(--body-light-color-gradient);
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  @media (prefers-color-scheme: dark) {
    html {
      color-scheme: dark;
    }
  }
`
