import React, { useState, useEffect } from 'react';

export default function App () {

  const data = [1,2,3,4,5,6,7,8,9];
  const [page, setPage ] = useState(0);
  const [renderCards, setRenderCards] = useState(data);
  const [scroll, setScroll] = useState(0);
  const handleNext = () => {
    document.getElementsByClassName('card-container')[0].style.transform = `translateX(${scroll - 600}px)`;
    let element = document.getElementsByClassName('carousel-control')[`${page / 3}`]
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
    let element = document.getElementsByClassName('carousel-control')[`${page / 3}`]
    element.classList.remove('active');
    if (page === 0) {
      return;
    }
    setScroll((prevScroll) => {return scroll + 600})
    setPage((previousPage) => {
      return previousPage - 3
    })
  }

  const handleWindow1 = () => {
    document.getElementsByClassName('card-container')[0].style.transform = `translateX(0px)`;
    let element = document.getElementsByClassName('carousel-control')[`${page / 3}`]
    element.classList.remove('active');
    setScroll(0)
    setPage(0)
  }
  const handleWindow2 = () => {
    document.getElementsByClassName('card-container')[0].style.transform = `translateX(-600px)`;
    let element = document.getElementsByClassName('carousel-control')[`${page / 3}`]
    element.classList.remove('active');
    setScroll(-600)
    setPage(3)
  }
  const handleWindow3 = () => {
    document.getElementsByClassName('card-container')[0].style.transform = `translateX(-1200px)`;
    setScroll(-600)
    let element = document.getElementsByClassName('carousel-control')[`${page / 3}`]
    element.classList.remove('active');
    setPage(6)
  }

  useEffect(() => {
    let element = document.getElementsByClassName('carousel-control')[`${page / 3}`]
    element.classList.add('active')
  }, [page])


  return (
    <div>
      <div className='carousel-wrapper'>
        <button className='button-left' onClick={() => handlePrev()} disabled={page === 0 ? true : false}>Previous</button>
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
        <button className='button-right' onClick={() => handleNext()} disabled={page === 6 ? true : false}>Next</button>
      </div>
      <ol className="carousel-controls">
        <li className='carousel-control' onClick={handleWindow1}></li>
        <li className='carousel-control' onClick={handleWindow2}></li>
        <li className='carousel-control' onClick={handleWindow3}></li>
      </ol>
    </div>
  )
}