
DROP TABLE IF EXISTS Restaurant;

create Table Restaurant (
	RestaurantId nvarchar(250) primary key not null,
	Address nvarchar(250) null,
	Name nvarchar(250) null,
	Hours varchar(250) null,
	Healthscore varchar(250) null,
	WheelchairAccessible int null,
	OutdoorSeating int null,
	GoodForGroups int null,
	HighChair int null,
	GenderNeutralRestroom int null,
	KidsMenu int null,
	Price varchar(250) null,
	Park int null
)

