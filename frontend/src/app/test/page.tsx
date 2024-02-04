'use client'

import React, { useState } from 'react'; 
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


export default function SkeletonLoading(){ 

const [checked, setChecked] = React.useState(false); 

const handleChange = () => { 
	setChecked(!checked); 
}; 
return ( 
	<div> 
	<label> 
		<input 
		type="checkbox"
		checked={checked} 
		onChange={handleChange} 
		/> 
		Loading 
	</label> 
	<p>{checked?<Skeleton />: 
		<h2> 
		NextJs Skeleton Loading - GeeksforGeeks 
		</h2>}</p> 

	</div> 
) 
} 
