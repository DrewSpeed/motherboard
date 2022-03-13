using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Motherboard.Models
{
    public class Restaurant
    {
        public int RestaurantId { get; set; }
        public string Address { get; set; }
        public string Name { get; set; }
        public string Hours { get; set; }
        public string Healthscore { get; set; }
        public bool WheelchairAccessible { get; set; }
        public bool OutdoorSeating { get; set; }
        public bool GoodForGroups { get; set; }
        public bool HighChair { get; set; }
        public bool GenderNeutralRestroom { get; set; }
        public bool KidsMenu { get; set; }
        public string Price { get; set; }
        public bool Park { get; set; }
    }
}
