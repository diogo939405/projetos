import { useLoaderData, useParams } from 'react-router-dom'

export default function CareersDetails() {

    const {id} =useParams()
    const career = useLoaderData()

  return (
    
    <div className='careers-details'>
        <h2>CareersDetails for {career.title}</h2>
            <p>{career.salary}</p>
            <p>{career.location}</p>
            
        </div>
  )
  }
  export const careerDetailsLoader = async ({ params }) => {
    const { id } = params
    console.log('ENTROU')
    const res = await fetch('http://localhost:4000/careers/' + id)
    console.log(res,id)
    return res.json()
  }

