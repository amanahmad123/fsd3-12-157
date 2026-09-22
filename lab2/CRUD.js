import readline from "readline/promises";
import { stdin, stdout } from "process";
import { readFile, writeFile } from "fs/promises";

const FILE = "product.json";

const getCart = async () => {
  const data = await readFile(FILE, "utf-8");
  return JSON.parse(data);
};

const saveCart = async (myCart) => {
  await writeFile(FILE, JSON.stringify(myCart, null, 2));
};


const addToCart = async (product) => {
  const myCart = await getCart();

  const isFound = myCart.find((item) => item.id === product.id);

  if (isFound) {
    isFound.qty += product.qty;
  } else {
    myCart.push(product);
  }

  await saveCart(myCart);

  console.log(`Product added/updated with id ${product.id} into cart`);
};


const showCart = async () => {
  const data = await getCart();

  if (data.length === 0) {
    console.log("Your cart is empty.");
    return;
  }

  console.table(data);

  const total = data.reduce(
    (sum, item) => sum + item.qty * item.price,
    0
  );

  console.log("Total Price:", total);
  console.log("You have to pay: Rs.", total);
};

const removeFromCart = async (pid) => {
  const data = await getCart();

  const newData = data.filter((item) => item.id !== pid);

  if (data.length === newData.length) {
    console.log("Product ID Not Found");
  } else {
    await saveCart(newData);
    console.log("Product removed successfully");
  }
};


const updateQuantity = async (pid, newQty) => {
  const data = await getCart();

  const product = data.find((item) => item.id === pid);

  if (!product) {
    console.log("Product ID Not Found");
    return;
  }

  product.qty = newQty;

  await saveCart(data);

  console.log("Product quantity updated successfully");
};

const main = async () => {
  let choice;

  const cin = readline.createInterface({
    input: stdin,
    output: stdout,
  });

  do {
    console.log("\nWelcome to Flipkart 🛒");
    console.log("1......... Show Cart");
    console.log("2......... Add Product");
    console.log("3......... Remove Product");
    console.log("4......... Update Quantity");
    console.log("5......... Exit");

    choice = await cin.question("Enter Your Choice: ");

    switch (choice) {
      
      case "1":
        await showCart();
        break;

      
      case "2": {
        const input = await cin.question(
          "Enter id, name, price, qty: "
        );

        const [id, name, price, qty] = input
          .split(",")
          .map((item) => item.trim());

        const product = {
          id: Number(id),
          name,
          price: Number(price),
          qty: Number(qty),
        };

        await addToCart(product);
        break;
      }

      
      case "3": {
        const pid = await cin.question(
          "Enter Product ID to remove: "
        );

        await removeFromCart(Number(pid));
        break;
      }

      
      case "4": {
        const pid = await cin.question(
          "Enter Product ID: "
        );

        const newQty = await cin.question(
          "Enter New Quantity: "
        );

        await updateQuantity(
          Number(pid),
          Number(newQty)
        );

        break;
      }


      case "5":
        console.log("See You Later 👋");
        break;

      
      default:
        console.log("Invalid Choice! Try again.");
    }
  } while (choice !== "5");

  cin.close();
};

main();

// crud is show you how this do work on it in js and models
