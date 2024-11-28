export const sample_users = [
  {
    id: "1",
    name: "Ash",
    sample_books: [
      {
        id: "1",
        name: `Harry Potter & the Philosopher's Stone`,
        authors: ["JK Rowling"],
        series: `Harry Potter`,
        publisher: "Bloomsbury",
        publishYear: 1997,
        quantityAvailable: 3,
        language: ["English"],
        tags: ["Magic", "Mystery", "Fiction"],
        src: "https://res.cloudinary.com/bloomsbury-atlas/image/upload/w_360,c_scale/jackets/9781408855652.jpg",
      },
      {
        id: "2",
        name: `The Hobbit`,
        authors: ["JRR Tolkien"],
        series: `The Lord of the Rings`,
        publisher: "George Allen & Unwin",
        publishYear: 1937,
        quantityAvailable: 5,
        language: ["English"],
        tags: ["Fantasy", "Mystery", "Fiction", "Adventure"],
        src: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1546071216i/5907.jpg",
      },
      {
        id: "3",
        name: `Rich Dad Poor Dad`,
        authors: ["Robert Kiyosaki", "Sharon Lechter"],
        series: null,
        publisher: "Plata Publishing",
        publishYear: 1997,
        quantityAvailable: 2,
        language: ["English"],
        tags: ["Non-Fiction", "Lifestyle"],
        src: "https://m.media-amazon.com/images/I/81BE7eeKzAL._SY466_.jpg",
      },
      {
        id: "4",
        name: `Wings of Fire`,
        authors: ["APJ Abdul Kalam", "Arun Tiwari"],
        series: null,
        publisher: "Universities Publisher",
        publishYear: 1999,
        quantityAvailable: 10,
        language: ["English"],
        tags: ["Non-Fiction", "Autobiography"],
        src: "https://m.media-amazon.com/images/I/51wbVQTpTgL._SY445_SX342_.jpg",
      },
      {
        id: "5",
        name: `Operation Khukri`,
        authors: ["Major General Rajpal Punia", "Damini Punia"],
        series: null,
        publisher: "Penguin Random House",
        publishYear: 2021,
        quantityAvailable: 6,
        language: ["English"],
        tags: ["Non-Fiction", "Military"],
        src: "https://m.media-amazon.com/images/I/51w5cSa0thL._SY445_SX342_.jpg",
      },
      {
        id: "6",
        name: `Srinivasa Ramanujan: Man of Mathematics`,
        authors: ["Shalini Srinivasan", "Reena Puri"],
        series: null,
        publisher: "Amar Chitra Katha",
        publishYear: 2012,
        quantityAvailable: 5,
        language: ["English"],
        tags: ["Non-Fiction", "Comic", "Biography"],
        src: "https://cdn.papertrell.com/005/835/005835497_480X320FW.jpg",
      },
    ],
    sample_readers: [
      {
        id: "1",
        name: "Selvaraj Chettiar",
        joinDate: Date(2024, 4, 20),
        booksPending: 1,
        booksBorrowed: 5,
        active: true,
      },
      {
        id: "2",
        name: "Angela Subramanian Mudaliar",
        joinDate: Date(2024, 2, 26),
        booksPending: 2,
        booksBorrowed: 10,
        active: true,
      },
      {
        id: "3",
        name: "Revathi Iyer",
        joinDate: Date(2024, 5, 31),
        booksPending: 0,
        booksBorrowed: 6,
        active: false,
      },
      {
        id: "4",
        name: "Mohammed Iqbal Rowther",
        joinDate: Date(2023, 10, 2),
        booksPending: 2,
        booksBorrowed: 8,
        active: true,
      },
      {
        id: "5",
        name: "John Murugan Paravar",
        joinDate: Date(2023, 11, 12),
        booksPending: 0,
        booksBorrowed: 15,
        active: true,
      },
      {
        id: "6",
        name: "Ramaswamy Thevar",
        joinDate: Date(2024, 1, 14),
        booksPending: 1,
        booksBorrowed: 4,
        active: true,
      },
      {
        id: "7",
        name: "Jayaraj Iyengar",
        joinDate: Date(2023, 12, 1),
        booksPending: 1,
        booksBorrowed: 2,
        active: true,
      },
      {
        id: "8",
        name: "Senthil Perumal Mallar",
        joinDate: Date(2024, 6, 15),
        booksPending: 2,
        booksBorrowed: 10,
        active: true,
      },
    ],
  },
];

export const founding_date = new Date(2023, 10, 11);

export const user_id = "1";
