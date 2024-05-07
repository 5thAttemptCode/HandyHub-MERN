import React from 'react'
import './style.css'
import { CurrencyCircleDollar, Handshake, Wrench } from '@phosphor-icons/react'
import SubHeader from '@/components/subHeader'
import SubHeaderSmall from '@/components/subHeaderSmall'
import FlexContainer from '@/components/flexContainer'
import FlexContainerBox from '@/components/flexContainer/components/flexContainerBox'


export default function HowItWorks() {
  return (
    <div className="how-it-works">
      <SubHeader marginBottom="2rem" text="How it works" />
      <FlexContainer>
        <FlexContainerBox>
          <Wrench size={38} />
          <SubHeaderSmall text="Creat a gig" />
          <p>Sign up for free, set up your Gig, and offer your work to our global audience.</p>
        </FlexContainerBox>
        <FlexContainerBox>
          <Handshake size={38} />
          <SubHeaderSmall text="Deliver great work" />
          <p>Get notified when you get an order and use our system to discuss details with customers.</p>
        </FlexContainerBox>
        <FlexContainerBox>
          <CurrencyCircleDollar size={38} />
          <SubHeaderSmall text="Get paid" />
          <p>Get paid on time, every time. Payment is available for withdrawal as soon as it clears.</p>
        </FlexContainerBox>
      </FlexContainer>
    </div>
  )
}
