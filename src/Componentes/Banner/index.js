import ImgBanner from "../../Img/banner.jpg"
import { styled } from "styled-components"

const HeaderContainer = styled.header `
    background-color: #000b4d;
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