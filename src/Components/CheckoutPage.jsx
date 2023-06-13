import React, { useState } from 'react';
import { ITEMS_IMAGES } from '../assets/images';
import { FaTrashAlt } from "react-icons/fa";

// eslint-disable-next-line
const products = [
  {
    productId: 1,
    productName: "Shirt",
    productCode: "X7R2OPX",
    productImage: `${ITEMS_IMAGES.itemImage1}`
  },
  {
    productId: 2,
    productName: "Skirt",
    productCode: "X2G2OPZ",
    productImage: `${ITEMS_IMAGES.itemImage2}`
  },
  {
    productId: 3,
    productName: "Cap",
    productCode: "X3W2OPY",
    productImage: `${ITEMS_IMAGES.itemImage3}`
  }
];

const CheckoutPage = () => {
  const [shirtQuantity, setShirtQuantity] = useState(0);
  const [skirtQuantity, setSkirtQuantity] = useState(0);
  const [capQuantity, setCapQuantity] = useState(0);
  // const [showModal, setShowModal] = useState(true);

  // Items price
  const shirtPrice = 20;
  const skirtPrice = 30;
  const capPrice = 10;

  // Handle the shirt quantity increment/decrement
  const handleShirtQuantity = (e) => {
    if (e.target.computedName === '+') {
      setShirtQuantity(shirtQuantity + 1);
    } else {
      if (shirtQuantity === 0) return;
      setShirtQuantity(shirtQuantity - 1);
    }
  };

  // Handle the skirt quantity increment/decrement
  const handleSkirtQuantity = (e) => {
    if (e.target.computedName === '+') {
      setSkirtQuantity(skirtQuantity + 1);
    } else {
      if (skirtQuantity === 0) return;
      setSkirtQuantity(skirtQuantity - 1);
    }
  };

  // Handle the cap quantity increment/decrement
  const handleCapQuantity = (e) => {
    if (e.target.computedName === '+') {
      setCapQuantity(capQuantity + 1);
    } else {
      if (capQuantity === 0) return;
      setCapQuantity(capQuantity - 1);
    }
  };

  // calculate shirt discount
  const clacShirtDiscount = () => {
    if (shirtQuantity >= 3) {
      // discount 5 % if the quantity greter than 3
      return (5 / 100) * shirtQuantity;
    } else {
      return 0;
    }
  };

  // calculate skirt discount
  const clacSkirtDiscount = () => {
    // if the skirt quantity is greater than 2
    return Math.floor(skirtQuantity / 2);
  };

  const calculateTotalShirt = () => {
    return (
      shirtPrice * shirtQuantity
    );
  };

  const calculateTotalSkirt = () => {
    return (
      skirtPrice * skirtQuantity
    );
  };

  const calculateTotalCap = () => {
    return (
      capPrice * capQuantity
    );
  };

  // Calculate before discount
  const totalShirtPrice = calculateTotalShirt();
  const totalSkirtPrice = calculateTotalSkirt();
  const totalCapPrice = calculateTotalCap();
  const berforeDiscountAmt = (totalShirtPrice + totalSkirtPrice + totalCapPrice);

  // store discountAmt
  const shirtDisount = clacShirtDiscount();
  const skirtDiscount = clacSkirtDiscount();
  const shirtDiscountAmt = Math.floor(shirtDisount * shirtPrice);
  const skirtDiscountAmt = Math.floor(skirtDiscount * skirtPrice);

  // calculate after discount
  const totalPrice = () => {
    return (
      (totalShirtPrice - shirtDisount * shirtPrice)
      + (totalSkirtPrice - skirtDiscount * skirtPrice) +
      totalCapPrice
    );
  };

  return (
    <>
      <div className='bg-light hstack p-4 rounded-3 flex-lg-nowrap flex-md-wrap flex-sm-wrap flex-wrap'>
        <div className="p-2 align-self-start">
          <div className=''>
            <h1 className='fs-5 ms-2'>Shopping cart</h1>
            <hr className='m-2' />
            <div className='vstack gap-3'>

              {/* ITEM 1 */}
              <div className="p-2 d-flex">
                <div className='row col col-lg-5 gx-0 '>
                  <p className='text-uppercase'>Product details</p>
                  <div className='d-flex align-items-center gap-3'>
                    <div role={"button"} className="">
                      <img src={ITEMS_IMAGES.itemImage1} alt="" />
                    </div>
                    <div>
                      <h5 className='mb-0'>Shirt</h5>
                      <p className='mb-0'>Product code X7R2OPX</p>
                    </div>
                  </div>
                </div>
                <div className='row col col-lg-2 gx-0 '>
                  <p className='text-uppercase text-center'>quantity</p>
                  <div className='d-flex justify-content-center align-items-center'>
                    <button className='border border-0' onClick={handleShirtQuantity}>-</button>
                    <div className='border border-1 ps-2 pe-2'>{shirtQuantity}</div>
                    <button className='border border-0' onClick={handleShirtQuantity}>+</button>
                  </div>
                </div>
                <div className='row col col-lg-2 gx-0 '>
                  <p className='text-uppercase text-center'>price</p>
                  <div className='text-center'>
                    <p className='mb-0'>{shirtPrice}<span>$</span></p>
                  </div>
                </div>
                <div className='row col col-lg-2 gx-0 '>
                  <p className='text-uppercase text-center'>total</p>
                  <div className='text-center'>
                    <p className='mb-0'>{calculateTotalShirt()}<span>$</span></p>
                  </div>
                </div>
                <div className='row col col-lg-1 gx-0 '>
                  <div className='d-flex align-items-center justify-content-center' role="button">
                    <FaTrashAlt />
                  </div>
                </div>
              </div>
              {/* ITEM 2 */}
              <div className="p-2 d-flex">
                <div className='row col col-lg-5 gx-0 '>
                  <div className='d-flex align-items-center gap-3'>
                    <div>
                      <img src={ITEMS_IMAGES.itemImage2} alt="" />
                    </div>
                    <div>
                      <h5 className='mb-0'>Skirt</h5>
                      <p className='mb-0'>Product code X7R2OPX</p>
                    </div>
                  </div>
                </div>
                <div className='row col col-lg-2 gx-0 '>
                  <div className='d-flex justify-content-center align-items-center'>
                    <button className='border border-0' onClick={handleSkirtQuantity}>-</button>
                    <div className='border border-1 ps-2 pe-2'>{skirtQuantity}</div>
                    <button className='border border-0' onClick={handleSkirtQuantity}>+</button>
                  </div>
                </div>
                <div className='row col col-lg-2 gx-0 '>
                  <div className='text-center'>
                    <p className='mb-0'>{skirtPrice}<span>$</span></p>
                  </div>
                </div>
                <div className='row col col-lg-2 gx-0 '>
                  <div className='text-center'>
                    <p className='mb-0'>{calculateTotalSkirt()}<span>$</span></p>
                  </div>
                </div>
                <div className='row col col-lg-1 gx-0 '>
                  <div className='d-flex align-items-center justify-content-center' role="button">
                    <FaTrashAlt />
                  </div>
                </div>
              </div>
              {/* ITEM 3 */}
              <div className="p-2 d-flex">
                <div className='row col col-lg-5 gx-0 '>
                  <div className='d-flex align-items-center gap-3'>
                    <div>
                      <img src={ITEMS_IMAGES.itemImage3} alt="" />
                    </div>
                    <div>
                      <h5 className='mb-0'>Cap</h5>
                      <p className='mb-0'>Product code X7R2OPX</p>
                    </div>
                  </div>
                </div>
                <div className='row col col-lg-2 gx-0 '>
                  <div className='d-flex justify-content-center align-items-center'>
                    <button className='border border-0' onClick={handleCapQuantity}>-</button>
                    <div className='border border-1 ps-2 pe-2'>{capQuantity}</div>
                    <button className='border border-0' onClick={handleCapQuantity}>+</button>
                  </div>
                </div>
                <div className='row col col-lg-2 gx-0 '>
                  <div className='text-center'>
                    <p className='mb-0'>{capPrice}<span>$</span></p>
                  </div>
                </div>
                <div className='row col col-lg-2 gx-0 '>
                  <div className='text-center'>
                    <p className='mb-0'>{calculateTotalCap()}<span>$</span></p>
                  </div>
                </div>
                <div className='row col col-lg-1 gx-0 '>
                  <div className='d-flex align-items-center justify-content-center' role="button">
                    <FaTrashAlt />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className=" p-2 align-self-start">
          <div className="bg-secondary-subtle">
            <h1 className='fs-5 ms-2'>Order Summary</h1>
            <hr className='m-2' />

            <div className='m-1 p-3 justify-content-center align-items-center'>

              <div className='d-flex flex-column justify-content-between gap-3'>

                <div className='d-flex justify-content-between align-items-center'>
                  <p>{shirtQuantity + skirtQuantity + capQuantity} items</p>
                  <p className=''>{berforeDiscountAmt} $</p>
                </div>
                <hr />
                <p className='text-uppercase'>discounts</p>
                {
                  shirtQuantity >= 3
                    ? <div className='d-flex justify-content-between align-items-center'>
                      <p>x3Shirt offer</p>
                      <p>-{shirtDiscountAmt}$</p>
                    </div>
                    : <div></div>
                }

                {
                  skirtQuantity >= 2
                    ? <div className='d-flex justify-content-between align-items-center gap-5'>
                      <p>2x1 Skirt offer</p>
                      <p>-{skirtDiscountAmt}$</p>
                    </div>
                    : <div></div>
                }

                <hr />

                <div className='d-flex justify-content-between align-items-center'>
                  <p>Total cost</p>
                  <p>{totalPrice()}$</p>
                </div>

                <button className='btn btn-primary'>Checkout</button>
              </div>
            </div>


          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;