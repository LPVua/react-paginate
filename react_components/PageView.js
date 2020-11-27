'use strict';

import React from 'react';

const PageView = (props) => {
  let { pageClassName, pageLinkClassName } = props;
  const {
    page,
    selected,
    activeClassName,
    activeLinkClassName,
    getEventListener,
    pageSelectedHandler,
    href,
    extraAriaContext,
    renderPage,
  } = props;

  let ariaLabel =
    props.ariaLabel ||
    'Page ' + page + (extraAriaContext ? ' ' + extraAriaContext : '');
  let ariaCurrent = null;

  if (selected) {
    ariaCurrent = 'page';

    ariaLabel = props.ariaLabel || 'Page ' + page + ' is your current page';

    if (typeof pageClassName !== 'undefined') {
      pageClassName = pageClassName + ' ' + activeClassName;
    } else {
      pageClassName = activeClassName;
    }

    if (typeof pageLinkClassName !== 'undefined') {
      if (typeof activeLinkClassName !== 'undefined') {
        pageLinkClassName = pageLinkClassName + ' ' + activeLinkClassName;
      }
    } else {
      pageLinkClassName = activeLinkClassName;
    }
  }

  return (
    <li className={pageClassName}>
      {renderPage ? (
        renderPage({
          href,
          ariaLabel,
          ariaCurrent,
          pageSelectedHandler,
          page,
          ...getEventListener(pageSelectedHandler),
        })
      ) : (
        <a
          role="button"
          className={pageLinkClassName}
          href={href}
          tabIndex="0"
          aria-label={ariaLabel}
          aria-current={ariaCurrent}
          onKeyPress={pageSelectedHandler}
          {...getEventListener(pageSelectedHandler)}
        >
          {page}
        </a>
      )}
    </li>
  );
};

export default PageView;
