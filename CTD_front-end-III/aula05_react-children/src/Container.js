import './'

export default function Container(props) {
  return (
    <>
      <header>
        <p>Menu</p>
      </header>

      <div className='container'>{props.children}</div>

      <footer>
        <p>Todos os direitos reservados</p>
      </footer>
    </>

  )


}