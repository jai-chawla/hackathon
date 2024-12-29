import React,{useState} from 'react'

const Pricing = () => {

  const [selectedOption, setSelectedOption] = useState('monthly');

  const handleChange = (e) => {
    setSelectedOption(e.target.value)
  };


  return (
    <div className="flex bg-red-400 text-white h-auto w-[80vw] mx-auto rounded-lg shadow-2xl my-10 pb-10">
      {/* Left column (65% width) */}
      <div className="w-2/3 p-10">
        <h2 className="text-2xl mb-4 font-semibold">Get unlimited access to everything</h2>
        <h2 className="text-base mb-4 font-semibold">Unlimited Access to all Yoga Teacher Trainings (World's First and Most Affordable and Accessible Trainings)</h2>
        <ul className="list-disc pl-5 pr-5 space-y-2 font-thin">
          <li className='pl-4'>30-Hrs Yoga Nidra Teacher Training</li>
          <li className='pl-4'>40-Hrs Chakra Teacher Training</li>
          <li className='pl-4'>50-Hrs Pranayama Teacher Training</li>
          <li className='pl-4'>60-Hrs Yin Yoga Teacher Training</li>
          <li className='pl-4'>200-Hrs Yoga Teacher Training</li>
          <li className='pl-4'>300-Hrs Yoga Teacher Training</li>
          <li className='pl-4'>Become Certified Yoga Teachers from the comfort of your home</li>
          <li className='pl-4'>Unlimited Access to trainings on Ayurveda, Anatomy & Physiology, etc</li>
          <li className='pl-4'>Unlimited Yoga Classes, Meditations, Pranayama & Music</li>
          <li className='pl-4'>Free Accreditation by Bodsphere to teach Yoga globally</li>
        </ul>
      </div>

      {/* Right column (35% width) */}
      <div className="w-[25%] bg-red-100 text-black py-8 px-4 mt-32 rounded-xl">
        <div className="h-full">
          <h3 className="text-base font-bold mb-4">Become a part of Bodsphere's Yogic Revolution</h3>
          <div className='space-y-3'>
            <div className={`${selectedOption==='monthly' && 'bg-red-300'} bg-white rounded-lg px-2 py-3`}>
              {/* Monthly Radio Button */}
              <div className='flex justify-between'>
              <div>
              <input
                type="radio"
                id="monthly"
                name="pricing"
                value="monthly"
                checked={selectedOption === 'monthly'}
                onChange={handleChange}
              />
             
              <label htmlFor="monthly" className="ml-2 font-semibold text-sm">
                Monthly
                <p className='text-[8px] ml-5'>Pay monthly</p>
              </label>
              </div>
              <div><span className='text-xs'>$</span><span className='font-bold'>5</span> <span className='text-xs'>/m</span></div>
              </div>
              
              
            </div>

            <div className={`${selectedOption==='yearly' && 'bg-red-300'} bg-white rounded-lg px-2 py-3`}>
              {/* Yearly Radio Button */}
              <div className='flex justify-between'>
                <div>
              <input
                type="radio"
                id="yearly"
                name="pricing"
                value="yearly"
                checked={selectedOption === 'yearly'}
                onChange={handleChange}
                className=''
              />
              <label htmlFor="yearly" className="ml-2 font-semibold text-sm">
                Yearly
                <p className='text-[8px] ml-5'>Pay for full year</p>
              </label>
              </div>
              <div><span className='text-xs'>$</span><span className='font-bold'>49</span> <span className='text-xs'>/y</span></div>
              </div>
            </div>
          </div>

          <button className='rounded-full w-full mt-5 bg-red-500 text-white py-2 text-sm'>Subscribe now</button>
        </div>
      </div>
    </div>
  )
}

export default Pricing
