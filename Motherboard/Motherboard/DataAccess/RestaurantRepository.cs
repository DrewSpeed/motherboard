using Microsoft.Extensions.Configuration;
using Motherboard.Models;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Dapper;

namespace Motherboard.DataAccess
{
    public class RestaurantRepository
    {
        string ConnectionString;
        public RestaurantRepository(IConfiguration config)
        {
            ConnectionString = config.GetConnectionString("Motherboard");
        }
        public Restaurant AddRestaurant(Restaurant restaurantToAdd)
        {
            var sql = @$"insert into [RestaurantId], [Address], [Name], [Hours], [Healthscore], [WheelchairAccessible], [OutdoorSeating], [GoodForGroups], [HighChair], [GenderNeutralRestroom], [KidsMenu], [Price], [Park]
                        output inserted *
                        values(@RestaurantId, @Address, @Name, @Hours, @Healthscore, @WheelchairAccessible, @OutdoorSeating, @GoodForGroups, @HighChair, @GenderNeutralRestroom, @KidsMenu, @Price, @Park)";

            using (var db = new SqlConnection(ConnectionString))
            {
                var result = db.QueryFirstOrDefault<Restaurant>(sql, restaurantToAdd);
                return result;
            }
        }
        public IEnumerable<Restaurant> GetAllRestaurants()
        {
            var sql = @"select *
                        from Restaurant";

            using (var db = new SqlConnection(ConnectionString))
            {
                var restaurants = db.Query<Restaurant>(sql);
                return restaurants;
            }
        }
    }
}
