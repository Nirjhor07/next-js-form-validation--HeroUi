import { Button } from "@heroui/react";
export const metadata = {
  title: "Home Page",
};
const HomePage = () => {
  return (
    <div className="container mx-auto flex flex-col justify-center items-center space-y-5 mt-6 bg-gray-100">
      <h2> This my Home Page</h2>
      <Button variant="primary">Hero Ui Btn</Button>
    </div>
  );
};

export default HomePage;
