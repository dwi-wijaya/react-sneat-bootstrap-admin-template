// greetingHandler.js

const getGreetingMessage = (name) => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    let greeting;

    if (currentHour >= 5 && currentHour < 12) {
        greeting = 'Good Morning 😎';
    } else if (currentHour >= 12 && currentHour < 18) {
        greeting = 'Good Afternoon 🌤️';
    } else {
        greeting = 'Good Evening 🌙';
    }

    return `👋 Hello ${name}, ${greeting}!`;
};

export default getGreetingMessage;
