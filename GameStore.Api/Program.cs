using GameStore.Api.Dtos;

var builder = WebApplication.CreateBuilder(args);
const string GetGameEndPointName = "GetGame";
var app = builder.Build();

List<GameDto> gmaes = [
    new (
        1,
        "Hollow Knight",
        "Metroidvania",
        60.00M, 
        new DateOnly(2017,2,24)),
    new (
        2,
        "Astro Bot",
        "Platformer",
        59.99M, 
        new DateOnly(2024,2,6)),
    new (
        3,
        "Final Fantasy VII Rebirth",
        "RPG",
        69.99M,  
        new DateOnly(2017,9,29))
];
// GET /games
app.MapGet("/games", () => gmaes);
// GET /games/id
app.MapGet("/games/{id}", (int id) => gmaes.Find(game => game.Id == id))
.WithName(GetGameEndPointName);
// POST /games
app.MapPost("/games", (CreateGameDto newGame) =>
{
     GameDto game = new(
        gmaes.Count + 1,
        newGame.Name,
        newGame.Genre,
        newGame.Price,
        newGame.ReleaseDate
    );

    gmaes.Add(game);

    return Results.CreatedAtRoute( GetGameEndPointName , new {id = game.Id}, game);
}
   
);

app.Run();
