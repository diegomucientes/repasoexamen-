import React,{useState} from 'react';
import { Formik, Field, Form, } from "formik";
import * as Yup from "yup";
import { Link } from 'react-router-dom';
import Recipe from '../views/Recipe';

const RecipeForm = (props) => {

    const {iTitle,onSubmitProp,iIngredientes,iInstrucciones}=props;

   
    return (
        <div >
          <Formik
          initialValues={{
          title : iTitle,
          ingredientes:iIngredientes,
          instrucciones:iInstrucciones
          
        }}
        validationSchema={Yup.object().shape({
            title: Yup.string()
            .min(3, "El titulo de la receta es muy corto")
            .required ("Por favor ingresa un titulo"),
            
            ingredientes:Yup.string()
            .min(5, "Los ingredientes deben ser 5 o más")
            .required ("Por favor ingresa un titulo"),

            instrucciones:Yup.string()
            .min(5, "instrucijsdakjdhshkdasdas")
            .required ("Por favor ingresa una Instruccion"),



          
        })}

        onSubmit={(values, {setSubmitting}) =>{
            const timeOut = setTimeout(( )=>{
                console.log(values);
                onSubmitProp(values);
                setSubmitting(false);
                clearTimeout(timeOut);
            }, 1000);
        }}
        >
            {({
                values,
                errors,
                touched,
                handleSubmit,
                //isSubmitting,
                //validating,
                valid,
            }) =>{
        return (
            <div>
                <h1>Recetas APP</h1>
                <Form classTitle= "contact" method= "post" onSubmit={handleSubmit}>
                        <label htmlFor="title" classTitle="col-sm-2 col-form-label">
                            Recetas
                        </label>
                        <Field id='title'type="text" classTitle="form-control" placeholder="Title" name='title'></Field>
                         {errors.title && touched.title && <p>{errors.title}</p>};


                        <label htmlFor="ingredientes" classTitle="col-sm-2 col-form-label">
                            Ingredientes
                        </label>
                        <Field id='ingredientes'type="text" classTitle="form-control" placeholder="Ingredientes" name='ingredientes'/>
                         {errors.ingredientes && touched.ingredientes && <p>{errors.ingredientes}</p>};


                        <label htmlFor="instrucciones" classTitle="col-sm-2 col-form-label">
                            Instrucciones
                        </label>
                        <Field id='instrucciones'type="text" classTitle="form-control" placeholder="Instrucciones" name='instrucciones' />
                         {errors.instrucciones && touched.instrucciones && <p>{errors.instrucciones}</p>};




                        <button type="submit" disabled={Object.values(errors).length > 0}>Agregar Receta</button>
                        <button type="cancel"><Link to={`/`}>Cancel</Link></button>
                            
                </Form>
            </div>
        );
        }}
        </Formik>
        </div>
      );
    }
export default RecipeForm