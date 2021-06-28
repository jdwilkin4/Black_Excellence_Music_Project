const vocalists = [
    {
        name: 'Addison, Adele (b.1925)',
        tag: 'Opera Singer',
        bio: 'https://en.wikipedia.org/wiki/Adele_Addison',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Adele_Addison.jpg/220px-Adele_Addison.jpg',
        alt: 'Adele Addison',
        category: 'classical'
    },
    {
        name: 'Albert, Donnie Ray (b.1950)',
        tag: 'Opera Singer',
        bio: 'https://en.wikipedia.org/wiki/Donnie_Ray_Albert',
        image: 'http://www.donnierayalbert.com/donniemain.jpg',
        alt: 'Donnie Ray Albert',
        category: 'classical'
    },
    {
        name: 'Alexander, Roberta (b.1949)',
        tag: 'Opera Singer',
        bio: 'https://en.wikipedia.org/wiki/Roberta_Alexander',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Roberta_Alexander_%281976%29.jpg/220px-Roberta_Alexander_%281976%29.jpg',
        alt: 'Roberta Alexander',
        category: 'classical'
    },
    {
        name: 'Allen, Betty (1927 – 2009)',
        tag: 'Opera Singer',
        bio: 'https://en.wikipedia.org/wiki/Betty_Allen',
        image: 'https://media.wnyc.org/i/raw/photologue/photos/Allen,%20betty%20square.jpg',
        alt: 'Betty Allen',
        category: 'classical'
    },
    {
        name: 'Anderson, Anthony D.(b. 1998)',
        tag: 'Opera Singer',
        bio: 'https://en.wikipedia.org/wiki/Anthony_Anderson_(baritone)',
        image: 'https://images1.dallasobserver.com/imager/u/original/10564399/screen_shot_2018-04-09_at_1.22.56_pm.png',
        alt: 'Anthony D. Anderson',
        category: 'classical'
    },
    {
        name: 'Anderson, Marian (1897 – 1993)',
        tag: 'Opera Singer',
        bio: 'https://en.wikipedia.org/wiki/Marian_Anderson',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Marian_Anderson.jpg/220px-Marian_Anderson.jpg',
        alt: 'Marian Anderson',
        category: 'classical'
    },
    {
        name: 'Arroyo, Martina (b.1937)',
        tag: 'Opera Singer',
        bio: 'https://en.wikipedia.org/wiki/Martina_Arroyo',
        image: 'https://www.martinaarroyo.com/images/Martina%20Black%20&%20White%20Dress%20web.jpg',
        alt: 'Martina Arroyo',
        category: 'classical'
    },
    {
        name: 'Calloway, Blanche (1902 – 1978)',
        tag: 'Jazz singer, composer, and bandleader',
        bio: 'https://en.wikipedia.org/wiki/Blanche_Calloway',
        image: 'https://a3-images.myspacecdn.com/images03/2/59113dd2e09f4ef6b6c02bf248448afb/300x300.jpg',
        alt: 'Blanche Calloway',
        category: 'jazz'
    },
    {
        name: 'Calloway III, Cabell "Cab" (1907 – 1994)',
        tag: 'Jazz singer, dancer, and bandleader',
        bio: 'https://en.wikipedia.org/wiki/Cab_Calloway',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Cab_Calloway_Gottlieb.jpg/220px-Cab_Calloway_Gottlieb.jpg',
        alt: 'Cabell "Cab" Calloway III',
        category: 'jazz'
    },
    {
        name: 'Carter, Betty (1929 – 1998)',
        tag: 'Singer and songwriter',
        bio: 'https://en.wikipedia.org/wiki/Betty_Carter',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Betty_Carter_in_Pori_July_1978.jpg/220px-Betty_Carter_in_Pori_July_1978.jpg',
        alt: 'Betty Carter',
        category: 'jazz'
    },
    {
        name: 'Charles, Ray (1930 – 2004)',
        tag: 'American singer, songwriter, pianist, composer',
        bio: 'https://en.wikipedia.org/wiki/Ray_Charles',
        image: 'https://images.pulsewebcontent.com/photos/2018/06_Jun/800/RayCharles_6_15.jpg',
        alt: 'Ray Charles',
        category: 'jazz'
    },
    {
        name: 'Cole, Nat King (1919 – 1965)',
        tag: 'Jazz Singer',
        bio: 'https://en.wikipedia.org/wiki/Nat_King_Cole',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Nat_King_Cole_%28Gottlieb_01511%29.jpg/220px-Nat_King_Cole_%28Gottlieb_01511%29.jpg',
        alt: 'Nat King Cole',
        category: 'jazz'
    },
    {
        name: 'Eckstine, William Clarence (1914 – 1993)',
        tag: 'Jazz singer and bandleader',
        bio: 'https://en.wikipedia.org/wiki/Billy_Eckstine',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Portrait_of_Billy_Eckstine%2C_New_York%2C_N.Y.%2C_between_1946_and_1948_%28LOC%29.jpg/220px-Portrait_of_Billy_Eckstine%2C_New_York%2C_N.Y.%2C_between_1946_and_1948_%28LOC%29.jpg',
        alt: 'William Clarence Eckstine ',
        category: 'jazz'
    },
    {
        name: 'Fitzgerald, Ella Jane (1917 – 1996)',
        tag: 'Jazz singer',
        bio: 'https://en.wikipedia.org/wiki/Ella_Fitzgerald',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Ella_Fitzgerald_%28Gottlieb_02871%29.jpg/220px-Ella_Fitzgerald_%28Gottlieb_02871%29.jpg',
        alt: 'Ella Jane Fitzgerald',
        category: 'jazz'
    },
    {
        name: 'Hall Jr., Ellis (b.1951)',
        tag: 'Singer, songwriter, composer',
        bio: 'https://en.wikipedia.org/wiki/Ellis_Hall_(musician)',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Ellis_Hall_singing_during_symphony_performance.jpg/220px-Ellis_Hall_singing_during_symphony_performance.jpg',
        alt: 'Ellis Hall Jr.',
        category: 'jazz'
    },
    {
        name: 'Hendricks, John Carl (1921 – 2017)',
        tag: 'Jazz lyricist and singer',
        bio: 'https://en.wikipedia.org/wiki/Jon_Hendricks',
        image: 'https://i.guim.co.uk/img/media/233c38b49614721d89e8bd5591ef8f063fbe7dc9/0_841_4560_2736/master/4560.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=a062e5ba23423d9cca82c4ce3de52c9f',
        alt: 'John Carl Hendricks ',
        category: 'jazz'
    },
    {
        name: 'Holiday, Billie(1915 – 1959)',
        tag: 'Jazz singer',
        bio: 'https://en.wikipedia.org/wiki/Billie_Holiday',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Billie_Holiday_1947_%28cropped%29.jpg/220px-Billie_Holiday_1947_%28cropped%29.jpg',
        alt: 'Billie Holiday',
        category: 'jazz'
    },
    {
        name: 'Horn, Shirley Valerie (1934 – 2005)',
        tag: 'American jazz singer and pianist',
        bio: 'https://en.wikipedia.org/wiki/Shirley_Horn',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4d/Shirley_Horn_ppmsca.08325.jpg/220px-Shirley_Horn_ppmsca.08325.jpg',
        alt: 'Shirley Valerie Horn',
        category: 'jazz'
    },
    {
        name: 'Lincoln, Abbey (1930 – 2010)',
        tag: 'Vocalist, songwriter, and actress',
        bio: 'https://en.wikipedia.org/wiki/Abbey_Lincoln',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Abbey_Lincoln_in_1966.jpg/220px-Abbey_Lincoln_in_1966.jpg',
        alt: 'Abbey Lincoln',
        category: 'jazz'
    },
    {
        name: 'McRae, Carmen Mercedes (1920 – 1994)',
        tag: 'Jazz singer',
        bio: 'https://en.wikipedia.org/wiki/Carmen_McRae',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/47/Carmen_McRae.jpg/220px-Carmen_McRae.jpg',
        alt: 'Carmen Mercedes McRae',
        category: 'jazz'
    },
    {
        name: 'Porter, Gregory (b.1971)',
        tag: 'Singer, songwriter, and actor',
        bio: 'https://en.wikipedia.org/wiki/Gregory_Porter',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Gregory_Porter_Kongsberg_Jazzfestival_2018_%28191917%29.jpg/220px-Gregory_Porter_Kongsberg_Jazzfestival_2018_%28191917%29.jpg',
        alt: 'Gregory Porter',
        category: 'jazz'
    },
    {
        name: 'Reeves, Dianne Elizabeth (b.1956)',
        tag: 'Jazz singer',
        bio: 'https://en.wikipedia.org/wiki/Dianne_Reeves',
        image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS_I_y1LrnydVe7D3ZoZepMClT2VZCPa1T0cxBus1eyolw1eM13',
        alt: 'Dianne Elizabeth Reeves',
        category: 'jazz'
    },
    {
        name: 'Smith, Bessie (1894 – 1937)',
        tag: 'Blues singer',
        bio: 'https://en.wikipedia.org/wiki/Bessie_Smith',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Bessie_Smith_%281936%29_by_Carl_Van_Vechten.jpg/220px-Bessie_Smith_%281936%29_by_Carl_Van_Vechten.jpg',
        alt: 'Bessie Smith',
        category: 'jazz'
    },
    {
        name: 'Simone, Nina (1933 – 2003)',
        tag: 'Singer, songwriter, musician, and arranger',
        bio: 'https://en.wikipedia.org/wiki/Nina_Simone',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Nina_Simone_1965_-_restoration1.jpg/220px-Nina_Simone_1965_-_restoration1.jpg',
        alt: 'Eunice Kathleen Waymon',
        category: 'jazz'
    },
    {
        name: 'Vaughan, Sarah Lois (1924 – 1990)',
        tag: 'Jazz singer',
        bio: 'https://en.wikipedia.org/wiki/Sarah_Vaughan',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Sarah_Vaughan_-_William_P._Gottlieb_-_No._1.jpg/220px-Sarah_Vaughan_-_William_P._Gottlieb_-_No._1.jpg',
        alt: 'Sarah Lois Vaughan',
        category: 'jazz'
    },
    {
        name: 'Washington, Dinah (1924 – 1963)',
        tag: 'Singer and pianist',
        bio: 'https://en.wikipedia.org/wiki/Dinah_Washington',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Dinah_Washington_1962.jpg/220px-Dinah_Washington_1962.jpg',
        alt: 'Dinah Washington',
        category: 'jazz'
    },
    {
        name: 'Williams, Joe (1918 – 1999)',
        tag: 'Jazz Singer',
        bio: 'https://en.wikipedia.org/wiki/Joe_Williams_(jazz_singer)',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Joe_Williams_1997.jpg/220px-Joe_Williams_1997.jpg',
        alt: 'Joe Williams',
        category: 'jazz'
    },
    {
        name: 'Wilson, Cassandra (b.1955)',
        tag: 'Singer, songwriter, and producer',
        bio: 'https://en.wikipedia.org/wiki/Cassandra_Wilson',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Cassandra_Wilson.jpg/220px-Cassandra_Wilson.jpg',
        alt: 'Cassandra Wilson',
        category: 'jazz'
    }

]
export default vocalists;