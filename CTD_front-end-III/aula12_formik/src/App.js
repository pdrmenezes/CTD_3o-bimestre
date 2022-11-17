import { Formik } from 'formik';
import InputMask from 'react-input-mask'
import './App.css';


function scaleIMC(imc) {
  if (imc > 18.5 && imc <= 24.9) {
    return '18.5 - 24.9 - IMC NORMAL'
  } else if (imc > 24.9 && imc <= 29.9) {
    return '24.9 - 29.9 - SOBREPESO'
  }
}

function App() {
  return (
    <div className="App">
      <Formik
        initialValues={{
          nome: "",
          email: "",
          nascimento: "",
          telefone: "",
          cpf: "",
          peso: "",
          altura: "",
        }}
        validate={
          (values) => {
            const errors = {}
            if (!values.nome) {
              errors.nome = "Campo deve ser preenchido"
            }

            if (!values.email) {
              errors.email = "Campo deve ser preenchido"
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
              errors.email = "Email inválido"
            }
            if (!values.nascimento) {
              errors.nascimento = "Data inválida"
            }

            if (!values.telefone) {
              errors.telefone = "Campo obrigatório";

            } else if (!/\([0-9]{2}\) (?:9[0-9]{1}|[1-5]{1})[0-9]{3}-[0-9]{4}/.test(values.telefone)) {
              errors.telefone = "Telefone inválido"
            }

            if (!values.cpf) {
              errors.cpf = "Campo obrigatório";

            } else if (!/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(values.cpf)) {
              errors.cpf = "CPF inválido"
            }

            if (!values.peso) {
              errors.peso = "Campo obrigatório";

            } else if (!/^\d+(?:\.\d+)?$/.test(values.peso)) {
              errors.peso = "Peso inválido"
            }

            if (!values.altura) {
              errors.altura = "Campo obrigatório";

            } else if (!/^\d+(?:\.\d+)?$/.test(values.altura)) {
              errors.altura = "Altura inválido"
            }


            return errors;
          }
        }
        onSubmit={() => alert("ok")}
      >
        {
          ({ values, handleSubmit, errors, handleChange, resetForm }) => (
            <form onSubmit={handleSubmit}>
              <div className='header-form'>
                <h1>Cadastro de Pacientes</h1>

                <div className='container-buttons'>
                  <button type='submit'>Salvar</button>
                  <button onClick={resetForm}>Limpar</button>
                </div>
              </div>

              <label>
                <span>Nome</span>
                <input autocomplete="off" value={values.nome} name="nome" onChange={handleChange} />
                <span>{errors.nome}</span>
              </label>

              <label>
                <span>Email</span>
                <input autocomplete="off" type="email" value={values.email} name="email" onChange={handleChange} />
                <span>{errors.email}</span>
              </label>

              <label>
                <span>Data de Nascimento</span>
                {/* <input type="date" value={values.nascimento} name="nascimento" onChange={handleChange} /> */}
                <InputMask autocomplete="off" mask="99/99/9999" onChange={handleChange} value={values.nascimento} name="nascimento" />
                <span>{errors.nascimento}</span>
              </label>

              <label>
                <span>Telefone</span>
                {/* <input type="tel" value={values.telefone} /> */}
                <InputMask autocomplete="off" mask="(99)99999-9999" onChange={handleChange} value={values.telefone} name="telefone" />
                <span>{errors.telefone}</span>
              </label>

              <label>
                <span>CPF</span>
                {/* <input value={values.cpf} name="cpf" onChange={handleChange} /> */}
                <InputMask autocomplete="off" mask="999.999.999-99" onChange={handleChange} value={values.cpf} name="cpf" />
                <span>{errors.cpf}</span>
              </label>

              <label>
                <span>Peso</span>
                <input value={values.peso} name="peso" onChange={handleChange} />
                <span>{errors.peso}</span>
              </label>

              <label>
                <span>Altura</span>
                <input value={values.altura} name="altura" onChange={handleChange} />
                <span>{errors.altura}</span>
              </label>

              {values.peso && values.altura ? (
                <>
                  <h2>IMC = {(values.peso / (values.altura * values.altura)).toFixed(2)}</h2>
                  <h3>{scaleIMC((values.peso / (values.altura * values.altura)))}</h3>
                </>)
                : (<h2>---</h2>)
              }
            </form>
          )
        }
      </Formik>
    </div >
  );
}

export default App;
