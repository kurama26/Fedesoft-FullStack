var app =angular.module('aplicacion', []);

app.controller('PrincipalCtrl', function($scope, $http){
   // $http.get("https://worldcup.sfg.io/matches/today")
   $scope.datos=[
    {
        "venue": "Samara",
        "location": "Samara Arena",
        "status": "completed",
        "time": "full-time",
        "fifa_id": "300331553",
        "weather": {
            "humidity": "34",
            "temp_celsius": "27",
            "temp_farenheit": "59",
            "wind_speed": "21",
            "description": "Sunny"
        },
        "attendance": "41970",
        "officials": [
            "Milorad MAZIC",
            "Milovan RISTIC",
            "Dalibor DJURDJEVIC",
            "Bamlak TESSEMA",
            "Danny MAKKELIE",
            "Elenito DI LIBERATORE",
            "Bastian DANKERT",
            "Gianluca ROCCHI",
            "Hasan ALMAHRI"
        ],
        "stage_name": "First stage",
        "home_team_country": "Senegal",
        "away_team_country": "Colombia",
        "datetime": "2018-06-28T14:00:00Z",
        "winner": "Colombia",
        "winner_code": "COL",
        "home_team": {
            "country": "Senegal",
            "code": "SN",
            "goals": 0,
            "penalties": 0
        },
        "away_team": {
            "country": "Colombia",
            "code": "CO",
            "goals": 1,
            "penalties": 0
        },
        "home_team_events": [
            {
                "id": 821,
                "type_of_event": "yellow-card",
                "player": "Mbaye NIANG",
                "time": "51'"
            },
            {
                "id": 826,
                "type_of_event": "substitution-out",
                "player": "Youssouf SABALY",
                "time": "74'"
            },
            {
                "id": 827,
                "type_of_event": "substitution-in",
                "player": "Moussa WAGUE",
                "time": "74'"
            },
            {
                "id": 833,
                "type_of_event": "substitution-out",
                "player": "Keita BALDE",
                "time": "80'"
            },
            {
                "id": 834,
                "type_of_event": "substitution-in",
                "player": "Moussa KONATE",
                "time": "80'"
            },
            {
                "id": 839,
                "type_of_event": "substitution-out",
                "player": "Mbaye NIANG",
                "time": "86'"
            },
            {
                "id": 840,
                "type_of_event": "substitution-in",
                "player": "Diafra SAKHO",
                "time": "86'"
            }
        ],
        "away_team_events": [
            {
                "id": 816,
                "type_of_event": "substitution-out",
                "player": "James RODRIGUEZ",
                "time": "31'"
            },
            {
                "id": 817,
                "type_of_event": "substitution-in",
                "player": "Luis MURIEL",
                "time": "31'"
            },
            {
                "id": 818,
                "type_of_event": "yellow-card",
                "player": "Johan MOJICA",
                "time": "45'"
            },
            {
                "id": 828,
                "type_of_event": "goal",
                "player": "Yerry MINA",
                "time": "74'"
            },
            {
                "id": 837,
                "type_of_event": "substitution-out",
                "player": "Mateus URIBE",
                "time": "83'"
            },
            {
                "id": 838,
                "type_of_event": "substitution-in",
                "player": "Jefferson  LERMA",
                "time": "83'"
            },
            {
                "id": 841,
                "type_of_event": "substitution-out",
                "player": "Radamel FALCAO",
                "time": "89'"
            },
            {
                "id": 842,
                "type_of_event": "substitution-in",
                "player": "Miguel BORJA",
                "time": "89'"
            }
        ],
        "home_team_statistics": {
            "country": "Senegal",
            "attempts_on_goal": 8,
            "on_target": 3,
            "off_target": 4,
            "blocked": 1,
            "woodwork": 0,
            "corners": 1,
            "offsides": 3,
            "ball_possession": 44,
            "pass_accuracy": 74,
            "num_passes": 301,
            "passes_completed": 223,
            "distance_covered": 96,
            "balls_recovered": 57,
            "tackles": 4,
            "clearances": 27,
            "yellow_cards": 1,
            "red_cards": 0,
            "fouls_committed": 15,
            "tactics": "4-4-2",
            "starting_eleven": [
                {
                    "name": "Khadim NDIAYE",
                    "captain": false,
                    "shirt_number": 16,
                    "position": "Goalie"
                },
                {
                    "name": "Kalidou KOULIBALY",
                    "captain": false,
                    "shirt_number": 3,
                    "position": "Defender"
                },
                {
                    "name": "Idrissa Gana GUEYE",
                    "captain": false,
                    "shirt_number": 5,
                    "position": "Midfield"
                },
                {
                    "name": "Salif SANE",
                    "captain": false,
                    "shirt_number": 6,
                    "position": "Midfield"
                },
                {
                    "name": "Cheikhou KOUYATE",
                    "captain": true,
                    "shirt_number": 8,
                    "position": "Midfield"
                },
                {
                    "name": "Sadio MANE",
                    "captain": false,
                    "shirt_number": 10,
                    "position": "Forward"
                },
                {
                    "name": "Youssouf SABALY",
                    "captain": false,
                    "shirt_number": 12,
                    "position": "Defender"
                },
                {
                    "name": "Ismaila SARR",
                    "captain": false,
                    "shirt_number": 18,
                    "position": "Forward"
                },
                {
                    "name": "Mbaye NIANG",
                    "captain": false,
                    "shirt_number": 19,
                    "position": "Forward"
                },
                {
                    "name": "Keita BALDE",
                    "captain": false,
                    "shirt_number": 20,
                    "position": "Forward"
                },
                {
                    "name": "Lamine GASSAMA",
                    "captain": false,
                    "shirt_number": 21,
                    "position": "Defender"
                }
            ],
            "substitutes": [
                {
                    "name": "Abdoulaye DIALLO",
                    "captain": false,
                    "shirt_number": 1,
                    "position": "Goalie"
                },
                {
                    "name": "Adama MBENGUE",
                    "captain": false,
                    "shirt_number": 2,
                    "position": "Defender"
                },
                {
                    "name": "Kara MBODJI",
                    "captain": false,
                    "shirt_number": 4,
                    "position": "Defender"
                },
                {
                    "name": "Moussa SOW",
                    "captain": false,
                    "shirt_number": 7,
                    "position": "Forward"
                },
                {
                    "name": "Mame DIOUF",
                    "captain": false,
                    "shirt_number": 9,
                    "position": "Forward"
                },
                {
                    "name": "Cheikh NDOYE",
                    "captain": false,
                    "shirt_number": 11,
                    "position": "Midfield"
                },
                {
                    "name": "Alfred NDIAYE",
                    "captain": false,
                    "shirt_number": 13,
                    "position": "Midfield"
                },
                {
                    "name": "Moussa KONATE",
                    "captain": false,
                    "shirt_number": 14,
                    "position": "Forward"
                },
                {
                    "name": "Diafra SAKHO",
                    "captain": false,
                    "shirt_number": 15,
                    "position": "Forward"
                },
                {
                    "name": "Pape Alioune NDIAYE",
                    "captain": false,
                    "shirt_number": 17,
                    "position": "Midfield"
                },
                {
                    "name": "Moussa WAGUE",
                    "captain": false,
                    "shirt_number": 22,
                    "position": "Defender"
                },
                {
                    "name": "Alfred GOMIS",
                    "captain": false,
                    "shirt_number": 23,
                    "position": "Goalie"
                }
            ]
        },
        "away_team_statistics": {
            "country": "Colombia",
            "attempts_on_goal": 4,
            "on_target": 2,
            "off_target": 1,
            "blocked": 1,
            "woodwork": 0,
            "corners": 3,
            "offsides": 3,
            "ball_possession": 56,
            "pass_accuracy": 81,
            "num_passes": 446,
            "passes_completed": 360,
            "distance_covered": 99,
            "balls_recovered": 34,
            "tackles": 11,
            "clearances": 17,
            "yellow_cards": 1,
            "red_cards": 0,
            "fouls_committed": 15,
            "tactics": "4-2-3-1",
            "starting_eleven": [
                {
                    "name": "David OSPINA",
                    "captain": false,
                    "shirt_number": 1,
                    "position": "Goalie"
                },
                {
                    "name": "Santiago ARIAS",
                    "captain": false,
                    "shirt_number": 4,
                    "position": "Defender"
                },
                {
                    "name": "Carlos SANCHEZ",
                    "captain": false,
                    "shirt_number": 6,
                    "position": "Midfield"
                },
                {
                    "name": "Radamel FALCAO",
                    "captain": true,
                    "shirt_number": 9,
                    "position": "Forward"
                },
                {
                    "name": "James RODRIGUEZ",
                    "captain": false,
                    "shirt_number": 10,
                    "position": "Midfield"
                },
                {
                    "name": "Juan CUADRADO",
                    "captain": false,
                    "shirt_number": 11,
                    "position": "Midfield"
                },
                {
                    "name": "Yerry MINA",
                    "captain": false,
                    "shirt_number": 13,
                    "position": "Defender"
                },
                {
                    "name": "Mateus URIBE",
                    "captain": false,
                    "shirt_number": 15,
                    "position": "Midfield"
                },
                {
                    "name": "Johan MOJICA",
                    "captain": false,
                    "shirt_number": 17,
                    "position": "Defender"
                },
                {
                    "name": "Juan QUINTERO",
                    "captain": false,
                    "shirt_number": 20,
                    "position": "Midfield"
                },
                {
                    "name": "Davinson SANCHEZ",
                    "captain": false,
                    "shirt_number": 23,
                    "position": "Defender"
                }
            ],
            "substitutes": [
                {
                    "name": "Cristian ZAPATA",
                    "captain": false,
                    "shirt_number": 2,
                    "position": "Defender"
                },
                {
                    "name": "Oscar MURILLO",
                    "captain": false,
                    "shirt_number": 3,
                    "position": "Defender"
                },
                {
                    "name": "Wilmar BARRIOS",
                    "captain": false,
                    "shirt_number": 5,
                    "position": "Midfield"
                },
                {
                    "name": "Carlos BACCA",
                    "captain": false,
                    "shirt_number": 7,
                    "position": "Forward"
                },
                {
                    "name": "Camilo VARGAS",
                    "captain": false,
                    "shirt_number": 12,
                    "position": "Goalie"
                },
                {
                    "name": "Luis MURIEL",
                    "captain": false,
                    "shirt_number": 14,
                    "position": "Forward"
                },
                {
                    "name": "Jefferson  LERMA",
                    "captain": false,
                    "shirt_number": 16,
                    "position": "Midfield"
                },
                {
                    "name": "Farid DIAZ",
                    "captain": false,
                    "shirt_number": 18,
                    "position": "Defender"
                },
                {
                    "name": "Miguel BORJA",
                    "captain": false,
                    "shirt_number": 19,
                    "position": "Forward"
                },
                {
                    "name": "Jose IZQUIERDO",
                    "captain": false,
                    "shirt_number": 21,
                    "position": "Forward"
                },
                {
                    "name": "Jose CUADRADO",
                    "captain": false,
                    "shirt_number": 22,
                    "position": "Goalie"
                },
                {
                    "name": "Abel AGUILAR",
                    "captain": false,
                    "shirt_number": 8,
                    "position": "Midfield"
                }
            ]
        },
        "last_event_update_at": "2018-06-28T15:54:03Z",
        "last_score_update_at": "2018-06-28T15:54:03Z"
    },
    {
        "venue": "Volgograd",
        "location": "Volgograd Arena",
        "status": "completed",
        "time": "full-time",
        "fifa_id": "300331507",
        "weather": {
            "humidity": "24",
            "temp_celsius": "36",
            "temp_farenheit": "68",
            "wind_speed": "13",
            "description": "Sunny"
        },
        "attendance": "42189",
        "officials": [
            "Janny SIKAZWE",
            "Jerson DOS SANTOS",
            "Zakhele SIWELA",
            "Ricardo MONTERO",
            "Daniele ORSATO",
            "Carlos ASTROZA",
            "Gery VARGAS",
            "Paolo VALERI",
            "Juan Carlos MORA"
        ],
        "stage_name": "First stage",
        "home_team_country": "Japan",
        "away_team_country": "Poland",
        "datetime": "2018-06-28T14:00:00Z",
        "winner": "Poland",
        "winner_code": "POL",
        "home_team": {
            "country": "Japan",
            "code": "JP",
            "goals": 0,
            "penalties": 0
        },
        "away_team": {
            "country": "Poland",
            "code": "PL",
            "goals": 1,
            "penalties": 0
        },
        "home_team_events": [
            {
                "id": 819,
                "type_of_event": "substitution-out",
                "player": "Shinji OKAZAKI",
                "time": "47'"
            },
            {
                "id": 820,
                "type_of_event": "substitution-in",
                "player": "Yuya OSAKO",
                "time": "47'"
            },
            {
                "id": 823,
                "type_of_event": "substitution-out",
                "player": "Takashi USAMI",
                "time": "65'"
            },
            {
                "id": 824,
                "type_of_event": "substitution-in",
                "player": "Takashi INUI",
                "time": "65'"
            },
            {
                "id": 825,
                "type_of_event": "yellow-card",
                "player": "Tomoaki MAKINO",
                "time": "66'"
            },
            {
                "id": 835,
                "type_of_event": "substitution-out",
                "player": "Yoshinori MUTO",
                "time": "82'"
            },
            {
                "id": 836,
                "type_of_event": "substitution-in",
                "player": "Makoto HASEBE",
                "time": "82'"
            }
        ],
        "away_team_events": [
            {
                "id": 822,
                "type_of_event": "goal",
                "player": "Jan BEDNAREK",
                "time": "59'"
            },
            {
                "id": 829,
                "type_of_event": "substitution-out",
                "player": "Piotr ZIELINSKI",
                "time": "79'"
            },
            {
                "id": 830,
                "type_of_event": "substitution-out",
                "player": "Rafal KURZAWA",
                "time": "79'"
            },
            {
                "id": 831,
                "type_of_event": "substitution-in",
                "player": "Lukasz TEODORCZYK",
                "time": "79'"
            },
            {
                "id": 832,
                "type_of_event": "substitution-in",
                "player": "Slawomir PESZKO",
                "time": "79'"
            }
        ],
        "home_team_statistics": {
            "country": "Japan",
            "attempts_on_goal": 9,
            "on_target": 3,
            "off_target": 3,
            "blocked": 3,
            "woodwork": 0,
            "corners": 5,
            "offsides": 1,
            "ball_possession": 53,
            "pass_accuracy": 83,
            "num_passes": 405,
            "passes_completed": 336,
            "distance_covered": 83,
            "balls_recovered": 41,
            "tackles": 7,
            "clearances": 25,
            "yellow_cards": 1,
            "red_cards": 0,
            "fouls_committed": 11,
            "tactics": "4-2-3-1",
            "starting_eleven": [
                {
                    "name": "Eiji KAWASHIMA",
                    "captain": true,
                    "shirt_number": 1,
                    "position": "Goalie"
                },
                {
                    "name": "Yuto NAGATOMO",
                    "captain": false,
                    "shirt_number": 5,
                    "position": "Defender"
                },
                {
                    "name": "Gaku SHIBASAKI",
                    "captain": false,
                    "shirt_number": 7,
                    "position": "Midfield"
                },
                {
                    "name": "Shinji OKAZAKI",
                    "captain": false,
                    "shirt_number": 9,
                    "position": "Forward"
                },
                {
                    "name": "Takashi USAMI",
                    "captain": false,
                    "shirt_number": 11,
                    "position": "Midfield"
                },
                {
                    "name": "Yoshinori MUTO",
                    "captain": false,
                    "shirt_number": 13,
                    "position": "Forward"
                },
                {
                    "name": "Hotaru YAMAGUCHI",
                    "captain": false,
                    "shirt_number": 16,
                    "position": "Midfield"
                },
                {
                    "name": "Hiroki SAKAI",
                    "captain": false,
                    "shirt_number": 19,
                    "position": "Defender"
                },
                {
                    "name": "Tomoaki MAKINO",
                    "captain": false,
                    "shirt_number": 20,
                    "position": "Defender"
                },
                {
                    "name": "Gotoku SAKAI",
                    "captain": false,
                    "shirt_number": 21,
                    "position": "Defender"
                },
                {
                    "name": "Maya YOSHIDA",
                    "captain": false,
                    "shirt_number": 22,
                    "position": "Defender"
                }
            ],
            "substitutes": [
                {
                    "name": "Naomichi UEDA",
                    "captain": false,
                    "shirt_number": 2,
                    "position": "Defender"
                },
                {
                    "name": "Gen SHOJI",
                    "captain": false,
                    "shirt_number": 3,
                    "position": "Defender"
                },
                {
                    "name": "Keisuke HONDA",
                    "captain": false,
                    "shirt_number": 4,
                    "position": "Midfield"
                },
                {
                    "name": "Wataru ENDO",
                    "captain": false,
                    "shirt_number": 6,
                    "position": "Defender"
                },
                {
                    "name": "Genki HARAGUCHI",
                    "captain": false,
                    "shirt_number": 8,
                    "position": "Midfield"
                },
                {
                    "name": "Shinji KAGAWA",
                    "captain": false,
                    "shirt_number": 10,
                    "position": "Midfield"
                },
                {
                    "name": "Masaaki HIGASHIGUCHI",
                    "captain": false,
                    "shirt_number": 12,
                    "position": "Goalie"
                },
                {
                    "name": "Takashi INUI",
                    "captain": false,
                    "shirt_number": 14,
                    "position": "Midfield"
                },
                {
                    "name": "Yuya OSAKO",
                    "captain": false,
                    "shirt_number": 15,
                    "position": "Forward"
                },
                {
                    "name": "Makoto HASEBE",
                    "captain": false,
                    "shirt_number": 17,
                    "position": "Midfield"
                },
                {
                    "name": "Ryota OHSHIMA",
                    "captain": false,
                    "shirt_number": 18,
                    "position": "Midfield"
                },
                {
                    "name": "Kosuke NAKAMURA",
                    "captain": false,
                    "shirt_number": 23,
                    "position": "Goalie"
                }
            ]
        },
        "away_team_statistics": {
            "country": "Poland",
            "attempts_on_goal": 11,
            "on_target": 2,
            "off_target": 5,
            "blocked": 4,
            "woodwork": 0,
            "corners": 7,
            "offsides": 0,
            "ball_possession": 47,
            "pass_accuracy": 81,
            "num_passes": 369,
            "passes_completed": 298,
            "distance_covered": 80,
            "balls_recovered": 37,
            "tackles": 11,
            "clearances": 18,
            "yellow_cards": 0,
            "red_cards": 0,
            "fouls_committed": 8,
            "tactics": "3-4-3",
            "starting_eleven": [
                {
                    "name": "Lukasz FABIANSKI",
                    "captain": false,
                    "shirt_number": 22,
                    "position": "Goalie"
                },
                {
                    "name": "Artur JEDRZEJCZYK",
                    "captain": false,
                    "shirt_number": 3,
                    "position": "Defender"
                },
                {
                    "name": "Jan BEDNAREK",
                    "captain": false,
                    "shirt_number": 5,
                    "position": "Defender"
                },
                {
                    "name": "Jacek GORALSKI",
                    "captain": false,
                    "shirt_number": 6,
                    "position": "Midfield"
                },
                {
                    "name": "Robert LEWANDOWSKI",
                    "captain": true,
                    "shirt_number": 9,
                    "position": "Forward"
                },
                {
                    "name": "Grzegorz KRYCHOWIAK",
                    "captain": false,
                    "shirt_number": 10,
                    "position": "Midfield"
                },
                {
                    "name": "Kamil GROSICKI",
                    "captain": false,
                    "shirt_number": 11,
                    "position": "Midfield"
                },
                {
                    "name": "Kamil GLIK",
                    "captain": false,
                    "shirt_number": 15,
                    "position": "Defender"
                },
                {
                    "name": "Bartosz BERESZYNSKI",
                    "captain": false,
                    "shirt_number": 18,
                    "position": "Defender"
                },
                {
                    "name": "Piotr ZIELINSKI",
                    "captain": false,
                    "shirt_number": 19,
                    "position": "Midfield"
                },
                {
                    "name": "Rafal KURZAWA",
                    "captain": false,
                    "shirt_number": 21,
                    "position": "Midfield"
                }
            ],
            "substitutes": [
                {
                    "name": "Wojciech SZCZESNY",
                    "captain": false,
                    "shirt_number": 1,
                    "position": "Goalie"
                },
                {
                    "name": "Michal PAZDAN",
                    "captain": false,
                    "shirt_number": 2,
                    "position": "Defender"
                },
                {
                    "name": "Thiago CIONEK",
                    "captain": false,
                    "shirt_number": 4,
                    "position": "Defender"
                },
                {
                    "name": "Arkadiusz MILIK",
                    "captain": false,
                    "shirt_number": 7,
                    "position": "Forward"
                },
                {
                    "name": "Karol LINETTY",
                    "captain": false,
                    "shirt_number": 8,
                    "position": "Midfield"
                },
                {
                    "name": "Bartosz BIALKOWSKI",
                    "captain": false,
                    "shirt_number": 12,
                    "position": "Goalie"
                },
                {
                    "name": "Maciej RYBUS",
                    "captain": false,
                    "shirt_number": 13,
                    "position": "Midfield"
                },
                {
                    "name": "Lukasz TEODORCZYK",
                    "captain": false,
                    "shirt_number": 14,
                    "position": "Forward"
                },
                {
                    "name": "Jakub BLASZCZYKOWSKI",
                    "captain": false,
                    "shirt_number": 16,
                    "position": "Midfield"
                },
                {
                    "name": "Slawomir PESZKO",
                    "captain": false,
                    "shirt_number": 17,
                    "position": "Midfield"
                },
                {
                    "name": "Lukasz PISZCZEK",
                    "captain": false,
                    "shirt_number": 20,
                    "position": "Defender"
                },
                {
                    "name": "Dawid KOWNACKI",
                    "captain": false,
                    "shirt_number": 23,
                    "position": "Forward"
                }
            ]
        },
        "last_event_update_at": "2018-06-28T15:52:28Z",
        "last_score_update_at": "2018-06-28T15:52:28Z"
    },
    {
        "venue": "Kaliningrad",
        "location": "Kaliningrad Stadium",
        "status": "completed",
        "time": "full-time",
        "fifa_id": "300340182",
        "weather": {
            "humidity": "61",
            "temp_celsius": "21",
            "temp_farenheit": "53",
            "wind_speed": "11",
            "description": "Sunny"
        },
        "attendance": "33973",
        "officials": [
            "Damir SKOMINA",
            "Jure PRAPROTNIK",
            "Robert VUKAN",
            "Mohammed Abdulla MOHAMMED",
            "Artur DIAS",
            "Roberto DIAZ",
            "Pawel GIL",
            "Mauro VIGLIANO",
            "Mohamed ALHAMMADI"
        ],
        "stage_name": "First stage",
        "home_team_country": "England",
        "away_team_country": "Belgium",
        "datetime": "2018-06-28T18:00:00Z",
        "winner": "Belgium",
        "winner_code": "BEL",
        "home_team": {
            "country": "England",
            "code": "GB",
            "goals": 0,
            "penalties": 0
        },
        "away_team": {
            "country": "Belgium",
            "code": "BE",
            "goals": 1,
            "penalties": 0
        },
        "home_team_events": [
            {
                "id": 848,
                "type_of_event": "substitution-out",
                "player": "John STONES",
                "time": "46'"
            },
            {
                "id": 849,
                "type_of_event": "substitution-in",
                "player": "Harry MAGUIRE",
                "time": "46'"
            },
            {
                "id": 864,
                "type_of_event": "substitution-out",
                "player": "Trent ALEXANDER-ARNOLD",
                "time": "79'"
            },
            {
                "id": 865,
                "type_of_event": "substitution-in",
                "player": "Danny WELBECK",
                "time": "79'"
            }
        ],
        "away_team_events": [
            {
                "id": 843,
                "type_of_event": "yellow-card",
                "player": "Youri TIELEMANS",
                "time": "19'"
            },
            {
                "id": 844,
                "type_of_event": "yellow-card",
                "player": "Leander DENDONCKER",
                "time": "33'"
            },
            {
                "id": 854,
                "type_of_event": "goal",
                "player": "Adnan JANUZAJ",
                "time": "51'"
            },
            {
                "id": 860,
                "type_of_event": "substitution-out",
                "player": "Thomas VERMAELEN",
                "time": "74'"
            },
            {
                "id": 861,
                "type_of_event": "substitution-in",
                "player": "Vincent KOMPANY",
                "time": "74'"
            },
            {
                "id": 870,
                "type_of_event": "substitution-out",
                "player": "Adnan JANUZAJ",
                "time": "86'"
            },
            {
                "id": 871,
                "type_of_event": "substitution-in",
                "player": "Dries MERTENS",
                "time": "86'"
            }
        ],
        "home_team_statistics": {
            "country": "England",
            "attempts_on_goal": 13,
            "on_target": 1,
            "off_target": 7,
            "blocked": 5,
            "woodwork": 0,
            "corners": 7,
            "offsides": 3,
            "ball_possession": 48,
            "pass_accuracy": 85,
            "num_passes": 493,
            "passes_completed": 421,
            "distance_covered": 107,
            "balls_recovered": 33,
            "tackles": 13,
            "clearances": 10,
            "yellow_cards": 0,
            "red_cards": 0,
            "fouls_committed": 11,
            "tactics": "3-5-2",
            "starting_eleven": [
                {
                    "name": "Jordan PICKFORD",
                    "captain": false,
                    "shirt_number": 1,
                    "position": "Goalie"
                },
                {
                    "name": "Danny ROSE",
                    "captain": false,
                    "shirt_number": 3,
                    "position": "Defender"
                },
                {
                    "name": "Eric  DIER",
                    "captain": true,
                    "shirt_number": 4,
                    "position": "Midfield"
                },
                {
                    "name": "John STONES",
                    "captain": false,
                    "shirt_number": 5,
                    "position": "Defender"
                },
                {
                    "name": "Jamie VARDY",
                    "captain": false,
                    "shirt_number": 11,
                    "position": "Forward"
                },
                {
                    "name": "Gary CAHILL",
                    "captain": false,
                    "shirt_number": 15,
                    "position": "Defender"
                },
                {
                    "name": "Phil JONES",
                    "captain": false,
                    "shirt_number": 16,
                    "position": "Defender"
                },
                {
                    "name": "Fabian DELPH",
                    "captain": false,
                    "shirt_number": 17,
                    "position": "Defender"
                },
                {
                    "name": "Marcus RASHFORD",
                    "captain": false,
                    "shirt_number": 19,
                    "position": "Forward"
                },
                {
                    "name": "Ruben LOFTUS-CHEEK",
                    "captain": false,
                    "shirt_number": 21,
                    "position": "Midfield"
                },
                {
                    "name": "Trent ALEXANDER-ARNOLD",
                    "captain": false,
                    "shirt_number": 22,
                    "position": "Defender"
                }
            ],
            "substitutes": [
                {
                    "name": "Kyle WALKER",
                    "captain": false,
                    "shirt_number": 2,
                    "position": "Defender"
                },
                {
                    "name": "Harry MAGUIRE",
                    "captain": false,
                    "shirt_number": 6,
                    "position": "Defender"
                },
                {
                    "name": "Jesse  LINGARD",
                    "captain": false,
                    "shirt_number": 7,
                    "position": "Midfield"
                },
                {
                    "name": "Jordan HENDERSON",
                    "captain": false,
                    "shirt_number": 8,
                    "position": "Midfield"
                },
                {
                    "name": "Harry KANE",
                    "captain": false,
                    "shirt_number": 9,
                    "position": "Forward"
                },
                {
                    "name": "Raheem STERLING",
                    "captain": false,
                    "shirt_number": 10,
                    "position": "Forward"
                },
                {
                    "name": "Kieran TRIPPIER",
                    "captain": false,
                    "shirt_number": 12,
                    "position": "Defender"
                },
                {
                    "name": "Jack BUTLAND",
                    "captain": false,
                    "shirt_number": 13,
                    "position": "Goalie"
                },
                {
                    "name": "Danny WELBECK",
                    "captain": false,
                    "shirt_number": 14,
                    "position": "Forward"
                },
                {
                    "name": "Ashley  YOUNG",
                    "captain": false,
                    "shirt_number": 18,
                    "position": "Defender"
                },
                {
                    "name": "Dele ALLI",
                    "captain": false,
                    "shirt_number": 20,
                    "position": "Midfield"
                },
                {
                    "name": "Nick POPE",
                    "captain": false,
                    "shirt_number": 23,
                    "position": "Goalie"
                }
            ]
        },
        "away_team_statistics": {
            "country": "Belgium",
            "attempts_on_goal": 15,
            "on_target": 4,
            "off_target": 4,
            "blocked": 7,
            "woodwork": 0,
            "corners": 2,
            "offsides": 1,
            "ball_possession": 52,
            "pass_accuracy": 86,
            "num_passes": 546,
            "passes_completed": 469,
            "distance_covered": 105,
            "balls_recovered": 33,
            "tackles": 12,
            "clearances": 25,
            "yellow_cards": 2,
            "red_cards": 0,
            "fouls_committed": 14,
            "tactics": "3-4-3",
            "starting_eleven": [
                {
                    "name": "Thibaut COURTOIS",
                    "captain": true,
                    "shirt_number": 1,
                    "position": "Goalie"
                },
                {
                    "name": "Thomas VERMAELEN",
                    "captain": false,
                    "shirt_number": 3,
                    "position": "Defender"
                },
                {
                    "name": "Marouane FELLAINI",
                    "captain": false,
                    "shirt_number": 8,
                    "position": "Midfield"
                },
                {
                    "name": "Thorgan HAZARD",
                    "captain": false,
                    "shirt_number": 16,
                    "position": "Midfield"
                },
                {
                    "name": "Youri TIELEMANS",
                    "captain": false,
                    "shirt_number": 17,
                    "position": "Midfield"
                },
                {
                    "name": "Adnan JANUZAJ",
                    "captain": false,
                    "shirt_number": 18,
                    "position": "Forward"
                },
                {
                    "name": "Moussa DEMBELE",
                    "captain": false,
                    "shirt_number": 19,
                    "position": "Midfield"
                },
                {
                    "name": "Dedryck BOYATA",
                    "captain": false,
                    "shirt_number": 20,
                    "position": "Defender"
                },
                {
                    "name": "Michy BATSHUAYI",
                    "captain": false,
                    "shirt_number": 21,
                    "position": "Forward"
                },
                {
                    "name": "Nacer CHADLI",
                    "captain": false,
                    "shirt_number": 22,
                    "position": "Midfield"
                },
                {
                    "name": "Leander DENDONCKER",
                    "captain": false,
                    "shirt_number": 23,
                    "position": "Defender"
                }
            ],
            "substitutes": [
                {
                    "name": "Toby ALDERWEIRELD",
                    "captain": false,
                    "shirt_number": 2,
                    "position": "Defender"
                },
                {
                    "name": "Vincent KOMPANY",
                    "captain": false,
                    "shirt_number": 4,
                    "position": "Defender"
                },
                {
                    "name": "Jan VERTONGHEN",
                    "captain": false,
                    "shirt_number": 5,
                    "position": "Defender"
                },
                {
                    "name": "Axel WITSEL",
                    "captain": false,
                    "shirt_number": 6,
                    "position": "Midfield"
                },
                {
                    "name": "Kevin DE BRUYNE",
                    "captain": false,
                    "shirt_number": 7,
                    "position": "Midfield"
                },
                {
                    "name": "Romelu LUKAKU",
                    "captain": false,
                    "shirt_number": 9,
                    "position": "Forward"
                },
                {
                    "name": "Eden HAZARD",
                    "captain": false,
                    "shirt_number": 10,
                    "position": "Forward"
                },
                {
                    "name": "Yannick CARRASCO",
                    "captain": false,
                    "shirt_number": 11,
                    "position": "Midfield"
                },
                {
                    "name": "Simon MIGNOLET",
                    "captain": false,
                    "shirt_number": 12,
                    "position": "Goalie"
                },
                {
                    "name": "Koen CASTEELS",
                    "captain": false,
                    "shirt_number": 13,
                    "position": "Goalie"
                },
                {
                    "name": "Dries MERTENS",
                    "captain": false,
                    "shirt_number": 14,
                    "position": "Forward"
                },
                {
                    "name": "Thomas MEUNIER",
                    "captain": false,
                    "shirt_number": 15,
                    "position": "Defender"
                }
            ]
        },
        "last_event_update_at": "2018-06-28T19:51:13Z",
        "last_score_update_at": "2018-06-28T19:51:13Z"
    },
    {
        "venue": "Saransk",
        "location": "Mordovia Arena",
        "status": "completed",
        "time": "full-time",
        "fifa_id": "300331520",
        "weather": {
            "humidity": "60",
            "temp_celsius": "20",
            "temp_farenheit": "52",
            "wind_speed": "7",
            "description": "Clear Night"
        },
        "attendance": "37168",
        "officials": [
            "Nawaf SHUKRALLA",
            "Yaser TULEFAT",
            "Taleb AL MARRI",
            "Mehdi ABID CHAREF",
            "Tiago MARTINS",
            "Marvin TORRENTERA",
            "Abdulrahman AL JASSIM",
            "Sandro RICCI",
            "Hiroshi YAMAUCHI"
        ],
        "stage_name": "First stage",
        "home_team_country": "Panama",
        "away_team_country": "Tunisia",
        "datetime": "2018-06-28T18:00:00Z",
        "winner": "Tunisia",
        "winner_code": "TUN",
        "home_team": {
            "country": "Panama",
            "code": "PA",
            "goals": 1,
            "penalties": 0
        },
        "away_team": {
            "country": "Tunisia",
            "code": "TN",
            "goals": 2,
            "penalties": 0
        },
        "home_team_events": [
            {
                "id": 845,
                "type_of_event": "goal",
                "player": "Jose Luis RODRIGUEZ",
                "time": "33'"
            },
            {
                "id": 850,
                "type_of_event": "substitution-out",
                "player": "Gabriel TORRES",
                "time": "46'"
            },
            {
                "id": 851,
                "type_of_event": "substitution-in",
                "player": "Harold CUMMINGS",
                "time": "46'"
            },
            {
                "id": 856,
                "type_of_event": "substitution-out",
                "player": "Roman TORRES",
                "time": "56'"
            },
            {
                "id": 857,
                "type_of_event": "substitution-in",
                "player": "Luis TEJADA",
                "time": "56'"
            },
            {
                "id": 866,
                "type_of_event": "yellow-card",
                "player": "Ricardo AVILA",
                "time": "78'"
            },
            {
                "id": 867,
                "type_of_event": "yellow-card",
                "player": "Gabriel GOMEZ",
                "time": "80'"
            },
            {
                "id": 868,
                "type_of_event": "substitution-out",
                "player": "Ricardo AVILA",
                "time": "81'"
            },
            {
                "id": 869,
                "type_of_event": "substitution-in",
                "player": "Abdiel ARROYO",
                "time": "81'"
            },
            {
                "id": 875,
                "type_of_event": "yellow-card",
                "player": "Luis TEJADA",
                "time": "90'+6'"
            }
        ],
        "away_team_events": [
            {
                "id": 846,
                "type_of_event": "goal-own",
                "player": "Yassine MERIAH",
                "time": "33'"
            },
            {
                "id": 847,
                "type_of_event": "yellow-card",
                "player": "Ferjani SASSI",
                "time": "44'"
            },
            {
                "id": 852,
                "type_of_event": "substitution-out",
                "player": "Ferjani SASSI",
                "time": "46'"
            },
            {
                "id": 853,
                "type_of_event": "substitution-in",
                "player": "Anice BADRI",
                "time": "46'"
            },
            {
                "id": 855,
                "type_of_event": "goal",
                "player": "Fakhreddine BEN YOUSSEF",
                "time": "51'"
            },
            {
                "id": 858,
                "type_of_event": "goal",
                "player": "Wahbi KHAZRI",
                "time": "66'"
            },
            {
                "id": 859,
                "type_of_event": "yellow-card",
                "player": "Anice BADRI",
                "time": "71'"
            },
            {
                "id": 862,
                "type_of_event": "substitution-out",
                "player": "Naim SLITI",
                "time": "77'"
            },
            {
                "id": 863,
                "type_of_event": "substitution-in",
                "player": "Ahmed KHALIL",
                "time": "77'"
            },
            {
                "id": 872,
                "type_of_event": "substitution-out",
                "player": "Wahbi KHAZRI",
                "time": "89'"
            },
            {
                "id": 873,
                "type_of_event": "substitution-in",
                "player": "Bassem SRARFI",
                "time": "89'"
            },
            {
                "id": 874,
                "type_of_event": "yellow-card",
                "player": "Ghaylen CHAALELI",
                "time": "90'+3'"
            }
        ],
        "home_team_statistics": {
            "country": "Panama",
            "attempts_on_goal": 9,
            "on_target": 4,
            "off_target": 4,
            "blocked": 1,
            "woodwork": 0,
            "corners": 0,
            "offsides": 4,
            "ball_possession": 36,
            "pass_accuracy": 77,
            "num_passes": 286,
            "passes_completed": 219,
            "distance_covered": 101,
            "balls_recovered": 38,
            "tackles": 9,
            "clearances": 33,
            "yellow_cards": 3,
            "red_cards": 0,
            "fouls_committed": 17,
            "tactics": "4-5-1",
            "starting_eleven": [
                {
                    "name": "Jaime PENEDO",
                    "captain": false,
                    "shirt_number": 1,
                    "position": "Goalie"
                },
                {
                    "name": "Fidel ESCOBAR",
                    "captain": false,
                    "shirt_number": 4,
                    "position": "Defender"
                },
                {
                    "name": "Roman TORRES",
                    "captain": true,
                    "shirt_number": 5,
                    "position": "Defender"
                },
                {
                    "name": "Gabriel GOMEZ",
                    "captain": false,
                    "shirt_number": 6,
                    "position": "Midfield"
                },
                {
                    "name": "Edgar BARCENAS",
                    "captain": false,
                    "shirt_number": 8,
                    "position": "Midfield"
                },
                {
                    "name": "Gabriel TORRES",
                    "captain": false,
                    "shirt_number": 9,
                    "position": "Forward"
                },
                {
                    "name": "Adolfo MACHADO",
                    "captain": false,
                    "shirt_number": 13,
                    "position": "Defender"
                },
                {
                    "name": "Luis OVALLE",
                    "captain": false,
                    "shirt_number": 17,
                    "position": "Defender"
                },
                {
                    "name": "Ricardo AVILA",
                    "captain": false,
                    "shirt_number": 19,
                    "position": "Midfield"
                },
                {
                    "name": "Anibal GODOY",
                    "captain": false,
                    "shirt_number": 20,
                    "position": "Midfield"
                },
                {
                    "name": "Jose Luis RODRIGUEZ",
                    "captain": false,
                    "shirt_number": 21,
                    "position": "Midfield"
                }
            ],
            "substitutes": [
                {
                    "name": "Harold CUMMINGS",
                    "captain": false,
                    "shirt_number": 3,
                    "position": "Defender"
                },
                {
                    "name": "Blas PEREZ",
                    "captain": false,
                    "shirt_number": 7,
                    "position": "Forward"
                },
                {
                    "name": "Jose CALDERON",
                    "captain": false,
                    "shirt_number": 12,
                    "position": "Goalie"
                },
                {
                    "name": "Valentin PIMENTEL",
                    "captain": false,
                    "shirt_number": 14,
                    "position": "Midfield"
                },
                {
                    "name": "Eric DAVIS",
                    "captain": false,
                    "shirt_number": 15,
                    "position": "Defender"
                },
                {
                    "name": "Abdiel ARROYO",
                    "captain": false,
                    "shirt_number": 16,
                    "position": "Forward"
                },
                {
                    "name": "Luis TEJADA",
                    "captain": false,
                    "shirt_number": 18,
                    "position": "Forward"
                },
                {
                    "name": "Alex RODRIGUEZ",
                    "captain": false,
                    "shirt_number": 22,
                    "position": "Goalie"
                },
                {
                    "name": "Felipe BALOY",
                    "captain": false,
                    "shirt_number": 23,
                    "position": "Defender"
                },
                {
                    "name": "Michael MURILLO",
                    "captain": false,
                    "shirt_number": 2,
                    "position": "Defender"
                },
                {
                    "name": "Armando COOPER",
                    "captain": false,
                    "shirt_number": 11,
                    "position": "Midfield"
                },
                {
                    "name": "Ismael DIAZ",
                    "captain": false,
                    "shirt_number": 10,
                    "position": "Forward"
                }
            ]
        },
        "away_team_statistics": {
            "country": "Tunisia",
            "attempts_on_goal": 15,
            "on_target": 7,
            "off_target": 4,
            "blocked": 4,
            "woodwork": 0,
            "corners": 6,
            "offsides": 1,
            "ball_possession": 64,
            "pass_accuracy": 86,
            "num_passes": 631,
            "passes_completed": 544,
            "distance_covered": 106,
            "balls_recovered": 41,
            "tackles": 9,
            "clearances": 14,
            "yellow_cards": 3,
            "red_cards": 0,
            "fouls_committed": 19,
            "tactics": "4-3-3",
            "starting_eleven": [
                {
                    "name": "Aymen MATHLOUTHI",
                    "captain": true,
                    "shirt_number": 16,
                    "position": "Goalie"
                },
                {
                    "name": "Yassine MERIAH",
                    "captain": false,
                    "shirt_number": 4,
                    "position": "Defender"
                },
                {
                    "name": "Oussama HADDADI",
                    "captain": false,
                    "shirt_number": 5,
                    "position": "Defender"
                },
                {
                    "name": "Rami BEDOUI",
                    "captain": false,
                    "shirt_number": 6,
                    "position": "Defender"
                },
                {
                    "name": "Fakhreddine BEN YOUSSEF",
                    "captain": false,
                    "shirt_number": 8,
                    "position": "Forward"
                },
                {
                    "name": "Wahbi KHAZRI",
                    "captain": false,
                    "shirt_number": 10,
                    "position": "Forward"
                },
                {
                    "name": "Ferjani SASSI",
                    "captain": false,
                    "shirt_number": 13,
                    "position": "Midfield"
                },
                {
                    "name": "Ellyes SKHIRI",
                    "captain": false,
                    "shirt_number": 17,
                    "position": "Midfield"
                },
                {
                    "name": "Ghaylen CHAALELI",
                    "captain": false,
                    "shirt_number": 20,
                    "position": "Forward"
                },
                {
                    "name": "Hamdi NAGUEZ",
                    "captain": false,
                    "shirt_number": 21,
                    "position": "Defender"
                },
                {
                    "name": "Naim SLITI",
                    "captain": false,
                    "shirt_number": 23,
                    "position": "Forward"
                }
            ],
            "substitutes": [
                {
                    "name": "Yohan BEN ALOUANE",
                    "captain": false,
                    "shirt_number": 3,
                    "position": "Defender"
                },
                {
                    "name": "Saifeddine KHAOUI",
                    "captain": false,
                    "shirt_number": 7,
                    "position": "Forward"
                },
                {
                    "name": "Anice BADRI",
                    "captain": false,
                    "shirt_number": 9,
                    "position": "Midfield"
                },
                {
                    "name": "Ali MAALOUL",
                    "captain": false,
                    "shirt_number": 12,
                    "position": "Defender"
                },
                {
                    "name": "Mohamed BEN AMOR",
                    "captain": false,
                    "shirt_number": 14,
                    "position": "Midfield"
                },
                {
                    "name": "Ahmed KHALIL",
                    "captain": false,
                    "shirt_number": 15,
                    "position": "Forward"
                },
                {
                    "name": "Bassem SRARFI",
                    "captain": false,
                    "shirt_number": 18,
                    "position": "Forward"
                },
                {
                    "name": "Saber KHALIFA",
                    "captain": false,
                    "shirt_number": 19,
                    "position": "Forward"
                },
                {
                    "name": "Farouk BEN MUSTAPHA",
                    "captain": false,
                    "shirt_number": 1,
                    "position": "Goalie"
                },
                {
                    "name": "Syam BEN YOUSSEF",
                    "captain": false,
                    "shirt_number": 2,
                    "position": "Defender"
                },
                {
                    "name": "Dylan BRONN",
                    "captain": false,
                    "shirt_number": 11,
                    "position": "Defender"
                },
                {
                    "name": "Mouez HASSEN",
                    "captain": false,
                    "shirt_number": 22,
                    "position": "Goalie"
                }
            ]
        },
        "last_event_update_at": "2018-06-28T19:56:36Z",
        "last_score_update_at": "2018-06-28T19:56:36Z"
    }
];
    //then(function(response){
        // $scope.ejemplo = response.data;
         $scope.pais = [];
         $scope.codigopais = [];

        // console.log($scope.ejemplo);
     
    //     }
    // });
       for(var posicion = 0; posicion < $scope.datos.length ; posicion++){
            $scope.pais.push($scope.datos[posicion].home_team_country);
            $scope.pais.push($scope.datos[posicion].away_team_country);
            $scope.codigopais.push($scope.datos[posicion].home_team.code);
            $scope.codigopais.push($scope.datos[posicion].away_team.code);
       }
})
/*
app.controller('prueba', function($scope, $http){
    $scope.ejemplo2 = "Hola mis llaves";
})

app.controller('paises', function($scope, $http){
    $scope.data = [
        { pais:"Colombia", capital:"Bogota"},
        { pais:"Venezuela", capital:"Caracas"},
        { pais:"Peru", capital:"Lina"},
        { pais:"Rusia", capital:"Moscu"}
    ]
    $scope.pais = [];

    for(var posicion = 0; posicion < $scope.data.length; posicion++){
            $scope.pais.push($scope.data[posicion].pais);
            $scope.pais.push($scope.data[posicion].capital);
    }
})*/

// app.controller('partidos', function($scope, $html){
//     $http.get("https://worldcup.sfg.io/matches/today")
//     .then(function(response){
//         $scope.ejemplo = response.data;
//     });
// })