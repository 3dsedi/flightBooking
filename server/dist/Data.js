"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FlightsData = [
    {
        "route_id": "8efc39dd",
        "departureDestination": "Oslo",
        "arrivalDestination": "Stockholm",
        "itineraries": [
            {
                "flight_id": "87211f8b",
                "departureAt": "2023-03-29T11:00:00.000Z",
                "arrivalAt": "2023-03-29T14:00:00.000Z",
                "availableSeats": 0,
                "prices": {
                    "currency": "SEK",
                    "adult": 88.14,
                    "child": 93.88
                }
            },
            {
                "flight_id": "a444cd64",
                "departureAt": "2023-03-30T11:00:00.000Z",
                "arrivalAt": "2023-03-30T14:00:00.000Z",
                "availableSeats": 82,
                "prices": {
                    "currency": "SEK",
                    "adult": 96.31,
                    "child": 64.35
                }
            },
            {
                "flight_id": "6b1267e6",
                "departureAt": "2023-03-30T17:00:00.000Z",
                "arrivalAt": "2023-03-30T20:00:00.000Z",
                "availableSeats": 45,
                "prices": {
                    "currency": "SEK",
                    "adult": 124.08,
                    "child": 124.56
                }
            },
            {
                "flight_id": "0d67fe34",
                "departureAt": "2023-03-30T21:00:00.000Z",
                "arrivalAt": "2023-03-31T00:00:00.000Z",
                "availableSeats": 81,
                "prices": {
                    "currency": "SEK",
                    "adult": 96.31,
                    "child": 64.35
                }
            },
            {
                "flight_id": "b0180510",
                "departureAt": "2023-03-31T03:00:00.000Z",
                "arrivalAt": "2023-03-31T06:00:00.000Z",
                "availableSeats": 80,
                "prices": {
                    "currency": "SEK",
                    "adult": 102.52,
                    "child": 172.3
                }
            },
            {
                "flight_id": "2742d225",
                "departureAt": "2023-04-01T03:00:00.000Z",
                "arrivalAt": "2023-04-01T06:00:00.000Z",
                "availableSeats": 22,
                "prices": {
                    "currency": "SEK",
                    "adult": 96.8,
                    "child": 53.12
                }
            },
            {
                "flight_id": "a77b9d8b",
                "departureAt": "2023-04-01T07:00:00.000Z",
                "arrivalAt": "2023-04-01T10:00:00.000Z",
                "availableSeats": 86,
                "prices": {
                    "currency": "SEK",
                    "adult": 70.79,
                    "child": 82.51
                }
            },
            {
                "flight_id": "6955f2b8",
                "departureAt": "2023-04-02T07:00:00.000Z",
                "arrivalAt": "2023-04-02T10:00:00.000Z",
                "availableSeats": 52,
                "prices": {
                    "currency": "SEK",
                    "adult": 66.78,
                    "child": 134.56
                }
            },
            {
                "flight_id": "600b58c4",
                "departureAt": "2023-04-02T13:00:00.000Z",
                "arrivalAt": "2023-04-02T16:00:00.000Z",
                "availableSeats": 27,
                "prices": {
                    "currency": "SEK",
                    "adult": 183.68,
                    "child": 123.69
                }
            },
            {
                "flight_id": "e3bd0ae5",
                "departureAt": "2023-04-02T17:00:00.000Z",
                "arrivalAt": "2023-04-02T20:00:00.000Z",
                "availableSeats": 94,
                "prices": {
                    "currency": "SEK",
                    "adult": 175.41,
                    "child": 51.73
                }
            },
            {
                "flight_id": "ffe0432c",
                "departureAt": "2023-04-02T23:00:00.000Z",
                "arrivalAt": "2023-04-03T02:00:00.000Z",
                "availableSeats": 99,
                "prices": {
                    "currency": "SEK",
                    "adult": 102.52,
                    "child": 172.3
                }
            },
            {
                "flight_id": "e64408d4",
                "departureAt": "2023-04-03T23:00:00.000Z",
                "arrivalAt": "2023-04-04T02:00:00.000Z",
                "availableSeats": 55,
                "prices": {
                    "currency": "SEK",
                    "adult": 187.27,
                    "child": 117.34
                }
            },
            {
                "flight_id": "ab4b92cf",
                "departureAt": "2023-04-04T03:00:00.000Z",
                "arrivalAt": "2023-04-04T06:00:00.000Z",
                "availableSeats": 77,
                "prices": {
                    "currency": "SEK",
                    "adult": 65.62,
                    "child": 74.58
                }
            },
            {
                "flight_id": "02eb7d88",
                "departureAt": "2023-04-05T03:00:00.000Z",
                "arrivalAt": "2023-04-05T06:00:00.000Z",
                "availableSeats": 66,
                "prices": {
                    "currency": "SEK",
                    "adult": 185.52,
                    "child": 95.86
                }
            },
            {
                "flight_id": "5f7a09b5",
                "departureAt": "2023-04-05T09:00:00.000Z",
                "arrivalAt": "2023-04-05T12:00:00.000Z",
                "availableSeats": 51,
                "prices": {
                    "currency": "SEK",
                    "adult": 96.8,
                    "child": 53.12
                }
            },
            {
                "flight_id": "273f69a5",
                "departureAt": "2023-04-05T13:00:00.000Z",
                "arrivalAt": "2023-04-05T16:00:00.000Z",
                "availableSeats": 17,
                "prices": {
                    "currency": "SEK",
                    "adult": 126.47,
                    "child": 52.65
                }
            },
            {
                "flight_id": "84d6f482",
                "departureAt": "2023-04-05T19:00:00.000Z",
                "arrivalAt": "2023-04-05T22:00:00.000Z",
                "availableSeats": 42,
                "prices": {
                    "currency": "SEK",
                    "adult": 187.27,
                    "child": 117.34
                }
            },
            {
                "flight_id": "468b79da",
                "departureAt": "2023-04-06T19:00:00.000Z",
                "arrivalAt": "2023-04-06T22:00:00.000Z",
                "availableSeats": 88,
                "prices": {
                    "currency": "SEK",
                    "adult": 66.78,
                    "child": 134.56
                }
            },
            {
                "flight_id": "dc623bd1",
                "departureAt": "2023-04-06T23:00:00.000Z",
                "arrivalAt": "2023-04-07T02:00:00.000Z",
                "availableSeats": 7,
                "prices": {
                    "currency": "SEK",
                    "adult": 84.71,
                    "child": 91.29
                }
            },
            {
                "flight_id": "e1c7bbb3",
                "departureAt": "2023-04-07T23:00:00.000Z",
                "arrivalAt": "2023-04-08T02:00:00.000Z",
                "availableSeats": 46,
                "prices": {
                    "currency": "SEK",
                    "adult": 119.9,
                    "child": 115.99
                }
            }
        ]
    },
    {
        "route_id": "42be9e9e",
        "departureDestination": "Amsterdam",
        "arrivalDestination": "Stockholm",
        "itineraries": [
            {
                "flight_id": "2c71577c",
                "departureAt": "2023-03-29T11:00:00.000Z",
                "arrivalAt": "2023-03-29T14:00:00.000Z",
                "availableSeats": 68,
                "prices": {
                    "currency": "SEK",
                    "adult": 126.47,
                    "child": 52.65
                }
            },
            {
                "flight_id": "e94047f9",
                "departureAt": "2023-03-30T11:00:00.000Z",
                "arrivalAt": "2023-03-30T14:00:00.000Z",
                "availableSeats": 5,
                "prices": {
                    "currency": "SEK",
                    "adult": 124.08,
                    "child": 124.56
                }
            },
            {
                "flight_id": "b369be32",
                "departureAt": "2023-03-30T17:00:00.000Z",
                "arrivalAt": "2023-03-30T20:00:00.000Z",
                "availableSeats": 26,
                "prices": {
                    "currency": "SEK",
                    "adult": 119.9,
                    "child": 115.99
                }
            },
            {
                "flight_id": "5ede1871",
                "departureAt": "2023-03-30T21:00:00.000Z",
                "arrivalAt": "2023-03-31T00:00:00.000Z",
                "availableSeats": 45,
                "prices": {
                    "currency": "SEK",
                    "adult": 175.41,
                    "child": 51.73
                }
            },
            {
                "flight_id": "a318bd79",
                "departureAt": "2023-03-31T03:00:00.000Z",
                "arrivalAt": "2023-03-31T06:00:00.000Z",
                "availableSeats": 91,
                "prices": {
                    "currency": "SEK",
                    "adult": 126.47,
                    "child": 52.65
                }
            },
            {
                "flight_id": "25251a99",
                "departureAt": "2023-04-01T03:00:00.000Z",
                "arrivalAt": "2023-04-01T06:00:00.000Z",
                "availableSeats": 4,
                "prices": {
                    "currency": "SEK",
                    "adult": 145.11,
                    "child": 94.58
                }
            },
            {
                "flight_id": "60711b2e",
                "departureAt": "2023-04-01T07:00:00.000Z",
                "arrivalAt": "2023-04-01T10:00:00.000Z",
                "availableSeats": 4,
                "prices": {
                    "currency": "SEK",
                    "adult": 102.52,
                    "child": 172.3
                }
            },
            {
                "flight_id": "4a5d43f4",
                "departureAt": "2023-04-02T07:00:00.000Z",
                "arrivalAt": "2023-04-02T10:00:00.000Z",
                "availableSeats": 51,
                "prices": {
                    "currency": "SEK",
                    "adult": 108.78,
                    "child": 50.47
                }
            },
            {
                "flight_id": "3f184e9e",
                "departureAt": "2023-04-02T13:00:00.000Z",
                "arrivalAt": "2023-04-02T16:00:00.000Z",
                "availableSeats": 98,
                "prices": {
                    "currency": "SEK",
                    "adult": 180.6,
                    "child": 136.52
                }
            },
            {
                "flight_id": "17cc002a",
                "departureAt": "2023-04-02T17:00:00.000Z",
                "arrivalAt": "2023-04-02T20:00:00.000Z",
                "availableSeats": 34,
                "prices": {
                    "currency": "SEK",
                    "adult": 108.78,
                    "child": 50.47
                }
            },
            {
                "flight_id": "a0da7f57",
                "departureAt": "2023-04-02T23:00:00.000Z",
                "arrivalAt": "2023-04-03T02:00:00.000Z",
                "availableSeats": 27,
                "prices": {
                    "currency": "SEK",
                    "adult": 96.31,
                    "child": 64.35
                }
            },
            {
                "flight_id": "d6c33fef",
                "departureAt": "2023-04-03T23:00:00.000Z",
                "arrivalAt": "2023-04-04T02:00:00.000Z",
                "availableSeats": 33,
                "prices": {
                    "currency": "SEK",
                    "adult": 113.15,
                    "child": 131.45
                }
            },
            {
                "flight_id": "495d3f42",
                "departureAt": "2023-04-04T03:00:00.000Z",
                "arrivalAt": "2023-04-04T06:00:00.000Z",
                "availableSeats": 92,
                "prices": {
                    "currency": "SEK",
                    "adult": 109.28,
                    "child": 90.11
                }
            },
            {
                "flight_id": "32ddad7c",
                "departureAt": "2023-04-05T03:00:00.000Z",
                "arrivalAt": "2023-04-05T06:00:00.000Z",
                "availableSeats": 83,
                "prices": {
                    "currency": "SEK",
                    "adult": 199.74,
                    "child": 96.58
                }
            },
            {
                "flight_id": "bd7fab04",
                "departureAt": "2023-04-05T09:00:00.000Z",
                "arrivalAt": "2023-04-05T12:00:00.000Z",
                "availableSeats": 10,
                "prices": {
                    "currency": "SEK",
                    "adult": 139.69,
                    "child": 125.88
                }
            },
            {
                "flight_id": "4518964f",
                "departureAt": "2023-04-05T13:00:00.000Z",
                "arrivalAt": "2023-04-05T16:00:00.000Z",
                "availableSeats": 76,
                "prices": {
                    "currency": "SEK",
                    "adult": 71.05,
                    "child": 114
                }
            },
            {
                "flight_id": "0ad24ad7",
                "departureAt": "2023-04-05T19:00:00.000Z",
                "arrivalAt": "2023-04-05T22:00:00.000Z",
                "availableSeats": 71,
                "prices": {
                    "currency": "SEK",
                    "adult": 139.69,
                    "child": 125.88
                }
            },
            {
                "flight_id": "cfab559f",
                "departureAt": "2023-04-06T19:00:00.000Z",
                "arrivalAt": "2023-04-06T22:00:00.000Z",
                "availableSeats": 95,
                "prices": {
                    "currency": "SEK",
                    "adult": 145.11,
                    "child": 94.58
                }
            },
            {
                "flight_id": "d026ffd6",
                "departureAt": "2023-04-06T23:00:00.000Z",
                "arrivalAt": "2023-04-07T02:00:00.000Z",
                "availableSeats": 2,
                "prices": {
                    "currency": "SEK",
                    "adult": 187.27,
                    "child": 117.34
                }
            },
            {
                "flight_id": "eea593ef",
                "departureAt": "2023-04-07T23:00:00.000Z",
                "arrivalAt": "2023-04-08T02:00:00.000Z",
                "availableSeats": 8,
                "prices": {
                    "currency": "SEK",
                    "adult": 88.14,
                    "child": 93.88
                }
            }
        ]
    },
    {
        "route_id": "a35d65d2",
        "departureDestination": "Stockholm",
        "arrivalDestination": "Oslo",
        "itineraries": [
            {
                "flight_id": "78720a21",
                "departureAt": "2023-03-29T11:00:00.000Z",
                "arrivalAt": "2023-03-29T14:00:00.000Z",
                "availableSeats": 59,
                "prices": {
                    "currency": "SEK",
                    "adult": 168.41,
                    "child": 137.09
                }
            },
            {
                "flight_id": "ee1d3931",
                "departureAt": "2023-03-30T11:00:00.000Z",
                "arrivalAt": "2023-03-30T14:00:00.000Z",
                "availableSeats": 52,
                "prices": {
                    "currency": "SEK",
                    "adult": 136.18,
                    "child": 79.27
                }
            },
            {
                "flight_id": "23837e04",
                "departureAt": "2023-03-30T17:00:00.000Z",
                "arrivalAt": "2023-03-30T20:00:00.000Z",
                "availableSeats": 60,
                "prices": {
                    "currency": "SEK",
                    "adult": 108.78,
                    "child": 50.47
                }
            },
            {
                "flight_id": "01f8f87d",
                "departureAt": "2023-03-30T21:00:00.000Z",
                "arrivalAt": "2023-03-31T00:00:00.000Z",
                "availableSeats": 99,
                "prices": {
                    "currency": "SEK",
                    "adult": 126.47,
                    "child": 52.65
                }
            },
            {
                "flight_id": "c8981b87",
                "departureAt": "2023-03-31T03:00:00.000Z",
                "arrivalAt": "2023-03-31T06:00:00.000Z",
                "availableSeats": 43,
                "prices": {
                    "currency": "SEK",
                    "adult": 180.6,
                    "child": 136.52
                }
            },
            {
                "flight_id": "eaf437e1",
                "departureAt": "2023-04-01T03:00:00.000Z",
                "arrivalAt": "2023-04-01T06:00:00.000Z",
                "availableSeats": 90,
                "prices": {
                    "currency": "SEK",
                    "adult": 124.08,
                    "child": 124.56
                }
            },
            {
                "flight_id": "acabf8dd",
                "departureAt": "2023-04-01T07:00:00.000Z",
                "arrivalAt": "2023-04-01T10:00:00.000Z",
                "availableSeats": 61,
                "prices": {
                    "currency": "SEK",
                    "adult": 108.78,
                    "child": 50.47
                }
            },
            {
                "flight_id": "9b91fa79",
                "departureAt": "2023-04-02T07:00:00.000Z",
                "arrivalAt": "2023-04-02T10:00:00.000Z",
                "availableSeats": 41,
                "prices": {
                    "currency": "SEK",
                    "adult": 71.05,
                    "child": 114
                }
            },
            {
                "flight_id": "d8d8209b",
                "departureAt": "2023-04-02T13:00:00.000Z",
                "arrivalAt": "2023-04-02T16:00:00.000Z",
                "availableSeats": 66,
                "prices": {
                    "currency": "SEK",
                    "adult": 126.47,
                    "child": 52.65
                }
            },
            {
                "flight_id": "f8bed64b",
                "departureAt": "2023-04-02T17:00:00.000Z",
                "arrivalAt": "2023-04-02T20:00:00.000Z",
                "availableSeats": 38,
                "prices": {
                    "currency": "SEK",
                    "adult": 96.31,
                    "child": 64.35
                }
            },
            {
                "flight_id": "e3cc4e66",
                "departureAt": "2023-04-02T23:00:00.000Z",
                "arrivalAt": "2023-04-03T02:00:00.000Z",
                "availableSeats": 42,
                "prices": {
                    "currency": "SEK",
                    "adult": 71.05,
                    "child": 114
                }
            },
            {
                "flight_id": "f97fc9ec",
                "departureAt": "2023-04-03T23:00:00.000Z",
                "arrivalAt": "2023-04-04T02:00:00.000Z",
                "availableSeats": 20,
                "prices": {
                    "currency": "SEK",
                    "adult": 65.62,
                    "child": 74.58
                }
            },
            {
                "flight_id": "da44cedb",
                "departureAt": "2023-04-04T03:00:00.000Z",
                "arrivalAt": "2023-04-04T06:00:00.000Z",
                "availableSeats": 57,
                "prices": {
                    "currency": "SEK",
                    "adult": 84.71,
                    "child": 91.29
                }
            },
            {
                "flight_id": "565eebb4",
                "departureAt": "2023-04-05T03:00:00.000Z",
                "arrivalAt": "2023-04-05T06:00:00.000Z",
                "availableSeats": 12,
                "prices": {
                    "currency": "SEK",
                    "adult": 199.74,
                    "child": 96.58
                }
            },
            {
                "flight_id": "429ce43c",
                "departureAt": "2023-04-05T09:00:00.000Z",
                "arrivalAt": "2023-04-05T12:00:00.000Z",
                "availableSeats": 6,
                "prices": {
                    "currency": "SEK",
                    "adult": 84.71,
                    "child": 91.29
                }
            },
            {
                "flight_id": "477c93d3",
                "departureAt": "2023-04-05T13:00:00.000Z",
                "arrivalAt": "2023-04-05T16:00:00.000Z",
                "availableSeats": 83,
                "prices": {
                    "currency": "SEK",
                    "adult": 90.91,
                    "child": 126.54
                }
            },
            {
                "flight_id": "86c3267d",
                "departureAt": "2023-04-05T19:00:00.000Z",
                "arrivalAt": "2023-04-05T22:00:00.000Z",
                "availableSeats": 64,
                "prices": {
                    "currency": "SEK",
                    "adult": 113.15,
                    "child": 131.45
                }
            },
            {
                "flight_id": "ce8483c9",
                "departureAt": "2023-04-06T19:00:00.000Z",
                "arrivalAt": "2023-04-06T22:00:00.000Z",
                "availableSeats": 80,
                "prices": {
                    "currency": "SEK",
                    "adult": 96.31,
                    "child": 64.35
                }
            },
            {
                "flight_id": "357c4279",
                "departureAt": "2023-04-06T23:00:00.000Z",
                "arrivalAt": "2023-04-07T02:00:00.000Z",
                "availableSeats": 37,
                "prices": {
                    "currency": "SEK",
                    "adult": 197.8,
                    "child": 168.14
                }
            },
            {
                "flight_id": "e15ee620",
                "departureAt": "2023-04-07T23:00:00.000Z",
                "arrivalAt": "2023-04-08T02:00:00.000Z",
                "availableSeats": 25,
                "prices": {
                    "currency": "SEK",
                    "adult": 175.41,
                    "child": 51.73
                }
            }
        ]
    },
    {
        "route_id": "52ec1574",
        "departureDestination": "Stockholm",
        "arrivalDestination": "Amsterdam",
        "itineraries": [
            {
                "flight_id": "44d88508",
                "departureAt": "2023-03-29T11:00:00.000Z",
                "arrivalAt": "2023-03-29T14:00:00.000Z",
                "availableSeats": 36,
                "prices": {
                    "currency": "SEK",
                    "adult": 124.08,
                    "child": 124.56
                }
            },
            {
                "flight_id": "edec66a0",
                "departureAt": "2023-03-30T11:00:00.000Z",
                "arrivalAt": "2023-03-30T14:00:00.000Z",
                "availableSeats": 41,
                "prices": {
                    "currency": "SEK",
                    "adult": 70.79,
                    "child": 82.51
                }
            },
            {
                "flight_id": "0033bf62",
                "departureAt": "2023-03-30T17:00:00.000Z",
                "arrivalAt": "2023-03-30T20:00:00.000Z",
                "availableSeats": 11,
                "prices": {
                    "currency": "SEK",
                    "adult": 168.41,
                    "child": 137.09
                }
            },
            {
                "flight_id": "b4e9fecb",
                "departureAt": "2023-03-30T21:00:00.000Z",
                "arrivalAt": "2023-03-31T00:00:00.000Z",
                "availableSeats": 69,
                "prices": {
                    "currency": "SEK",
                    "adult": 187.27,
                    "child": 117.34
                }
            },
            {
                "flight_id": "8eaa13ae",
                "departureAt": "2023-03-31T03:00:00.000Z",
                "arrivalAt": "2023-03-31T06:00:00.000Z",
                "availableSeats": 97,
                "prices": {
                    "currency": "SEK",
                    "adult": 144.56,
                    "child": 40.22
                }
            },
            {
                "flight_id": "57522409",
                "departureAt": "2023-04-01T03:00:00.000Z",
                "arrivalAt": "2023-04-01T06:00:00.000Z",
                "availableSeats": 17,
                "prices": {
                    "currency": "SEK",
                    "adult": 119.9,
                    "child": 115.99
                }
            },
            {
                "flight_id": "aeaa1163",
                "departureAt": "2023-04-01T07:00:00.000Z",
                "arrivalAt": "2023-04-01T10:00:00.000Z",
                "availableSeats": 66,
                "prices": {
                    "currency": "SEK",
                    "adult": 66.78,
                    "child": 134.56
                }
            },
            {
                "flight_id": "8bd60b17",
                "departureAt": "2023-04-02T07:00:00.000Z",
                "arrivalAt": "2023-04-02T10:00:00.000Z",
                "availableSeats": 61,
                "prices": {
                    "currency": "SEK",
                    "adult": 66.78,
                    "child": 134.56
                }
            },
            {
                "flight_id": "d992e228",
                "departureAt": "2023-04-02T13:00:00.000Z",
                "arrivalAt": "2023-04-02T16:00:00.000Z",
                "availableSeats": 93,
                "prices": {
                    "currency": "SEK",
                    "adult": 102.52,
                    "child": 172.3
                }
            },
            {
                "flight_id": "8b34add5",
                "departureAt": "2023-04-02T17:00:00.000Z",
                "arrivalAt": "2023-04-02T20:00:00.000Z",
                "availableSeats": 3,
                "prices": {
                    "currency": "SEK",
                    "adult": 145.11,
                    "child": 94.58
                }
            },
            {
                "flight_id": "b046b198",
                "departureAt": "2023-04-02T23:00:00.000Z",
                "arrivalAt": "2023-04-03T02:00:00.000Z",
                "availableSeats": 37,
                "prices": {
                    "currency": "SEK",
                    "adult": 90.91,
                    "child": 126.54
                }
            },
            {
                "flight_id": "e76ef91e",
                "departureAt": "2023-04-03T23:00:00.000Z",
                "arrivalAt": "2023-04-04T02:00:00.000Z",
                "availableSeats": 17,
                "prices": {
                    "currency": "SEK",
                    "adult": 65.62,
                    "child": 74.58
                }
            },
            {
                "flight_id": "dfc0d1b7",
                "departureAt": "2023-04-04T03:00:00.000Z",
                "arrivalAt": "2023-04-04T06:00:00.000Z",
                "availableSeats": 16,
                "prices": {
                    "currency": "SEK",
                    "adult": 199.74,
                    "child": 96.58
                }
            },
            {
                "flight_id": "9a0c9a7d",
                "departureAt": "2023-04-05T03:00:00.000Z",
                "arrivalAt": "2023-04-05T06:00:00.000Z",
                "availableSeats": 46,
                "prices": {
                    "currency": "SEK",
                    "adult": 119.9,
                    "child": 115.99
                }
            },
            {
                "flight_id": "cca3c3cf",
                "departureAt": "2023-04-05T09:00:00.000Z",
                "arrivalAt": "2023-04-05T12:00:00.000Z",
                "availableSeats": 69,
                "prices": {
                    "currency": "SEK",
                    "adult": 88.14,
                    "child": 93.88
                }
            },
            {
                "flight_id": "203aa013",
                "departureAt": "2023-04-05T13:00:00.000Z",
                "arrivalAt": "2023-04-05T16:00:00.000Z",
                "availableSeats": 72,
                "prices": {
                    "currency": "SEK",
                    "adult": 90.91,
                    "child": 126.54
                }
            },
            {
                "flight_id": "e8d01807",
                "departureAt": "2023-04-05T19:00:00.000Z",
                "arrivalAt": "2023-04-05T22:00:00.000Z",
                "availableSeats": 84,
                "prices": {
                    "currency": "SEK",
                    "adult": 96.8,
                    "child": 53.12
                }
            },
            {
                "flight_id": "bf3db75e",
                "departureAt": "2023-04-06T19:00:00.000Z",
                "arrivalAt": "2023-04-06T22:00:00.000Z",
                "availableSeats": 61,
                "prices": {
                    "currency": "SEK",
                    "adult": 96.31,
                    "child": 64.35
                }
            },
            {
                "flight_id": "df6495a7",
                "departureAt": "2023-04-06T23:00:00.000Z",
                "arrivalAt": "2023-04-07T02:00:00.000Z",
                "availableSeats": 26,
                "prices": {
                    "currency": "SEK",
                    "adult": 66.78,
                    "child": 134.56
                }
            },
            {
                "flight_id": "3a13dec1",
                "departureAt": "2023-04-07T23:00:00.000Z",
                "arrivalAt": "2023-04-08T02:00:00.000Z",
                "availableSeats": 40,
                "prices": {
                    "currency": "SEK",
                    "adult": 197.8,
                    "child": 168.14
                }
            }
        ]
    },
    {
        "route_id": "c76824c1",
        "departureDestination": "Amsterdam",
        "arrivalDestination": "Oslo",
        "itineraries": [
            {
                "flight_id": "376ecc32",
                "departureAt": "2023-03-29T11:00:00.000Z",
                "arrivalAt": "2023-03-29T14:00:00.000Z",
                "availableSeats": 13,
                "prices": {
                    "currency": "SEK",
                    "adult": 187.27,
                    "child": 117.34
                }
            },
            {
                "flight_id": "7ce5110f",
                "departureAt": "2023-03-30T11:00:00.000Z",
                "arrivalAt": "2023-03-30T14:00:00.000Z",
                "availableSeats": 86,
                "prices": {
                    "currency": "SEK",
                    "adult": 70.79,
                    "child": 82.51
                }
            },
            {
                "flight_id": "70466cc2",
                "departureAt": "2023-03-30T17:00:00.000Z",
                "arrivalAt": "2023-03-30T20:00:00.000Z",
                "availableSeats": 15,
                "prices": {
                    "currency": "SEK",
                    "adult": 140.39,
                    "child": 144.88
                }
            },
            {
                "flight_id": "737ef3a4",
                "departureAt": "2023-03-30T21:00:00.000Z",
                "arrivalAt": "2023-03-31T00:00:00.000Z",
                "availableSeats": 40,
                "prices": {
                    "currency": "SEK",
                    "adult": 185.52,
                    "child": 95.86
                }
            },
            {
                "flight_id": "d2980068",
                "departureAt": "2023-03-31T03:00:00.000Z",
                "arrivalAt": "2023-03-31T06:00:00.000Z",
                "availableSeats": 27,
                "prices": {
                    "currency": "SEK",
                    "adult": 96.31,
                    "child": 64.35
                }
            },
            {
                "flight_id": "49910152",
                "departureAt": "2023-04-01T03:00:00.000Z",
                "arrivalAt": "2023-04-01T06:00:00.000Z",
                "availableSeats": 16,
                "prices": {
                    "currency": "SEK",
                    "adult": 124.08,
                    "child": 124.56
                }
            },
            {
                "flight_id": "97bb111b",
                "departureAt": "2023-04-01T07:00:00.000Z",
                "arrivalAt": "2023-04-01T10:00:00.000Z",
                "availableSeats": 82,
                "prices": {
                    "currency": "SEK",
                    "adult": 175.41,
                    "child": 51.73
                }
            },
            {
                "flight_id": "23813979",
                "departureAt": "2023-04-02T07:00:00.000Z",
                "arrivalAt": "2023-04-02T10:00:00.000Z",
                "availableSeats": 14,
                "prices": {
                    "currency": "SEK",
                    "adult": 180.6,
                    "child": 136.52
                }
            },
            {
                "flight_id": "9327797c",
                "departureAt": "2023-04-02T13:00:00.000Z",
                "arrivalAt": "2023-04-02T16:00:00.000Z",
                "availableSeats": 62,
                "prices": {
                    "currency": "SEK",
                    "adult": 66.78,
                    "child": 134.56
                }
            },
            {
                "flight_id": "f44c177a",
                "departureAt": "2023-04-02T17:00:00.000Z",
                "arrivalAt": "2023-04-02T20:00:00.000Z",
                "availableSeats": 48,
                "prices": {
                    "currency": "SEK",
                    "adult": 80.9,
                    "child": 167.34
                }
            },
            {
                "flight_id": "529fe331",
                "departureAt": "2023-04-02T23:00:00.000Z",
                "arrivalAt": "2023-04-03T02:00:00.000Z",
                "availableSeats": 71,
                "prices": {
                    "currency": "SEK",
                    "adult": 180.6,
                    "child": 136.52
                }
            },
            {
                "flight_id": "341e5513",
                "departureAt": "2023-04-03T23:00:00.000Z",
                "arrivalAt": "2023-04-04T02:00:00.000Z",
                "availableSeats": 92,
                "prices": {
                    "currency": "SEK",
                    "adult": 183.68,
                    "child": 123.69
                }
            },
            {
                "flight_id": "e80b9947",
                "departureAt": "2023-04-04T03:00:00.000Z",
                "arrivalAt": "2023-04-04T06:00:00.000Z",
                "availableSeats": 90,
                "prices": {
                    "currency": "SEK",
                    "adult": 175.41,
                    "child": 51.73
                }
            },
            {
                "flight_id": "9877c3b6",
                "departureAt": "2023-04-05T03:00:00.000Z",
                "arrivalAt": "2023-04-05T06:00:00.000Z",
                "availableSeats": 79,
                "prices": {
                    "currency": "SEK",
                    "adult": 168.41,
                    "child": 137.09
                }
            },
            {
                "flight_id": "4679bd4d",
                "departureAt": "2023-04-05T09:00:00.000Z",
                "arrivalAt": "2023-04-05T12:00:00.000Z",
                "availableSeats": 91,
                "prices": {
                    "currency": "SEK",
                    "adult": 71.05,
                    "child": 114
                }
            },
            {
                "flight_id": "271c3a11",
                "departureAt": "2023-04-05T13:00:00.000Z",
                "arrivalAt": "2023-04-05T16:00:00.000Z",
                "availableSeats": 35,
                "prices": {
                    "currency": "SEK",
                    "adult": 80.9,
                    "child": 167.34
                }
            },
            {
                "flight_id": "a4ce6dff",
                "departureAt": "2023-04-05T19:00:00.000Z",
                "arrivalAt": "2023-04-05T22:00:00.000Z",
                "availableSeats": 30,
                "prices": {
                    "currency": "SEK",
                    "adult": 145.11,
                    "child": 94.58
                }
            },
            {
                "flight_id": "b9e70f64",
                "departureAt": "2023-04-06T19:00:00.000Z",
                "arrivalAt": "2023-04-06T22:00:00.000Z",
                "availableSeats": 94,
                "prices": {
                    "currency": "SEK",
                    "adult": 113.15,
                    "child": 131.45
                }
            },
            {
                "flight_id": "f13d99ec",
                "departureAt": "2023-04-06T23:00:00.000Z",
                "arrivalAt": "2023-04-07T02:00:00.000Z",
                "availableSeats": 11,
                "prices": {
                    "currency": "SEK",
                    "adult": 136.18,
                    "child": 79.27
                }
            },
            {
                "flight_id": "cbbc7735",
                "departureAt": "2023-04-07T23:00:00.000Z",
                "arrivalAt": "2023-04-08T02:00:00.000Z",
                "availableSeats": 84,
                "prices": {
                    "currency": "SEK",
                    "adult": 197.8,
                    "child": 168.14
                }
            }
        ]
    },
    {
        "route_id": "8efc397d",
        "departureDestination": "Oslo",
        "arrivalDestination": "Tehran",
        "itineraries": [
            {
                "flight_id": "87211f9b",
                "departureAt": "2023-03-29T11:00:00.000Z",
                "arrivalAt": "2023-03-29T14:00:00.000Z",
                "availableSeats": 0,
                "prices": {
                    "currency": "SEK",
                    "adult": 88.14,
                    "child": 93.88
                }
            },
            {
                "flight_id": "a4ppcd64",
                "departureAt": "2023-03-30T11:00:00.000Z",
                "arrivalAt": "2023-03-30T14:00:00.000Z",
                "availableSeats": 82,
                "prices": {
                    "currency": "SEK",
                    "adult": 96.31,
                    "child": 64.35
                }
            }
        ]
    },
    {
        "route_id": "8efk397d",
        "departureDestination": "Tehran",
        "arrivalDestination": "Amsterdam",
        "itineraries": [
            {
                "flight_id": "87o11f9b",
                "departureAt": "2023-03-29T11:00:00.000Z",
                "arrivalAt": "2023-03-29T14:00:00.000Z",
                "availableSeats": 0,
                "prices": {
                    "currency": "SEK",
                    "adult": 88.14,
                    "child": 93.88
                }
            },
            {
                "flight_id": "a4npcd64",
                "departureAt": "2023-03-30T11:00:00.000Z",
                "arrivalAt": "2023-03-30T14:00:00.000Z",
                "availableSeats": 82,
                "prices": {
                    "currency": "SEK",
                    "adult": 96.31,
                    "child": 64.35
                }
            }
        ]
    },
];
exports.default = FlightsData;
