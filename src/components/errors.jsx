import React from "react";

const errors = () => {
  return (
    <div>
      <div className="content__error-info">
        <h2>Произошла ошибка 😕</h2>
        <p>
          К сожалению, не удалось получить питсы. Попробуйте повторить попытку
          позже.
        </p>
      </div>
      <ul className="Pagination_root__uwB0O">
        <li className="previous disabled">
          <a
            href="/"
            className="button--circle "
            tabindex="-1"
            role="button"
            aria-disabled="true"
            aria-label="Previous page"
            rel="prev"
          >
            &lt;
          </a>
        </li>
        <li className="selected">
          <a
            href="/"
            rel="canonical"
            role="button"
            tabindex="-1"
            aria-label="Page 1 is your current page"
            aria-current="page"
          >
            1
          </a>
        </li>
        <li>
          <a href="/" rel="next" role="button" tabindex="0" aria-label="Page 2">
            2
          </a>
        </li>
        <li>
          <a href="/" role="button" tabindex="0" aria-label="Page 3">
            3
          </a>
        </li>
        <li className="next">
          <a
            href="/"
            className=""
            tabindex="0"
            role="button"
            aria-disabled="false"
            aria-label="Next page"
            rel="next"
          >
            &gt;
          </a>
        </li>
      </ul>
    </div>
  );
};

export default errors;
