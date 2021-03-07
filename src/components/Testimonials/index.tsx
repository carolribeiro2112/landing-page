import React from 'react';
import {Container} from './styles';
import CardTestimonials from '../CardTestimonials/index';

const Testimonials = () => {
  return(
    <Container>
      <div className="title">
        <h4>Testimonials</h4>
      </div>
      <CardTestimonials
        photo="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fHBlb3BsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        name="John Fang"
        website="wordfaang.com"
        text="Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla."
      />
    </Container>
  )
}

export default Testimonials;