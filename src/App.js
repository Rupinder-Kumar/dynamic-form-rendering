import React, { Component } from 'react';
import { Formik, Field, Form, FieldArray } from "formik";
import FormInput from "./FormInput";

class App extends Component {

  render() {
    const initialValues = {
      fields: [
        {
          name: 'userName', inputType: 'text', value: 'Adam',
          children: [
            { name: 'address', inputType: 'textArea', value: 'Some Address' },
            { name: 'phone', inputType: 'text', value: '1234567890' }
          ]
        }
      ]
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 mt-5">
            <h1>Dynamic Form Inputs</h1>
            <Formik
              initialValues={initialValues}
              onSubmit={(values) => console.log(values)}
              render={({ handleSubmit, values }) => (
                <Form>
                  <FieldArray name="fields"
                    render={(values) => (
                      <>
                        {values.form.values.fields && values.form.values.fields.length > 0 ? (
                          values.form.values.fields.map((field, index) => (
                           <FormInput name={field.name} type={field.inputType} key={index} value={field.value} />,
                            field.children && field.children.length > 0 ?
                              field.children.map((child, index) => (
                                <FormInput key={index} name={child.name} type={child.inputType} value={child.value} />
                              )) : null)
                          )
                        ) : null}

                      </>
                    )} />

                </Form>

              )} />
          </div>
        </div>
      </div>
    )

  }
}
export default App;
