import React from 'react'
import { Formik, Field, Form }  from 'formik';
 const MySearchForm = (props) => {
 
    return <div>
    <h1>Форма поиска</h1>
    
    <Formik
    initialValues={{ term: '', isFrends: ''}}
    onSubmit={async (values) => {

    // console.log(values)
        
          if (values.toggle === "true")  { values.isFrends = true}else if (
            values.toggle === "false") {values.isFrends = false}else if(
              values.toggle === "null") {values.isFrends = null} 
         
              props.changeFilter(values)
    
     props.onFilterChange(1,values);
    }}
>
    {({
      isSubmitting,
      values
    }) => (
      <Form >
        <Field
          type="text"
          name="term"
        />
        <Field as="select" name="toggle">
             <option value="null">Все</option>
             <option value="true">Только друзья</option>
             <option value="false">Все кроме друзей</option>
            
           </Field>
 <button type="submit" >
          Поиск
        </button>
      </Form>
    )}
   </Formik>
    </div> 
}
export default MySearchForm