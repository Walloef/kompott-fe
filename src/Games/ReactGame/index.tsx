import { useStore } from '@nanostores/react';
import { isCartOpen } from '../../globaStore/ui';
// import { addCartItem, cartItems } from "./store/gameState";

const ReactGame = () => {
  const $isCartOpen = useStore(isCartOpen);
  // const $cartItems = useStore(cartItems);
  // const hardCodedItemInfo = {
  //   id: "id",
  //   name: "Product name",
  //   imageSrc: "img-src.pgn",
  // };

  // function addToCart() {
  //   isCartOpen.set(true);
  //   addCartItem(hardCodedItemInfo);
  // }

  return (
    <div
      style={{
        background: '#2c2c2c',
        color: 'white',
        padding: 12,
      }}
    >
      {/* {JSON.stringify($cartItems)} */}
      <h1
        style={{
          marginTop: '0',
          textShadow: '2px 2px 2px black',
        }}
      >
        React component
      </h1>
      <button
        style={{
          color: '#2c2c2c',
          background: 'white',
          padding: '6px var(--spacing-half)',
          boxShadow: '2px 2px 2px black',
        }}
        onClick={() => isCartOpen.set(!$isCartOpen)}
      >
        Visa vue component
      </button>
      {/* <button onClick={addToCart}>add to cart</button> */}
    </div>
  );
};

export { ReactGame };
