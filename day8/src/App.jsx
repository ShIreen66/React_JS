// import './App.css'
import css from'./App.module.css'
console.log(css)

const App = () => {
  // const css = {fontSize: '20px', color: 'green', margin: '20px'}
  return (
    <div >

      {/* <h1 style={{fontSize: '20px', color: 'green', margin: '20px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, totam?</h1>
      <h1 style={css}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt!</h1> */}

      <h1 style={css}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, animi.</h1>
      
      <div className="heading">Lorem ipsum dolor sit amet consectetur.</div>
      <h1 className={css.heading}></h1>
      
    {/*  BME -> block element modifier 
          show_list_heading
    */}
    </div>
  )
}

export default App
