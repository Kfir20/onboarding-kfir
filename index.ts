import type { User } from "./models/user.model.ts";
import type { Product } from "./models/product.model.ts";

const user: User = {
    id: 1,
    fullName: "Test User",
    email: "test@test.com",
    role: "FullStack Developer"
}

console.log(user);

const product: Product = {
    id: 1,
    name: "The greatest product ever",
    price: 15,
    category: "New products"
}

console.log(product);