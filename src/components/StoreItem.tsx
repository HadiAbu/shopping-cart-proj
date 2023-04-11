import { Button, Card } from "react-bootstrap";
import { formatCurrency } from "../utils/formatCurrency";
import { useShoppingCart } from "../context/ShoppingCartContext";
interface ItemProps {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
}

const StoreItem = ({ id, name, price, imgUrl }: ItemProps) => {
  const {
    getItemQuantity,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);
  const editMode = (
    <div
      className="d-flex flex-column align-items-center"
      style={{ gap: "0.5rem" }}
    >
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ gap: "0.5rem" }}
      >
        <Button onClick={() => decreaseQuantity(id)}>-</Button>
        <>
          <span className="fs-3">{quantity}</span> in cart
        </>
        <Button onClick={() => increaseQuantity(id)}>+</Button>
      </div>
      <Button className="btn btn-danger" onClick={() => removeFromCart(id)}>
        Remove
      </Button>
    </div>
  );
  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={imgUrl}
        alt={name}
        height={200}
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100" onClick={() => increaseQuantity(id)}>
              Add To Cart
            </Button>
          ) : (
            editMode
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default StoreItem;
