//database init
db.createCollection("users");
db.createCollection("artists");
db.createCollection("admins");
db.createCollection("agents");
db.createCollection("albums");
db.createCollection("songs");
db.createCollection("genres");
db.createCollection("contracts");

// --DATABASE FILL--
//COLLECTION: users 
db.users.insert({ "id": 1, "firstName": "John", "lastName": "Doe", "dateOfBirth": "1.1.1995." , "username" : "johndoe" , "password" : "aa112222"});
db.users.insert({ "id": 2, "firstName": "Frank", "lastName": "Foe", "dateOfBirth": "5.4.1957." , "username" : "frankfoe" , "password" : "bb112222"});
db.users.insert({ "id": 3, "firstName": "Mark", "lastName": "Moe", "dateOfBirth": "20.12.1979.", "username" : "markmoe" , "password" : "cc112222" });
db.users.insert({ "id": 4, "firstName": "Paula", "lastName": "Poe", "dateOfBirth": "11.11.1992.", "username" : "paulapoe" , "password" : "dd112222" });
db.users.insert({ "id": 5, "firstName": "Harry", "lastName": "Styles", "dateOfBirth": "22.6.1994.", "username" : "harrystyles" , "password" : "hs000000"});
db.users.insert({ "id": 6, "firstName": "Kanye", "lastName": "West", "dateOfBirth": "1.2.1978." , "username" : "kanyewest" , "password" : "kw000000"});
db.users.insert({ "id": 7, "firstName": "David", "lastName": "Jones", "dateOfBirth": "2.2.1954.", "username" : "davidjones" , "password" : "dj000000" });
db.users.insert({ "id": 8, "firstName": "Katheryn", "lastName": "Hudson", "dateOfBirth": "2.3.1990." , "username" : "katherynhudson" , "password" : "kh000000"});
db.users.insert({ "id": 9, "firstName": "Mark", "lastName": "Smith", "dateOfBirth": "22.5.1990." , "username" : "marksmith" , "password" : "ms000000"});
db.users.insert({ "id": 10, "firstName": "Sam", "lastName": "Martin", "dateOfBirth": "11.10.1980." , "username" : "sammartin" , "password" : "sm101010"});
db.users.insert({ "id": 11, "firstName": "Christopher", "lastName": "Breaux", "dateOfBirth": "28.10.1987." , "username" : "cristopherbreaux" , "password" : "cb010101"});
db.users.insert({ "id": 12, "firstName": "Donald", "lastName": "Glover", "dateOfBirth": "25.9.1983." , "username" : "donaldglover" , "password" : "dg777777" });
db.users.insert({ "id": 13, "firstName": "Kendrick", "lastName": "Lamar Duckworth", "dateOfBirth": "17.6.1987.", "username" : "kendricklamar" , "password" : "thegoat0" });
db.users.insert({ "id": 14, "firstName": "John", "lastName": "Smith", "dateOfBirth": "13.6.1998." , "username" : "johnsmith" , "password" : "js030303"});
db.users.insert({ "id": 15, "firstName": "Rob", "lastName": "East", "dateOfBirth": "17.8.1967." , "username" : "robeast" , "password" : "eastrob1"});
db.users.insert({ "id": 16, "firstName": "Bob", "lastName": "Stone", "dateOfBirth": "22.6.1973." , "username" : "bobstone" , "password" : "bs223344" });


