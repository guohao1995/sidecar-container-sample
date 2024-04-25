from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"Pet Adoption Web REST API"}

# To test 
# http://127.0.0.1:8000/id/1
# http://127.0.0.1:8000/pet

#variables section
pet = [
        {
            'id': 0,
            'type': 'dog',
            'color': 'black',
            'image': '0-dog.jpg'
        },
        {
            'id': 1,
            'type': 'cat',
            'color': 'white',
            'image':'1-cat.jpg'
        },
        {
            'id': 2,
            'type': 'parrot',
            'color': 'blue',
            'image':'2-parrot.jpg'

        },
    ]
@app.get("/pet")
def get_all_pet():
    return pet

@app.get("/id/{pet_id}")
def get_pet_by_id(pet_id: int):
    for item in pet:
        if item['id'] == pet_id:
            return {'id':item['id'], 'type':item['type'], 'color':item['color'], 'image':item['image']}

    return "Please specify a pet id."