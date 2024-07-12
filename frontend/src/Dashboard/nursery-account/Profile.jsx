import React, { useState,useEffect } from 'react'
import {AiOutlineDelete} from 'react-icons/ai'
import uploadImageToCloudinary from '../../utils/uploadCloudinary'
import { BASE_URL, token } from '../../config'
import {toast} from 'react-toastify'

const Profile = ({nurseryData}) => {

    const [formData, setFormData] = useState({
        name:'',
        email:'',
        phone:'',
        bio:'',
        gender:'',
        specialization:'',
        ticketPrice:0,
        qualifications:[],
        experiences:[],
        timeSlots:[],
        about:'',
        photo:null,
    })

    useEffect(() => {
        setFormData({
            name: nurseryData?.name,
            email: nurseryData?.email,
            phone: nurseryData?.phone,
            bio: nurseryData?.bio,
            gender: nurseryData?.gender,
            specialization: nurseryData?.specialization,
            ticketPrice: nurseryData?.ticketPrice,
            qualifications: nurseryData?.qualifications,
            experiences: nurseryData?.experiences,
            timeSlots: nurseryData?.timeSlots,
            about: nurseryData?.about,
            photo: nurseryData?.photo,
        });
    }, [nurseryData]);

    const handleInputChange = (e) =>{
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleFileInputChange = async(e)=>{
        const file = e.target.files[0];
        const data = await uploadImageToCloudinary(file);

        setFormData({...formData, photo:data?.url})
    }

    const updateProfileHandler = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`${BASE_URL}/nurserys/${nurseryData._id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(formData),
            });
    
            const result = await res.json();
    
            if (!res.ok) {
                throw new Error(result.message);
            }
            toast.success('Profile updated successfully');
        } catch (error) {
            toast.error(error.message);
        }
    };
    
    // reusable function for deleting item
    const deleteItem = (key,index) =>{
        setFormData(prevFormData => ({
            ...prevFormData, [key]:prevFormData[key].filter((_,i) => i !== index)
        }))
    }

    // reusable function for adding item
    const addItem = (key,item) => {
        setFormData(prevFormData => ({...prevFormData, [key]:[...prevFormData[key],item]}))
    }

    // reusable function for updating item
    const handleReusableInputChangeFunc = (key, index, event) => {
        const {name, value} = event.target

        setFormData(prevFormData => {
            const updateItems = [...prevFormData[key]]
            updateItems[index][name] = value

            return {
                ...prevFormData,
                [key]: updateItems,

            }
        })
    }

    const addQualification = (e) =>{
        e.preventDefault();

        addItem('qualifications', {
            startingDate:'',endingDate:'', certification:'District Best Nursery', organisation:'Uttar Pradesh Govt.'
        })
    }

    const handleQualificationChange = (event,index) =>{
        handleReusableInputChangeFunc('qualifications', index, event)
    }

    const deleteQualification = (e,index) =>{
        e.preventDefault()
        deleteItem('qualifications',index)
    }

    const addExperience = (e) =>{
        e.preventDefault();

        addItem('experiences', {
            startingDate:'',endingDate:'', achievement:'3 time people best nursery app', location:'Patiala, Punjab'
        })
    }

    const handleExperienceChange = (event,index) =>{
        handleReusableInputChangeFunc('experiences', index, event)
    }

    const deleteExperience = (e,index) =>{
        e.preventDefault()
        deleteItem('experiences',index)
    }

    const addTimeSlot = (e) =>{
        e.preventDefault();

        addItem('timeSlots', {
            day:'Monday',endingTime:'04:30', startingTime:'10:00'
        })
    }

    const handleTimeSlotChange = (event,index) =>{
        handleReusableInputChangeFunc('timeSlots', index, event)
    }

    const deleteTimeSlot = (e,index) =>{
        e.preventDefault()
        deleteItem('timeSlots',index)
    }

  return (
    <div>
        <h2 className="text-headingColor font-bold text-[24px] leading-9 mb-10 ">
            Profile Information
        </h2>

        <form action="">
            <div className="mb-5">
                <p className="form__label">Name</p>
                <input type="text" name='name' value={formData.name} onChange={handleInputChange} placeholder='Full Name' className='form__input' />
            </div>

            <div className="mb-5">
                <p className="form__label">Email*</p>
                <input type="email" name='email' value={formData.email} onChange={handleInputChange} placeholder='Email' className='form__input' readOnly aria-readonly disabled="true" />
            </div>

            <div className="mb-5">
                <p className="form__label">Phone</p>
                <input type="number" name='phone' value={formData.phone} onChange={handleInputChange} placeholder='Phone' className='form__input'  />
            </div>

            <div className="mb-5">
                <p className="form__label">Bio</p>
                <input type="text" name='bio' value={formData.bio} onChange={handleInputChange} placeholder='Bio' className='form__input'  maxLength={100} />
            </div>

            <div className="mb-5">
                <div className="grid grid-cols-3 gap-5 mb-[30px]">
                    <div>
                        <p className="form__label">Gender*</p>
                        <select name="gender" value={formData.gender} onChange={handleInputChange} className='form__input py-3.5' >
                            <option value="">Select</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <div>
                        <p className="form__label">Specialization*</p>
                        <select name="specialization" value={formData.specialization} onChange={handleInputChange} className='form__input py-3.5'>
                            <option value="">Select</option>
                            <option value="roses">Roses</option>
                            <option value="tulips">Tulips</option>
                            <option value="lilies">Lilies</option>
                            <option value="daffodils">Daffodils</option>
                            <option value="sunflowers">Sunflowers</option>
                            <option value="orchids">Orchids</option>
                            <option value="dahlias">Dahlias</option>
                            <option value="peonies">Peonies</option>
                            <option value="marigolds">Marigolds</option>
                            <option value="iris">Iris</option>
                            <option value="bird_of_paradise">Bird of Paradise</option>
                            <option value="lotus">Lotus</option>
                            <option value="hibiscus">Hibiscus</option>
                            <option value="protea">Protea</option>
                            <option value="passionflower">Passionflower</option>
                            <option value="anthurium">Anthurium</option>
                            <option value="salvia">Salvia</option>

                        </select>
                    </div>

                    <div>
                        <p className="form__label">Ticket Price*</p>
                        <input type="number" name='ticketPrice' value={formData.ticketPrice} onChange={handleInputChange} placeholder='100' className='form__input' />
                    </div>

                </div>
            </div>

            <div className="mb-5">
                <p className="form__label">Qualifications*</p>
                {formData.qualifications?.map((item,index)=>(
                    <div key={index}>
                        <div>
                            <div className="grid grid-cols-2 gap-5">
                                <div>
                                    <p className="form__label">Starting Date*</p>
                                    <input type="date" name='startingDate' value={item.startingDate} className='form__input' onChange={e=>handleQualificationChange(e,index)} />
                                </div>

                                <div>
                                    <p className="form__label">Ending Date*</p>
                                    <input type="date" name='endingDate' value={item.endingDate} className='form__input' onChange={e=>handleQualificationChange(e,index)} />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-5 mt-5">
                                <div>
                                    <p className="form__label">Certification*</p>
                                    <input type="text" name='certification' value={item.certification} className='form__input' onChange={e=>handleQualificationChange(e,index)} />
                                </div>

                                <div>
                                    <p className="form__label">Organisation*</p>
                                    <input type="text" name='organisation' value={item.organisation} className='form__input' onChange={e=>handleQualificationChange(e,index)} />
                                </div>
                            </div>

                            <button onClick={e=>deleteQualification(e,index)} className='bg-red-600 p-2 rounded-full text-white text-[18px] mt-2 mb-[30px] cursor-pointer '>
                                <AiOutlineDelete/>
                            </button>

                        </div>
                    </div>
                ))}

            <button onClick={addQualification} className='bg-[#1a1a1a] py-2 px-5 rounded text-white h-fit cursor-pointer'>
                Add Qualification
            </button>

            </div>

            <div className="mb-5">
                <p className="form__label">Experiences*</p>
                {formData.experiences?.map((item,index)=>(
                    <div key={index}>
                        <div>
                            <div className="grid grid-cols-2 gap-5">
                                <div>
                                    <p className="form__label">Starting Date*</p>
                                    <input type="date" name='startingDate' value={item.startingDate} className='form__input' onChange={e=>handleExperienceChange(e,index)} />
                                </div>

                                <div>
                                    <p className="form__label">Ending Date*</p>
                                    <input type="date" name='endingDate' value={item.endingDate} className='form__input' onChange={e=>handleExperienceChange(e,index)} />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-5 mt-5">
                                <div>
                                    <p className="form__label">Achievement*</p>
                                    <input type="text" name='achievement' value={item.achievement} className='form__input' onChange={e=>handleExperienceChange(e,index)} />
                                </div>

                                <div>
                                    <p className="form__label">Location*</p>
                                    <input type="text" name='location' value={item.location} className='form__input' onChange={e=>handleExperienceChange(e,index)}/>
                                </div>
                            </div>

                            <button onClick={e=>deleteExperience(e,index)} className='bg-red-600 p-2 rounded-full text-white text-[18px] mt-2 mb-[30px] cursor-pointer '>
                                <AiOutlineDelete/>
                            </button>

                        </div>
                    </div>
                ))}

            <button onClick={e=>addExperience(e)} className='bg-[#1a1a1a] py-2 px-5 rounded text-white h-fit cursor-pointer'>
                Add Experience
            </button>

            </div>

            <div className="mb-5">
                <p className="form__label">Time Slots*</p>
                {formData.timeSlots?.map((item,index)=>(
                    <div key={index}>
                        <div>
                            <div className="grid grid-cols-2 md:grid-cols-4 mb-[30px] gap-5">
                                <div>
                                    <p className="form__label">Days*</p>
                                    <select name="day" value={item.day} className='form__input py-3.5' onChange={e=>handleTimeSlotChange(e,index)}>
                                        <option value="">Select</option>
                                        <option value="monday">Monday</option>
                                        <option value="tuesday">Tuesday</option>
                                        <option value="wednesday">Wednesday</option>
                                        <option value="thursday">Thursday</option>
                                        <option value="friday">Friday</option>
                                        <option value="saturday">Saturday</option>
                                        <option value="sunday">Sunday</option>
                                    </select>
                                </div>

                                <div>
                                    <p className="form__label">Starting Time*</p>
                                    <input type="time" name='startingTime' value={item.startingTime} className='form__input' onChange={e=>handleTimeSlotChange(e,index)} />
                                </div>

                                <div>
                                    <p className="form__label">Ending Time*</p>
                                    <input type="time" name='endingTime' value={item.endingTime} className='form__input' onChange={e=>handleTimeSlotChange(e,index)} />
                                </div>

                                <div className='flex items-center '>
                                <button onClick={e=>deleteTimeSlot(e,index)} className='bg-red-600 p-2 rounded-full text-white text-[18px] mb-[30px] cursor-pointer mt-6  '>
                                    <AiOutlineDelete/>
                                </button>
                                </div>
                            </div>

                        </div>
                    </div>
                ))}

            <button onClick={e=>addTimeSlot(e)} className='bg-[#1a1a1a] py-2 px-5 rounded text-white h-fit cursor-pointer'>
                Add TimeSlot
            </button>

            </div>

            <div className="mb-5">
                <p className="form__label">About*</p>
                <textarea name="about" rows={5} value={formData.about} placeholder='Write about you' onChange={handleInputChange} className='form__input'></textarea>
            </div>

            <div className="mb-5 flex items-center gap-3 ">
            {formData.photo && 
                <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center ">
                  <img src={formData.photo} alt="" className='w-full rounded-full ' />
                </figure>}

                <div className='relative w-[130px] h-[50px] '>
                  <input 
                    type="file" 
                    name='photo' 
                    onChange={handleFileInputChange}
                    id='customFile' 
                    accept='.jpg, .png' 
                    className='absolute top-0 left-0 w-full opacity-0 cursor-pointer '
                  />

                    <label htmlFor="customFile" className='absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#00ff5946] text-headingColor font-semibold rounded-lg truncate cursor-pointer '>
                      Upload Photo
                    </label>
                </div>
            </div>

            <div className="mt-7">
                <button type='submit' onClick={updateProfileHandler} className="bg-primaryColor text-white text-[18px] leading-[30px] w-full py-3 px-4 rounded-lg ">
                    Update Profile
                </button>
            </div>
        </form>
    </div>
  )
}

export default Profile