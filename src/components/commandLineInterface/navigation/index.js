import React from 'react';
import { Link } from 'gatsby';
import { startCase, toLower } from 'lodash';

import StyledArray from 'src/shared-components/styledArray';
import PAGE_URLS from 'src/constants/pageUrls';

class Navigation extends React.Component {

  renderPageLinks = () => {
    const linkArray = [];

    for (const page in PAGE_URLS) {
      if (page === 'blog') {
        linkArray.push(
          <a href={PAGE_URLS[page]} target="_blank" rel="noopener noreferrer">Blog</a>
        );
        continue;
      }

      linkArray.push(
        <Link to={PAGE_URLS[page]}>{startCase(toLower(page))}</Link>
      );
    }

    return linkArray;
  }

  render() {
    const linkArray = this.renderPageLinks();

    return(
      <nav>
        Type or click where to go next: <br />
        <StyledArray array={linkArray} />
        Or type "help" at any time to view all options.
      </nav>
    );
  }
}


export default Navigation;
