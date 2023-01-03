import styled from "styled-components"
import { colors } from "../theme/colors"

export const Wrapper = styled.div`
width:${({width})=>width ? width :'100%'};
height: ${({height})=>height ? height : 'inherit'};
display: flex;
flex-direction: column;
 justify-content: space-evenly;
align-items: center;
margin: ${({ margin }) => (margin ? margin : "")};
`
export const IndicatorWrapper =styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content:space-evenly;
gap: ${({gap})=>gap ? gap :''};
position: relative;
margin-right: auto;
/* scroll-snap-type:none;
scrollbar-gutter: none; */
scrollbar-width: 0px;
`


export const IndicatorOuterCirlce= styled.div`
width: 10px;
height: 10px;
border-radius: 50%;
padding: 12px;
background-color: ${({bg})=>bg ? bg :'blue'};
display: flex;
align-items: center;
justify-content: center;
position: relative;
border: ${({border})=>border ? border :'none'};

`

export const IndicatorInnerCircle = styled.div`
width: 3px;
height: 3px;
border-radius: 50%;
padding: 2px;
background-color: ${({bg})=>bg ? bg :'white'};
position: relative;
`



export const HorizontalLine = styled.hr`
width: ${({width})=>width ? width :''};
height: ${({height})=>height ? height :"3px"};
background-color: ${({bg})=>bg ? bg :""};
border: none;
display: ${({display})=>display ? display :'block'};
@media screen and (max-width:780px) {
    width: ${({resWidth})=>resWidth ? resWidth :''};
}
`

export const Line = styled(HorizontalLine)`
@media  screen and (max-width:1354px){
width:35%;
}
@media  screen and (max-width:1084px){
width:40%;
}
@media  screen and (max-width:817px){
width:39%;
}
@media  screen and (max-width:697px){
width:38%;
}
@media  screen and (max-width:490px){
width:37%;
}
@media  screen and (max-width:459px){
width:34%;
}
@media  screen and (max-width:397px){
width:28%;
}
@media  screen and (max-width:267px){
width:18%;
}
`

