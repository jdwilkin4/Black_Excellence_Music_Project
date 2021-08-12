const vocalists = [
    {
        name: 'Addison, Adele (b.1925)',
        tag: 'Opera Singer',
        bio: 'https://en.wikipedia.org/wiki/Adele_Addison',
        image: '/images/Adele_Addison.jpg',
        alt: 'Adele Addison',
        category: 'classical'
    },
    {
        name: 'Albert, Donnie Ray (b.1950)',
        tag: 'Opera Singer',
        bio: 'https://en.wikipedia.org/wiki/Donnie_Ray_Albert',
        image: '/images/donniemain.jpg',
        alt: 'Donnie Ray Albert',
        category: 'classical'
    },
    {
        name: 'Alexander, Roberta (b.1949)',
        tag: 'Opera Singer',
        bio: 'https://en.wikipedia.org/wiki/Roberta_Alexander',
        image: '/images/Roberta_Alexander.jpg',
        alt: 'Roberta Alexander',
        category: 'classical'
    },
    {
        name: 'Allen, Betty (1927 – 2009)',
        tag: 'Opera Singer',
        bio: 'https://en.wikipedia.org/wiki/Betty_Allen',
        image: '/images/Allen, betty.jpg',
        alt: 'Betty Allen',
        category: 'classical'
    },
    {
        name: 'Anderson, Anthony D.(b. 1998)',
        tag: 'Opera Singer',
        bio: 'https://en.wikipedia.org/wiki/Anthony_Anderson_(baritone)',
        image: '/images/anthony-anderson.jpg',
        alt: 'Anthony D. Anderson',
        category: 'classical'
    },
    {
        name: 'Anderson, Marian (1897 – 1993)',
        tag: 'Opera Singer',
        bio: 'https://en.wikipedia.org/wiki/Marian_Anderson',
        image: '/images/Marian_Anderson.jpg',
        alt: 'Marian Anderson',
        category: 'classical'
    },
    {
        name: 'Arroyo, Martina (b.1937)',
        tag: 'Opera Singer',
        bio: 'https://en.wikipedia.org/wiki/Martina_Arroyo',
        image: '/images/Martina-arroyo.jpg',
        alt: 'Martina Arroyo',
        category: 'classical'
    },
    {
        name: 'Burleigh, Henry "Harry" T. (1866-1949) ',
        tag: 'Composer, Arranger & Baritone ',
        bio: 'http://chevalierdesaintgeorges.homestead.com/Burleigh.html',
        image: '/images/harry-burleigh.jpg',
        alt: 'Harry Burleigh',
        category: 'classical'
    },
    {
        name: 'Calloway, Blanche (1902 – 1978)',
        tag: 'Jazz singer, composer, and bandleader',
        bio: 'https://en.wikipedia.org/wiki/Blanche_Calloway',
        image: '/images/blanche-calloway.jpg',
        alt: 'Blanche Calloway',
        category: 'jazz'
    },
    {
        name: 'Calloway III, Cabell "Cab" (1907 – 1994)',
        tag: 'Jazz singer, dancer, and bandleader',
        bio: 'https://en.wikipedia.org/wiki/Cab_Calloway',
        image: '/images/Cab_Calloway_Gottlieb.jpg',
        alt: 'Cabell "Cab" Calloway III',
        category: 'jazz'
    },
    {
        name: 'Carter, Betty (1929 – 1998)',
        tag: 'Singer and songwriter',
        bio: 'https://en.wikipedia.org/wiki/Betty_Carter',
        image: '/images/Betty_Carter.jpg',
        alt: 'Betty Carter',
        category: 'jazz'
    },
    {
        name: 'Charles, Ray (1930 – 2004)',
        tag: 'American singer, songwriter, pianist, composer',
        bio: 'https://en.wikipedia.org/wiki/Ray_Charles',
        image: '/images/RayCharles.jpg',
        alt: 'Ray Charles',
        category: 'jazz'
    },
    {
        name: 'Cole, Nat King (1919 – 1965)',
        tag: 'Jazz Singer',
        bio: 'https://en.wikipedia.org/wiki/Nat_King_Cole',
        image: '/images/Nat_King_Cole.jpg',
        alt: 'Nat King Cole',
        category: 'jazz'
    },
    {
        name: 'Eckstine, William Clarence (1914 – 1993)',
        tag: 'Jazz singer and bandleader',
        bio: 'https://en.wikipedia.org/wiki/Billy_Eckstine',
        image: '/images/Billy_Eckstine.jpg',
        alt: 'William Clarence Eckstine ',
        category: 'jazz'
    },
    {
        name: 'Fitzgerald, Ella Jane (1917 – 1996)',
        tag: 'Jazz singer',
        bio: 'https://en.wikipedia.org/wiki/Ella_Fitzgerald',
        image: '/images/Ella_Fitzgerald.jpg',
        alt: 'Ella Jane Fitzgerald',
        category: 'jazz'
    },
    {
        name: 'Hall Jr., Ellis (b.1951)',
        tag: 'Singer, songwriter, composer',
        bio: 'https://en.wikipedia.org/wiki/Ellis_Hall_(musician)',
        image: '/images/ellis-hall.jpg',
        alt: 'Ellis Hall Jr.',
        category: 'jazz'
    },
    {
        name: 'Hendricks, John Carl (1921 – 2017)',
        tag: 'Jazz lyricist and singer',
        bio: 'https://en.wikipedia.org/wiki/Jon_Hendricks',
        image: '/images/john-hendricks.jpg',
        alt: 'John Carl Hendricks ',
        category: 'jazz'
    },
    {
        name: 'Holiday, Billie(1915 – 1959)',
        tag: 'Jazz singer',
        bio: 'https://en.wikipedia.org/wiki/Billie_Holiday',
        image: '/images/Billie_Holiday_1947.jpg',
        alt: 'Billie Holiday',
        category: 'jazz'
    },
    {
        name: 'Horn, Shirley Valerie (1934 – 2005)',
        tag: 'American jazz singer and pianist',
        bio: 'https://en.wikipedia.org/wiki/Shirley_Horn',
        image: '/images/Shirley_Horn.jpg',
        alt: 'Shirley Valerie Horn',
        category: 'jazz'
    },
    {
        name: 'Lincoln, Abbey (1930 – 2010)',
        tag: 'Vocalist, songwriter, and actress',
        bio: 'https://en.wikipedia.org/wiki/Abbey_Lincoln',
        image: '/images/Abbey_Lincoln.jpg',
        alt: 'Abbey Lincoln',
        category: 'jazz'
    },
    {
        name: 'Matthews, Jr., Onzy Durrett (1930 – 1997)',
        tag: 'Pianist, singer, arranger and composer',
        bio: 'https://en.wikipedia.org/wiki/Onzy_Matthews',
        image: '/images/Onzy_Matthews.jpg',
        alt: 'Onzy Durett Matthews',
        category: 'jazz'
    },
    {
        name: 'McRae, Carmen Mercedes (1920 – 1994)',
        tag: 'Jazz singer',
        bio: 'https://en.wikipedia.org/wiki/Carmen_McRae',
        image: '/images/Carmen_McRae.jpg',
        alt: 'Carmen Mercedes McRae',
        category: 'jazz'
    },
    {
        name: 'Porter, Gregory (b.1971)',
        tag: 'Singer, songwriter, and actor',
        bio: 'https://en.wikipedia.org/wiki/Gregory_Porter',
        image: '/images/Gregory_Porter.jpg',
        alt: 'Gregory Porter',
        category: 'jazz'
    },
    {
        name: 'Reeves, Dianne Elizabeth (b.1956)',
        tag: 'Jazz singer',
        bio: 'https://en.wikipedia.org/wiki/Dianne_Reeves',
        image: '/images/diane-reeves.jpg',
        alt: 'Dianne Elizabeth Reeves',
        category: 'jazz'
    },
    {
        name: 'Smith, Bessie (1894 – 1937)',
        tag: 'Blues singer',
        bio: 'https://en.wikipedia.org/wiki/Bessie_Smith',
        image: '/images/Bessie_Smith.jpg',
        alt: 'Bessie Smith',
        category: 'jazz'
    },
    {
        name: 'Simone, Nina (1933 – 2003)',
        tag: 'Singer, songwriter, musician, and arranger',
        bio: 'https://en.wikipedia.org/wiki/Nina_Simone',
        image: '/images/NinaSimone.jpg',
        alt: 'Eunice Kathleen Waymon',
        category: 'jazz'
    },
    {
        name: 'Vaughan, Sarah Lois (1924 – 1990)',
        tag: 'Jazz singer',
        bio: 'https://en.wikipedia.org/wiki/Sarah_Vaughan',
        image: '/images/Sarah_Vaughan.jpg',
        alt: 'Sarah Lois Vaughan',
        category: 'jazz'
    },
    {
        name: 'Washington, Dinah (1924 – 1963)',
        tag: 'Singer and pianist',
        bio: 'https://en.wikipedia.org/wiki/Dinah_Washington',
        image: '/images/Dinah_Washington.jpg',
        alt: 'Dinah Washington',
        category: 'jazz'
    },
    {
        name: 'Williams, Joe (1918 – 1999)',
        tag: 'Jazz Singer',
        bio: 'https://en.wikipedia.org/wiki/Joe_Williams_(jazz_singer)',
        image: '/images/Joe_Williams.jpg',
        alt: 'Joe Williams',
        category: 'jazz'
    },
    {
        name: 'Wilson, Cassandra (b.1955)',
        tag: 'Singer, songwriter, and producer',
        bio: 'https://en.wikipedia.org/wiki/Cassandra_Wilson',
        image: '/images/Cassandra_Wilson.jpg',
        alt: 'Cassandra Wilson',
        category: 'jazz'
    }

]
export default vocalists;