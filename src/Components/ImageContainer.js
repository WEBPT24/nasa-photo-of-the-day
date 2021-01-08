import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    margin: auto;
    width: 90%
`;

export default function ImageContainer(props) {
    
    const { data } = props;
    console.log(data);
    return (
      
        <div className="photo-container">
            <div className="photo">
              <img src={data.url} alt="NASA Photo Of The Day"></img>
            </div>
    
            <Container className="photo-info">
              <div>
                <h3>{data.title}</h3>
                <p>By: {data.copyright}</p>
                <p>{data.date}</p>
                <p>{data.explanation}</p>
              </div>
            </Container>
        </div> 
        
    )

}

