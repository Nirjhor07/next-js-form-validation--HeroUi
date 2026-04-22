import { Card, Link } from "@heroui/react";
import { CircleDollar } from "@gravity-ui/icons";
const BooksCard = ({ book }) => {
  const { description, price, title } = book;
  return (
    <div>
      {/* className="w-[500] h-[300]" */}
      <Card className="border border-primary">
        <CircleDollar
          aria-label="Dollar sign icon"
          className="text-primary size-6"
          role="img"
        />
        <Card.Header>
          <Card.Title>{title}</Card.Title>
          <Card.Description>{description}</Card.Description>
        </Card.Header>
        <p>Price ${price}</p>
        <Card.Footer>
          <Link
            aria-label="Go to Acme Creator Hub (opens in new tab)"
            href="https://heroui.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            Creator Hub
            <Link.Icon aria-hidden="true" />
          </Link>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default BooksCard;
