'use client'
import React, { useState } from 'react'
import { Input, Button } from '@nextui-org/react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import Header from "@/component/header/page";

const Page = () => {
  const [mainTask, setMainTask] = useState([])
  const [total, setTotal] = useState(0)

  const initialValues = {
    title: '',
    desc: '',
    date: ''
  }

  const validationSchema = Yup.object({
    title: Yup.string().required('Expense title is required'),
    desc: Yup.number().typeError('Must be a number').required('Expense amount is required'),
    date: Yup.date().required('Expense date is required')
  })

  const submitHandler = (values, { resetForm }) => {
    const newTask = { title: values.title, desc: parseFloat(values.desc), date: values.date }
    setMainTask([...mainTask, newTask])
    resetForm()
  }

  const deleteHandler = (i) => {
    let copyTask = [...mainTask]
    copyTask.splice(i, 1)
    setMainTask(copyTask)
  }

  const totalExpenseHandler = () => {
    let total = mainTask.reduce((acc, task) => acc + task.desc, 0)
    setTotal(total)
  }

  let renderTask = <h2>No Expense Available</h2>

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className='flex items-center justify-between mb-8'>
          <div className='flex items-center justify-between w-2/3'>
            <h5 className='text-2xl font-semibold'>{t.title}</h5>
            <h6 className='text-lg font-semibold'>Rs {t.desc.toFixed(2)}</h6>
            <h6 className='text-lg font-semibold'>{t.date}</h6>
          </div>
          <Button 
            onClick={() => {
              deleteHandler(i)
            }}
            color="error"
            auto
            size="sm"
            className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg delete-button"
          >
            Delete
          </Button>
        </li>
      )
    })
  }

  return (
    <div className='container mx-auto'>
        <Header />
      <h1 className='bg-red-500 text-white text-center text-5xl p-5'>
        Expense Tracker
      </h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={submitHandler}
      >
        {({ isSubmitting }) => (
          <Form className='p-5 flex flex-col gap-4'>
            <div className='mb-4 w-1/2 mx-auto'>
              <Field
                name="title"
                as={Input}
                clearable
                bordered
                labelPlaceholder="Expense Title"
                className='w-full'
              />
              <ErrorMessage name="title" component="div" className="text-red-500 mt-2" />
            </div>

            <div className='mb-4 w-1/2 mx-auto'>
              <Field
                name="desc"
                as={Input}
                clearable
                bordered
                type="number"
                labelPlaceholder="Expense Amount"
                className='w-full'
              />
              <ErrorMessage name="desc" component="div" className="text-red-500 mt-2" />
            </div>

            <div className='mb-4 w-1/2 mx-auto'>
              <Field
                name="date"
                as={Input}
                bordered
                type="date"
                labelPlaceholder="Expense Date"
                className='w-full'
              />
              <ErrorMessage name="date" component="div" className="text-red-500 mt-2" />
            </div>

            <Button
              type="submit"
              color="primary"
              auto
              size="sm"
              className='mx-auto'
              disabled={isSubmitting}
            >
              Add Expense
            </Button>
          </Form>
        )}
      </Formik>
      <hr />
      <div className='p-8 bg-slate-200'>
        <ul>
          {renderTask}
        </ul>
      </div>
      <div className='p-8 bg-slate-200 flex justify-center items-center'>
        <Button
          color="secondary"
          auto
          size="xs"
          className=' bg-blue-500 text-white'
          onClick={totalExpenseHandler}
        >
          Total Expense
        </Button>
        <h2 className='text-2xl mt-4'>Total: RS {total.toFixed(2)}</h2>
      </div>
    
    </div>
  )
}

export default Page