//COLLECTION: artists 
db.artists.insert({ "userId": 5, "imageURL": "https://media.npr.org/assets/img/2020/02/27/wide-usehpromophotohelenepambrun-72fdb64792139d94a06f18686d0bb3131a238a70-s1600-c85.webp", "artistName": "Harry Styles", "genre": 1, "contract": 1, "albums": [1, 2] });
db.artists.insert({ "userId": 6, "imageURL": "https://variety.com/wp-content/uploads/2020/10/kanye-west.jpg?w=681&h=383&crop=1", "artistName": "Ye", "genre": 2, "contract": 2, "albums": [3, 7] });
db.artists.insert({ "userId": 7, "imageURL": "https://ychef.files.bbci.co.uk/1600x900/p01j3jyb.webp", "artistName": "David Bowie", "genre": 3, "contract": 3, "albums": [4] });
db.artists.insert({ "userId": 8, "imageURL": "https://www.biography.com/.image/ar1:1%2Ccfill%2Ccssrgb%2Cgface%2Cqauto:good%2Cw300/MTU1NDc3Nzc4ODAyNjgxODE1/-katy-perry-attends-the-chanel-haute-couture-fallwinter-2017-2018-show-as-part-of-haute-couture-paris-fashion-week-on-july-4-2017-in-paris-france-photo-by-pascal-le-segretaingetty-images-square.jpg", "artistName": "Katy Perry", "genre": 1, "contract": 4, "albums": [5, 6] });
db.artists.insert({ "userId": 11, "imageURL": "https://www.rollingstone.com/wp-content/uploads/2019/09/frank-ocean-next-album-lie.jpg?resize=1800,1200&w=1800", "artistName": "Frank Ocean", "genre": 4, "contract": 5, "albums": [8, 9] });
db.artists.insert({ "userId": 12, "imageURL": "https://i.scdn.co/image/ab6761610000e5eb3ef779aa0d271adb2b6a3ded", "artistName": "Childish Gambino", "genre": 5, "contract": 6, "albums": [10, 11] });
db.artists.insert({ "userId": 13, "imageURL": "https://www.biography.com/.image/ar4:3%2Ccfill%2Ccssrgb%2Cflprogressive%2Cqauto:good%2Cw1200/MTQ3NTI2NTg2OTE1MTA0MjM4/kenricklamarphotobyjasonmerrittgettyimagesentertainmentgetty476933160.jpg", "artistName": "Kendrick Lamar", "genre": 2, "contract": 7, "albums": [12, 13] });

// artists NEW
db.artists.insert({ "userId": 5, "imageURL": "https://media.npr.org/assets/img/2020/02/27/wide-usehpromophotohelenepambrun-72fdb64792139d94a06f18686d0bb3131a238a70-s1600-c85.webp", "artistName": "Harry Styles", "genre": "pop", "contract": 1, "albums": [1, 2] });
db.artists.insert({ "userId": 6, "imageURL": "https://variety.com/wp-content/uploads/2020/10/kanye-west.jpg?w=681&h=383&crop=1", "artistName": "Ye", "genre": "rap", "contract": 2, "albums": [3, 7] });
db.artists.insert({ "userId": 7, "imageURL": "https://ychef.files.bbci.co.uk/1600x900/p01j3jyb.webp", "artistName": "David Bowie", "genre": "rock", "contract": 3, "albums": [4] });
db.artists.insert({ "userId": 8, "imageURL": "https://www.biography.com/.image/ar1:1%2Ccfill%2Ccssrgb%2Cgface%2Cqauto:good%2Cw300/MTU1NDc3Nzc4ODAyNjgxODE1/-katy-perry-attends-the-chanel-haute-couture-fallwinter-2017-2018-show-as-part-of-haute-couture-paris-fashion-week-on-july-4-2017-in-paris-france-photo-by-pascal-le-segretaingetty-images-square.jpg", "artistName": "Katy Perry", "genre": "pop", "contract": 4, "albums": [5, 6] });
db.artists.insert({ "userId": 11, "imageURL": "https://www.rollingstone.com/wp-content/uploads/2019/09/frank-ocean-next-album-lie.jpg?resize=1800,1200&w=1800", "artistName": "Frank Ocean", "genre": "r&b", "contract": 5, "albums": [8, 9] });
db.artists.insert({ "userId": 12, "imageURL": "https://i.scdn.co/image/ab6761610000e5eb3ef779aa0d271adb2b6a3ded", "artistName": "Childish Gambino", "genre": "neo soul", "contract": 6, "albums": [10, 11] });
db.artists.insert({ "userId": 13, "imageURL": "https://www.biography.com/.image/ar4:3%2Ccfill%2Ccssrgb%2Cflprogressive%2Cqauto:good%2Cw1200/MTQ3NTI2NTg2OTE1MTA0MjM4/kenricklamarphotobyjasonmerrittgettyimagesentertainmentgetty476933160.jpg", "artistName": "Kendrick Lamar", "genre": "rap", "contract": 7, "albums": [12, 13] });

