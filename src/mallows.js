import wyatt from './assets/wyatt.png';
import wyatt2 from './assets/wyatt2.png';
import wanda from './assets/wanda.png';
import wanda2 from './assets/wanda2.png';
import steele from './assets/steele.png';
import steele2 from './assets/Steele-2.png';
import lola from './assets/lola.png';
import lola2 from './assets/lola2.png';
import lamont from './assets/lamont.png';
import lamont2 from './assets/lamont2.png';
import fifi from './assets/fifi.png';
import fifi2 from './assets/fifi2.png';
import aldea from './assets/aldea.png';
import avery from './assets/avery.png';
import barb from './assets/barb.png';
import barb2 from './assets/barb2.png';
import conradina from './assets/conradina.png';
import conradina2 from './assets/conradina2.png';
import elton from './assets/Elton.png';
import lake from './assets/lake.png';
import lorenzo from './assets/lorenzo.png';
import lorenzo2 from './assets/lorenzo2.png';
import renard from './assets/renard.png';
import sigzby from './assets/sigzby.png';
import terell from './assets/terell.png';
import winston from './assets/winston.png';
import winston2 from './assets/winston2.png';
import lalinda from './assets/lalinda.png';

const data = [
  {
    name: 'Wyatt',
    num: 1932,
    birth: new Date ('2022-08-24'),
    description: 'Green laughing frog',
    intro: 'Wyatt loves shooting hoops at home with his big sister, Wendy! These two ‘Mallows play pickup basketball all the way until dinner time. This year, Wyatt became a mathlete, so playing a fun game is just what he needs to stay sharp in between competitions.',
    size: 12,
    price: 19.99,
    image: [wyatt, wyatt2],
    stock: 5,
  },
  {
    name: 'Wanda',
    num: 333,
    birth: new Date ('2019-09-27'),
    description: 'Watermelon',
    intro: 'Wanda loves all things strategy - chess, dominoes, and making the perfect sandwich. When she visits her grandparents, they take her to play games in the park and afterward, she makes them her famous sandwiches.',
    size: 12,
    price: 19.99,
    image: [wanda, wanda2],
    stock: 5,
  },
  {
    name: 'Steele',
    num: 1252,
    birth: new Date ('2021-09-19'),
    description: 'Blue Gradient Striped Whale Shark with White Belly',
    intro: 'This whale shark is happiest when in motion. He was born deaf and loves to dance and feel the vibrations of the drums and bass. You can catch Steele and friends at a heavy metal show or dancing beneath the strobe light to their favorite DJ. Make sure to wave hello!',
    size: 12,
    price: 19.99,
    image: [steele, steele2],
    stock: 5,
  },
  {
    name: 'Lola',
    num: 84,
    birth: new Date ('2017-12-01'),
    description: 'Purple And Pink Tie Dye Unicorn With White Belly And Purple Mane',
    intro: 'Lola loves the color pink, watching movies with her friends, and wants to be an actress when she grows up. She loves to visit new places and dreams of traveling the world while she makes movies.',
    size: 12,
    price: 19.99,
    image: [lola, lola2],
    stock: 5,
  },
  {
    name: 'Fifi',
    num: 5,
    birth: new Date ('2017-03-17'),
    description: '12″ Fifi the Red Fox Squishmallows',
    intro: 'Fifi is your girl if you like to go on adventures! She’s traveled to the Arctic, to the mountains, and is ready to go on her next trip with you. Born October 6, Fifi has a vibrant personality and is quite the little firecracker. She channels her energy through yoga flows, and is working on getting her yoga teacher certificate!',
    size: 12,
    price: 19.99,
    image: [fifi, fifi2],
    stock: 5,
  },
  {
    name: 'Lamont',
    num: 1226,
    birth: new Date ('2021-10-01'),
    description: 'Black and White Pride French Bulldog with Rainbow Ears and Sunglasses with White Belly',
    intro: 'This well-traveled ‘Mallow has a unique perspective on the world and a wonderful sense of humor. He brightens up any conversation with laughter and stories from his travels. Lamont seems to have been everywhere and knows just about everyone! Lamont would love to meet you next! \n \n Squishmallows is committed to inclusive play experiences for all ages, races, and genders. We are delighted to partner with wayOUT to spotlight and advance organizations that empower LGBTQ+ youth in under-resourced areas across the country. We are donating Squishmallows Pride products and making a monetary contribution to support the Los Angeles chapter’s upcoming initiatives, including the annual Pride Scavenger Hunt and Gayla.',
    size: 12,
    price: 19.99,
    image: [lamont, lamont2],
    stock: 5,
  },
  {
    name: 'Avery',
    num: 216,
    birth: new Date ('2022-06-02'),
    description: 'Mallard Duck With Closed Eyes And Beanie',
    intro: 'Don’t let his size fool you, Avery is a skilled left wingman for the ‘Mallows rugby team, and one day, he wants to be a coach! His whole family comes to watch and they bring popsicles to celebrate once the game is over.',
    size: 12,
    price: 19.99,
    image: [avery],
    stock: 5,
  },
  {
    name: 'Aldea',
    num: 1264,
    birth: new Date ('2021-09-29'),
    description: 'Teal and Purple Gradient Axolotl with White Belly',
    intro: 'This earthy mama is a holistic healer. She’s a certified Reiki massage therapist and she loves how much it heals. Aldea also knows all about plants and their healing property. Have a headache? She has the perfect essential oil for you!',
    size: 12,
    price: 19.99,
    image: [aldea],
    stock: 5,
  },
  {
    name: 'Barb',
    num: null,
    birth: null,
    description: 'Purple and Teal Tie-dye Dog with Purple Fuzzy Ears, Cucumber Eye Mask, and White Fuzzy Belly',
    intro: 'Barb says hello! Barb is quite the gymnast and can do all kinds of tricks, from aerials to tricks on the trapeze. If asked nicely, Barb will even put on a show for her friends! While she’s a humble ‘Mallow, Barb loves to show off her moves.',
    size: 12,
    price: 19.99,
    image: [barb, barb2],
    stock: 5,
  },
  {
    name: 'Conradina',
    num: 1265,
    birth: new Date ('2021-09-30'),
    description: 'Purple Bigfoot With Rainbow Hair Wearing Heart Headband With White Belly',
    intro: 'Conradina is an amazing writer. She sees the world with vivid imagery and emotion. Now she’s working up the courage to share her work. She wants to read in front of a crowd at open mic night, but public speaking makes her nervous. Can she practice reading a poem in front of you?',
    size: 12,
    price: 19.99,
    image: [conradina, conradina2],
    stock: 5,
  },
  {
    name: 'Elton',
    num: 173,
    birth: new Date ('2018-11-12'),
    description: 'Peach Monkey',
    intro: 'Elton is always up to something! Whether he’s tinkering with a watch, a truck or a toy, he’s fascinated by the way things work!',
    size: `Combo Pack - includes: \n(1) 8-Inch, \n(1) 5-Inch, \n(1) 3.5-Inch`,
    price: 19.99,
    image: [elton],
    stock: 5,
  },
  {
    name: 'Lake',
    num: null,
    birth: null,
    description: 'Black Bull with Gold Nose Ring',
    intro: 'Lake writes short magazines and sends them to all of his closest ‘Mallow friends — he’s on issue #109! His dream is to write young adult novels from a little cottage in the woods, and be published under the pen name L.B. Gold. Would you read his stories?',
    size: 12,
    price: 19.99,
    image: [lake],
    stock: 5,
  },
  {
    name: 'Lorenzo',
    num: 1602,
    birth: new Date ('2022-03-30'),
    description: 'Yellow Banana Slug',
    intro: 'Lorenzo is a TV buff and blogger! He wants to use his knowledge and passion for television to break into showbiz. Lorenzo aspires to build his own TV network so he can schedule all his favorite shows and help create some new ones!',
    size: 12,
    price: 19.99,
    image: [lorenzo, lorenzo2],
    stock: 5,
  },
  {
    name: 'Renard',
    num: null,
    birth: new Date ('2021-09-26'),
    description: 'Brown and White Tie-dye Bunny',
    intro: 'Renard is a natural-born leader who has a knack for bringing others together. They love planning summer picnics and organizing freeze tag games in the park. Everyone is invited and encouraged to bring a friend. Renard always brings plenty of food for everyone so come join!',
    size: 12,
    price: 19.99,
    image: [renard],
    stock: 5,
  },
  {
    name: 'Sigzby',
    num: 1302,
    birth: new Date ('2021-09-21'),
    description: 'Black Panther With Fuzzy Ears And Silver Spots',
    intro: 'Meet Sigzby. This super special ‘Mallow is rarely seen in the wild, that’s because she’s nocturnal! When everyone else is sleeping, she’s up rock climbing, making origami, or practicing her ballet moves! When the sun comes up, you can find her snoozing in her favorite tree!',
    size: 12,
    price: 19.99,
    image: [sigzby],
    stock: 5,
  },
  {
    name: 'Terell',
    num: 1263,
    birth: new Date ('2021-09-28'),
    description: 'Green Tie-dye Mushroom With Shamrock Embroidery And Green Belly',
    intro: 'Ever since Terell found his lucky clover, good things seem to happen wherever he goes! Maybe it’s the clover and maybe it’s his optimistic outlook. He sees the bright side of life and is great at helping others see it too! It’s hard not to feel lucky when hanging with Terell!',
    size: 12,
    price: 19.99,
    image: [terell],
    stock: 5,
  },
  {
    name: 'Winston',
    num: 92,
    birth: new Date ('2022-06-28'),
    description: 'Teal Owl With Fanny pack',
    intro: 'Winston is an aspiring chef who takes his cooking creativity to the next level. His friends inspire his latest culinary delights and he is always ready to whip up his famous mac and cheese.',
    size: 12,
    price: 19.99,
    image: [winston, winston2],
    stock: 5,
  },
  {
    name: 'Lalinda',
    num: 1877,
    birth: new Date ('2022-08-15'),
    description: 'Pastel Giraffe with Spots',
    intro: 'Have you heard of Lalinda? This ‘Mallow is taking the music industry by storm with her deep vocals and fun guitar riffs. You’ll catch her strutting down every red carpet this year and headlining all the major music events. Reach out to Lalinda on social media! She loves to hear from her fans.',
    size: 12,
    price: 19.99,
    image: [lalinda],
    stock: 5,
  },
]

export default data;