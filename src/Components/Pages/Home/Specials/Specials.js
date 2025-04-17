import React from 'react'
import './style.css'
import delevery from'../../../../assets/delivery.svg'

const specials = [
    {
      id: 1,
      title: "Greek salad",
      description:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
      image:
        "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/08/Greek-Salad-main.jpg",
      price: "$12.99",
    },
    {
      id: 2,
      title: "Bruschetta",
      description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
      image:
        "https://hips.hearstapps.com/hmg-prod/images/bruschetta-index-645d03e6f174d.jpg?crop=0.8890414878397711xw:1xh;center,top&resize=1200:*",
      price: "$ 5.99",
    },
    {
      id: 3,
      title: "Lemon Dessert",
      description:
        "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
      image:
        "https://www.southernliving.com/thmb/z706skTv8rLcnFwyTEnMzr_H5zQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Southern-Living_27364_SR_Lemon-Lush_13190-fd96c709fc2946a7aeb5c869f9ad470e.jpg",
      price: "$ 5.00",
    },
  ];

const Specials = () => {
  return (
    <>
    <div className='full-continor specials-containor'>
        <div className='continor-flex '>
            <div className='title-area'>
                <h3 className='title'>Specials</h3>
                <button className='online-menu-btn'>Online Menu</button>
            </div>
            <div className='card-containor'>
            {specials.map((special) => (
                <Card
                key={special.id}
                title={special.title}
                description={special.description}
                image={special.image}
                price={special.price}
                />
            ))}
            </div>
        </div>
    </div>
    </>
  )
}



const Card =({ title, description, image, price })=>{
    return(
        <>
            <div className='card'>
                <img src={image} alt='card'></img>
                <div className='card-dis'>
                    <div className='card-body'>
                        <div className='card-dis-top'>
                            <h4>{title}</h4>
                            <p className='price'>{price}</p>
                        </div>
                        <p className='discription'>
                            {description}
                        </p>
                    </div>
                    <div className='footer-text'>
                        <h5 >Order a delivery</h5>
                        <img src={delevery} className='footer-img' alt="uber eats"></img>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Specials
