import React from 'react'
import Card1 from '../components/card1'

export default function Galery1() {
  const courses =[
    {
      id:1,
      title:'courses',
      'text':'random text descriping the course of ai ',
      'all':false
    },
    {
      id:2,
      title:'courses',
      'text':'random text descriping the course of ai ',
      'all':true
    },
    {
      id:3,
      title:'courses',
      'text':'random text descriping the course of ai ',
      'all':false
    },
    {
      id:4,
      title:'courses',
      'text':'random text descriping the course of ai ',
      'all':false
    },
    {
      id:5,
      title:'courses',
      'text':'random text descriping the course of ai ',
      'all':false
    },
  ]
  return (
    <div className='min-h-screen bg-white sm:w-8/12 lg:10/12  xl:6/12 w-8/12 '>
    <div className='flex justify-center my-4'>
        <h1 className='text-4xl text-blue font-bold'>Talks and Course</h1>
    </div>
    <div className = 'grid sm:grid-cols-2 md:grid-cols-3 grid-rows-2 gap-3 gap-x-6'>
     {courses.map(course => (
      <Card1 title={course.title} text={course.text} all={course.all} key={course.id}/>
     ))}
    </div>

    </div>
  )
}
