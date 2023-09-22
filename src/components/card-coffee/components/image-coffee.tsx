import styled from 'styled-components'
type SizeImgWidth = '7.5'|'4' 
type SizeImgHeigth = '7.5'|'4'
export default function ImageCoffee({
  imgUrl,
  widthImg,
  heigthImg,
  isMarginTop = false
}
  :{
    imgUrl:string
    widthImg:SizeImgWidth
    heigthImg:SizeImgHeigth
    isMarginTop?:boolean

  }) {
  return <Image 
  src={imgUrl} 
  alt=""  
  widthImg={widthImg}
  heigthImg={heigthImg}
  isMarginTop={isMarginTop}
  />
}


interface PropsImg {
  widthImg:SizeImgWidth
  heigthImg:SizeImgHeigth
  isMarginTop:boolean
}
const Image = styled.img<PropsImg>`
width: ${props => props.widthImg}rem;
height: ${props => props.widthImg}rem;
flex-shrink: 0;
margin-top: ${({isMarginTop})=> isMarginTop? '-20px': 0}  ;
`