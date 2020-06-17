import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Modal from 'react-modal'


function AddPage(props) {
    const { saveRecipe, match, myRecipes, editRecipe, history } = props;
    const id = + match.params.recipeId;
    const recipe = myRecipes.find((elem) => elem.id === id);

    const [modalOpen, setOpen] = useState(false);
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
        }
    };

    const openModal = () => {
        setOpen(true)
    }

    const closeModal = () => {
        setOpen(false)
    }

    const submitAdd = (values) => {
        saveRecipe(values);
        history.push("/showAllRecipes")
    }

    const submitEdit = (values) => {
        editRecipe({ ...values, id })
        history.push("/showAllRecipes")
    }
    const submit = (values, methods) => {
        if (match.params.hasOwnProperty('recipeId')) submitEdit(values)
        else submitAdd(values)
        methods.resetForm();
    }
    const reset = () => {
        if (match.params.hasOwnProperty('recipeId')) resetEdit()
        else resetAdd()
    }
    const resetAdd = () => {
        history.push("/")
    }
    const resetEdit = (clean) => {
        openModal()
    }
    const cleanForm = (clean) => {
        clean();
        history.push("/showAllRecipes")
    }

    return (
        <div>

            <Formik
                initialValues={{
                    title: (recipe && recipe.title) || '',
                    description: (recipe && recipe.description) || ''
                }}
                validationSchema={Yup.object().shape({
                    title: Yup.string()
                        .required('Enter the name of the recipe'),
                    description: Yup.string()
                        .required('Enter recipe description')
                })}
                onSubmit={submit}>

                {({ isSubmitting, errors, touched, resetForm }) =>
                    (
                        <Form className='AddForm'>
                            <Modal
                                isOpen={modalOpen}
                                onRequestClose={closeModal}
                                contentLabel="Example Modal"
                                style={customStyles}
                                ariaHideApp={false}>
                                <div className='modal'>
                                    <div className="recipeTitle">Want to cancel editing?</div>
                                    <button className='recipeButton' onClick={cleanForm.bind(this, resetForm)} >Yes</button>
                                    <button className='recipeButton' onClick={closeModal}>No</button>
                                </div>
                            </Modal>
                            <label htmlFor="title">Recipe Name</label>
                            <Field name="title" type='text' placeholder='Recipe Name' />
                            {errors.title && touched.title ? (<div className="error">{errors.title}</div>) : null}
                            <label htmlFor='description'>Recipe Description </label>
                            <Field component='textarea' name="description" placeholder='Recipe Description' />
                            {errors.description && touched.description ? (<div className="error">{errors.description}</div>) : null}
                            <button className='recipeButton' type="submit" disabled={isSubmitting}>Save</button>
                            <button className='recipeButton' type='button' onClick={reset}>Cancel</button>
                        </Form>
                    )}
            </Formik>
        </div>
    )
}

export default AddPage;