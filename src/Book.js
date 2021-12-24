import React from 'react'
import './book.scss'

const Book = () => {
  return (
    <div>
      <div class='imgLoader'></div>

      <div class='container'>
        <h1 class='title'>
          Turning pages
          <br />
          with css
        </h1>

        <div class='credit'>* Images loaded randomly from Picsum.photos</div>

        <div class='book'>
          <div class='gap'></div>
          <div class='pages'>
            <div class='page'></div>
            <div class='page'></div>
            <div class='page'></div>
            <div class='page'></div>
            <div class='page'></div>
            <div class='page'></div>
          </div>
          <div class='flips'>
            <div class='flip flip1'>
              <div class='flip flip2'>
                <div class='flip flip3'>
                  <div class='flip flip4'>
                    <div class='flip flip5'>
                      <div class='flip flip6'>
                        <div class='flip flip7'></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Book