//COLLECTION: admins
db.admins.insert({ "userId": 9, "position": "CEO" });
db.admins.insert({ "userId": 10, "position": "CFO" });

//COLLECTION: agents
db.agents.insert({ "id": 1, "contractId": 1, "artistId": 5 });
db.agents.insert({ "id": 2, "contractId": 2, "artistId": 6 });
db.agents.insert({ "id": 3, "contractId": 3, "artistId": 7 });
db.agents.insert({ "id": 4, "contractId": 4, "artistId": 8 });
db.agents.insert({ "id": 14, "contractId": 5, "artistId": 11 });
db.agents.insert({ "id": 15, "contractId": 6, "artistId": 12 });
db.agents.insert({ "id": 16, "contractId": 7, "artistId": 13 });

//COLLECTION: albums 
db.albums.insert({ "id": 1, "year": "2017", "coverImage": "https://upload.wikimedia.org/wikipedia/en/a/a0/HarryStyles-albumcover.png", "title": "Harry Styles", "songIds": [1, 2, 3, 4] });
db.albums.insert({ "id": 2, "year": "2019", "coverImage": "https://muzikercdn.com/uploads/products/4946/494636/7519d789.jpg", "title": "Fine Line", "songIds": [5, 6, 7, 8] });
db.albums.insert({ "id": 3, "year": "2021", "coverImage": "https://www.muzika.hr/wp-content/uploads/2022/01/Kanye-Donda-1.jpg", "title": "Donda", "songIds": [9, 10, 11, 12] });
db.albums.insert({ "id": 4, "year": "1969", "coverImage": "https://upload.wikimedia.org/wikipedia/en/b/b9/DavidBowiePhilips.jpg", "title": "Space Oddity", "songIds": [13, 14, 15, 16] });
db.albums.insert({ "id": 5, "year": "2010", "coverImage": "https://upload.wikimedia.org/wikipedia/en/9/9d/KatyPerry-TeenageDream%28album%29.png", "title": "Teenage Dream", "songIds": [17, 18, 19] });
db.albums.insert({ "id": 6, "year": "2013", "coverImage": "https://upload.wikimedia.org/wikipedia/en/b/b7/KatyPerry-Prismcover.png", "title": "Prism", "songIds": [20, 21, 22] });
db.albums.insert({ "id": 7, "year": "2007", "coverImage": "https://upload.wikimedia.org/wikipedia/en/7/70/Graduation%28album%29.jpg", "title": "Graduation", "songIds": [23, 24, 25] });
db.albums.insert({ "id": 8, "year": "2012", "coverImage": "https://upload.wikimedia.org/wikipedia/en/2/28/ChannelORANGE.jpg", "title": "Channel Orange", "songIds": [26, 27, 28, 29] });
db.albums.insert({ "id": 9, "year": "2017", "coverImage": "https://upload.wikimedia.org/wikipedia/en/thumb/a/a0/Blonde-FrankOcean.jpeg/220px-Blonde-FrankOcean.jpeg", "title": "Blonde", "songIds": [30, 31, 32, 33] });
db.albums.insert({ "id": 10, "year": "2016", "coverImage": "https://upload.wikimedia.org/wikipedia/en/1/10/ChildishGambino-Awaken%2CMyLove%21.png", "title": "Awaken, My Love!", "songIds": [34, 35, 36, 37] });
db.albums.insert({ "id": 11, "year": "2016", "coverImage": "http://groundup.org.za/sites/default/files/styles/articleimage/public/field/image/childish.jpg?itok=qTkdbSpp", "title": "Because the Internet", "songIds": [38, 39, 30, 41] });
db.albums.insert({ "id": 12, "year": "2012", "coverImage": "https://thesoniccollective.com/wp-content/uploads/2019/03/goodkid.jpg", "title": "good kid, m.A.A.d city", "songIds": [42, 43, 44, 45] });
db.albums.insert({ "id": 13, "year": "2017", "coverImage": "https://upload.wikimedia.org/wikipedia/en/5/51/KendrickLamar-Damn.png", "title": "DAMN.", "songIds": [46, 47, 48, 49] });

