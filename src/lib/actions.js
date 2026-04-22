export const createActions = async (formData) => {
  "use server";
  const name = formData.get("name");
  //   const content = formData.get("content");
  console.log("submitted name from", name);
};
