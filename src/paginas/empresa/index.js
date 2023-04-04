import React from 'react';
import './style.css';

function Header() {
  return <header class="header">Cabeçalho</header>;
}

function Menu() {
  return <aside className="menu">Menu</aside>;
}

function SubHeader() {
  return <article className="sub-header">Sub header</article>;
}

function MainContainer() {
  return <main className="main-container">main</main>;
}

function ListaContainer() {
  return <article className="lista-container">index</article>;
}

function Empresa() {
  return (
    <section class="grid-container">
      <Header />
      <Menu />
      <SubHeader />
      <MainContainer />
      <ListaContainer />
    </section>
  );
}

export default Empresa;