//COLLECTION: songs
db.songs.insert({ "id": 1, "albumId": 1, "artistIds": [5], "title": "Carolina" });
db.songs.insert({ "id": 2, "albumId": 1, "artistIds": [5], "title": "Sign of the Times" });
db.songs.insert({ "id": 3, "albumId": 1, "artistIds": [5], "title": "Only Angel" });
db.songs.insert({ "id": 4, "albumId": 1, "artistIds": [5], "title": "Kiwi" });
db.songs.insert({ "id": 5, "albumId": 2, "artistIds": [5], "title": "Golden" });
db.songs.insert({ "id": 6, "albumId": 2, "artistIds": [5], "title": "Watermelon Sugar" });
db.songs.insert({ "id": 7, "albumId": 2, "artistIds": [5], "title": "Adore You" });
db.songs.insert({ "id": 8, "albumId": 2, "artistIds": [5], "title": "Cherry" });
db.songs.insert({ "id": 9, "albumId": 3, "artistIds": [6], "title": "Come to Life" });
db.songs.insert({ "id": 10, "albumId": 3, "artistIds": [6], "title": "Lord I Need You" });
db.songs.insert({ "id": 11, "albumId": 3, "artistIds": [6], "title": "Hurricane" });
db.songs.insert({ "id": 12, "albumId": 3, "artistIds": [6], "title": "Heaven and Hell"});
db.songs.insert({ "id": 13, "albumId": 4, "artistIds": [7], "title": "Space Oddity" });
db.songs.insert({ "id": 14, "albumId": 4, "artistIds": [7], "title": "Letter to Hermione" });
db.songs.insert({ "id": 15, "albumId": 4, "artistIds": [7], "title": "Janine" });
db.songs.insert({ "id": 16, "albumId": 4, "artistIds": [7], "title": "An Occasional Dream" });
db.songs.insert({ "id": 17, "albumId": 5, "artistIds": [8], "title": "California Gurls" });
db.songs.insert({ "id": 18, "albumId": 5, "artistIds": [8], "title": "Teenage Dream" });
db.songs.insert({ "id": 19, "albumId": 5, "artistIds": [8], "title": "Not Like the Movies" });
db.songs.insert({ "id": 20, "albumId": 6, "artistIds": [8], "title": "Roars" });
db.songs.insert({ "id": 21, "albumId": 6, "artistIds": [8], "title": "This Moment" });
db.songs.insert({ "id": 22, "albumId": 6, "artistIds": [8], "title": "Spiritual" });
db.songs.insert({ "id": 23, "albumId": 7, "artistIds": [6], "title": "Good Morning" });
db.songs.insert({ "id": 24, "albumId": 7, "artistIds": [6], "title": "Stronger" });
db.songs.insert({ "id": 25, "albumId": 7, "artistIds": [6], "title": "Champion" });
db.songs.insert({ "id": 26, "albumId": 8, "artistIds": [11], "title": "Lost" });
db.songs.insert({ "id": 27, "albumId": 8, "artistIds": [11], "title": "White" });
db.songs.insert({ "id": 28, "albumId": 8, "artistIds": [11], "title": "Pink Matter" });
db.songs.insert({ "id": 29, "albumId": 8, "artistIds": [11], "title": "End" });
db.songs.insert({ "id": 30, "albumId": 9, "artistIds": [11], "title": "Pink+White" });
db.songs.insert({ "id": 31, "albumId": 9, "artistIds": [11], "title": "Ivy" });
db.songs.insert({ "id": 32, "albumId": 9, "artistIds": [11], "title": "Nights" });
db.songs.insert({ "id": 33, "albumId": 9, "artistIds": [11], "title": "White Ferrari" });
db.songs.insert({ "id": 34, "albumId": 10, "artistIds": [12], "title": "Me and Your Momma" });
db.songs.insert({ "id": 35, "albumId": 10, "artistIds": [12], "title": "Riot" });
db.songs.insert({ "id": 36, "albumId": 10, "artistIds": [12], "title": "Redbone" });
db.songs.insert({ "id": 37, "albumId": 10, "artistIds": [12], "title": "Have Some Love" });
db.songs.insert({ "id": 38, "albumId": 11, "artistIds": [12], "title": "Crawl" });
db.songs.insert({ "id": 39, "albumId": 11, "artistIds": [12], "title": "Dial Up" });
db.songs.insert({ "id": 40, "albumId": 11, "artistIds": [12], "title": "Shadows" });
db.songs.insert({ "id": 41, "albumId": 11, "artistIds": [12], "title": "The Worst Guys" });
db.songs.insert({ "id": 42, "albumId": 12, "artistIds": [13], "title": "Good Kid" });
db.songs.insert({ "id": 43, "albumId": 12, "artistIds": [13], "title": "Backseat Freestyle" });
db.songs.insert({ "id": 44, "albumId": 12, "artistIds": [13], "title": "Money Trees" });
db.songs.insert({ "id": 45, "albumId": 12, "artistIds": [13], "title": "m.A.A.d city" });
db.songs.insert({ "id": 46, "albumId": 13, "artistIds": [13], "title": "DNA." });
db.songs.insert({ "id": 47, "albumId": 13, "artistIds": [13], "title": "ELEMENT." });
db.songs.insert({ "id": 48, "albumId": 13, "artistIds": [13], "title": "HUMBLE." });
db.songs.insert({ "id": 49, "albumId": 13, "artistIds": [13], "title": "DUCKWORTH." });


