import React from 'react'

const testimonials = [
    {
      id: 1,
      author: "Isabella Montgomery",
      description:
        "Little Lemon's Bruschetta is a symphony of flavors; perfectly crispy bread coupled with the freshest tomatoes.",
      image:
        "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-3763188.jpg&fm=jpg",
      rating: 5,
    },
    {
      id: 2,
      author: "Alexander Thompson",
      description:
        "The burger at Little Lemon was a taste revelation with its juicy, perfectly cooked meat and harmonious ingredient pairing.",
      image:
        "https://www.irreverentgent.com/wp-content/uploads/2018/03/Awesome-Profile-Pictures-for-Guys-look-away2.jpg",
      rating: 5,
    },
    {
      id: 3,
      author: "Olivia Jenkins",
      description:
        "The Greek Salad at Little Lemon was delightfully fresh and flavorful, with a high-quality dressing. ",
      image:
        "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      rating: 4,
    },
  ];

const Testimonials = () => {
    return (
        <>
            <div className='full-continor testimonial-containor'>
                <div className='continor-flex pb-20'>
                    <div className='title-area'>
                        <h3 className='title'>Testimonial</h3>
                    </div>
            <div className='testimonials-list'>
            {testimonials.map((testimonial) => (
            <Testimonial

              key={testimonial.id}
              author={testimonial.author}
              description={testimonial.description}
              image={testimonial.image}
              rating={testimonial.rating}
            />
          ))}
          </div>
                </div>
            </div>
        </>
    )
}

export default Testimonials

const Testimonial = ({ author, description, image, rating }) => {
    return (
        <>
            <div className='testimonial-box'>
                <div className='star'>
                {rating &&
                    [...Array(rating)].map((_, index) => (
                        <i className="material-icons">star</i>
                    ))}
                </div>
                <div className='testimonial-body'>
                    <div className='d-flex align-items gap-10 margin-0'>
                        <img className="testimonial-profile-picture" src={image} alt="author" height={50}></img>
                        <h3>{author}</h3>
                    </div>
                    <p>{description}</p>
                </div>
            </div>

        </>
    )
}