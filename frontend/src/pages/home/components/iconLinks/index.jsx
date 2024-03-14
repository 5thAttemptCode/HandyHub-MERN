import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import { House, HouseSimple, Lightning, PaintBrushHousehold, Toilet, Wall } from '@phosphor-icons/react'
import SubHeader from '../../../../components/subHeader'


export default function IconLinks() {

  const size = 50

  return (
    <div className='icon-links'>
      <SubHeader text="You need it, we've got it" />
      <div className="icon-links-container">
        <IconLink to="/roofer" icon={<HouseSimple size={size} />} page="Roofer" />
        <IconLink to="/mason" icon={<Wall size={size} />} page="Mason" />
        <IconLink to="/electrician" icon={<Lightning size={size} />} page="Electrician" />
        <IconLink to="/painter" icon={<PaintBrushHousehold size={size} />} page="Painter" />
        <IconLink to="/carpenter" icon={<House size={size} />} page="Carpenter" />
        <IconLink to="/plumber" icon={<Toilet size={size} />} page="Plumber" />
      </div>
    </div>
  )
}

const IconLink = ({ to, icon, page}) => {
  return(
    <Link className='icon-link' to={to}>
      {icon}
      <h4>{page}</h4>
    </Link>
  )
}