//COLLECTION: genres 
db.genres.insert({ "id": 1, "name": "pop", "artistIds": [5, 8] });
db.genres.insert({ "id": 2, "name": "rap", "artistIds": [6, 13] });
db.genres.insert({ "id": 3, "name": "rock", "artistIds": [7]});
db.genres.insert({ "id": 4, "name": "neo soul", "artistIds": [11]});
db.genres.insert({ "id": 5, "name": "r&b", "artistIds": [12]});

//COLLECTION: contracts
db.contracts.insert({ "id": 1, "startDate": "1.1.2000.", "endDate": "1.1.2030.", "artistId": 5, "agentId": 1, "value": 200000 });
db.contracts.insert({ "id": 2, "startDate": "1.1.1998.", "endDate": "1.1.20040.", "artistId": 6, "agentId": 2, "value": 3000000 });
db.contracts.insert({ "id": 3, "startDate": "1.1.1970.", "endDate": "1.1.2005.", "artistId": 7, "agentId": 3, "value": 1000000 });
db.contracts.insert({ "id": 4, "startDate": "1.1.2002.", "endDate": "1.1.2020.", "artistId": 8, "agentId": 4, "value": 150000 });
db.contracts.insert({ "id": 5, "startDate": "1.1.2012.", "endDate": "1.1.2030.", "artistId": 11, "agentId": 14, "value": 2000000 });
db.contracts.insert({ "id": 6, "startDate": "1.1.2012.", "endDate": "1.1.2030.", "artistId": 12, "agentId": 15, "value": 4000000 });
db.contracts.insert({ "id": 7, "startDate": "1.1.2012.", "endDate": "1.1.2050.", "artistId": 13, "agentId": 16, "value": 10000000 });



