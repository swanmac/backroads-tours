import aboutImg from '../images/about.jpeg';
import Title from './Title';

const About = () => {
  return (
    <section className='section' id='about'>
      <Title title='about' subTitle='us' />

      <div className='section-center about-center'>
        <div className='about-img'>
          <img src={aboutImg} className='about-photo' alt='awesome beach' />
        </div>
        <article className='about-info'>
          <h3>explore the difference</h3>
          <p>
            Backroads tours was created to enable you to experience the world a natural way. All of of tours allow you to venture to new lands for an exciting escape that you will remember for a lifetime.
          </p>
          <p>
            Check out our list of exciting destinations. 
          </p>
          <a href='#about' className='btn'>
            read more
          </a>
        </article>
      </div>
    </section>
  );
};
export default About;
