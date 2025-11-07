import React from 'react'

interface DynamicTitleProps {
  title: string;
  subtitle: string;
}

const DynamicTitle: React.FC<DynamicTitleProps> = ({title, subtitle}) => {
  return (
    <div className=''>
      <h1 className=''>{title}</h1>
      {subtitle && (
          <p>{subtitle}</p>
      )}
    </div>
  )

}
export default DynamicTitle