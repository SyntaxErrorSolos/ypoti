import Image from 'next/image'

export default function Home() {
  return (
    <div className='flex h-screen'>
      <div className='bg-green-500 rounded-lg text-center h-44'>
          <h1 className='font-bold text-3xl text-black'>
            Information
          </h1>
          <input type='text' className='bg-white' placeholder='Your username'>
          </input>
          <input type='color'></input>
      </div>
      <div className='m-auto'>
        <canvas width={512} height={512} className='bg-white'>
        </canvas>
      </div>
    </div>
  )
}
