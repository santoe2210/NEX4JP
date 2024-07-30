/* eslint-disable react/prop-types */
import React from 'react'

const SectionHeader = ({title}) => {
  return (
		<>
            <div className='w-12 h-[.4rem] bg-bluehover mb-4'></div>
			<h2 className="text-2xl font-bold text-bluehover">{title}</h2>
		</>
	);
}

export default SectionHeader