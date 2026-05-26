import React from 'react'
import LeftContent from './LeftContent'
import RigtContent from './RightContent'

const Page1Content = (props) => {
  return (
    <div className="pb-16 pt-6 px-18  h-[90vh] flex gap-10 items-center">
<LeftContent />
<RigtContent users={props.users} />
    </div>
  )
}

export default Page1Content
