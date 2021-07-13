import './App.css';
import {useForm} from 'react-hook-form'

function App() {
  
  const{handleSubmit, register} = useForm()

  const callBack = (formValues) => {
    const name = JSON.stringify(formValues.name)
    const lastName = JSON.stringify(formValues.lastName)
    const age = JSON.stringify(formValues.age)
    const email = JSON.stringify(formValues.email)
    const country = JSON.stringify(formValues.country)
    alert(
      `
      Name: ${name}
      Last Name: ${lastName}
      Age: ${age}
      Email: ${email}
      Country: ${country}
      `
    )

  }

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit(callBack)}>
          <div>
            <div>
              <label>
                Name:
                <input type="text" {...register('name')}/>
              </label>
            </div>
            <div>
              <label>
                last name:
                <input type="text" {...register('lastName')}/>
              </label>
            </div>
            <div>
            <label>
                Age:
                <input type="number" {...register('age')}/>
              </label>
            </div>
            <div>
            <label>
                Email:
                <input type="email" {...register('email')}/>
              </label>
            </div>
            <div>
            <label>
                Country:
                <input type="text" {...register('country')}/>
              </label>
            </div>
            <div>
              <button type='submit'>Enviar</button>
            </div>
          </div>
        </form>
      </header>
    </div>
  );
}

export default App;
