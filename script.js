
    const button = document.querySelector('.btn');
    const image = document.getElementById('person-image');
    const p1 = document.getElementById('p1');
    const p2 = document.getElementById('p2');
    const p3 = document.getElementById('p3');
    const p4 = document.getElementById('p4');
    const p5 = document.getElementById('p5');



const peopleData= [
    {
        imgSrc : 'top1.jpeg',
        rank: 'Rank #1',
        name : 'Name : Justin Welsh',
        description : 'The Diversified Solopreneur',
        country : 'Country : United States',
        follow : 'Followers : 625k',

    },
    {
        imgSrc: 'top2.jpeg',
            rank: 'Rank #2',
            name: 'Name : Rob Dance',
            description: 'Founder & CEO of Rock',
            country: 'Country : United Kingdom',
            follow: 'Followers : 164.6K'
    },
    {
        imgSrc: 'top3.jpeg',
            rank: 'Rank #3',
            name: 'Name : Will McTighe',
            description: 'Professional Growth Advisor Sharing Insights',
            country: 'Country : United States',
            follow: 'Followers : 159.1K'
    },
    {
        imgSrc: 'top4.jpeg',
            rank: 'Rank #4',
            name: 'Name : Andrew Lokenauth',
            description: 'Investing & Finance Educator | Wall St Expert',
            country: 'Country : United Kingdom',
            follow: 'Followers : 282.9K'
    },
    {
        imgSrc: 'top5.jpeg',
            rank: 'Rank #5',
            name: 'Name : Elvi Caperonis',
            description: 'Technical Program Manager & Career Coach',
            country: 'Country : United States',
            follow: 'Followers : 143.3K'
    },
    {
        imgSrc: 'top6.jpeg',
            rank: 'Rank #6',
            name: 'Name : Eric Partaker',
            description: 'Entrepreneur, Author & CEO Coach',
            country: 'Country : United Kingdom',
            follow: 'Followers : 783.4K'
    },
    {
        imgSrc: 'top7.jpeg',
            rank: 'Rank #7',
            name: 'Name : Victoria Repa',
            description: 'Entrepreneur and Health Coach',
            country: 'Country : Ukraine',
            follow: 'Followers : 305.2K'
    },
    {
        imgSrc: 'top8.jpeg',
            rank: 'Rank #8',
            name: 'Name : Elfried Samba',
            description: 'CEO & Co-Founder at Butterfly 3ffect | Ex-Head Social Gymshark',
            country: 'Country : United Kingdom',
            follow: 'Followers : 227K'
    },
    {
        imgSrc: 'top9.jpeg',
            rank: 'Rank #9',
            name: 'Name : Hanna Larsson',
            description: 'Startup Advisor and Investor',
            country: 'Country : Sweden',
            follow: 'Followers : 175.8K'
    },    {
        imgSrc: 'top10.jpeg',
            rank: 'Rank #10',
            name: 'Name : Steven Bartlett',
            description: 'Founder: Flight Fund. Flight Studio. The Diary Of A CEO. Thirdweb.',
            country: 'Country : United Kingdom',
            follow: 'Followers : 2.5M'
    },
];
let currentIndex = 0;
function updateContent(index){
    const person = peopleData[index];
    image.src = person.imgSrc;
    p1.textContent = person.rank;
    p2.textContent = person.name;
    p3.textContent = person.description;
    p4.textContent = person.country;
    p5.textContent = person.follow;

}


button.addEventListener('click', ()=>{
 updateContent(currentIndex)
 currentIndex++;
 if (currentIndex >= peopleData.length){
    currentIndex=0;
 }

})





















    
    // const peopleData = [
    //     {
    //         imgSrc: 'top1.jpeg',
    //         rank: 'Rank #1',
    //         name: 'Name : Justin Welsh',
    //         description: 'The Diversified Solopreneur',
    //         country: 'Country : United States',
    //         followers: 'Followers : 625k'
    //     },
    //     {
    //         imgSrc: 'top2.jpeg',
    //         rank: 'Rank #2',
    //         name: 'Name : Rob Dance',
    //         description: 'Founder & CEO of Rock',
    //         country: 'Country : United Kingdom',
    //         followers: 'Followers : 164.6K'
    //     },
    // ];

    // // Function to update content
    // function updateContent(index) {
    //     const person = peopleData[index];
    //     image.src = person.imgSrc;
    //     p1.textContent = person.rank;
    //     p2.textContent = person.name;
    //     p3.textContent = person.description;
    //     p4.textContent = person.country;
    //     p5.textContent = person.followers;
    // }

   
    // button.addEventListener('click', () => {
        
    //     const randomIndex = Math.floor(Math.random() * peopleData.length);
    //     updateContent(randomIndex);
    // });
