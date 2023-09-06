import React from 'react'

export const Pagination = ({perPage,totalPost,paginate}) => {
    const pageNo=[];
    for(let i=1;i<=Math.ceil(totalPost/perPage);i++){
        pageNo.push(i);
    }
  return (
    <div>
        <ul className='pagination mx-5'>
            {pageNo.map(num=>(
            <li key={num} className='page-item'>
                <a onClick={()=>paginate(num)} href="!#" className='page-link'>
                    {num}
                </a>
            </li>
            ))}
        </ul>
    </div>
  )
}
