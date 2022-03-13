using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Motherboard.DataAccess;
using Motherboard.Models;

namespace Motherboard.Controllers
{
    [Route("api/motherboard")]
    [ApiController]
    public class RestaurantsController : ControllerBase
    {
        RestaurantRepository _RestaurantRepository;
        public RestaurantsController(RestaurantRepository restaurantRepository)
        {
            _RestaurantRepository = restaurantRepository;
        }

        [HttpGet()] 
        public IActionResult GetAllRestaurants()
        {
            var result = _RestaurantRepository.GetAllRestaurants();

            return Ok(result);
        }

        [HttpPost("addRestaurant")]
        public IActionResult AddRestaurant(Restaurant restaurantToAdd)
        {
            var restaurant = _RestaurantRepository.AddRestaurant(restaurantToAdd);
            return Ok(restaurant);
        }
    }
}