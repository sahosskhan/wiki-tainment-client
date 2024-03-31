/* eslint-disable react/prop-types */
import { HashLoader } from 'react-spinners'

const Loader = ({ smallHeight }) => {
  return (
    <div
      className={` ${smallHeight ? 'h-[250px]' : 'h-[70vh]'}
      flex 
      flex-col 
      justify-center 
      items-center `}
    >
      <HashLoader size={100} color='red' />
    </div>
  )
}

export default Loader
