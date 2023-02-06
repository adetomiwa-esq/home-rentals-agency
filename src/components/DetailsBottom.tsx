import React, { useEffect, useState } from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

type Form = {
  name: string
  address: string
  unitNumber: string
  city: string
  state: string
  roomType: string
  price: string
  description: string
}


function DetailsBottom() {

  const [formData, setFormData] = useState<Form>({
    name: '',
    address: '',
    unitNumber: '',
    city: '',
    state: '',
    roomType: '',
    price: '',
    description: ''
  })

  const [image, setImage] = useState({})
  // function handleImage(event: Event){
  //   const target = event.target as HTMLInputElement
  //   const file: File = (target.files as FileList)[0]
  //   setImage(file)
  //   console.log(image)
  // }
  function handleImage(e: React.ChangeEvent<HTMLInputElement>){
    const file: File = (e.target.files as FileList)[0]
    setImage(file)
    console.log(image)
  }


  useEffect(()=> {
    const form = document.querySelector('form');
    const infoBox =document.querySelectorAll('.box') as NodeListOf<HTMLElement>
    const errors = document.querySelectorAll('.error') as NodeListOf<HTMLElement>

    form?.addEventListener('submit', submitForm)

    function submitForm(e: SubmitEvent){
      e.preventDefault()
      infoBox.forEach((box)=> {
        box.style.borderColor = 'rgb(146, 145, 145)';
        errors.forEach(error => {
          error.style.display = 'none'
        })
      })

      let valid = true

      const allInputs =document.querySelectorAll('.box') as NodeListOf<HTMLInputElement>

      if(allInputs[0].value === '' || allInputs[0].value.length < 3 || /\d/.test(allInputs[0].value)){
        allInputs[0].style.borderColor = 'red';
        const nameError = document.querySelector('.name-error') as HTMLElement
        nameError.style.display = 'block'
        valid = false
      }

      if(allInputs[1].value === '' || allInputs[1].value.length < 3){
        allInputs[1].style.borderColor = 'red';
        const addressError = document.querySelector('.address-error') as HTMLElement
        addressError.style.display = 'block'
        valid = false
      }

      if(allInputs[2].value === '' || /^[a-zA-Z\s., ]+$/.test(allInputs[2].value)){
        allInputs[2].style.borderColor = 'red';
        const unitError = document.querySelector('.unit-error') as HTMLElement
        unitError.style.display = 'block'
        valid = false
      }

      if(allInputs[3].value === ''){
        allInputs[3].style.borderColor = 'red';
        const cityError = document.querySelector('.city-error') as HTMLElement
        cityError.style.display = 'block'
        valid = false
      }

      if(allInputs[4].value === ''){
        allInputs[4].style.borderColor = 'red';
        const stateError = document.querySelector('.state-error') as HTMLElement
        stateError.style.display = 'block'
        valid = false
      }

      if(allInputs[5].value === ''){
        allInputs[5].style.borderColor = 'red';
        const roomError = document.querySelector('.room-error') as HTMLElement
        roomError.style.display = 'block'
        valid = false
      }

      if(allInputs[6].value === '' || /^[a-zA-Z\s., ]+$/.test(allInputs[6].value)){
        allInputs[6].style.borderColor = 'red';
        const priceError = document.querySelector('.price-error') as HTMLElement
        priceError.style.display = 'block'
        valid = false
      }

      if(allInputs[7].value === '' || allInputs[7].value.length < 3 || /\d/.test(allInputs[7].value)){
        allInputs[7].style.borderColor = 'red';
        const descriptionError = document.querySelector('.description-error') as HTMLElement
        descriptionError.style.display = 'block'
        valid = false
      }

      function resetForm(){
        setFormData({
          name: '',
          address: '',
          unitNumber: '',
          city: '',
          state: '',
          roomType: '',
          price: '',
          description: ''
        })
        clearInterval(myInterval)
      }

      const load = document.querySelector('.load') as HTMLElement

      function hideLoader(){
        load.style.display = 'none'
      }

      if(valid) {

        load.style.display = 'block'

        var myInterval = setInterval(resetForm, 3000)

        setTimeout(hideLoader, 3000)
        
        
      }
    }
  }, [])

  function updateForm(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>){
    const {name, value} = e.target
    setFormData(prevValue => {
      return {
        ...prevValue,
        [name]: value
      }
    })
  }

  return (
    <div className='mt-12'>
      <div className='text-center mb-7'>Your Property With Us And Be Confident That Your Room Willed Be Filled Out!</div>

      <form className='p-3 md:p-9 mx-auto w-10/12 border-white shadow-2xl rounded-lg'>
        <header className='text-red-500 text-center mb-9 text-2xl md:text-3xl'>Add A New Property</header>
        
        <div className='form-body'>
          <div>
            <label htmlFor='name'>Name</label>
            <input
              placeholder='Enter Name'
              id='name'
              type='text'
              name='name'
              className='user-name Input box'
              onChange={updateForm}
              value={formData.name}
            />
            <div className='error name-error'>name should contain at least three letters</div>
          </div>

          <div>
            <label htmlFor='address'>Address</label>
            <input
              placeholder='Enter Address'
              id='address'
              type='text'
              name='address'
              className='user-address Input box'
              onChange={updateForm}
              value={formData.address}
            />
            <div className='error address-error'>address should contain at least 3 characters</div>
          </div>

          <div>
            <label htmlFor='unit-number'>Unit Number</label>
            <input
              placeholder='Enter Unit'
              id='unit-number'
              type='text'
              name='unitNumber'
              className='user-unit Input box'
              onChange={updateForm}
              value={formData.unitNumber}
            />
            <div className='error unit-error'>Input valid unit number</div>
          </div>

          <div>
            <label>City</label>
            <select
              className='box'
              name='city'
              onChange={updateForm}
              value={formData.city}>
              <option value="">Select City</option>
              <option value='Lagos-mainland'>Lagos Mainland</option>
            </select>
            <div className='error city-error'>Select Option</div>
          </div>

          <div>
            <label>State</label>
            <select
              className='box'
              name='state'
              onChange={updateForm}
              value={formData.state}>
              <option value="">Select State</option>
              <option value='Lagos-mainland'>Lagos</option>
            </select>
            <div className='error state-error'>Select option</div>
          </div>

          <div>
            <label>Room Type</label>
            <select
              className='box'
              name='roomType'
              onChange={updateForm}
              value={formData.roomType}>
              <option value="">Select Room Type</option>
              <option value='3bed-room'>3-Bed Room</option>
            </select>
            <div className='error room-error'>select option</div>
          </div>

          <div>
            <label htmlFor='price'>Price</label>
            <input
              placeholder='Enter Price'
              id='price'
              type='text'
              name='price'
              className='prop-price Input box'
              onChange={updateForm}
              value={formData.price}
            />
            <div className='error price-error'>Input price</div>
          </div>

          <div className='desc'>
            <label htmlFor='description'>Description</label>
            <textarea
              placeholder='Enter Description'
              id='description'
              name='description'
              className='prop-description Input box'
              onChange={updateForm}
              value={formData.description}
            />
            <div className='error description-error'>description should contain at least 3 letters but not more than 50 letters</div>
          </div>
        </div>

        <div className='mt-7'>
          <div>Upload Photos</div>
          <label htmlFor='files' className='border-dashed border-red-400 border flex flex-col items-center rounded-md py-5 cursor-pointer'>
            <div className='font-bold'>Drag your images here, or <span className='text-red-500'>browse</span></div>
            <div className='text-zinc-600 text-sm'>Supported: JPG, JPEG, PNG</div>
          </label>
          <input
            id='files'
            type='file'
            name='file'
            onChange={handleImage}
            style={{visibility: 'hidden'}}
          />
        </div>

        <div className='mt-7 flex justify-center relative'>
          <button className='text-white bg-red-500 py-4 w-9/12 md:w-7/12 rounded-md'>Add New Property</button>
          <i className='absolute text-blue-700 text-3xl font-bold load left-1/2 -translate-x-1/2'><AiOutlineLoading3Quarters/></i>
        </div>
      </form>
    </div>
  )
}

export default DetailsBottom