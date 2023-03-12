const quotes = [
    {
        quote: "No great man ever complains of want of opportunity.",
        author: "위대한 사람은 기회가 없다고 원망하지 않는다."
    }, {
        quote: "Do not accustom yourself to use big words for little matters.",
        author: "작은 일에 거창한 말을 사용하는 습관을 피해라."
    }, {
        quote: "A day without laughter is a day wasted.",
        author: "웃음 없는 하루는 낭비한 하루다."
    }, {
        quote: "Patterning your life around other's opinions is nothing more than slavery.",
        author: "다른 사람의 생각에 인생을 맞춰가는 것은 노예나 다름없다."
    }, {
        quote: "Love what you have.",
        author: "당신이 가진 것을 사랑하라."
    }, {
        quote: "It ain't over till it's over.",
        author: "끝날 때까지는 끝난 게 아니다."
    }, {
        quote: "Life is not fair, get used to it.",
        author: "인생이란 결코 공평하지 않다. 이 사실에 익숙해져라."
    }, {
        quote: "Only I can change my life, No one can do it for me.",
        author: "나만이 내 인생을 바꿀 수 있다. 아무도 날 대신해 줄 수 없다."
    }, {
        quote: "Life is a tragedy when seen in close-up, but a comedy in long shot.",
        author: "반성하지 않은 삶은 살 가치가 없다."
    }

]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;