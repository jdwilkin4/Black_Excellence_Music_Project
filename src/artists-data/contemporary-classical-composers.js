const contemporaryClassicalComposers = [
    {
        name: 'Adams, Harrison Leslie (b. 1932)',
        tag: 'Composer, Pianist & Professor',
        bio: 'http://chevalierdesaintgeorges.homestead.com/Adams.html',
        image: 'http://chevalierdesaintgeorges.homestead.com/images/H.LeslieAdamsGreenFernsSmall.jpg',
        alt: 'Harrison Adams'
    },
    {
        name: 'Adderley, Cedric',
        tag: 'Composer, Conductor, and Educator',
        bio: 'https://cedricadderley.com/',
        image: 'https://img1.wsimg.com/isteam/ip/deb8c292-6417-420e-a692-717b8e360c4f/C%20Adderley%20-%202.jpg',
        alt: 'Cedric Adderley'
    },
    {
        name: 'Akpabot, Samuel Ekpe (1932-2000)',
        tag: 'Nigerian Composer, Professor and Author',
        bio: 'http://chevalierdesaintgeorges.homestead.com/Akpabot.html',
        image: 'http://1.bp.blogspot.com/-nCjgxJf5aqs/VC8RFOhXnTI/AAAAAAAArSE/w-tnXGzjSMs/s1600/SamuelEkpeAkpabot.gif',
        alt: 'Samuel Akpabot'
    },
    {
        name: 'Alberga, Eleanor (b. 1949)',
        tag: 'Jamaican Composer & Pianist',
        bio: 'http://chevalierdesaintgeorges.homestead.com/Alberga.html',
        image: 'https://www.musicunitesjamaica.com/uploads/1/2/2/5/12251498/published/alberga-eleanor-c-keith-saunders-arenapal.jpg?1484700784',
        alt: 'Eleanor Alberga',
        isFemale: true
    },
    {
        name: 'Asare, Masi ',
        tag: 'Composer and Professor',
        bio: 'https://masiasare.com/home',
        image: 'https://media.soc.northwestern.edu/directory-public-assets/1601485465_AsareMasi.jpg',
        alt: 'Masi Asare',
        isFemale: true
    },
    {
        name: 'Bonds, Margaret Allison (1913-1972)',
        tag: 'Composer, Pianist & Musical Director ',
        bio: 'http://chevalierdesaintgeorges.homestead.com/Bonds.html',
        image: 'https://cdn.michiganopera.org/20210303111250/Margaret-Bonds-722.jpg',
        alt: 'Margaret Bonds',
        isFemale: true
    },
    {
        name: 'Burleigh, Henry "Harry" T. (1866-1949) ',
        tag: 'Composer, Arranger & Baritone ',
        bio: 'http://chevalierdesaintgeorges.homestead.com/Burleigh.html',
        image: 'data:image/jpeg;base64,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',
        alt: 'Harry Burleigh'
    },
    {
        name: 'Coleridge-Taylor, Samuel (1875-1912)',
        tag: 'Afro-British Composer, Conductor & Professor',
        bio: 'http://chevalierdesaintgeorges.homestead.com/Song.html',
        image: 'https://www.blackpast.org/wp-content/uploads/prodimages/files/blackpast_images/Coleridge-Taylor_Samuel.jpg',
        alt: 'Samuel Coleridge-Taylor'
    },
    {
        name: 'Cunningham, Arthur (1928-1997)',
        tag: 'Composer & Pianist ',
        bio: 'http://chevalierdesaintgeorges.homestead.com/Cunningham.html',
        image: 'http://4.bp.blogspot.com/_fx2HOOkbW7I/R6unvrUIcuI/AAAAAAAAArc/-mFs2MN60y4/s400/Equilibrium_65_Y.jpg',
        alt: 'Arthur Cunningham'
    },
    {
        name: 'Curtis, V. Marvin ',
        tag: 'Composer and college administrator ',
        bio: 'https://www.giamusic.com/store/artists/marvin-curtis',
        image: 'http://africandiasporamusicproject.org/plugins/ComposerPages/assets/Curtis,%20Marvin.jpg',
        alt: 'Marvin Curtis'
    },
    {
        name: 'Dawson, William Levi (1899-1990)',
        tag: 'Composer & Professor',
        bio: 'http://chevalierdesaintgeorges.homestead.com/Dawson.html',
        image: 'https://kjos.com/pub/media/person/Dawson_William.jpg',
        alt: 'William Dawson'
    },
    {
        name: 'Dédé, Edmund (1827-1903)',
        tag: 'Composer, Violinist & Conductor ',
        bio: 'http://chevalierdesaintgeorges.homestead.com/Dede.html',
        image: 'https://aaregistry.org/wp-content/uploads/2009/09/edmund-dede-236x300.jpg',
        alt: 'Edmund Dede'
    },
    {
        name: 'Dett, R. Nathaniel (1882-1943) ',
        tag: 'Composer, Pianist & Choral Director',
        bio: 'http://chevalierdesaintgeorges.homestead.com/Dett.html',
        image: 'https://lcweb2.loc.gov/diglib/ihas/html/images/nathaniel-dett.jpg',
        alt: 'Nathaniel Dett'
    },
    {
        name: 'Elie, Justin (1883-1931)',
        tag: 'Haitian Composer & Pianist ',
        bio: 'http://chevalierdesaintgeorges.homestead.com/Elie.html',
        image: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Justin_Elie.jpg',
        alt: 'Justin Elie'
    },
    {
        name: 'Euba, Akin (1935 - 2020)',
        tag: 'Nigerian Composer, Professor & Author ',
        bio: 'http://chevalierdesaintgeorges.homestead.com/Euba.html',
        image: 'http://chevalierdesaintgeorges.homestead.com/images/AkinEubaAfricanDress.jpg',
        alt: 'Akin Euba'
    },
    {
        name: 'Gilliard, Kerry J.(b. 1972)',
        tag: 'Composer and educator',
        bio: 'http://7thlettermusic.com/about/',
        image: 'http://7thlettermusic.com/wp-content/uploads/2015/07/kerrygilliard-300x225-300x225.jpg',
        alt: 'Kerry Gilliard'
    },
    {
        name: 'Hailstork, Adolphus C. (b. 1941) ',
        tag: 'Composer & Professor ',
        bio: 'http://chevalierdesaintgeorges.homestead.com/Hailstork.html',
        image: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Adolphus_Hailstork.jpg',
        alt: 'Adolphus Hailstork'
    },
    {
        name: 'Herbert, Philip',
        tag: 'Composer, conductor, and pianist',
        bio: 'http://www.philipherbert.org/about',
        image: 'https://images.squarespace-cdn.com/content/v1/5252744ae4b0c1ff60bb3f2d/1381224785345-TRBBHWTTAXRN8CHXFFGS/Philip+Aneurin+Herbert.jpg?format=500w',
        alt: 'Philip Herbert'
    },
    {
        name: 'Holland, Justin  (1819-1887) ',
        tag: 'Composer, Guitarist & Teacher',
        bio: 'http://chevalierdesaintgeorges.homestead.com/Holland.html',
        image: 'http://chevalierdesaintgeorges.homestead.com/images/Justin_Holland_crop_Z.jpg',
        alt: 'Justin Holland'
    },

    {
        name: 'Hughes, Chad "Sir Wick" ',
        tag: 'Composer, Conductor, Educator',
        bio: 'https://www.sirwickmusic.com/home',
        image: 'https://www.sinfonia.org/wp-content/uploads/2020/08/Chad-Hughes.jpg',
        alt: 'Chad Hughes'
    },
    {
        name: 'Jackson, Brandon',
        tag: 'Composer, Conductor, and Session Musician ',
        bio: 'https://linktr.ee/BranMuzsick',
        image: 'data:image/jpeg;base64,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',
        alt: 'Brandon Jackson'
    },
    {
        name: 'Kay, Ulysses (1917-1995) ',
        tag: 'Composer, Conductor & Professor ',
        bio: 'http://chevalierdesaintgeorges.homestead.com/Kay.html',
        image: 'http://chevalierdesaintgeorges.homestead.com/images/UlyssesKayHeadCloseLarge.jpg',
        alt: 'Ulysses Kay'
    },
    {
        name: 'Khumalo, J. S. Mzilikazi (b. 1932) ',
        tag: 'South African Composer & Choral Director',
        bio: 'http://chevalierdesaintgeorges.homestead.com/Khumalo.html',
        image: 'http://chevalierdesaintgeorges.homestead.com/images/MzilikaziKhumalo.jpg',
        alt: 'J.S. Khumalo'
    },
    {
        name: 'Lamothe, Ludovic  (1882-1953)',
        tag: 'Haitian Composer & Pianist ',
        bio: 'http://chevalierdesaintgeorges.homestead.com/Lamothe.html',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Ludovic_Lamothe.jpg/300px-Ludovic_Lamothe.jpg',
        alt: 'Ludovic Lamothe'
    },
    {
        name: 'León, Tania Justina (b. 1943) ',
        tag: 'Afro-Cuban Composer, Conductor & Professor ',
        bio: 'http://chevalierdesaintgeorges.homestead.com/Leon.html',
        image: 'http://chevalierdesaintgeorges.homestead.com/images/Leon_21_300.jpg',
        alt: 'Tania Leon',
        isFemale: true
    },
    {
        name: 'Moerane, Michael Mosoeu (1904-1980)',
        tag: 'Composer, Teacher, Pianist & Conductor',
        bio: 'http://chevalierdesaintgeorges.homestead.com/Moerane.html',
        image: 'https://chevalierdesaintgeorges.homestead.com/images/MichaelMosoeuMoerane.jpg',
        alt: 'Michael Moerane'
    },
    {
        name: 'Moore, Carman',
        tag: 'New York City Composer',
        bio: 'https://www.carmanmoore.com/',
        image: 'http://4.bp.blogspot.com/_fx2HOOkbW7I/R7NGikDkqDI/AAAAAAAAAuE/lkoTRgpYkf0/s400/Carman01.jpg',
        alt: 'Carman Moore'
    },
    {
        name: 'Perkinson, Coleridge-Taylor (1932-2004) ',
        tag: 'Composer & Conductor ',
        bio: 'http://chevalierdesaintgeorges.homestead.com/Perkinson.html',
        image: 'https://nmbx.newmusicusa.org/wp-content/uploads/nmbx/assets/59/images/perk_275x222.jpg',
        alt: 'Coleridge-Taylor Perkinson'
    },
    {
        name: 'Pradel, Alain Pierre (b. 1949) ',
        tag: 'Guadeloupean Composer & Pianist ',
        bio: 'http://chevalierdesaintgeorges.homestead.com/Pradel.html',
        image: 'data:image/jpeg;base64,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',
        alt: 'Alain Pradel'
    },
    {
        name: 'Price, Florence Beatrice (1887-1953) ',
        tag: 'Composer, Arranger & Teacher ',
        bio: 'http://chevalierdesaintgeorges.homestead.com/Price.html',
        image: 'http://naxosusa.com/wp-content/uploads/2019/01/Price-color.jpg',
        alt: 'Florence Beatrice Price',
        isFemale: true
    },
    {
        name: 'Racine, Julio (1945 - 2020) ',
        tag: 'Haitian Composer, Arranger & Flutist ',
        bio: 'http://chevalierdesaintgeorges.homestead.com/Racine.html',
        image: 'http://chevalierdesaintgeorges.homestead.com/images/JulioRacineBrownJacket.jpg',
        alt: 'Julio Racine'
    },
    {
        name: 'Rogers, Eugene',
        tag: 'Composer and Choral Conductor ',
        bio: 'https://www.eugenerogers.com/',
        image: 'https://sevenlastwords.org/wp-content/uploads/2017/06/Eugene-Rogers.jpg',
        alt: 'Eugene Rogers'
    },
    {
        name: 'Saint-Georges, Le Chevalier de (1745-1799)',
        tag: 'Afro-French Composer, Violinist & Conductor ',
        bio: 'http://chevalierdesaintgeorges.homestead.com/Page1.html',
        image: 'https://res.cloudinary.com/los-angeles-opera/image/upload/c_fit,f_auto,h_1080,q_auto:eco,w_1080/v1/Artists/Creative-Team/Joseph-Bologne-880.jpg',
        alt: 'Le Chevalier de Saint-Georges'
    },
    {
        name: 'Sancho, Ignatius (1729-1780)',
        tag: 'From African Slave to Composer & Author ',
        bio: 'http://chevalierdesaintgeorges.homestead.com/Sancho.html',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Portrait_of_an_African.jpg/200px-Portrait_of_an_African.jpg',
        alt: 'Ignatius Sancho'
    },
    {
        name: 'Smith, Hale (1925-2009)',
        tag: 'Composer, Pianist & Professor',
        bio: 'http://chevalierdesaintgeorges.homestead.com/Smith.html',
        image: 'https://musicuntold.com/wp-content/uploads/2020/05/HaleSmith-Looks-Up.jpg',
        alt: 'Hale Smith'
    },
    {
        name: 'Smith, Irene Britton (1907-1999)',
        tag: 'African American Composer ',
        bio: 'http://chevalierdesaintgeorges.homestead.com/Britton.html',
        image: 'http://chevalierdesaintgeorges.homestead.com/images/IreneBSmith.JPG',
        alt: 'Irene Britton Smith',
        isFemale: true
    },
    {
        name: 'Sowande, Fela (1905-1987)',
        tag: 'Nigerian Composer, Organist & Professor ',
        bio: 'http://chevalierdesaintgeorges.homestead.com/Sowande.html',
        image: 'https://sonichits.com/artist_image/RmVsYSBTb3dhbmRl/YWQzZTk2OTI5OTFlYzYxNDFmZjlhZjE2NGZhNTlkY2U=/extralarge',
        alt: 'Fela Sowande'
    },
    {
        name: 'Still, William Grant (1895-1978)',
        tag: 'Composer, Arranger, Conductor & Oboist',
        bio: 'http://chevalierdesaintgeorges.homestead.com/Still.html',
        image: 'http://chevalierdesaintgeorges.homestead.com/images/wgspic1_Y.jpg',
        alt: 'William Grant Still'
    },
    {
        name: 'Vindu, André Bangambula',
        tag: 'Composer and Educator',
        bio: 'http://www.composers21.com/compdocs/vinduab.htm',
        image: 'https://scontent-lax3-1.xx.fbcdn.net/v/t31.18172-8/17880639_739874309509440_843105692754119543_o.jpg?_nc_cat=109&ccb=1-3&_nc_sid=9267fe&_nc_ohc=13zt5G8e9hMAX-vO0Cq&_nc_ht=scontent-lax3-1.xx&oh=ebb65923597fe813d7410be576b43c01&oe=60DAB1DC',
        alt: 'Andre Vindu'
    },
    {
        name: 'Walker, George  (1922 - 2018)',
        tag: 'Composer & Pianist ',
        bio: 'http://chevalierdesaintgeorges.homestead.com/Walker.html',
        image: 'https://i1.sndcdn.com/artworks-cUtK1JfjN6omU7dx-lG8PaQ-t500x500.jpg',
        alt: 'George Walker'
    },
    {
        name: 'Wiggins, Tom (1849 – 1908) ',
        tag: 'Composer and pianist',
        bio: 'https://en.wikipedia.org/wiki/Blind_Tom_Wiggins',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Blind_Tom_Wiggins.jpg/220px-Blind_Tom_Wiggins.jpg',
        alt: 'Tom Wiggins'
    },
    {
        name: 'Williams, Julius Penson (b. 1954)',
        tag: 'Composer, Conductor & Professor ',
        bio: 'http://chevalierdesaintgeorges.homestead.com/Williams.html',
        image: 'https://upload.wikimedia.org/wikipedia/commons/7/71/Julius1.jpeg',
        alt: 'Julius Williams'
    },
    {
        name: 'Z, Pamela ',
        tag: 'Composer and Media Artist',
        bio: 'http://www.pamelaz.com/',
        image: 'http://www.pamelaz.com/pzphotos/images/PZ-room_Smith-750x600.jpg',
        alt: 'Pamela Z',
        isFemale: true
    },

]
export default contemporaryClassicalComposers
