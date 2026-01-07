from fastapi import FastAPI
from models import Product
app = FastAPI()

@app.get("/")
def greet():
    return "Welcome! Hello world!"

products = [
    Product(id=1, name="Phone", description="This is phone", price=99, quantity=10),
    Product(id=2, name="Laptop", description="This is laptop", price=999, quantity=5)
]

@app.get("/products")
def get_all_products():
    return products

@app.get("/product/{id}")
def get_product_by_id(id: int):
    for product in products:
        if product.id == id:
            return product
    return "Product not found"

@app.post("/product")
def add_product(product: Product):
    products.append(product)
    return product