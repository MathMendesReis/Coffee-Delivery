import styled from 'styled-components'

export default function ImageCoffee({imgUrl}:{imgUrl:string}) {
  return <Image src={imgUrl} alt="" />
}

const Image = styled.img`
width: 7.5rem;
height: 7.5rem;
flex-shrink: 0;
margin-top: -20px;
`