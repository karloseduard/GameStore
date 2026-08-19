using GameStore.Api.Dtos;

namespace GameStore.Api.Endpoints;

public static class GamesEndpoints
{
    const string GetGameEndPointName = "GetGame";
    private static readonly List<GameDto> games = [
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

    public static void MapGamesEndpoints(this WebApplication app)
    {
        var group = app.MapGroup("/games");
        // GET /games
        group.MapGet("/", () => games);

        // GET /games/id
        group.MapGet("/{id}", (int id) =>
        {
            var game = games.Find(game => game.Id == id);

            return game is null ? Results.NotFound() : Results.Ok(game);
        })
        .WithName(GetGameEndPointName);

        // POST /games
        group.MapPost("/", (CreateGameDto newGame) =>
        {
            GameDto game = new(
            games.Count + 1,
               newGame.Name,
               newGame.Genre,
               newGame.Price,
               newGame.ReleaseDate
           );

            games.Add(game);

            return Results.CreatedAtRoute(GetGameEndPointName, new { id = game.Id }, game);
        }

        );

        //PUT /games/{id}

        group.MapPut("/{id}", (int id, UpdateGameDto updateGame) =>
        {
            var index = games.FindIndex(game => game.Id == id);

            if (index == -1)
            {
                return Results.NotFound();
            }
            games[index] = new GameDto(
             id,
             updateGame.Name,
             updateGame.Genre,
             updateGame.Price,
             updateGame.ReleaseDate
         );



            return Results.NoContent();
        });

        // DELETE /games/{id}

        group.MapDelete("/{id}", (int id) =>
        {
            games.RemoveAll(game => game.Id == id);
            return Results.NoContent();
        });
    }


}