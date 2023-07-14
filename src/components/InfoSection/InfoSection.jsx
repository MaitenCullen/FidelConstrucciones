import React from 'react'
import {InfoSec, InfoRow, InfoColumn, TextWrapper, TopLine, Heading, Subtitle, ImgWrapper, Img} from './InfoSection.elements'
import { Container, Button } from '../../globalStyles'
import { Link } from 'react-router-dom'

 const InfoSection = ({ 
    primary,
    topline,
    lightbg,
    lighttopline,
    lighttext,
    lighttextdesc,
    headline,
    description,
    buttonlabel,
    img,
    alt,
    imgstart,
    start,
}) => {
    return (
        <>
            <InfoSec lightbg={lightbg}>
                <Container>
                    <InfoRow imgstart={imgstart}>
                        <InfoColumn>
                            <TextWrapper>
                            <TopLine lighttopline={lighttopline}>{topline}</TopLine>
                            <Heading lighttext={lighttext}>{headline}</Heading>
                            <Subtitle lighttextdesc={lighttextdesc}>{description}</Subtitle>
                        
                            {buttonlabel ? <Button big fontbig primary={primary}>
                              Vamos
                            </Button> : null}
                          
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                        <ImgWrapper start={start}>
                            <Img src={img} alt={alt} />
                        </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    )
}

export default InfoSection;