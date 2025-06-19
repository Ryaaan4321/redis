export type FakeUser = {
    id: string;
    name: string;
    profession: string;
    location: string;
    email: string;
};

export const fakeUsers: { [key: string]: FakeUser } = {
    "1": {
        id: "1",
        name: "Motu",
        profession: "Fullstack Developer",
        location: "India",
        email: "motu@example.com",
    },
    "2": {
        id: "2",
        name: "Badal Bharti",
        profession: "Electronics Engineer",
        location: "Delhi",
        email: "badal@example.com",
    },
    "3": {
        id: "2",
        name: " Bharti",
        profession: "Electronics Engineer",
        location: "Delhi",
        email: "badal@example.com",
    },
};
export const faketaxi = {
    "1": {
        id: "1",
        name: "Taxi 1",
        driver: "Driver 1",
        location: "Location 1",
        status: "Available",
    },
    "2": {
        id: "2",
        name: "Taxi 2",
        driver: "Driver 2",
        location: "Location 2",
        status: "Unavailable",
    },
}

export const faketaxivideos = {
    "1": {
        id: "1",
        title: "Taxi Video 1",
        description: "Description for Taxi Video 1",
        url: "https://example.com/video1.mp4",
        taxiId: "1",
    },
    "2": {
        id: "2",
        title: "Taxi Video 2",
        description: "Description for Taxi Video 2",
        url: "https://example.com/video2.mp4",
        taxiId: "2",
    },
}
export const faketaxiadultvidoes = {
    "1": {
        id: "1",
        title: "Taxi Video 1",
        description: "Description for Taxi Video 1",
        url: "https://example.com/video1.mp4",
        taxiId: "1",
    },
    "2": {
        id: "2",
        title: "Taxi Video 2",
        description: "Description for Taxi Video 2",
        url: "https://example.com/video2.mp4",
        taxiId: "2",
    },
}