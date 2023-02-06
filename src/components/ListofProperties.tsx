import { useState } from 'react';
import { items } from './ItemsPNG';
import Property from './Property';


interface myItems {
  imgSrC: string;
};


function ListofProperties() {

  const [showFew, setShowFew] = useState<Boolean>(true)


  const [itemList, setItemList] = useState<myItems[]>(items.slice(0,6))
  
  
  function showAllItems(){
    setItemList(items)
    setShowFew(false)
  }

  function showFirstSix(){
    setItemList(items.slice(0,6))
    setShowFew(true)
  }

  return (
    <div className='bg-zinc-100 py-8 px-3 md:px-12'>
      <header className='flex items-center font-bold'>
        <div className='relative'>
          <h1 className='text-lg md:text-3xl'>List of properties</h1>
          <div className='w-2/6 h-1 rounded-md bg-red-500 absolute -bottom-1'></div>
        </div>

        {
          showFew ? <button className='text-white bg-red-600 ml-auto p-2 md:p-3 rounded-md' onClick={showAllItems}>View all property</button> : <button className='text-white bg-blue-500 ml-auto p-2 md:p-3 rounded-md' onClick={showFirstSix}>Show Less</button>
        }
      </header>
      

      <div className='flex flex-wrap mt-9'>
        {
          itemList.map((item: myItems, index: number) => {
            return <Property
              key={index}
              item={item}
            />
          })
        }
      </div>
    </div>
  )
}

export default ListofProperties