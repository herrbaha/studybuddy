import React from 'react';

const DashboardLayout = () => {
  return (
    <div className='flex flex-col md:flex-row'>
      <div className='h-24 md:h-96 w-full md:w-1/6 lg:w-1/12 bg-slate-600 text-white'>
        SideBarContainer
      </div>
      <div className='flex flex-col mx-auto mb-20 w-full'>
        <div className='flex flex-wrap justify-center h-auto sm:h-auto my-4 mx-auto py-1 px-4 bg-red-700'>
          <div className='h-20 w-60 sm:w-48 bg-red-400 mx-2 md:mx-4 lg:mx-10 my-2 md:my-2'>CardContainer-1</div>
          <div className='h-20 w-60 sm:w-48 bg-red-400 mx-2 md:mx-4 lg:mx-10 my-2 md:my-2'>CardContainer-2</div>
          <div className='h-20 w-60 sm:w-48 bg-red-400 mx-2 md:mx-4 lg:mx-10 my-2 md:my-2'>CardContainer-3</div>
          <div className='h-20 w-60 sm:w-48 bg-red-400 mx-2 md:mx-4 lg:mx-10 my-2 md:my-2'>CardContainer-4</div>
        </div>

        <div className='h-96 w-10/12 mx-auto bg-violet-900'>
          MainSectionContainer
        </div>
        <div className='flex flex-wrap justify-center mt-4'>
          <div className='mx-2 sm:mx-4 lg:mx-10 bg-yellow-600 h-40 w-60 my-2'>RemindersContainer</div>
          <div className='mx-2 sm:mx-4 lg:mx-10 bg-yellow-600 h-40 w-60 my-2'>ActivitiesContainer</div>
          <div className='mx-2 sm:mx-4 lg:mx-10 bg-yellow-600 h-40 w-60 my-2'>NotesContainer</div>
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
