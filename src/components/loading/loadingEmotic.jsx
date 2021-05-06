import React from "react";
import ReactLoading from "react-loading";
import { Section, Title, Article, Prop, list } from "./generic";
import "../../assets/styles/General/loadings.scss";

const LoadingEmotic = () => (
  <div className='loading-back'>
  <Section>
    <Title>LANATAX</Title>
    
      <Article key="bars">
        <ReactLoading type="bars" color="#fff" />
        <Prop>Cargando</Prop>
      </Article>
   
  </Section>

  </div>
);

export default LoadingEmotic;