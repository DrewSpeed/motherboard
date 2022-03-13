begin tran;

create Table Restaurant (
	RestaurantId int primary key not null,
	[Address] nvarchar(250) null,
	[Name] nvarchar(250) null,
	[Hours] varchar(250) null,
	[Healthscore] varchar(250) null,
	[WheelchairAccessible] bit null,
	[OutdoorSeating] bit null,
	[GoodForGroups] bit null,
	[HighChair] bit null,
	[GenderNeutralRestroom] bit null,
	[KidsMenu] bit null,
	[Price] varchar(250) null,
	[Park] bit null
)

rollback tran;

select * from [dbo].[Restaurant]