class Room {
  constructor(floorNum, roomNum, price) {
    this.floorNum = floorNum;
    this.roomNum = roomNum;
    this.price = price;
    this.#isBooked = false;
  }

  #isBooked;

  printRoom() {
    console.log(`Room ${this.roomNum} is on floor ${this.floorNum} and costs ${this.price} per night.`);
  }

  isBooked() {
    return this.#isBooked;
  }

  book() {
    this.#isBooked = true;
  }
}

class RoomWithView extends Room {
  constructor(floorNum, roomNum, price, view, numberOfBeds) {
    super(floorNum, roomNum, price);
    this.view = view;
    this.numberOfBeds = numberOfBeds;
  }
}

class SleepingRoom extends Room {
  constructor(floorNum, roomNum, price, personCapacity) {
    super(floorNum, roomNum, price);
    this.personCapacity = personCapacity;
  }
}

class Hotel {
  constructor(address, numberOfRooms, minFloor, maxFloor) {
    this.address = address;
    this.numberOfRooms = numberOfRooms;
    this.#minFloor = minFloor;
    this.#maxFloor = maxFloor;
    this.rooms = [];
  }

  #minFloor;
  #maxFloor;

  printAdvertisement() {
    console.log(`Welcome to our hotel located at ${this.address}. We have a total of ${this.numberOfRooms} rooms, with floors ranging from ${this.#minFloor} to ${this.#maxFloor}.`);
  }

  listBookedRooms() {
    const bookedRooms = this.rooms.filter(room => room.isBooked());
    if (bookedRooms.length > 0) {
      console.log("The following rooms are booked:");
      bookedRooms.forEach(room => room.printRoom());
    } else {
      console.log("No rooms are currently booked.");
    }
  }
}

// Mock Data
const hotel = new Hotel("123 Main St", 10, 1, 5);
const room1 = new Room(1, "101", 100);
const room2 = new RoomWithView(1, "102", 150, "ocean", 2);
const room3 = new SleepingRoom(2, "201", 200, 4);
const room4 = new RoomWithView(3, "301", 250, "city", 3);
const room5 = new SleepingRoom(3, "302", 300, 2);
const room6 = new Room(4, "401", 100);
const room7 = new RoomWithView(4, "402", 150, "pool", 2);
const room8 = new SleepingRoom(5, "501", 200, 6);
const room9 = new RoomWithView(5, "502", 250, "beach", 3);
const room10 = new SleepingRoom(5, "503", 300, 2);

hotel.rooms.push(room1, room2, room3, room4, room5, room6, room7, room8, room9, room10);

hotel.printAdvertisement();
hotel.listBookedRooms();

console.log("Booking room 102...");
room2.book();

hotel.listBookedRooms();
