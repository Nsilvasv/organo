import ImgBanner from "../../Img/banner.jpg"
import { styled } from "styled-components"

const HeaderContainer = styled.header `
    background-color: #6278f7;
    text-align: center;
`
const BannerImg =  styled.img `
    width: 100%;
`   
const Banner = () => {
    return(
        <HeaderContainer>
            <BannerImg src={ImgBanner} alt="banner"/>
        </HeaderContainer>
    )
}

export default Banner