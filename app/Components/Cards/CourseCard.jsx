import React from 'react'

const CourseCard = ({moduleName}) => {
  return (
    <div className='w-80 bg-red-600 p-4 rounded-lg shadow-lg'>
      {/* <Image></Image> */}
      <ul className='space-y-2'>
        <li className='text-lg font-semibold'>{moduleName}</li>
        {/* Add more list items here if needed */}
      </ul>
    </div>
  )
}

export default CourseCard
