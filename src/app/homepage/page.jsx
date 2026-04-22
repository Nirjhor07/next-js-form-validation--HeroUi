import { Button } from "@heroui/react";
export const metadata = {
  title: "Home Page",
};
const HomePage = () => {
  return (
    <div className="mx-auto container flex justify-center items-center flex-col">
      <h2> This my Home Page</h2>
      <Button variant="primary">Hero Ui Btn</Button>
    </div>
  );
};

export default HomePage;
