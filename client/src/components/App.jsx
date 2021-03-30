import React, { useState, useEffect } from 'react';

export default function App () {

  const data = [1,2,3,4,5,6,7,8,9];
  const [page, setPage ] = useState(0);
  const [renderCards, setRenderCards] = useState(data);
  const [scroll, setScroll] = useState(0);
  const handleNext = () => {
    document.getElementsByClassName('card-container')[0].style.transform = `translateX(${scroll - 600}px)`;
    let element = document.getElementsByClassName('carousel-control')[page / 3]
    element.classList.remove('active');
    if (page === 6) {
      return;
    }
    setScroll((prevScroll) => {return scroll - 600})
    setPage((previousPage) => {
      return previousPage + 3
    })
  }
  const handlePrev = () => {
    document.getElementsByClassName('card-container')[0].style.transform = `translateX(${scroll + 600}px)`;
    let element = document.getElementsByClassName('carousel-control')[page / 3]
    element.classList.remove('active');
    if (page === 0) {
      return;
    }
    setScroll((prevScroll) => {return scroll + 600})
    setPage((previousPage) => {
      return previousPage - 3
    })
  }

  const handleWindow = (newPage, translate) => {
    document.getElementsByClassName('card-container')[0].style.transform = `translateX(-${translate}px)`;
    let element = document.getElementsByClassName('carousel-control')[page / 3]
    if (page !== newPage) {
      element.classList.remove('active');
    }
    setScroll(translate)
    setPage(newPage)
  }

  useEffect(() => {
    let element = document.getElementsByClassName('carousel-control')[page / 3]
    element.classList.add('active')
  }, [page])


  return (
    <div>
      <div className='carousel-wrapper'>
        <button className='button-left' onClick={() => handlePrev()} disabled={page === 0 ? true : false}>></button>
        <div className='window-wrapper'>
          <div className='card-container' style={{ transition: '500ms ease 0s' }}>
            {renderCards.map((card, idx) => {
              return (
                <div className='slide' key={idx}>
                  <div className='card'>
                    {card}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <button className='button-right' onClick={() => handleNext()} disabled={page === 6 ? true : false}>></button>
      </div>
      <ol className="carousel-controls">
        <li className='carousel-control' onClick={() => handleWindow(0, 0)}></li>
        <li className='carousel-control' onClick={() => handleWindow(3, 600)}></li>
        <li className='carousel-control' onClick={() => handleWindow(6, 1200)}></li>
      </ol>
    </div>
  )
}