import React from "react";
import style from "./Paginado.module.css";

const Paginado = ({ countryPerPage, allCountries, paginado, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allCountries / countryPerPage); i++) {
    pageNumbers.push(i);
  }

  const goToPreviousPage = () => {
    if (currentPage > 1) {
        paginado(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < pageNumbers.length) {
        paginado(currentPage + 1);
    }
  };

  return (
    <nav className={style.nav}>
      <ul className={style.ul}>
        <li>
          <button
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            className={style.li}>
            {"<<<"}
          </button>
        </li>

        {pageNumbers?.map((number) => {
          return (
            <li key={number} >
              <button onClick={()=> paginado(number)} className={style.li}>{number}</button>
            </li>
          );
        })}

        <li>
          <button
            onClick={goToNextPage}
            disabled={currentPage === pageNumbers.length}
            className={style.li}>
            {">>>"}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Paginado;
