from fastapi import FastAPI, Body

app = FastAPI()

movies = [
    {
        "id": 1,
        "title": "Avatar",
        "overview": "En un exuberante planeta llamado Pandora viven los Na'vi, seres que ...",
        "year": "2009",
        "rating": 7.8,
        "category": "Acción"
    },
        {
        "id": 2,
        "title": "Avatar",
        "overview": "En un exuberante planeta llamado Pandora viven los Na'vi, seres que ...",
        "year": "2009",
        "rating": 7.8,
        "category": "Comedia"
    }
]

@app.get('/', tags=['Home'])
def home():
    return "Hellooooooo wooooooord"

@app.get('/movies', tags=['Movies'])
def get_movies():
    return movies

# Parámetros
@app.get('/movies/{id}', tags=['Movies'])
def get_movies_by_id(id: int):
    for movie in movies:
        if movie['id'] == id:
            return movie
    return []

@app.get('/movies/', tags=['Movies'])
def get_movie_by_category(category: str, year: int):
    for movie in movies:
        if movie['category'] == category:
            return movie
    return []

@app.post('/movies', tags=['Movies'])
def create_movies(
    id: int = Body(),
    title: str = Body(), 
    overview: str = Body(),
    year: int = Body(), 
    reating: float = Body(),
    category: str = Body()
):
    movies.append({
        'id': id,
        'title': title,
        'overview': overview,
        'year': year,
        'reating': reating,
        'category': category
    })

    return movies

@app.put('/movies/{id}', tags=['Movies'])
def update_movie(
    id: int,
    title: str = Body(), 
    overview: str = Body(),
    year: int = Body(), 
    rating: float = Body(),
    category: str = Body()
):
    for movie in movies:
        if movie['id'] == id:
            movie['title'] = title,
            movie['overview'] = overview,
            movie['year'] = year,
            movie['rating'] = rating,
            movie['category'] = category,
    
    return movies

@app.delete('/movies/{id}', tags=['Movies'])
def detele_movue(id: int):
    for movie in movies:
       if movie['id'] == id:
           movies.remove(movie)

    return movies